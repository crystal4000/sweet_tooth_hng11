import { ReactNode } from "react";

// type Price = (number | null | [])[];
export type Product = {
  available_quantity: number;
  buying_price: number | null;
  categories: any[];
  current_price: {
    USD: any[];
  }[];
  date_created: string;
  description: string;
  discounted_price: number | null;
  extra_infos: any | null;
  id: string;
  is_available: boolean;
  is_deleted: boolean;
  is_service: boolean;
  last_updated: string;
  name: string;
  organization_id: string;
  parent: any | null;
  parent_product_id: any | null;
  photos: {
    file_rename: boolean;
    filename: string;
    is_featured: boolean;
    is_public: boolean;
    model_id: string;
    model_name: string;
    organization_id: string;
    position: number;
    save_as_jpg: boolean;
    url: string;
  }[];
  previous_url_slugs: any | null;
  product_image: any[];
  quantity: number;
  selling_price: number | null;
  unavailable: boolean;
  unavailable_end: any | null;
  unavailable_start: any | null;
  unique_id: string;
  url_slug: string;
  user_id: string;
};

export type LayoutProps = {
  children?: ReactNode;
  setSearchQuery: (query: string) => void;
  favoritesFilter: boolean;
  setFavoritesFilter: (filter: boolean) => void;
};

export type NavigationProps = {
  setSearchQuery: (query: string) => void;
  setFavoritesFilter: (filter: boolean) => void;
  favoritesFilter: boolean;
};

export type HomeProps = {
  searchQuery: string;
  favoritesFilter: boolean;
};

export type PageDetails = {
  currentPage: number;
  totalItems: number;
  size: number;
  totalPages: number;
};

export type Photos = {
  file_rename: boolean;
  filename: string;
  is_featured: boolean;
  is_public: boolean;
  model_id: string;
  model_name: string;
  organization_id: string;
  position: number;
  save_as_jpg: boolean;
  url: string;
};
