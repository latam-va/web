import React from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react"

interface Guild {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: string;
  features: Array<any>;
}

const Testlogin = () => {
  const { data: session } = useSession();

  if (session) {
      const guilds: Guild[] = session.user?.guilds
      const guild = guilds.filter(guild => guild.name === 'Torrepilotos')
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <h1>{session.accessToken}</h1>
        <h2>{guild[0].id}</h2>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default Testlogin;
