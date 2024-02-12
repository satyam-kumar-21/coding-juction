import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function AdminMain() {
  // Function to get current date and time
  const getCurrentDateTime = () => {
    const currentDate = new Date();
    return currentDate.toLocaleString();
  };

  const generateRandomTransactions = () => {
    const transactions = [];
    for (let i = 1; i <= 5; i++) {
      transactions.push({
        id: i,
        user: `User ${i}`,
        course: `Course ${i}`,
        amount: Math.floor(Math.random() * 1000) + 1,
        date: getCurrentDateTime(),
      });
    }
    return transactions;
  };

  const [latestTransactions, setLatestTransactions] = useState(
    generateRandomTransactions()
  );

  return (
    <>
      <div className="flex-1 p-4 flex flex-col">
        <div className="bg-blue-800 p-4 rounded-2xl mb-4">
          <h1 className="text-2xl text-white font-bold text-center">Welcome to Admin Panel</h1>
        </div>

        <div className="flex mb-4 uppercase text-center ">
          {/* Users section */}
          <div className="bg-blue-500 text-white p-8 mr-4 rounded-md flex-1">
            <h2 className="text-2xl font-bold mb-4">Total Users</h2>
            <h3 className="text-xl text-bold">100</h3>
          </div>
          
          {/* Courses section */}
          <div className="bg-blue-500 text-white p-8 mr-4 rounded-md flex-1">
            <h2 className="text-2xl font-bold mb-4">Total Course</h2>
            <h3 className="text-xl text-bold">50</h3>
          </div>
        </div>

        {/* Latest Transactions section */}
        <div className="bg-blue-600 text-white p-4 rounded-md mb-4">
          <h2 className="text-xl font-semibold mb-4">Latest Transactions</h2>
          <table className="table-auto w-full text-center">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">User</th>
                <th className="px-4 py-2">Course</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {latestTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="border px-4 py-2">{transaction.id}</td>
                  <td className="border px-4 py-2">{transaction.user}</td>
                  <td className="border px-4 py-2">{transaction.course}</td>
                  <td className="border px-4 py-2">{transaction.amount}</td>
                  <td className="border px-4 py-2">{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AdminMain;
