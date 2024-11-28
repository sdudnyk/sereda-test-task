import { FC, memo } from "react";
import { useSnapshot } from "valtio";
import classNames from "classnames";
import { EventCategoryColorsMap } from "../../consts";
import { store } from "../../store"
import { MatrixDay, Event } from "../../types"
import "./Day.css";

export interface DayProps {
  day: MatrixDay,
  className?: string,
}

export const Day: FC<DayProps> = memo(({ day: { dayNumber, dateString, isCurrentMonth }, className }) => {
  const { events, activeEventCategoryFilters } = useSnapshot(store);

  const currentDayEvents: Event[] = events.get(dateString)!;
  const filteredEvents: Event[] = activeEventCategoryFilters?.length
    ? currentDayEvents?.filter(({ category }) => activeEventCategoryFilters.includes(category) )
    : currentDayEvents;

  return (
    <div
      className={classNames("day", className)}
      data-date={dateString}
      data-is-current-month={isCurrentMonth}
    >
      <span className={classNames("day__number", { "day__number--inactive": !isCurrentMonth })}>
        {dayNumber}
      </span>
        <div className="day__events">
          {isCurrentMonth && filteredEvents && filteredEvents.map(({ category }, i) => (
            <div
              className="day__event-dot"
              style={{ backgroundColor: EventCategoryColorsMap[category] }}
              key={`${dateString}-${category}-${i}`}
            >
            </div>
          ))}
        </div>
    </div>
  );
});
