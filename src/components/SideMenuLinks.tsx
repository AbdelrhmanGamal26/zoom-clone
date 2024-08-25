import { SheetClose } from "./ui/sheet";
import { sideMenuLinks } from "@/data/constants";
import SideMenuLinkItem from "./SideMenuLinkItem";

const SideMenuLinks = ({ withWrapper = false }: { withWrapper?: boolean }) => {
  return (
    <ul>
      {sideMenuLinks.map(({ title, url, icon }) => {
        return (
          <li key={title} className="w-[275px] sm:w-full md:w-full mb-5">
            {withWrapper ? (
              <SheetClose asChild>
                <SideMenuLinkItem
                  url={url}
                  icon={icon}
                  title={title}
                />
              </SheetClose>
            ) : (
              <SideMenuLinkItem
                url={url}
                icon={icon}
                title={title}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default SideMenuLinks;
