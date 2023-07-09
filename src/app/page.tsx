import React from "react";
import Header from "./components/Header";
import Featured from "./components/Featured";
import Community from "./components/Community";
import Footer from "./components/Footer";
import Tool from "./components/Tool";
import Text from "./components/Text";

export default function Home() {
  return (
    <main className="bg-[#FFC29F] w-screen">
      <Head>
        <title>Muhamad Digdaya | UI/UX - Interaction Designer</title>
        <meta
          name="description"
          content="A designer that happens to help other 3500+ designers save their time on designing. Be the next one to be part of my design. UI/UX - Interaction Design"
          key="desc"
        />
      </Head>
      <div className="hero-section flex xl:flex-row sm:flex-col md:flex-col lg:flex-col min-h-screen w-screen items-center justify-items-center justify-center font-mono text-black space-x-6 sm:space-x-0 p-12">
        <Header />
        <Featured />
      </div>
      <Community />
      <div className="tool-section bg-pink-300 flex xl:flex-row sm:flex-col md:flex-col lg:flex-col items-center w-screen font-mono text-black xl:space-x-8 sm:space-x-0 sm:space-x-0 xl:px-40 sm:px-0">
        <Tool />
        <Text />
      </div>
      <Footer />
    </main>
  );
}
