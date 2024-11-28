import { FC, ReactNode } from "react";
import { SiteHeader, SiteFooter } from "../";
import "./Layout.css";

export interface LayoutProps {
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = ({children}) => (
  <div className="layout">
    <SiteHeader />
    {children}
    <SiteFooter />
  </div>
);
