import React from "react";
import { NavLink } from "react-router-dom";

const Summary = ({ transactions }) => {
  const totalMonthly = transactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0
  );
  const today = new Date().toISOString().split("T")[0];
  const totalDaily = transactions
    .filter((transaction) => transaction.date === today)
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  return (
    <div className="mb-6 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-xl font-bold mb-4">Summary</h2>
        <p className="text-lg">
          Total Monthly Spending:{" "}
          <span className="text-red-700">${totalMonthly.toFixed(2)}</span>
        </p>
        <p className="text-lg">
          Total Daily Spending:{" "}
          <span className="text-red-700">${totalDaily.toFixed(2)}</span>
        </p>
      </div>

      <div className="flex justify-between">
        <NavLink
          to="/dailyspends"
          className="text-white hover:scale-105 transition-all"
        >
          <div className="bg-black p-2 rounded ">DailySpends</div>
        </NavLink>
        <NavLink
          to="/monthlyspends"
          className="text-white hover:scale-105 transition-all"
        >
          <div className="bg-black p-2 rounded">MonthlySpends</div>
        </NavLink>
        <NavLink
          to="/yearlyspends"
          className="text-white hover:scale-105 transition-all"
        >
          <div className="bg-black p-2 rounded">YearlySpends</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Summary;
