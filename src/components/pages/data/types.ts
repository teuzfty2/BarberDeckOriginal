export type Review = {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
};

export type Barber = {
  id: number;
  shopId: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  available: boolean;
  initials: string;
  color: string;
  tags: string[];
  reviewsList?: Review[];
  avatarUrl?: string;
  avatarPosition?: string; // Novo campo para o ajuste de ângulo (ex: 'center', 'top', '50% 20%')
};

export type Shop = {
  id: number;
  name: string;
  address: string;
  rating: number;
  reviews: number;
  imageUrl: string;
  isOpen: boolean;
};

export type FilterOption =
  | "Todos"
  | "Corte"
  | "Barba"
  | "Coloração"
  | "Combos"
  | "Disponível agora";