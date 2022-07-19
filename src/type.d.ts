type SignUpData = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type SignInData = {
  email: string;
  password: string;
};

type User = {
  userId: string;
  email: string;
  name: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
};

type AuthState = {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
};

type ProductState = {
  products: Product[];
};

type CartState = {
  cartItems: Product[];
  loading: boolean;
  error: string | null;
  cartTotal: number;
};

type WishlistState = {
  wishlistItems: Product[];
  loading: boolean;
  error: string | null;
};
