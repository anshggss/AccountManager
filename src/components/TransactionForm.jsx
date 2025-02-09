import React, { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  const [date, setDate] = useState(today); // Default to today's date
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = { date, amount: parseFloat(amount), description };
    addTransaction(transaction);
    setDate(today); // Reset to today's date after submission
    setAmount("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 w-full h-full flex-1 flex justify-center items-center"
    >
      <div className="flex flex-col w-full h-full">
        <h1 className="text-2xl font-bold mb-6">Account Manager</h1>
        <div className="flex flex-col gap-6">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-2 border rounded"
            required
          />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-green-500 text-black p-2 rounded hover:bg-green-700 transition-all cursor-pointer "
          >
            Add Transaction
          </button>
        </div>
      </div>
    </form>
  );
};

export default TransactionForm;
