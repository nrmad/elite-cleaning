export const valueFormatter = (value: number) => {
  if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (value >= 1_000) {
    return (value / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  } else {
    return value.toString();
  }
};

export const capitalize = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const getYearFromDate = (date: string | Date): number => {
  const parsedDate = new Date(date);
  return parsedDate.getFullYear();
};
