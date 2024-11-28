import { FC } from "react";
import "./SiteFooter.css";

export const SiteFooter: FC = ()=> (
  <footer className="footer">
    <div className="footer__logo">Logo</div>
    <nav className="footer__nav">
      <a href="/" className="footer__nav-link">Main</a>
      <a href="/" className="footer__nav-link">Events</a>
      <a href="/" className="footer__nav-link">Calendar</a>
      <a href="/" className="footer__nav-link">FAQ</a>
    </nav>
    <p className="footer__copyright">
      © 2022 All rights reserved
    </p>
  </footer>
);
