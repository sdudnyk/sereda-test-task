import { store } from "./store";
import { Event, EventCategory } from "../types";

export const actions = {
  setSelectedDayDate(date: string) {
    store.lastSelectedDayDate = date;
  },
  setSelectedDayFilteredEvents(events: Event[]) {
    store.lastSelectedDayFilteredEvents = events;
  },
  toggleEventCategoryFilter(category: EventCategory) {
    const index = store.activeEventCategoryFilters.indexOf(category);
    if (index !== -1) {
      store.activeEventCategoryFilters = store.activeEventCategoryFilters.filter(
        (value) => value !== category
      );
    } else {
      store.activeEventCategoryFilters.push(category);
    }
  },
  resetEventCategoryFilters() {
    store.activeEventCategoryFilters = [];
  }
};
