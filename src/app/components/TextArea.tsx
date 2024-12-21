import React from "react";

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

const TextArea: React.FC<TextAreaProps> = (props) => {
  return (
    <textarea
      {...props}
      className={`w-full p-4 bg-white text-xl rounded-lg border border-[#d3d3d3] outline-none mt-1 font-normal `}
    />
  );
};

export default TextArea;
