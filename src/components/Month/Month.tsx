import { FC, Fragment, memo } from "react";
import { Day } from "../Day";
import { WEEK_DAYS_SHORT_NAMES } from "../../consts";
import { MatrixDay } from "../../types";
import "./Month.css";

export interface MonthProps {
  name: string;
  weekDaysMatrix: Array<Array<MatrixDay>>
}

export const Month: FC<MonthProps> = memo(({ name, weekDaysMatrix }) => (
  <section className="month">
    <h2 className="month__title">{name}</h2>
    <div className="month__day-names">
      {WEEK_DAYS_SHORT_NAMES.map(dayName => (
        <div key={`${name}-${dayName}`}>{dayName}</div>
      ))}
    </div>
    <div className="month__body">
      {weekDaysMatrix.map((week, i) => (
        <Fragment key={`${name}-${i}`}>
          {week.map((day) => (<Day day={day} key={day.dateString}/>))}
        </Fragment>
      ))}
    </div>
  </section>
));
