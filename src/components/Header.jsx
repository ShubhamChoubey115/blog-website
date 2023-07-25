import { BsSun ,BsFillMoonFill } from "react-icons/bs";
import { useState,useEffect } from "react";
export default function Header() {
  const [theme, setTheme] = useState('black');
  const toggleTheme = () => {
    if (theme === 'white') {
      setTheme('black');
    } else {
      setTheme('white');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <header className="py-4 border-b-2 border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0">
      <div className={`${theme ==="white" ? ("bg-white text-black py-4 fixed top-0 inset-x-0"):("bg-black text-white py-4 fixed top-0 inset-x-0")}`}>
      <div className="w-11/12 max-w-[670px] mx-auto flex justify-between">
      <h1 className="font-bold text-3xl uppercase">
        StudyNotion Blogs
      </h1>
      <button onClick={toggleTheme}>
        {
          theme ==="white" ? <button><BsSun></BsSun></button> :<button><BsFillMoonFill></BsFillMoonFill></button> 
        }
      </button>
      </div>
      </div>
    </header>
  );
}
