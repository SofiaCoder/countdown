export function getCountdown(targetDate: string | Date) {
  const now = new Date().getTime();
  const target = new Date(targetDate).getTime();
  const diff = target - now;

  if (diff <= 0) {
    return {
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      finished: true,
    };
  }

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  return {
    weeks,
    days: days % 7,
    hours: hours % 24,
    minutes: minutes % 60,
    seconds: seconds % 60,
    finished: false,
  };
}
