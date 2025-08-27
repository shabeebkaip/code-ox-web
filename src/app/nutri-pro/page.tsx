import React from "react";
import { Metadata } from "next";
// import Hero from "./components/Hero";
// import WhyChoose from "./components/WhyChooseUs";
import DietMain from "./components/DietMain";

export const metadata: Metadata = {
  title: "Nutri Pro",
};

const page = () => {
  return (
    <div>
      <DietMain />
    </div>
  );
};

export default page;
