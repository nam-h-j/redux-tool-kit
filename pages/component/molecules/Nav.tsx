import React, { ReactNode } from "react";

export interface NavProps {
  children: ReactNode;
}

function Nav({ children }: NavProps) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default Nav;
