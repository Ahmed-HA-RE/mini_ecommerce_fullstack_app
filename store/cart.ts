import { CartItem } from 'type';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type CartStore = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        addToCart: (item) =>
          set((state) => {
            const alreadyExist = state.cart.find(
              (cartItem) => cartItem.id === item.id
            );

            if (alreadyExist) {
              return {
                cart: state.cart.map((cartItem) =>
                  cartItem.id === item.id
                    ? { ...cartItem, qty: item.qty + cartItem.qty }
                    : cartItem
                ),
              };
            } else {
              return { cart: [...state.cart, item] };
            }
          }),

        removeFromCart: (id) =>
          set((state) => ({
            cart: state.cart
              .map((cartItem) =>
                cartItem.id === id
                  ? { ...cartItem, qty: cartItem.qty - 1 }
                  : cartItem
              )
              .filter((cartItem) => cartItem.qty > 0),
          })),

        clearCart: () => set(() => ({ cart: [] })),
      }),
      { name: 'miniMart-cart' }
    )
  )
);

export default useCartStore;
