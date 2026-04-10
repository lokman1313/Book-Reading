import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const Chart = ({ book }) => {
  return (
    <div className="w-full h-96">
      <ResponsiveContainer>
        <BarChart data={book}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="totalPages" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;