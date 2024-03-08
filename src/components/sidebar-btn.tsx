import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export const SidebarBtn = ({
  label,
  navigateTo,
  className,
}: {
  label: string;
  navigateTo: string;
  className?: string;
}) => {
  return (
    <Link
      to={navigateTo}
      className={twMerge(
        "rounded-full p-4 hover:bg-surface-variant focus:bg-secondary",
        className
      )}
    >
      {label}
    </Link>
  );
};
