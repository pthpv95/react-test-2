export interface ButtonProps {
  className?: string;
  text: string;
  icon?: any;
  disabled?: boolean;
  // eslint-disable-next-line
  clickHandler?: (arg0?: unknown) => void;
}