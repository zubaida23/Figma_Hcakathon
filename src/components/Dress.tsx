// import React from 'react'

// // pages/index.js
// export default function Home() {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="bg-white rounded-lg shadow-md p-6 w-[400px] md:w-[600px]">
//           <h1 className="text-xl font-bold text-center mb-6">BROWSE BY DRESS STYLE</h1>
//           <div className="grid grid-cols-2 gap-4">
//             {/* Casual */}
//             <div className="relative rounded-lg overflow-hidden">
//               <img
//                 src="/dress/casual.svg" // Replace with the correct path or URL
//                 alt="Casual"
//                 className="w-full h-40 object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
//                 {/* <span className="text-white font-semibold text-lg">Casual</span> */}
//               </div>
//             </div>
  
//             {/* Formal */}
//             <div className="relative rounded-lg overflow-hidden">
//               <img
//                 src="/dress/formal.svg" // Replace with the correct path or URL
//                 alt="Formal"
//                 className="w-full h-40 object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
//                 {/* <span className="text-white font-semibold text-lg">Formal</span> */}
//               </div>
//             </div>
  
//             {/* Party */}
//             <div className="relative rounded-lg overflow-hidden">
//               <img
//                 src="/dress/party.svg" // Replace with the correct path or URL
//                 alt="Party"
//                 className="w-full h-40 object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
//                 {/* <span className="text-white font-semibold text-lg">Party</span> */}
//               </div>
//             </div>
  
//             {/* Gym */}
//             <div className="relative rounded-lg overflow-hidden">
//               <img
//                 src="/dress/gym.svg" // Replace with the correct path or URL
//                 alt=""
//                 className="w-full h-40 object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
//                 {/* <span className="text-white font-semibold text-lg">Gym</span> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  









// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="w-full bg-gray-50 py-12">
//       {/* Section Title */}
//       <div className="text-center mb-8">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
//           BROWSE BY DRESS STYLE
//         </h2>
//       </div>

//       {/* Grid Section */}
//       <div className="container mx-auto px-6 md:px-12 lg:w-4/5">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          
//           {/* Casual */}
//           <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
//             <Image
//               src="/images/casual.jpg"
//               alt="Casual"
//               layout="responsive"
//               width={500}
//               height={400}
//             />
//             <div className="absolute bottom-4 left-4 text-lg font-semibold text-gray-800">
//               Casual
//             </div>
//           </div>

//           {/* Formal */}
//           <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
//             <Image
//               src="/images/formal.jpg"
//               alt="Formal"
//               layout="responsive"
//               width={500}
//               height={400}
//             />
//             <div className="absolute bottom-4 left-4 text-lg font-semibold text-gray-800">
//               Formal
//             </div>
//           </div>

//           {/* Party */}
//           <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
//             <div className="relative w-full h-[400px]">
//               <Image
//                 src="/images/party.jpg"
//                 alt="Party"
//                 layout="fill"
//                 objectFit="cover"
//               />
//               <div className="absolute bottom-4 left-4 text-lg font-semibold text-gray-800">
//                 Party
//               </div>
//             </div>
//           </div>

//           {/* Gym */}
//           <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
//             <Image
//               src="/images/gym.jpg"
//               alt="Gym"
//               layout="responsive"
//               width={500}
//               height={400}
//             />
//             <div className="absolute bottom-4 left-4 text-lg font-semibold text-gray-800">
//               Gym
//             </div>
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-gray-50 py-12">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          BROWSE BY DRESS STYLE
        </h2>
      </div>

      {/* Grid Section */}
      <div className="container mx-auto px-6 md:px-12 lg:w-4/5">
        {/* Adjusted grid layout with reduced gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">

          {/* Casual */}
          <div className="relative">
            <Image
              src="/dress/casual.svg"
              alt="Casual"
              layout="responsive"
              width={300}
              height={200}
              className="object-cover"
            />
          </div>

          {/* Formal */}
          <div className="relative">
            <Image
              src="/dress/formal.svg"
              alt="Formal"
              layout="responsive"
              width={300}
              height={150}
              className="object-cover"
            />
          </div>

          {/* Party */}
          <div className="relative">
            <Image
              src="/dress/party.svg"
              alt="Party"
              layout="responsive"
              width={300}
              height={150}
              className="object-cover"
            />
          </div>

          {/* Gym */}
          <div className="relative">
            <Image
              src="/dress/gym.svg"
              alt="Gym"
              layout="responsive"
              width={300}
              height={200}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

