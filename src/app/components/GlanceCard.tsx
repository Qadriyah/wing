import Image from "next/image";
import React from "react";
import { GlanceCardType } from "../types/cards";

type IProps = {
  card: GlanceCardType;
};

const GlanceCard: React.FC<IProps> = ({ card }) => {
  return (
    <div className="h-[9.75rem] p-6 rounded-[1.25rem] shadow-[0_5px_22px_0px_rgba(0,0,0,0.1)] flex flex-col gap-6 justify-center">
      <div className="flex gap-2 items-center">
        <Image src={`/media/${card.icon}`} width={12} height={12} alt="icon" />
        <p className="text-[#667085] text-xs uppercase">{card.name}</p>
      </div>
      <p className="text-[#212636] text-[2rem] font-medium">{card.amount}</p>
      <div className="flex gap-2 items-center">
        <Image
          src={`/media/${
            card.variation.increase ? "arrow-up.png" : "arrow-down.png"
          }`}
          width={24}
          height={24}
          alt="icon"
        />
        <p className="text-sm">
          <span
            className={`${
              card.variation.increase ? "text-[#15B79F]" : "text-[#F04438]"
            }`}
          >
            {card.variation.value}
          </span>{" "}
          <span>{card.variation.increase ? "increase" : "decrease"}</span>
        </p>
      </div>
    </div>
  );
};

export default GlanceCard;
