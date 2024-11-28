import { MonthType } from "../types";
import { NUMBER_OF_WEEK_ROWS_PER_MONTH, NUMBER_OF_DAYS_IN_WEEK } from "../consts"

export const generateMonth = (date: Date): MonthType => {
  const monthName = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  const monthIndex = date.getMonth();

  const lastDayOfTheMonthIndex = new Date(year, monthIndex + 1, 0).getDate();

  let matrixIndexCounter = 0 - new Date(year, monthIndex, 1).getDay();

  const daysMatrix = new Array(NUMBER_OF_WEEK_ROWS_PER_MONTH)
    .fill(null)
    .map(() =>
       new Array(NUMBER_OF_DAYS_IN_WEEK).fill(null).map(() => {
        matrixIndexCounter++;
        const date = new Date(year, monthIndex, matrixIndexCounter)

        return {
          dateString: date.toLocaleDateString("en-US"),
          dayNumber: date.getDate(),
          isCurrentMonth:
            matrixIndexCounter > 0
            && matrixIndexCounter <= lastDayOfTheMonthIndex
        };
      })
    );

  return {
    weekDaysMatrix: daysMatrix,
    name: monthName,
  };
}
