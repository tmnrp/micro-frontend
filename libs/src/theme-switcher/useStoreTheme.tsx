import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

//
interface StoreThemeProps {
  thememode: "light" | "dark";
  toggle: () => void;
}

//
export const useStoreTheme = create<StoreThemeProps>()(
  devtools(
    persist(
      (set) => ({
        thememode: "light",
        toggle: () =>
          set((state) => ({
            thememode: state.thememode === "light" ? "dark" : "light",
          })),
      }),
      {
        name: "store-theme",
      }
    )
  )
);
