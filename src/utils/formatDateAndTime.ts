type DateTimeStyle = "full" | "long" | "medium" | "short" | undefined;

export function formatDateAndTime(
  outputStyle: {
    dateStyle?: DateTimeStyle;
    timeStyle?: DateTimeStyle;
  },
  date: number | Date | undefined
) {
  const time = new Intl.DateTimeFormat("en-US", outputStyle).format(date);

  return time;
}
