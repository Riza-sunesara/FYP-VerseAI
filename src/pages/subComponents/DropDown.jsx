import { useState } from "react";

const DropDown = ({ genre, setGenre, genres = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full relative">
      <label className="block font-medium text-sm mb-1">Choose Genre</label>
      
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-white bg-cyan-600 hover:bg-cyan-500 focus:ring-2 focus:outline-none focus:ring-cyan-500 font-medium rounded-lg text-sm px-5 py-2.5 text-left inline-flex justify-between items-center"
      >
        {genre || "Select Genre"}
        <svg
          className="w-2.5 h-2.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1l4 4 4-4"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-full bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" role="listbox">
            {genres.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => {
                    setGenre(item);
                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-purple-100 dark:hover:bg-cyan-600 dark:hover:text-white"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
