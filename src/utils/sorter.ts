import { Consumption } from 'graphql/schema';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const orderSorter = (items: any[]): any[] => {
  return [...items].sort((a, b) => ((a?.order || 99) > (b?.order || 99) ? 1 : -1));
};

export const consumptionSorter = (a: Consumption, b: Consumption): number => {
  return a.ticketAmount! - b.ticketAmount! !== 0 ? a.ticketAmount! - b.ticketAmount! : a.name! > b.name! ? 1 : -1;
};
