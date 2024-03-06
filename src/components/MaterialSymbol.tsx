import { twMerge } from "tailwind-merge";

const MaterialSymbol = ({
  className,
  children,
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>) => <span className={twMerge("material-symbols-outlined", className)}>{children}</span>;

export default MaterialSymbol;
