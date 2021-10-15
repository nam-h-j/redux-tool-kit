import React, { ReactNode } from "react";

export interface BasicTemplateProps {
  children: ReactNode;
}

function BasicTemplate({ children }: BasicTemplateProps) {
  return (
    <div>
      <a></a>
      <p></p>
      <p></p>
      {children}
    </div>
  );
}

export default BasicTemplate;
