import React from "react";
import { NavLink } from "react-router-dom";

const YearlySpends = ({ transactions }) => {
  const currentYear = new Date().getFullYear();

  // Filter transactions for this year
  const yearlyTransactions = transactions.filter((transaction) => {
    return new Date(transaction.date).getFullYear() === currentYear;
  });

  // Group transactions by month
  const spendsByMonth = yearlyTransactions.reduce((acc, transaction) => {
    const month = new Date(transaction.date).getMonth();
    acc[month] = (acc[month] || 0) + transaction.amount;
    return acc;
  }, {});

  return (
    <div className="p-4 bg-amber-50 rounded-2xl shadow-md h-full flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Yearly Spending ({currentYear})</h2>
      </div>

      {/* Month-wise Spending Summary */}
      <div className="flex-1 overflow-y-auto bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-bold mb-2">Month-wise Summary</h3>
        {Object.keys(spendsByMonth).length === 0 ? (
          <p className="text-gray-500">No transactions this year.</p>
        ) : (
          <ul className="space-y-2">
            {Object.entries(spendsByMonth).map(([month, total]) => (
              <li
                key={month}
                className="p-3 border rounded-lg bg-gray-100 shadow-sm"
              >
                <span className="font-semibold">
                  {new Date(2022, month).toLocaleString("default", {
                    month: "long",
                  })}
                </span>{" "}
                -{" "}
                <span className="text-red-600 font-bold">
                  ${total.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Home Button */}
      <div className="mt-4">
        <NavLink to="/" className="text-white">
          <div className="bg-black p-2 rounded text-center hover:bg-gray-800 transition-all">
            Home
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default YearlySpends;
