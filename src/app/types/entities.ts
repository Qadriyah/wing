export type OrderType = {
  id: number;
  product: string;
  price: number;
  quantity: number;
  date: string;
  thumbnail: string;
  commission: number;
  delivered: string;
};

export type BarChartDataType = {
  day: string;
  incoming: number;
  answered: number;
  experts: number;
};
