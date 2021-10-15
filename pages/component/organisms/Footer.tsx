import React, { ReactNode } from "react";

export interface FooterProps {
  children: ReactNode;
}

function Footer({ children }: FooterProps) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default Footer;
