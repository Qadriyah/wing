/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";
import chartData from "@/data/bar-chart.json";
import Legends from "./Legends";

const BarGraph = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={400}
        data={chartData}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left-axis">
          <Label value="CONSULTATIONS" position="left" angle={-90} />
        </YAxis>
        <YAxis orientation="right" yAxisId="right-axis">
          <Label value="EXPERTS ONLINE" position="right" angle={-90} />
        </YAxis>
        <Tooltip />
        <Legend
          content={({ width, height, ...props }) => <Legends {...props} />}
        />
        <Bar
          dataKey="Experts online"
          barSize={32}
          fill="#FFF3C6"
          yAxisId="left-axis"
        />
        <Line
          type="monotone"
          dataKey="Incoming"
          stroke="#8A94A6"
          yAxisId="right-axis"
          dot={false}
          strokeWidth={2}
          strokeDasharray="3 3"
        />
        <Line
          type="monotone"
          dataKey="Answered"
          stroke="#15B79F"
          yAxisId="left-axis"
          dot={false}
          strokeWidth={2}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
