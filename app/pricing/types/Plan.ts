export type Plan = {
  title: string;
  mau: string;
  price: {
    yearly: number;
    standard: string;
    monthly?: number;
  };
  details: string[];
};
