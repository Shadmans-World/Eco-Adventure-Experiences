import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DynamicTitle from "../DynamicTitle/DynamicTitle";

const Root = () => {
  return (
    <div className="w-full">
      {/* Include the DynamicTitle component */}
      <DynamicTitle />
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <div className="lg:max-w-[1440px]  mx-auto p-2">
        <main>
          <Outlet />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Root;
