import React from "react";

type IProps = React.PropsWithChildren & {};

const Select: React.FC<IProps> = ({ children }) => {
  return (
    <div className="h-9 border rounded-lg border-[#DCDFE4] flex justify-center p-2">
      <select className="outline-none">{children}</select>
    </div>
  );
};

export default Select;
