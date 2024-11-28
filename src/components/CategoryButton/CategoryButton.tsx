import { ButtonHTMLAttributes, DetailedHTMLProps, FC, memo } from "react";
import classNames from "classnames";
import { EventCategory } from "../../types";
import { EventCategoryColorsMap, EventCategoryShadedColorsMap } from "../../consts";
import "./CategoryButton.css";

export interface CategoryButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  category: EventCategory,
  isActive?: boolean,
}

export const CategoryButton: FC<CategoryButtonProps> = memo((
  { onClick, isActive, category, className, ...rest }
) => {
  const bgColor = isActive ? EventCategoryColorsMap[category] : EventCategoryShadedColorsMap[category];
  const textColor = isActive ? '' : EventCategoryColorsMap[category];

  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
      className={classNames("category-button", className, {"category-button--active": isActive})}
      {...rest}
    />
  );
});
