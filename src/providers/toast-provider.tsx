"use client";

import { useTheme } from "next-themes";
import React from "react";

import { Toaster } from "sonner";
import "react-toastify/dist/ReactToastify.css";

export function ToastProvider() {
  const { theme } = useTheme();
  return <Toaster theme={theme === "dark" ? "dark" : "light"} />;
}
