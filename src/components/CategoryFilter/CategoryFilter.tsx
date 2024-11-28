import { FC, memo } from "react";
import { useSnapshot } from "valtio";
import classNames from "classnames";
import { store, actions } from "../../store";
import { EventCategory } from "../../types";
import { EventCategoryLabels } from "../../consts";
import { CategoryButton } from "../";
import "./CategoryFilter.css";

export interface CategoryFilterProps {
  className?: string,
}

export const CategoryFilter: FC<CategoryFilterProps> = memo(({ className }) => {
  const { activeEventCategoryFilters } = useSnapshot(store);

  const handleToggle = (category: EventCategory) =>
    actions.toggleEventCategoryFilter(category);

  return (
    <section className={classNames("category-filter", className)}>
      {(Object.keys(EventCategory) as Array<EventCategory>).map((category) => (
        <CategoryButton
          category={EventCategory[category]}
          key={category}
          className="category-filter__button"
          onClick={() => handleToggle(category)}
          isActive={activeEventCategoryFilters.includes(category)}
        >
          {EventCategoryLabels[category]}
        </CategoryButton>
      ))}
    </section>
  );
});
