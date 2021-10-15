import React, { ReactNode } from "react";

export interface HeaderProps {
  children: ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default Header;
