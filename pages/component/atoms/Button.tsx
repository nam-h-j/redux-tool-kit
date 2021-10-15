import React, { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default Button;
