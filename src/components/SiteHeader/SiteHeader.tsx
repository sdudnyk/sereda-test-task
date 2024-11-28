import { FC } from "react";
import "./SiteHeader.css";

export const SiteHeader: FC = ()  => (
  <header className="header">
    <div className="header__logo">Logo</div>
    <nav className="header__nav">
      <a href="/" className="header__nav-link">Main</a>
      <a href="/" className="header__nav-link">Events</a>
      <a href="/" className="header__nav-link header__nav-link--active">Calendar</a>
      <a href="/" className="header__nav-link">FAQ</a>
    </nav>
  </header>
);
