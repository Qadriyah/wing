export type GlanceCardType = {
  id: number;
  name: string;
  amount: string;
  icon: string;
  variation: {
    increase: boolean;
    value: string;
  };
};
