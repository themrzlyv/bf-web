import React from "react";
import { Typography } from "ui";
import { HomeInfo } from "./home-info/home-info";

export const HomePage = () => {
  return (
    <>
      <main>
        <div className="flex flex-row">
          <HomeInfo />
          <div className="w-1/2 flex h-screen">
            <div className="flex flex-1 flex-col items-center justify-center">
              <Typography variant="large">Sign in</Typography>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};