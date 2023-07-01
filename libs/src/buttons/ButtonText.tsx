import { Button, ButtonProps } from "@mui/material";

//
export const ButtonText = ({ children, ...props }: ButtonProps) => {
  return (
    <Button {...props} variant="text">
      {children}
    </Button>
  );
};
