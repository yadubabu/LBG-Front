import React from "react";
import Graph from "../../transactions/components/Graph";
import Form from "../../transactions/components/Form";

const ExpenseTracker = () => {
  return (
    <div>
      <div className="chart">
        <Graph />
        <Form />
      </div>
    </div>
  );
};

export default ExpenseTracker;
