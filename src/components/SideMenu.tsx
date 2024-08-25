import SideMenuLinks from "./SideMenuLinks";

const SideMenu = () => {
  return (
    <nav className="hidden lg:block min-w-[275px] max-w-[275px] min-h-[calc(100vh-72px)] text-white bg-dark-2 h-[92.5vh] pt-10 px-4">
      <SideMenuLinks />
    </nav>
  );
};

export default SideMenu;
