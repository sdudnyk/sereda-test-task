import { Event, Store } from "../types";
import { eventsMock } from "../utils"

export default function createInitialState(): Store {
  const eventsByDateMap = eventsMock.reduce((map, event) => {
    if (!map.has(event.startDate)) {
      map.set(event.startDate, []);
    }
    map.get(event.startDate)?.push(event);

    return map;
  }, new Map<string, Event[]>());

  return {
    events: eventsByDateMap,
    activeEventCategoryFilters: [],
    lastSelectedDayDate: '',
    lastSelectedDayFilteredEvents: [],
  }
}