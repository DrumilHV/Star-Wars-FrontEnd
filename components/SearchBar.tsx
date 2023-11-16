// // components/SearchBar.tsx
// "use client";
// import { useState } from "react";
// import { useRouter } from "next/router";

// const SearchBar: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const router = useRouter();

//   const handleSearch = () => {
//     if (searchTerm.trim() !== "") {
//       router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
//     }
//   };

//   return (
//     <div className="relative">
//       <input
//         type="text"
//         placeholder="Search"
//         className="bg-gray-200 text-black rounded-md py-1 px-3 focus:outline-none focus:ring focus:border-blue-300"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
//         onClick={handleSearch}
//       >
//         {/* You can replace this with your search icon */}
//         Search
//       </button>
//     </div>
//   );
// };

// export default SearchBar;
