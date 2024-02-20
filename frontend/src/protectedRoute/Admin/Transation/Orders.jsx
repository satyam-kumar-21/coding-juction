import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/api/orders?page=${page}`);
        setOrders(response.data.items);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount / 100);
  };

  return (
    <div className='w-full'><br />
      <div className="bg-blue-500 p-4 rounded-2xl mb-4">
          <h1 className="text-2xl text-white font-bold text-center">Payment History</h1>
        </div>
      <table className="w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr className=" bg-blue-100 text-left text-2xl leading-4 font-bold text-blue-900 uppercase tracking-wider border border-gray-200">
            <th className="px-6 py-3 bg-blue-100 text-left text-xl leading-4 font-bold  uppercase tracking-wider border border-gray-200">order ID</th>
            <th className="px-6 py-3 bg-blue-100 text-left text-xl leading-4 font-bold  uppercase tracking-wider border border-gray-200">Amount</th>
            <th className="px-6 py-3 bg-blue-100 text-left text-xl leading-4 font-bold uppercase tracking-wider border border-gray-200">Receipt</th>
            <th className="px-6 py-3 bg-blue-100 text-left text-xl leading-4 font-bold uppercase tracking-wider border border-gray-200">date & time</th>
            <th className="px-6 py-3 bg-blue-100 text-left text-xl leading-4 font-bold uppercase tracking-wider border border-gray-200">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border border-gray-200 bg-gray-300">
              <td className="px-6 py-4 whitespace-no-wrap font-medium border border-gray-200">{order.id}</td>
              <td className="px-6 py-4 whitespace-no-wrap font-medium border border-gray-200">{formatAmount(order.amount)}</td>
              <td className="px-6 py-4 whitespace-no-wrap font-medium border border-gray-200">{order.receipt}</td>
              <td className="px-6 py-4 whitespace-no-wrap font-medium border border-gray-200">{new Date(order.created_at * 1000).toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-no-wrap font-medium border border-gray-200">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <div className="flex justify-center mt-4">
        <button onClick={handlePreviousPage} className="bg-blue-500 mr-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={page === 1}>Previous Page</button>
        <button onClick={handleNextPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={orders.length === 0}>Next Page</button>
      </div>
      <br />
    </div>
  );
};

export default Orders;
