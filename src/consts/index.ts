import { EventCategory } from "../types";

export const EventCategoryColorsMap = {
  [EventCategory.MEETING_EXPERT]: "hsla(350, 100%, 65%, 1)",
  [EventCategory.SESSION_QA]: "hsla(150, 100%, 40%, 1)",
  [EventCategory.CONFERENCE]: "hsla(40, 100%, 60%, 1)",
  [EventCategory.WEBINAR]: "hsla(205, 100%, 65%, 1)",
};

export const EventCategoryShadedColorsMap = {
  [EventCategory.MEETING_EXPERT]: "hsla(350, 100%, 65%, 0.16)",
  [EventCategory.SESSION_QA]: "hsla(150, 100%, 40%, 0.16)",
  [EventCategory.CONFERENCE]: "hsla(40, 100%, 60%, 0.16)",
  [EventCategory.WEBINAR]: "hsla(205, 100%, 65%, 0.16)",
};

export const EventCategoryLabels = {
  [EventCategory.MEETING_EXPERT]: "Meeting with an expert",
  [EventCategory.SESSION_QA]: "Question-answer",
  [EventCategory.CONFERENCE]: "Conference",
  [EventCategory.WEBINAR]: "Webinar",
};

export const NUMBER_OF_WEEK_ROWS_PER_MONTH = 6;

export const NUMBER_OF_DAYS_IN_WEEK = 7;

// TODO: change to local getter from Date() or to label-value fir i18n, + add ability to choose day of start
export const WEEK_DAYS_SHORT_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
