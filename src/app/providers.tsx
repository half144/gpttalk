"use client";
import { GlobalStyles } from "@/styles/globalStyles";
import { ligthTheme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={ligthTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
