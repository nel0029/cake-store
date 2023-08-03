/** @format */

import { useEffect, useState, useRef } from "react";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Services from "./layout/Services";
import Gallery from "./layout/Gallery";
import Contacts from "./layout/Contacts";
import Reviews from "./layout/Reviews";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen === true) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isMenuOpen]);

  const [pos, setPos] = useState<number>(0);
  const height: number = window.innerHeight;
  const headerRef = useRef(document.createElement("div"));
  const headerHeight = headerRef.current.offsetHeight;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPos(window.scrollY);
    });
  }, [pos]);
  return (
    <div className="w-full flex flex-col bg-darkBrown">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        headerRef={headerRef}
        pos={pos}
        height={height}
      />
      <Main headerHeight={headerHeight} />
      <Services headerHeight={headerHeight} />
      <Gallery headerHeight={headerHeight} />
      <Reviews headerHeight={headerHeight} />
      <Contacts headerHeight={headerHeight} />
    </div>
  );
}

export default App;
