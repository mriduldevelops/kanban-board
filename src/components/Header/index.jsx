import { useEffect, useRef, useState, useContext } from "react";
import DialogBox from "../DiaologBox";
import { KanbanContext } from "../../context/KanbanContext";

const Header = () => {
  const {theme, toggleTheme}= useContext(KanbanContext);
  const [active, setActive] = useState(false);
  const dialogRef = useRef(null);

  const handleMode = () => {
    toggleTheme();
  };

  const handleClick = () => {
    setActive(!active);
  };

  const handleClickOutside = (event) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target)) {
      setActive(false);
    }
  };

  useEffect(() => {
    const body = document.querySelector("html");
    body.classList.remove("light", "dark");
    body.classList.add(theme);

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [theme]);

  return (
    <>
      <div className="py-2 px-1 md:px-2 lg:px-4 2xl:px-5 bg-white flex justify-between items-center dark:bg-[#010409e9]">
        <div
          onClick={handleClick}
          className="h-8 px-2 shadow-[0_0_5px_rgb(0,0,0,0.3)] rounded-md text-sm text-center flex items-center gap-3 text-zinc-400 dark:text-zinc-400 dark:shadow-[0_0_4px_rgb(200,200,200,0.5)] border dark:border-zinc-600"
        >
          <i className="fa-solid fa-sliders"></i>
          <span className="text-[16px] text-zinc-600 dark:text-zinc-200">Display</span>
          <i
            className={`fa-solid fa-angle-down text-xs mx-1  ${
              active ? "rotate-180" : "rotate-0"
            }`}
          ></i>
        </div>
        <div onClick={handleMode} className="p-2">
          {theme === "light" ? (
            <i className="fa-solid fa-moon"></i>
          ) : (
            <i className="fa-solid fa-sun dark:text-white"></i>
          )}
        </div>
      </div>
      {active && (
        <div ref={dialogRef}>
          <DialogBox />
        </div>
      )}
    </>
  );
};

export default Header;
