import React from "react";

import { LayoutProps } from "@src/models/layout";
import { SLayout } from "./Layout.style";

export default function Layout({ children }: LayoutProps) {
  return <SLayout>{children}</SLayout>;
}
