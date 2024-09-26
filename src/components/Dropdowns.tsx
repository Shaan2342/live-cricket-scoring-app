

// src/components/Dropdowns.tsx
// import React from 'react';

// interface DropdownsProps {
//   striker: string;
//   nonStriker: string;
//   bowler: string;
//   setStriker: (value: string) => void;
//   setNonStriker: (value: string) => void;
//   setBowler: (value: string) => void;
// }

// const Dropdowns: React.FC<DropdownsProps> = ({ 
//   striker, 
//   nonStriker, 
//   bowler, 
//   setStriker, 
//   setNonStriker, 
//   setBowler 
// }) => {

//   // Define your player data (replace with your actual player lists)
//   const batsmen = [
//     "R.Sharma",
//     "V.Kohli",
//     "S.Iyer", 
//     "R.Pant",
//     "S.Yadav",
//     "A.Patel",
//     "R.Jadeja",
//     "K.Yadav",
//     "J.Bumrah",
//     "M.Shammi",
//     "M.Siraj",
//   ];

//   const bowlers = [
//     "M.Starc",
//     "P.Cummins",
//     "A.Zampa",
//     "J.Hazelwood",
//     "N.Lyon",
//   ];

//   return (
//     <div className="flex items-center space-x-4 p-4">
//       <div>
//         <label htmlFor="striker" className="block text-sm font-medium text-gray-700">
//           Batsman (Striker)
//         </label>
//         <select
//           id="striker"
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//           value={striker}
//           onChange={(e) => setStriker(e.target.value)}
//         >
//           {batsmen.map((batsman) => (
//             <option key={batsman} value={batsman}>
//               {batsman}
//             </option>
//           ))} 
//         </select>
//       </div>

//       <div> {/* New dropdown for Non-Striker */}
//         <label htmlFor="nonStriker" className="block text-sm font-medium text-gray-700">
//           Batsman (Non-Striker)
//         </label>
//         <select
//           id="nonStriker"
//           className="mt-1 block w-full rounded -md border-gray-300 shadow-sm"
//           value={nonStriker}
//           onChange={(e) => setNonStriker(e.target.value)}
//         >
//           {batsmen.map((batsman) => (
//             <option key={batsman} value={batsman}>
//               {batsman}
//             </option>
//           ))} 
//         </select>
//       </div>

//       <div>
//         <label htmlFor="bowler" className="block text-sm font-medium text-gray-700">
//           Bowler
//         </label>
//         <select
//           id="bowler"
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//           value={bowler}
//           onChange={(e) => setBowler(e.target.value)}
//         >
//           {bowlers.map((bowler) => (
//             <option key={bowler} value={bowler}>
//               {bowler}
//             </option>
//           ))} 
//         </select>
//       </div>
//     </div>
//   );
// };

// export default Dropdowns;


// Dropdowns.tsx
import React from 'react';

interface DropdownsProps {
  striker: string;
  nonStriker: string;
  bowler: string;
  setStriker: (value: string) => void;
  setNonStriker: (value: string) => void;
  setBowler: (value: string) => void;
  initializeBatsman: () => void; // Add this
  initializeBowler: () => void; // Add this
}

const Dropdowns: React.FC<DropdownsProps> = ({ 
  striker, 
  nonStriker, 
  bowler, 
  setStriker, 
  setNonStriker, 
  setBowler 
}) => {

  // Define your player data (replace with your actual player lists)
  const batsmen = [
    "R.Sharma",
    "V.Kohli",
    "S.Iyer", 
    "R.Pant",
    "S.Yadav",
    "A.Patel",
    "R.Jadeja",
    "K.Yadav",
    "J.Bumrah",
    "M.Shammi",
    "M.Siraj",
  ];

  const bowlers = [
    "M.Starc",
    "P.Cummins",
    "A.Zampa",
    "J.Hazelwood",
    "N.Lyon",
  ];

  return (
    <div className="flex items-center space-x-4 p-4">
      <div>
        <label htmlFor="striker" className="block text-sm font-medium text-gray-700">
          Batsman (Striker)
        </label>
        <select
          id="striker"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          value={striker}
          onChange={(e) => setStriker(e.target.value)}
        >
          {batsmen.map((batsman) => (
            <option key={batsman} value={batsman}>
              {batsman}
            </option>
          ))} 
        </select>
      </div>

      <div> {/* New dropdown for Non-Striker */}
        <label htmlFor="nonStriker" className="block text-sm font-medium text-gray-700">
          Batsman (Non-Striker)
        </label>
        <select
          id="nonStriker"
          className="mt-1 block w-full rounded -md border-gray-300 shadow-sm"
          value={nonStriker}
          onChange={(e) => setNonStriker(e.target.value)}
        >
          {batsmen.map((batsman) => (
            <option key={batsman} value={batsman}>
              {batsman}
            </option>
          ))} 
        </select>
      </div>

      <div>
        <label htmlFor="bowler" className="block text-sm font-medium text-gray-700">
          Bowler
        </label>
        <select
          id="bowler"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          value={bowler}
          onChange={(e) => setBowler(e.target.value)}
        >
          {bowlers.map((bowler) => (
            <option key={bowler} value={bowler}>
              {bowler}
            </option>
          ))} 
        </select>
      </div>
    </div>
  );
};

export default Dropdowns;