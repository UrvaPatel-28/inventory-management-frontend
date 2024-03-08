import { Link } from "react-router-dom";

export const SidebarBtn = ({ label, navigateTo }: { label:string, navigateTo: string }) => {
  return (
    <Link to={navigateTo} className="rounded-full p-4 hover:bg-surface-variant focus:bg-secondary">{label}</Link>
  );
}