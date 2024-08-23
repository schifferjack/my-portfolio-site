interface DrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}
const Drawer: React.FC<DrawerProps> = ({ isOpen, toggleDrawer }) => {
  return (
    <>
      {isOpen && (
        <div
          className={`${isOpen ? "fixed items-center top-0 w-full h-screen bg-white duration-300 flex flex-col z-30 left-0" : "-left-full"}`}
        >
          <button
            onClick={toggleDrawer}
            className="mt-4 flex justify-end w-full pe-6"
          >
            <i className="fa-solid fa-x text-4xl"></i>
          </button>
          <nav className="h-full">
            <ul className="flex-1 flex text-4xl justify-center items-center gap-8 flex-col h-full">
              <li>
                <a href="#Home" onClick={toggleDrawer}>
                  Home
                </a>
              </li>
              <li>
                <a href="#About" onClick={toggleDrawer}>
                  About
                </a>
              </li>
              <li>
                <a href="#Project" onClick={toggleDrawer}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#Contact" onClick={toggleDrawer}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Drawer;
