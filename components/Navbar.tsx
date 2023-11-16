// "use client";

// import Link from "next/link";
// import { useState } from "react";
// // import { useRouter } from "next/router";

// const NavBar = () => {
//   // const router = useRouter();
//   const [searchParam, setSearchParam] = useState<string>("");

//   // const handleSearch = (e: React.SyntheticEvent) => {
//   //   e.preventDefault();
//   //   console.log("button click!!");
//   // };

//   return (
//     <nav className="bg-dark sticky top-0 left-0 right-0 z-10">
//       <div className="container mx-auto flex items-center justify-between">
//         <div className="flex items-center logo-img">
//           <Link href="/">
//             <img
//               src="Star_wars_logo.svg"
//               alt="Star Wars"
//               className="scale-50"
//             />
//           </Link>
//         </div>

//         <div className="hidden md:flex items-center space-x-4">
//           <Link href="/explore">
//             <h3 className="text-white">Explore</h3>
//           </Link>
//           <Link href="/characters">
//             <h3 className="text-white">Characters</h3>
//           </Link>
//           <Link href="/films">
//             <h3 className="text-white">Films</h3>
//           </Link>

//           {/* Search Bar */}
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search"
//               className="bg-gray-200 text-black rounded-md py-1 px-3 focus:outline-none focus:ring focus:border-blue-300"
//               value={searchParam}
//               onChange={(e) => setSearchParam(e.target.value)}
//             />
//             <Link href={`/search/${searchParam}`}>
//               <button
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
//                 // onClick={handleSearch}
//               >
//                 {/* You can replace this with your search icon */}
//                 🔎
//               </button>
//             </Link>
//           </div>
//         </div>

//         <div className="md:hidden"></div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const [searchParam, setSearchParam] = useState<string>("");

  return (
    <nav className="bg-dark sticky top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center logo-img">
          <Link href="/">
            <img
              src="Star_wars_logo.svg"
              alt="Star Wars"
              className="scale-50"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/explore">
            <h3 className="text-white">Explore</h3>
          </Link>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-200 text-black rounded-md py-1 px-3 focus:outline-none focus:ring focus:border-blue-300"
              value={searchParam}
              onChange={(e) => setSearchParam(e.target.value)}
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => {
                router.push(`/search/${searchParam}`);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
