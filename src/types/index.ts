export enum EventCategory {
  MEETING_EXPERT = 'MEETING_EXPERT',
  SESSION_QA = 'SESSION_QA',
  CONFERENCE = 'CONFERENCE',
  WEBINAR = 'WEBINAR',
}

export type Event = {
  id: string;
  title: string;
  category: EventCategory;
  description?: string;
  location?: string;
  startDate: string;
  startTime?: string;
  endDate?: string;
}

export type MatrixDay = {
  dateString: string;
  dayNumber: number;
  isCurrentMonth: boolean;
}

export type MonthType = {
  weekDaysMatrix: Array<Array<MatrixDay>>;
  name: string;
}

export type Store = {
  events: Map<string, Event[]>;
  activeEventCategoryFilters: EventCategory[];
  lastSelectedDayDate: string;
  lastSelectedDayFilteredEvents: Event[];
};