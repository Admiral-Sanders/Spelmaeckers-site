// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sortItems = (items: any[]): any[] => {
  return [...items].sort((a, b) => ((a?.order || 99) > (b?.order || 99) ? 1 : -1));
};

export default sortItems;
