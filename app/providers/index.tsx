"use client";

import React from "react";

import { ReactQueryProvider } from "./ReactQuery";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default Providers;
