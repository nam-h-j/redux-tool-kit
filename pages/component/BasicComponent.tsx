import React, { ReactNode } from "react";

export interface BasicProps {
  id: string;
  password: string;
  age: number;
  action: HTMLElement;
  children: ReactNode;
}

function BasicComponent({ id, password, age, action, children }: BasicProps) {
  return (
    <div>
      <a>{id}</a>
      <p>{password}</p>
      <p>{age}</p>
      <button onClick={() => action}></button>
      {children}
    </div>
  );
}

export default BasicComponent;
