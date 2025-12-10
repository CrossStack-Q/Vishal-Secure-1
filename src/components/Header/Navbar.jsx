// import { useState, useTransition } from "react";

// export default function Navbar() {
//   const [hovered, setHovered] = useState(null);
//   const [isPending, startTransition] = useTransition();

//   const navItems = ["Products", "Solutions", "Developers", "Resources", "Customers"];

//   return (
//     <nav className="w-full border-b border-gray-200 bg-white px-8 py-4 flex items-center justify-between">

//       {/* Left Section */}
//       <div className="flex items-center gap-12">
        
//         {/* Logo */}
//         <a href="/" className="flex items-center gap-2 font-semibold text-gray-900">
//           <img src="/logo.svg" alt="Lo" className="w-6 h-6 transition-transform duration-300 hover:rotate-6 hover:scale-105" />
//           <span className="text-lg">designflow</span>
//         </a>

//         {/* Nav Links */}
//         <ul className="hidden md:flex items-center gap-8">
//           {navItems.map((item) => (
//             <li
//               key={item}
//               onMouseEnter={() =>
//                 startTransition(() => {
//                   setHovered(item);
//                 })
//               }
//               onMouseLeave={() =>
//                 startTransition(() => {
//                   setHovered(null);
//                 })
//               }
//               className="text-gray-600 hover:text-black cursor-pointer text-sm relative"
//             >
//               {item}

//               {/* Animated underline */}
//               <span
//                 className={`
//                   absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300
//                   ${hovered === item ? "w-full" : "w-0"}
//                 `}
//               />
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center gap-4">
//         <button className="text-sm text-gray-600 hover:text-black transition-opacity duration-300">
//           Log In
//         </button>

//         <button className="px-4 py-2 bg-black text-white rounded-full text-sm transition-all duration-300 hover:bg-gray-900 hover:-translate-y-[2px]">
//           Start Free Trial →
//         </button>
//       </div>
//     </nav>
//   );
// }






import { useState, useTransition } from "react";

export default function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const navItems = ["Products", "Solutions", "Developers", "Resources", "Customers"];

  return (
    <nav className="w-full border-b border-gray-200 bg-white px-6 sm:px-8 py-4">

      {/* Main Navbar Row */}
      <div className="flex items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center gap-6 md:gap-12">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 font-semibold text-gray-900">
            <img
              src="/logo.svg"
              alt="Lo"
              className="w-6 h-6 transition-transform duration-300 hover:rotate-6 hover:scale-105"
            />
            <span className="text-lg">designflow</span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li
                key={item}
                onMouseEnter={() =>
                  startTransition(() => {
                    setHovered(item);
                  })
                }
                onMouseLeave={() =>
                  startTransition(() => {
                    setHovered(null);
                  })
                }
                className="text-gray-600 hover:text-black cursor-pointer text-sm relative"
              >
                {item}

                {/* Animated underline */}
                <span
                  className={`
                    absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300
                    ${hovered === item ? "w-full" : "w-0"}
                  `}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm text-gray-600 hover:text-black transition-opacity duration-300">
            Log In
          </button>

          <button className="px-4 py-2 bg-black text-white rounded-full text-sm transition-all duration-300 hover:bg-gray-900 hover:-translate-y-[2px]">
            Start Free Trial →
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 group"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-[2px] w-6 bg-black transition-all duration-300 ${
              open ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-black transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-black transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-96 mt-4" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col gap-4 text-gray-700 text-sm pb-4">

          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-black transition-colors"
            >
              {item}
            </li>
          ))}

          <hr className="border-gray-300" />

          <button className="text-left text-gray-600 hover:text-black text-sm">
            Log In
          </button>

          <button className="w-fit px-4 py-2 bg-black text-white rounded-full text-sm transition-all duration-300 hover:bg-gray-900">
            Start Free Trial →
          </button>
        </ul>
      </div>
    </nav>
  );
}
