import { MonthType } from "../types";
import { generateMonth } from "./generateMonth";

export const generateMonths = (dateFrom: Date, numberOfMonths: number = 6): MonthType[] => {
  const firstMonthIndex = dateFrom.getMonth();
  const firstMonthYear = dateFrom.getFullYear();

  return new Array(numberOfMonths).fill(null).map((_, index) =>
    generateMonth(new Date(firstMonthYear, firstMonthIndex + index)));
}