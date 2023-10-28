import { Calendar, CalendarProps, LocaleConfig } from "react-native-calendars";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { pt_BR } from "./localeConfig";

export interface MarkedDateProps {
  [date: string]: {
    textColor: string;
    color: string;
  };
}

export interface DayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

LocaleConfig.locales["pt-BR"] = pt_BR;
LocaleConfig.defaultLocale = "pt-BR";

export function CalendarScheduling({ markedDates, onDayPress }: CalendarProps) {
  const theme = useTheme();
  return (
    <Calendar
      renderArrow={(direction) => (
        <Feather
          size={24}
          name={direction === "left" ? "chevron-left" : "chevron-right"}
          color={theme.COLORS["gray-500"]}
        />
      )}
      headerStyle={{
        borderBottomColor: theme.COLORS["gray-400"],
        borderBottomWidth: 1,
        paddingBottom: 17,
      }}
      theme={{
        dayTextColor: theme.COLORS["gray-700"],
        textDayHeaderFontFamily: theme.FONT_FAMILY["inter-regular"],
        textDayHeaderFontSize: theme.FONT_SIZE.sm,
        textMonthFontSize: theme.FONT_SIZE.xl,

        monthTextColor: theme.COLORS["gray-700"],
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      minDate={new Date().toString()}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
}
