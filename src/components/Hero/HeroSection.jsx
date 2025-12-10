// import { useState, useTransition } from "react";

// export default function HeroSection({ hero }) {
//   const [active, setActive] = useState("All Articles");
//   const [isPending, startTransition] = useTransition();

//   return (
//     <div className="w-full flex flex-col gap-8">

//       {/* Title */}
//       <h1 className="text-[90px] font-light leading-none text-black tracking-[-2px]">
//         {hero.title}
//       </h1>

//       {/* Divider */}
//       <div className="w-full h-px bg-gray-200"></div>

//       {/* Categories Section */}
//       <div className="flex flex-wrap items-center justify-between">

//         {/* Category Pills */}
//         <div className="flex flex-wrap gap-3">
//           {hero.categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() =>
//                 startTransition(() => {
//                   setActive(cat);
//                 })
//               }
//               className={`
//                 px-4 py-1.5 text-sm rounded-full border transition-all duration-300
//                 ${
//                   active === cat
//                     ? "bg-black text-white border-black"
//                     : "bg-white border-gray-300 text-gray-700 hover:border-black"
//                 }
//               `}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Search Bar */}
//         <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 w-[260px]">
//           <input
//             type="text"
//             placeholder="Search Designflow Blog"
//             className="w-full outline-none text-sm bg-transparent"
//           />
//           <span className="material-icons text-gray-500 text-lg cursor-pointer">
//             search
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useTransition } from "react";

export default function HeroSection({ hero }) {
  const [active, setActive] = useState("All Articles");
  const [isPending, startTransition] = useTransition();

  return (
    <div className="w-full flex flex-col gap-8">

      {/* Title */}
      <h1
        className="
          text-[42px] 
          sm:text-[60px] 
          md:text-[80px] 
          lg:text-[90px] 
          font-light 
          leading-none 
          text-black 
          tracking-[-1px] 
          sm:tracking-[-1.5px] 
          md:tracking-[-2px]
        "
      >
        {hero.title}
      </h1>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200"></div>

      {/* Categories + Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

        {/* Category Pills */}
        <div className="flex flex-wrap gap-3">
          {hero.categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                startTransition(() => {
                  setActive(cat);
                })
              }
              className={`
                px-4 py-1.5 text-sm rounded-full border transition-all duration-300 whitespace-nowrap
                ${
                  active === cat
                    ? "bg-black text-white border-black"
                    : "bg-white border-gray-300 text-gray-700 hover:border-black"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 w-full md:w-[260px] bg-white">
          <input
            type="text"
            placeholder="Search Designflow Blog"
            className="w-full outline-none text-sm bg-transparent"
          />
          <span className="material-icons text-gray-500 text-lg cursor-pointer">
            search
          </span>
        </div>

      </div>
    </div>
  );
}
