import { forwardRef } from "react";

//! give ref as a second parameter
const Input = (props, ref) => {
  return <input type="text" {...props} ref={ref} />;
};

export const CustomInput = forwardRef(Input);
