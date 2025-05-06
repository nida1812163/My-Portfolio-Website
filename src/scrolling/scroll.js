// ScrollContext.js
import { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export function ScrollProvider({ children }) {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const contactRef = useRef(null);
  
  const scrollTo = (ref) => {
    if (ref?.current) {
      const navbarHeight = 80; // Adjust to your navbar height
      window.scrollTo({
        top: ref.current.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <ScrollContext.Provider value={{ homeRef, aboutRef, techRef, contactRef, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
}

export const useScroll = () => useContext(ScrollContext);