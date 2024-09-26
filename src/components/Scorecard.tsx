
// import React from 'react';

// interface PlayerScore {
//   name: string;
//   runs: number;
//   balls: number;
// }

// interface BowlerStats {
//   name: string;
//   overs: number;
//   runs: number;
//   wickets: number;
// }

// interface ScorecardProps {
//   batsmen: PlayerScore[];
//   bowler: BowlerStats;
//   striker: string;
//   nonStriker: string;
// }
// const Scorecard: React.FC<ScorecardProps> = ({ batsmen, bowler }) => {
//   return (
//     <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
//       <h3 className="text-lg font-bold">Scorecard</h3>
//       <div className="flex justify-between">
//         <div className="text-left">
//           {batsmen.map(batsman => (
//             <p key={batsman.name}>{batsman.name}: {batsman.runs} ({batsman.balls})</p>
//           ))}
//         </div>
//         <div className="text-right">
//           <p><strong>Bowler</strong></p>
//           <p>{bowler.name}: {bowler.overs}-{bowler.runs}-{bowler.wickets}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Scorecard;


// src/components/Scorecard.tsx
// import React from 'react';

// interface PlayerScore {
//   name: string;
//   runs: number;
//   balls: number;
// }

// interface BowlerStats {
//   name: string;
//   overs: number;
//   runs: number;
//   wickets: number;
// }

// interface ScorecardProps {
//   batsmen: PlayerScore[];
//   bowler: BowlerStats;
// }

// const Scorecard: React.FC<ScorecardProps> = ({ batsmen, bowler }) => {
//   return (
//     <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
//       <h3 className="text-lg font-bold">Scorecard</h3>
//       <div className="flex justify-between">
//         <div className="text-left">
//           {batsmen.map(batsman => (
//             <p key={batsman.name}>{batsman.name}: {batsman.runs} ({batsman.balls})</p>
//           ))}
//         </div>
//         <div className="text-right">
//           <p><strong>Bowler</strong></p>
//           <p>{bowler.name}: {bowler.overs}-{bowler.runs}-{bowler.wickets}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Scorecard;

import React from "react";

interface PlayerScore {
  name: string;
  runs: number;
  balls: number;
}

interface BowlerStats {
  name: string;
  overs: number;
  runs: number;
  wickets: number;
  ballsBowled: number; // Track balls bowled within an over
}

interface ScorecardProps {
  batsmen: PlayerScore[];
  bowler: BowlerStats;
  striker: string;
  nonStriker: string;
}

const Scorecard: React.FC<ScorecardProps> = ({ batsmen, bowler, striker, nonStriker }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold">Scorecard</h3>
      <div className="flex justify-between">
        <div className="text-left">
          {batsmen.map(batsman => (
            <p key={batsman.name}>{batsman.name}: {batsman.runs} ({batsman.balls})</p>
          ))}
        </div>
        <div className="text-right">
          <p><strong>Bowler</strong></p>
          <p>{bowler.name}: {bowler.overs}-{ bowler.runs}-{bowler.wickets}</p>
          <p><strong>Striker</strong>: {striker}</p>
          <p><strong>Non-Striker</strong>: {nonStriker}</p>
        </div>
      </div>
    </div>
  );
};

export default Scorecard;