import React, { type ReactElement } from "react";
import { render, type RenderOptions } from "@testing-library/react";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* wrap with All the providers */}
      {children}
    </>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line
export * from "@testing-library/react";
// eslint-disable-next-line
export { customRender as render };
