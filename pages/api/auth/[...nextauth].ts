import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/Discord/mongodb";
import axios from "axios";

interface Guild {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: string;
  features: Array<any>;
}

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization:
        "https://discord.com/api/oauth2/authorize?scope=identify+email+guilds",
      async profile(profile, tokens) {
        let guildArray: Guild[] = [];

        const request = await axios
          .get("https://discord.com/api/v8/users/@me/guilds", {
            headers: {
              Authorization: `Bearer ${tokens.access_token}`,
            },
          })
          .then(async (res) => {
            guildArray = res.data;
          });

          if (profile.avatar === null) {
            const defaultAvatarNumber = parseInt(profile.discriminator) % 5
            profile.image_url = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`
          } else {
            const format = profile.avatar.startsWith("a_") ? "gif" : "png"
            profile.image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`
          }

        return await {
          id: profile.id,
          name: profile.username,
          email: profile.email,
          image: profile.image_url,
          guilds: guildArray,
        };
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  session: {
    maxAge: 60000 * 60 * 24,
  },
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (profile) {
          console.log(`Profile: \n ${profile}`)
        token.profile = profile;
      }
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        console.log(`Account: \n ${account}`)
        token.accessToken = account?.access_token;
      }
      if (user) {
        console.log(`User: \n ${user}`)
        token.accessToken = user._id;
        token.user = user;
      }

      return Promise.resolve(token);
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = await token?.accessToken as string
      session.user = user
      return session;
    },
  },
});
