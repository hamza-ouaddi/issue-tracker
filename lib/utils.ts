// Helper function to group data by month and year
export const groupByMonthAndYear = (
  data: { createdAt: Date }[]
): { date: Date; issues: number }[] => {
  const groupedData: { [key: string]: number } = {};

  data.forEach((item) => {
    const date = new Date(item.createdAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Month is zero-indexed, so add 1

    const key = `${year}-${month}`;

    if (!groupedData[key]) {
      groupedData[key] = 0;
    }

    groupedData[key]++;
  });

  return Object.keys(groupedData).map((key) => ({
    date: new Date(key),
    issues: groupedData[key],
  }));
};
