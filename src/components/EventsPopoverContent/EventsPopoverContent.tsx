import { FC } from "react";
import { useSnapshot } from "valtio/index";
import { store } from "../../store";
import { ActionButton, EventInfo } from "../";
import "./EventsPopoverContent.css";

export const EventsPopoverContent: FC = () => {
  const { lastSelectedDayFilteredEvents } = useSnapshot(store);

  return (
    <section className="events-popover-content">
      <h2 className="events-popover-content__title">Events</h2>
      <div className="events-popover-content__body">
        {lastSelectedDayFilteredEvents && lastSelectedDayFilteredEvents.map(
          ({id, ...event}) => (
           <EventInfo id={id} key={id} {...event} />
          )
        )}
      </div>
      <footer className="events-popover-content__footer">
        <ActionButton>Add event</ActionButton>
      </footer>
    </section>
  )
};
