/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import chartData from "@/data/grouped-bar-chart.json";
import Legends from "./Legends";

const GroupedBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend
          content={({ width, height, ...props }) => <Legends {...props} />}
        />
        <Bar dataKey="Consultations" stackId="a" fill="#CCFBEF" barSize={32} />
        <Bar dataKey="Orders closed" fill="#134E48" barSize={32} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GroupedBarChart;
