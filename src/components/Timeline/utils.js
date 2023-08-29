// Utility function to convert date to position
export const dateToPosition = (start, end, llimit, rlimit) => {
  const timeRange = rlimit.getTime() - llimit.getTime();
  const normalizedStart = (start.getTime() - llimit.getTime()) / timeRange;
  const normalizedEnd = (end.getTime() - llimit.getTime()) / timeRange;
  return [normalizedStart, normalizedEnd];
};
