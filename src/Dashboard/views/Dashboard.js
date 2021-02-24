import React from "react";
import './dashboard.css'
export const Dashboard = () => {
  return (
    <div className="main">
      <div className="cards">
        <div className="card-track">
          <div>
            <h4>EXPENSE</h4>
            <h1>Rs.40</h1>
          </div>
        </div>
        <div className="card-track">
          <div>
            <h4>Income</h4>
            <h1>Rs.40</h1>
          </div>
        </div>
        
      </div>
    </div>
  );
};
