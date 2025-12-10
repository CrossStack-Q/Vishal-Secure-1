// export default function BlogCard({ blog }) {
//   return (
//     <div className="w-full">
      
//       {/* Image */}
//       <img
//         src={blog.image}
//         alt={blog.title}
//         className="w-full h-[200px] object-cover rounded-lg"
//       />

//       {/* Category + Date */}
//       <div className="flex items-center gap-3 text-xs text-gray-500 mt-3 mb-2">
//         <span className="px-3 py-0.5 rounded-full border border-gray-300 text-gray-700 text-[11px]">
//           {blog.category}
//         </span>
//         <span>{blog.date}</span>
//       </div>

//       {/* Title */}
//       <h3 className="text-[17px] leading-snug font-medium text-gray-900">
//         {blog.title}
//       </h3>
//     </div>
//   );
// }




export default function BlogCard({ blog }) {
  return (
    <div className="w-full">

      {/* Image – hidden on mobile */}
      <img
        src={blog.image}
        alt={blog.title}
        className="hidden md:block w-full h-[180px] lg:h-[200px] object-cover rounded-lg"
      />

      {/* Category + Date */}
      <div className="flex items-center gap-3 text-xs text-gray-500 mt-3 mb-2">
        <span className="px-3 py-0.5 rounded-full border border-gray-300 text-gray-700 text-[11px]">
          {blog.category}
        </span>
        <span>{blog.date}</span>
      </div>

      {/* Title */}
      <h3 className="text-[16px] sm:text-[17px] leading-snug font-medium text-gray-900">
        {blog.title}
      </h3>
    </div>
  );
}
