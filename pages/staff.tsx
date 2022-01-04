import { NextPage } from "next";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import StaffDisplay from "../components/StaffDisplay/StaffDisplay";

const Staff: NextPage = () => {
  return (
    <>
      <Navbar />
      <StaffDisplay />
    </>
  );
};

export default Staff;
