export const eventStartDateFormatter = (startDate: string, startTime: string): string => {
  const dateString = `${startDate} ${startTime}`
  const date = Date.parse(dateString);

  if (date) {
    // TODO: replace this temporary formatter and return result according to design
    return new Intl.DateTimeFormat('en', {
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(date);
  }

  return dateString
};
