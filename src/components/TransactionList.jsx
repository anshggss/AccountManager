import React from "react";

const TransactionList = ({ transactions }) => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">Transactions</h2>
      <ul className="w-full">
        {transactions.map((transaction, index) => (
          <li key={index} className="mb-2 p-2 border rounded break-words">
            <span className="font-semibold">{transaction.date}</span> -{" "}
            <span>${transaction.amount.toFixed(2)}</span> -{" "}
            <span>{transaction.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
