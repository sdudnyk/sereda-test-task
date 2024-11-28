import { FC, memo } from "react";
import { CategoryButton } from "../CategoryButton";
import { Event } from "../../types";
import { eventStartDateFormatter } from "../../utils";
import { EventCategoryLabels } from "../../consts";
import "./EventInfo.css";

export const EventInfo: FC<Event> = memo(({ title, description, location, startDate, startTime, category }) => (
  <section className="event-info">
    <h3 className="event-info__title">{title}</h3>
    <p className="event-info__description">{description}</p>
    <address className="event-info__venue">{location}</address>
    <div className="event-info__meta">
      <p className="event-info__time">{eventStartDateFormatter(startDate, startTime!)}</p>
      <CategoryButton disabled category={category} className="event-info__category">{EventCategoryLabels[category]}</CategoryButton>
    </div>
  </section>
));
