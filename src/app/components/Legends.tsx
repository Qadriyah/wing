import React from "react";
import { LegendProps } from "recharts";

const Legends: React.FC<LegendProps> = ({ payload }) => {
  return (
    <div className="border-t border-t-[#DCDFE4] flex flex-col sm:flex-row gap-5 py-5">
      {payload?.map((d) => (
        <div key={d.value} className="flex gap-3 items-center">
          <div
            className={`w-[16px] h-[4px] rounded-full`}
            style={{ backgroundColor: d.color }}
          />
          <p className="text-xs font-normal">{d.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Legends;
