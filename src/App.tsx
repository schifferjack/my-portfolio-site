import { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Drawer from "./react-components/Drawer";
import Footer from "./pages/Footer";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <div className="md:m-0 md:p-0">
        <nav className="fixed w-full left-0 h-[70px] cursor-pointer bg-white z-20">
          {/* mobile */}
          <div className="flex ps-4 pe-5 justify-between items-center h-[70px] lg:hidden md:hidden sm:hidden shadow-md">
            <p className="poppins-extrabold text-xl">
              <a href="#Home">Schifferjack</a>
            </p>
            <button onClick={toggleDrawer}>
              <i className="fa-solid fa-bars text-2xl"></i>
            </button>
            <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer}></Drawer>
          </div>
          {/* big screen */}
          <ul className="items-center h-full shadow-md justify-between px-8 hidden lg:flex md:flex sm:flex">
            <li className="poppins-extrabold text-xl">Schifferjack</li>
            <div className="flex justify-center gap-8">
              <li className="hover:text-blue-800 poppins-bold">
                <a href="#Home">Home</a>
              </li>
              <li className="hover:text-blue-800 poppins-bold">
                <a href="#About">About</a>
              </li>
              <li className="hover:text-blue-800 poppins-bold">
                <a href="#Contact">Contact</a>
              </li>
            </div>
          </ul>
        </nav>
        <Home id="Home" />
        <About id="About" />
        <Contact id="Contact" />
        <Footer />
      </div>
    </>
  );
}

export default App;
