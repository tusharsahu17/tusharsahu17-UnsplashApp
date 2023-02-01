export type HomeData = [
  {
    id: number;
    main_product_id: number;
    name: string;
    amount: number;
    discount_amount: number;
    status: number;
    created_ai: string;
    updated_at: string;
  },
];

export type HomeState = {
  ProductData: HomeData[];
  isFetchingProductData: boolean;
};
