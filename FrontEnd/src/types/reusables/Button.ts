export interface Ibutton {
  type: "submit" | "reset" | "button" | undefined;
  className: string;
  onClick?: () => void;
}
