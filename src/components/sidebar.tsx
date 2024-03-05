import { SidebarBtn } from "./sidebar-btn";

export const Sidebar = () => {
  const sidebarBtns = [
    {
      label: 'route 1',
      route: '/',
    },
    {
      label: 'route 1',
      route: '/',
    },
    {
      label: 'route 1',
      route: '/',
    },
    {
      label: 'route 1',
      route: '/',
    },
    {
      label: 'route 1',
      route: '/',
    },
    {
      label: 'route 1',
      route: '/',
    },
    {
      label: 'route 1',
      route: '/',
    },
  ].map(btnInfo => {
    return (<SidebarBtn label={btnInfo.label} navigateTo={btnInfo.route}/>);
  });

  return (
  <div className="border-r-2 border-outline p-4 flex flex-col gap-1 min-h-screen h-fit">
    {sidebarBtns}
  </div>
  );
}