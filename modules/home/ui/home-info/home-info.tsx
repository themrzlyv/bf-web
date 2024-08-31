import Image from "next/image";
import React from "react";
import { Typography } from "ui";
import HomeChart from "@/public/assets/images/home-chart.png";

export const HomeInfo = () => {
  return (
    <>
      <div className="bg-primary-light flex flex-col w-1/2 h-screen">
        <Typography variant="h3" className="pl-5 pt-5" color="secondary">
          MSC-Wallet
        </Typography>
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="w-3/6 text-center mb-3">
            <Typography variant="header" color="secondary">
              Your Finances in One Place
            </Typography>
          </div>

          <Image src={HomeChart} width={400} height={400} alt="chart" />
          <div className="w-7/12 text-center mt-5">
            <Typography variant="large" color="secondary">
              Dive into reports, build budgets, sync with your banks and enjoy
              automatic categorization.
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};
