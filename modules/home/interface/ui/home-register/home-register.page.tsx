import React from "react";
import { HomeInfo } from "../home-info/home-info";
import { HomeRegisterForm } from "../home-register-form/home-register-form";

export const HomeRegisterPage = () => {
  return (
    <>
      <main>
        <div className="flex flex-row">
          <HomeInfo />
          <HomeRegisterForm />
        </div>
      </main>
    </>
  );
};
