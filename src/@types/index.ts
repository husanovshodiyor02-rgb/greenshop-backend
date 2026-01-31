


export interface AuthType {
  billing_address: {
    country: string;
    town: string;
    street_address: string;
    extra_address: string;
    zip: string;
  };
  create_account_limit: number;
  create_plant_limit: number;
  create_post_limit: number;
  created_at: string;
  created_by: string;
  email: string;
  followers: string[];
  hashtags: string[];
  name: string;
  order_list: string[];
  password: string;
  permission: { create: boolean; update: boolean; delete: boolean; read: boolean };
  phone_number: string;
  profile_photo: string;
  surname: string;
  user_type: string;
  username: string;
  wishlist: string[];
  _id: string;
}




export interface RegisterType {
  name: string;
  surname: string;
  email: string;
  password: string;
  second_password: string;
}

export interface CategoryType {
    count: number;
  _id: string;
  title: string;
  route_path: string;
  created_at: string;
  created_by: string;
}   



export interface QueryType<T> {
    isLoading: boolean;
    isError: boolean;
    data?: T;
}



export interface DiscountFlowerType {
    id: number;
    title: string;
    discoount_up_to: number;
    poster_image_url: string;
}


export interface ProductType {
    _id: string;
    title: string;
    price: number;
    main_image: string;
    discount: boolean;
    discount_price?: number;
    short_description: string;
    description: string;
    category: string;
    detailed_images: string[];
    rate: number;
    views: string;
    tags: [];
    comments: [];
    sold_times: number;
    count?: number | undefined;
    userPrice?: number;
    created_at: string;
    created_by: string;
}


export interface ProductsTitleType {
    id: number;
    title: string;
    route_path: string;
}


export interface ShopCartType extends ProductType {
    counter: number;
    userPrice: number;
}

export interface CouponType {
  code: string;
  discount_for: number;
  id: number;
  title: string;
}