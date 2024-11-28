import { CSSProperties, HTMLProps, ReactNode, forwardRef } from "react";
import "./Popover.css";

export interface PopoverProps  {
  styles: CSSProperties;
  getFloatingProps: (props?: HTMLProps<HTMLDivElement>) => HTMLProps<HTMLDivElement>;
  children: ReactNode;
}

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  ({ styles, getFloatingProps, children }, ref) => (
    <div
      ref={ref}
      className="popover"
      style={styles}
      {...getFloatingProps()}
    >
      {children}
    </div>
  )
);

Popover.displayName = "Popover";
