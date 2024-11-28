import { FC, DetailedHTMLProps, ButtonHTMLAttributes, memo } from "react";
import classNames from "classnames";
import "./ActionButton.css";

export interface ActionButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  viewType?: 'main' | 'secondary',
}

export const ActionButton: FC<ActionButtonProps> = memo((
  { onClick, className, viewType = 'main', ...rest }
) => (
    <button
      className={classNames("action-button", `action-button--${viewType}`, className)}
      onClick={onClick}
      {...rest}
    />
  )
);
