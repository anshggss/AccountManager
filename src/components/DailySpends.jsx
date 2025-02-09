import React from "react";
import { NavLink } from "react-router-dom";

const DailySpends = ({ transactions }) => {
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Filter transactions for today
  const todaysTransactions = transactions.filter(
    (transaction) => transaction.date === today
  );

  // Calculate total spending for today
  const totalSpend = todaysTransactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0
  );

  return (
    <div className="p-4 bg-amber-50 rounded-2xl shadow-md h-full flex flex-col">
      {/* Total Spend */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Today's Spending</h2>
        <p className="text-lg font-semibold text-gray-700">
          Total: <span className="text-red-500">${totalSpend.toFixed(2)}</span>
        </p>
      </div>

      {/* Transactions List */}
      <div className="flex-1 overflow-y-auto bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-bold mb-2">Transactions</h3>
        {todaysTransactions.length === 0 ? (
          <p className="text-gray-500">No transactions today.</p>
        ) : (
          <ul className="space-y-2">
            {todaysTransactions.map((transaction, index) => (
              <li
                key={index}
                className="p-3 border rounded-lg bg-gray-100 shadow-sm"
              >
                <span className="font-semibold">{transaction.date}</span> -{" "}
                <span className="text-red-600 font-bold">
                  ${transaction.amount.toFixed(2)}
                </span>{" "}
                - <span>{transaction.description}</span>
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

export default DailySpends;
