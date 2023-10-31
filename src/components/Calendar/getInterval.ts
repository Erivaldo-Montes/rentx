import { eachDayOfInterval, isEqual, format, addDays } from "date-fns";
import { theme } from "@/theme/index";
import { MarkedDateProps, DayProps } from "./index";

interface Props {
  startDate: DayProps;
  endDate: DayProps;
}

export function getInterval({ startDate, endDate }: Props): MarkedDateProps {
  const dataFnsInterval = eachDayOfInterval({
    start: new Date(startDate.timestamp),
    end: new Date(endDate.timestamp),
  });
  let markedDates: MarkedDateProps = {};
  dataFnsInterval.map((date) => {
    const dateKey = format(addDays(date, 1), "yyyy-MM-dd");
    markedDates = {
      ...markedDates,
      [dateKey]: {
        textColor:
          startDate.dateString === dateKey || endDate.dateString === dateKey
            ? theme.COLORS.white
            : theme.COLORS["gray-500"],
        color:
          startDate.dateString === dateKey || endDate.dateString === dateKey
            ? theme.COLORS["red-600"]
            : theme.COLORS["red-100"],
      },
    };
  });

  return markedDates;
}
