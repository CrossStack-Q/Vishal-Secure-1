// export default function LargeCard({ featured }) {
//   return (
//     <div className="w-full bg-white rounded-xl border border-gray-200 p-6 flex flex-col md:flex-row gap-6 shadow-sm">
      
//       {/* Left Image */}
//       <img
//         src={featured.image}
//         alt={featured.title}
//         className="w-full md:w-1/2 h-[360px] object-cover rounded-lg"
//       />

//       {/* Right Content */}
//       <div className="flex flex-col justify-between md:w-1/2">

//         {/* Date + Reading Time */}
//         <div className="flex justify-between text-xs text-gray-500">
//           <span>{featured.date}</span>
//           <span>{featured.readTime}</span>
//         </div>

//         {/* Title */}
//         <h2 className="text-2xl font-medium mt-3 mb-3">
//           {featured.title}
//         </h2>

//         {/* Tags */}
//         <div className="flex gap-2 flex-wrap">
//           {featured.tags.map((tag) => (
//             <span
//               key={tag}
//               className="px-3 py-1 text-xs rounded-full border border-gray-300"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* Read now */}
//         <div className="mt-6 text-sm font-medium text-gray-800 flex items-center gap-1 cursor-pointer">
//           <span>Read Now</span>
//           <span>→</span>
//         </div>
//       </div>
//     </div>
//   );
// }




export default function LargeCard({ featured }) {
  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 p-6 flex flex-col md:flex-row gap-6 shadow-sm">

      {/* Left Image – hidden on mobile */}
      <img
        src={featured.image}
        alt={featured.title}
        className="hidden md:block md:w-1/2 h-[300px] lg:h-[360px] object-cover rounded-lg"
      />

      {/* Right Content */}
      <div className="flex flex-col justify-between md:w-1/2 w-full">

        {/* Date + Reading Time */}
        <div className="flex justify-between text-xs text-gray-500">
          <span>{featured.date}</span>
          <span>{featured.readTime}</span>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-medium mt-3 mb-3 leading-snug">
          {featured.title}
        </h2>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {featured.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full border border-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read Now */}
        <div className="mt-6 text-sm font-medium text-gray-800 flex items-center gap-1 cursor-pointer">
          <span>Read Now</span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
}
