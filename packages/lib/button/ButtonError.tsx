interface ButtonErrorProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text?: string;
}
export const ButtonError = ({ text = "Error", ...props }: ButtonErrorProps) => {
  return <button {...props}>{text}</button>;
};
