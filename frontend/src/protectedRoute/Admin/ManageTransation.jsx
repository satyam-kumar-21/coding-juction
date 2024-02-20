import React from "react";
import AdminDashboard from "./AdminDashboard";
import Orders from "./Transation/Orders";

function ManageTransation() {
  return (
    <>
      <div className="flex h-auto">
        <AdminDashboard />
        <Orders />
      </div>
    </>
  );
}

export default ManageTransation;
