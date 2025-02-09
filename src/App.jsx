import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";
import DailySpends from "./components/DailySpends";
import YearlySpends from "./components/YearlySpends";
import MonthlySpends from "./components/MonthlySpends";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  // Load transactions from localStorage on mount
  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  // Save transactions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  };

  return (
    <Router basename="/AccountManager">
      <div className="w-full p-4 grid flex-1 grid-cols-2 grid-rows-2 gap-4">
        <Routes>
          {/* Home Page - Shows Form, Summary, and Transactions */}
          <Route
            path="/"
            element={
              <>
                <div className="w-full h-full row-span-2 bg-amber-50 rounded-2xl p-4">
                  <TransactionForm addTransaction={addTransaction} />
                </div>
                <div className="w-full bg-amber-50 rounded-2xl p-4">
                  <Summary transactions={transactions} />
                </div>
                <div className="w-full h-full overflow-y-scroll bg-amber-50 rounded-2xl p-4">
                  <TransactionList transactions={transactions} />
                </div>
              </>
            }
          />
          <Route
            path="/dailyspends"
            element={<DailySpends transactions={transactions} />}
          />
          <Route
            path="/monthlyspends"
            element={<MonthlySpends transactions={transactions} />}
          />
          <Route
            path="/yearlyspends"
            element={<YearlySpends transactions={transactions} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
