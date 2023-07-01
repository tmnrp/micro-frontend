import { ButtonOutlined } from "..";
import { useStoreTheme } from "./useStoreTheme";

export const ThemeSwitcher = () => {
  //
  const thememode = useStoreTheme((state) => state.thememode);
  const toggle = useStoreTheme((state) => state.toggle);

  //
  return (
    <ButtonOutlined onClick={toggle}>
      {thememode === "light" ? "dark" : "light"}
    </ButtonOutlined>
  );
};
