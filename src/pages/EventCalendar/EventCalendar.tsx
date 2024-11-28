import { FC, SyntheticEvent } from "react";
import { useSnapshot } from "valtio";
import { CategoryFilter, EventsPopoverContent, Month, Popover } from "../../components";
import { store, actions } from "../../store";
import { generateMonths } from "../../utils";
import { MonthType } from "../../types";
import { usePopover } from "../../hooks";
import './EventCalendar.css';

const months: MonthType[] = generateMonths(new Date());

export const EventCalendar: FC = () => {
  const { events, activeEventCategoryFilters } = useSnapshot(store);
  const { isPopoverVisible, setIsPopoverVisible, refs, floatingStyles, getFloatingProps } = usePopover();

  const handleClick = (event: SyntheticEvent) => {
    const dayElement = (event.target as HTMLElement).closest('.day');

    if (!dayElement) return;

    const date = dayElement.getAttribute('data-date');
    const isCurrentMonth = dayElement.getAttribute('data-is-current-month');

    if (!date || isCurrentMonth === "false") return;

    const dayEvents = date && events.get(date);

    if (!dayEvents) return;

    const filteredDayEvents = activeEventCategoryFilters?.length
      ? dayEvents?.filter(({ category }) => activeEventCategoryFilters.includes(category) )
      : dayEvents;

    if (!filteredDayEvents || !filteredDayEvents?.length) return;

    actions.setSelectedDayDate(date);
    actions.setSelectedDayFilteredEvents(filteredDayEvents)
    refs.setReference(dayElement);
    setIsPopoverVisible(true);
  }

  return (
    <div className="event-calendar">
      <h1 className="event-calendar__title">Calendar</h1>
      <CategoryFilter className="event-calendar__tags" />
      <main className="event-calendar__body" role="main" onClick={handleClick}>
        {months.map(({ name, weekDaysMatrix }) => (
            <Month name={name} weekDaysMatrix={weekDaysMatrix} key={name} />
        ))}
      </main>

      {isPopoverVisible && (
        <Popover
          styles={floatingStyles}
          getFloatingProps={getFloatingProps}
          ref={refs.setFloating}
        >
          <EventsPopoverContent />
        </Popover>
      )}
    </div>
  );
};
