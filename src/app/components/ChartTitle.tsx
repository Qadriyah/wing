import Image from "next/image";
import React from "react";

type IProps = {
  icon?: string;
  title: string;
};

const ChartTitle: React.FC<IProps> = ({ title, icon }) => {
  return (
    <div className="flex gap-2 items-center">
      {icon && (
        <Image src={`/media/${icon}`} width={12} height={12} alt="icon" />
      )}
      <p className="text-xs text-[#667085] font-semibold uppercase">{title}</p>
    </div>
  );
};

export default ChartTitle;
