import { useLocation } from "react-router-dom";
import { SidebarBtn } from "./sidebar-btn";
import { twMerge } from "tailwind-merge";

export const Sidebar = () => {
  const location = useLocation();
  const rootPath = "/" + location.pathname.split("/").filter((x) => x)[0];

  const sidebarBtns = [
    {
      label: "machine",
      route: "/machine",
    },
    {
      label: "machine imports",
      route: "/machine-imports",
    },
    {
      label: "raw material",
      route: "/raw-material",
    },
    {
      label: "raw material import",
      route: "/raw-material-import",
    },
    {
      label: "products",
      route: "/products",
    },
    {
      label: "product manufacturing",
      route: "/product-manufacturing",
    },
    {
      label: "sales",
      route: "/sales",
    },
    {
      label: "Approve Requests",
      route: "/approve-requests",
    }
  ].map((btnInfo) => {
    return (
      <SidebarBtn
        label={btnInfo.label}
        className={twMerge(rootPath === btnInfo.route && "bg-secondary")}
        navigateTo={btnInfo.route}
      />
    );
  });

  return (
    <div
      className={`border-r-2 min-w-52 max-w-52 border-outline p-4 flex flex-col gap-1 h-full`}
    >
      {sidebarBtns}
    </div>
  );
};
