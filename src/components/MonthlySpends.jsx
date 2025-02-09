import React from "react";
import { NavLink } from "react-router-dom";

const MonthlySpends = ({ transactions }) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  // Filter transactions for this month
  const monthlyTransactions = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    return (
      transactionDate.getFullYear() === currentYear &&
      transactionDate.getMonth() === currentMonth
    );
  });

  // Group transactions by date
  const spendsByDay = monthlyTransactions.reduce((acc, transaction) => {
    const date = transaction.date;
    acc[date] = (acc[date] || 0) + transaction.amount;
    return acc;
  }, {});

  return (
    <div className="p-4 bg-amber-50 rounded-2xl shadow-md h-full flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold">
          Monthly Spending (
          {new Date().toLocaleString("default", { month: "long" })})
        </h2>
      </div>

      {/* Day-wise Spending Summary */}
      <div className="flex-1 overflow-y-auto bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-bold mb-2">Day-wise Summary</h3>
        {Object.keys(spendsByDay).length === 0 ? (
          <p className="text-gray-500">No transactions this month.</p>
        ) : (
          <ul className="space-y-2">
            {Object.entries(spendsByDay).map(([date, total]) => (
              <li
                key={date}
                className="p-3 border rounded-lg bg-gray-100 shadow-sm"
              >
                <span className="font-semibold">{date}</span> -{" "}
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

export default MonthlySpends;
