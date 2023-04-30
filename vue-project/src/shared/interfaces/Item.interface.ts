export interface ItemInterface {
  category?: string;
  subcategory?: string;
  name: string;
  current_price?: string;
  raw_price?: string;
  discount?: string;
  likes_count?: string;
  is_new?: string;
  image_url: string;
  variation_0_color?: string;
  variation_1_color?: string;
  variation_0_image?: string;
  variation_1_image?: string;
  variation_0_thumbnail?: string;
  variation_1_thumbnail?: string;
  id?: string;
  model: string;
}

/* OLD CODE BELOW
export interface ItemInterface {
  category: string;
  subcategory: string;
  name: string;
  current_price: string;
  raw_price: string;
  discount: string;
  likes_count: string;
  is_new: string;
  image_url: string;
  variation_0_color: string;
  variation_1_color: string;
  variation_0_image: string;
  variation_1_image: string;
  variation_0_thumbnail: string;
  variation_1_thumbnail: string;
  id: string;
  model: string;
} */
