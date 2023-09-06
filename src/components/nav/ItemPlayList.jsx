// import React, { useState } from "react";
// import { FiMusic } from "react-icons/fi";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// export const ItemPlayList = () => {
//   const { responseToken } = useSelector((state) => state.authUser);
//   const [data, setData] = useState(null);
//   const getTracks = async () => {
//     const tracks = await fetch("https://api.spotify.com/v1/me/playlists", {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${responseToken?.access_token}`,
//       },
//     });
//     const data = await tracks.json();
//     setData(data);
//     console.log(data);
//   };

//   useEffect(() => {
//     getTracks();
//   }, [responseToken?.access_token]);
//   return (
//     <div className="px-4 mt-3">
//       {data?.items?.map((lists) => (
//         <div
//           className="flex gap-x-3 px-2 py-2 hover:bg-[#1A1A1A] rounded-lg cursor-pointer transition-colors duration-150"
//           key={lists.id}
//         >
//           <div className="h-[50px]  w-[50px] bg-[#282828] rounded-lg text-[#B3B3B3]">
//             <i className="flex justify-center items-center w-full h-full text-3xl">
//               <FiMusic />
//             </i>
//           </div>
//           <div className="flex flex-col gap-x-3">
//             <span className="block ">{lists?.name}</span>
//             <strong className="text-sm">
//               {lists.type} {lists?.display_name}
//             </strong>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
