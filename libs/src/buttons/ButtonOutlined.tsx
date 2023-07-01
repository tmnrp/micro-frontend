import { Button, ButtonProps } from "@mui/material";

//
export const ButtonOutlined = ({ children, ...props }: ButtonProps) => {
  return (
    <Button {...props} variant="outlined">
      {children}
    </Button>
  );
};
