export const convertTimeFormat = (time: string) => {
  const [hour, minutes] = time.split(":").map(Number);
  const period = hour >= 12 ? "PM" : "AM";
  const hour12 = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  const formatedHour = `${hour12}:${minutes
    .toString()
    .padStart(2, "0")} ${period}`;
  return formatedHour;
};
