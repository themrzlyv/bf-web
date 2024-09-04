import React from "react";
import { HomeInfo } from "./home-info/home-info";
import { HomeLoginForm } from "./home-login-form/home-login-form";

export const HomePage = () => {
  return (
    <>
      <main>
        <div className="flex flex-row">
          <HomeInfo />
          <HomeLoginForm />
        </div>
      </main>
    </>
  );
};