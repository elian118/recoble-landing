import { createContext } from 'react';

export type PricingContextType = {
  isSelectedMonthlyState: [boolean, (val: boolean) => void];
};

export const initPricingContext: PricingContextType = {
  isSelectedMonthlyState: [false, () => {}],
};

export const PricingContext = createContext<PricingContextType>(initPricingContext);
