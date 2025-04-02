import { create } from "zustand";

export const useTheme = create((set)=>({
    bgThemeMode: "dark",
    changeBgThemeMode: (mode)=>set((state) => ({ bgThemeMode: mode}))
}));