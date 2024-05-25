import menuItems from '@/src/util/menuItems.json';

const DesktopMenu = () => {
  const componentName = 'DESKTOP_MENU';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER hidden md:flex h-[full] uppercase text-sm`}
    >
      {menuItems.map((menuItem, index) => (
        <a
          key={index}
          href={menuItem.href}
          title={`Brad Nickle CPA | Navigate to ${menuItem.title}`}
          aria-label={`Brad Nickle CPA | Navigate to ${menuItem.title}`}
          className={`${componentName}_MENU_LINK flex-grow flex justify-center border-t-[2px] border-b-4 border-b-white hover:border-b-[var(--main-color)] ${
            index !== 0 ? 'border-l-[2px]' : ''
          } duration-[var(--main-duration)] py-2`}
        >
          {menuItem.title}
        </a>
      ))}
    </div>
  );
};

export default DesktopMenu;
