

// import React, { useState } from 'react';
// import TopBar from './components/TopBar';
// import Dropdowns from './components/Dropdowns';
// import ButtonGrid from './components/ButtonGrid';
// import Scorecard from './components/Scorecard';
// import Commentary from './components/Commentary';

// const App: React.FC = () => {
//   const [striker, setStriker] = useState("Sterre Kalis");
//   const [nonStriker, setNonStriker] = useState("Suzie Bates");
//   const [bowler, setBowler] = useState("Mady Villiers");

//   // State for batsmen, bowler, and events
//   const [batsmen, setBatsmen] = useState([
//     { name: 'Sterre Kalis', runs: 12, balls: 4 },
//     { name: 'Suzie Bates', runs: 24, balls: 7 }
//   ]);

//   const [bowlerStats, setBowlerStats] = useState({ 
//     name: 'Mady Villiers', 
//     overs: 11, 
//     runs: 41, 
//     wickets: 0,
//     ballsBowled: 0 // Track balls bowled within an over
//   });

//   const [events, setEvents] = useState([
//     "2.1: Mady Villiers to Sterre Kalis, 2 runs.",
//     "1.5: Mady Villiers to Suzie Bates, 4 runs.",
//     "1.4: Mady Villiers to Suzie Bates, wide ball. 5 wides."
//   ]);

//   // Function to update batsman stats
//   const updateBatsmanStats = (
//     runs: number, 
//     currentBatsman: 'striker' | 'nonStriker',
//     isWide: boolean = false, // Flag to indicate if the run is from a wide
//     isNoBall: boolean = false, // Flag to indicate if the run is from a no ball
//   ) => {
//     setBatsmen(prevBatsmen => {
//       return prevBatsmen.map(batsman => {
//         if (batsman.name === (currentBatsman === 'striker' ? striker : nonStriker)) {
//           return {
//             ...batsman,
//             runs: batsman.runs + runs,
//             balls: (!isWide && !isNoBall && batsman.name === (currentBatsman === 'striker' ? striker : nonStriker)) ? batsman.balls + 1 : batsman.balls, // Only increment balls faced if not a wide or no ball
//           };
//         }
//         return batsman;
//       });
//     });
//   };

//   // Function to update bowler stats
//   const updateBowlerStats = (
//     runs: number, 
//     isWicket: boolean = false, 
//     isWide: boolean = false,
//     isNoBall: boolean = false,
//   ) => {
//     setBowlerStats(prevBowler => {
//       const updatedOvers = 
//         prevBowler.ballsBowled === 5 && !isWide && !isNoBall // Check for legal delivery for over completion
//           ? Math.floor(prevBowler.overs) + 1 
//           : prevBowler.overs;

//       const updatedBallsBowled = 
//         (isWide || isNoBall) && prevBowler.ballsBowled < 6
//           ? prevBowler.ballsBowled 
//           : prevBowler.ballsBowled === 5 && !isWide && !isNoBall // Check for legal delivery for over completion
//           ? 0 
//           : prevBowler.ballsBowled + 1;

//       return {
//         ...prevBowler,
//         overs: updatedOvers,
//         runs: prevBowler.runs + runs,
//         wickets: isWicket ? prevBowler.wickets + 1 : prevBowler.wickets,
//         ballsBowled: updatedBallsBowled, 
//       };
//     });
//   };

//   // Function to add a commentary event
//   const addCommentaryEvent = (eventText: string) => {
//     setEvents(prevEvents => [eventText, ...prevEvents]);
//   };

//   // Function to switch strike
//   const switchStrike = () => {
//     setStriker(nonStriker);
//     setNonStriker(striker);
//   };

//   // Event handler functions for ButtonGrid
//   const handleRunScored = (runs: number) => {
//     updateBatsmanStats(runs, 'striker');
//     updateBowlerStats(runs);
//     addCommentaryEvent(`${bowlerStats.overs}.${bowlerStats .ballsBowled}: ${bowler} to ${striker}, ${runs} runs.`);
//   };

//   const handleWide = () => {
//     updateBowlerStats(1, false, true);
//     addCommentaryEvent(`${bowlerStats.overs}.${bowlerStats.ballsBowled}: ${bowler} to ${striker}, wide ball.`);
//   };

//   const handleNoBall = () => {
//     updateBatsmanStats(1, 'striker', false, true);
//     updateBowlerStats(1, false, false, true);
//     addCommentaryEvent(`${bowlerStats.overs}.${bowlerStats.ballsBowled}: ${bowler} to ${striker}, no ball.`);
//   };

//   const handleWicket = () => {
//     updateBatsmanStats(0, 'striker', false, false);
//     updateBowlerStats(0, true, false, false);
//     addCommentaryEvent(`${bowlerStats.overs}.${bowlerStats.ballsBowled}: ${bowler} to ${striker}, wicket.`);
//     switchStrike(); // Switch strike after a wicket
//   };

//   const handleBowlerStop = () => {
//     // Implement logic for bowler stop
//   };

//   const handleAppeal = () => {
//     // Implement logic for appeal
//   };

//   const handleCatchDrop = () => {
//     // Implement logic for catch drop
//   };

//   const handleLegBye = () => {
//     updateBatsmanStats(1, 'striker', false, false);
//     updateBowlerStats(1, false, false, false);
//     addCommentaryEvent(`${bowlerStats.overs}.${bowlerStats.ballsBowled}: ${bowler} to ${striker}, leg bye.`);
//   };

//   const handleBye = () => {
//     updateBatsmanStats(1, 'striker', false, false);
//     updateBowlerStats(1, false, false, false);
//     addCommentaryEvent(`${bowlerStats.overs}.${bowlerStats.ballsBowled}: ${bowler} to ${striker}, bye.`);
//   };

//   const handleThirdUmpire = () => {
//     // Implement logic for third umpire
//   };

//   const handleReview = () => {
//     // Implement logic for review
//   };

//   const handleMisfeild = () => {
//     updateBatsmanStats(1, 'striker', false, false);
//     updateBowlerStats(1, false, false, false);
//     addCommentaryEvent(`${bowlerStats.overs}.${bowlerStats.ballsBowled}: ${bowler} to ${striker}, misfeild.`);
//   };

//   const handleOverthrow = () => {
//     updateBatsmanStats(1, 'striker', false, false);
//     updateBowlerStats(1, false, false, false);
//     addCommentaryEvent(`${bowlerStats.overs}.${bowlerStats.ballsBowled}: ${bowler} to ${striker}, overthrow.`);
//   };

//   const handleWicketConfirm = () => {
//     // Implement logic for wicket confirm
//   };

//   return (
//     <div className="h-screen flex flex-col">
//       <TopBar />
//       <Dropdowns 
//         striker={striker} 
//         nonStriker={nonStriker} 
//         bowler={bowler} 
//         setStriker={setStriker} 
//         setNonStriker={setNonStriker} 
//         setBowler={setBowler} 
//       />
      
//       {/* Flex container for button grid and scorecard */}
//       <div className="flex justify-between space-x-4 mt-4">
//         {/* Button Grid */}
//         <div className="w-3/4">
//           <ButtonGrid 
//             onRunScored={handleRunScored} 
//             onWide={handleWide} 
//             onNoBall={handleNoBall} 
//             onWicket={handleWicket} 
//             onBowlerStop={handleBowlerStop} 
//             onAppeal={handleAppeal} 
//             onCatchDrop={handleCatchDrop} 
//             onLegBye={handleLegBye} 
//             onBye={handleBye} 
//             onThirdUmpire={handleThirdUmpire} 
//             onReview={handleReview} 
//             onMisfeild={handleMisfeild} 
//             onOverthrow={handleOverthrow} 
//             onWicketConfirm={handleWicketConfirm} 
//           />
//         </div>

//         {/* Scorecard */}
//         <div className="w-1/4">
//           <Scorecard batsmen={batsmen} bowler={bowlerStats} />
//         </div>
//       </div>

//       <Commentary events={events} />
//     </div>
//   );
// };

// export default App;


// src/App.tsx
// App.tsx
// import React, { useState } from 'react';
// import TopBar from './components/TopBar';
// import Dropdowns from './components/Dropdowns';
// import ButtonGrid from './components/ButtonGrid';
// import Scorecard from './components/Scorecard';
// import Commentary from './components/Commentary';

// const App: React.FC = () => {
//   const [striker, setStriker] = useState("Sterre Kalis");
//   const [nonStriker, setNonStriker] = useState("Suzie Bates");
//   const [bowler, setBowler] = useState("Mady Villiers");

//   // State for batsmen, bowler, and events
//   const [batsmen, setBatsmen] = useState([
//     { name: striker, runs: 12, balls: 4 },
//     { name: nonStriker, runs: 24, balls: 7 }
//   ]);

//   const [bowlerStats, setBowlerStats] = useState({ 
//     name: bowler, 
//     overs: 11, 
//     runs: 41, 
//     wickets: 0,
//     ballsBowled: 0 // Track balls bowled within an over
//   });

//   const [events, setEvents] = useState([
//     "2.1: Mady Villiers to Sterre Kalis, 2 runs.",
//     "1.5: Mady Villiers to Suzie Bates, 4 runs.",
//     "1.4: Mady Villiers to Suzie Bates, wide ball. 5 wides."
//   ]);

//   // Function to update batsman stats
//   const updateBatsmanStats = (
//     runs: number, 
//     currentBatsman: 'striker' | 'nonStriker',
//     isWide: boolean = false, // Flag to indicate if the run is from a wide
//     isNoBall: boolean = false, // Flag to indicate if the run is from a no ball
//   ) => {
//     setBatsmen(prevBatsmen => {
//       return prevBatsmen.map(batsman => {
//         if (batsman.name === (currentBatsman === 'striker' ? striker : nonStriker)) {
//           return {
//             ...batsman,
//             runs: batsman.runs + runs,
//             balls: (!isWide && !isNoBall && batsman.name === (currentBatsman === 'striker' ? striker : nonStriker)) ? batsman.balls + 1 : batsman.balls, // Only increment balls faced if not a wide or no ball
//           };
//         }
//         return batsman;
//       });
//     });
//   };

//   // Function to update bowler stats
//   const updateBowlerStats = (
//     runs: number, 
//     isWicket: boolean = false, 
//     isWide: boolean = false,
//     isNoBall: boolean = false,
//   ) => {
//     setBowlerStats(prevBowler => {
//       const updatedOvers = 
//         prevBowler.ballsBowled === 5 && !isWide && !isNoBall // Check for legal delivery for over completion
//           ? Math.floor(prevBowler.overs) + 1 
//           : prevBowler.overs;

//       const updatedBallsBowled = 
//         (isWide || isNoBall) && prevBowler.ballsBowled < 6
//           ? prevBowler.ballsBowled 
//           : prevBowler.ballsBowled === 5 && !isWide && !isNoBall // Check for legal delivery for over completion
//           ? 0 
//           : prevBowler.ballsBowled + 1;

//       return {
//         ...prevBowler,
//         overs: updatedOvers,
//         runs: prevBowler.runs + runs,
//         wickets: isWicket ? prevBowler.wickets + 1 : prevBowler.wickets,
//         ballsBowled: updatedBallsBowled, 
//       };
//     });
//   };

//   // Function to add a commentary event
//   const addCommentaryEvent = (eventText: string) => {
//     setEvents(prevEvents => [eventText, ...prevEvents]);
//   };

//   // Function to switch strike
//   const switchStrike = () => {
//     setStriker(nonStriker);
//     setNonStriker(striker);
//   };

//   // Function to change bowler
//   const changeBowler = () => {
//     // Logic to change bowler after every 6 balls
//     // For now, just set the bowler to a new value
//     setBowler("New Bowler");
//   };

//   // Event handler functions for ButtonGrid
//   const handleRunScored = (runs: number) => {
//     updateBatsmanStats(runs, 'striker');
//     updateBowlerStats(runs);
//     addCommentaryEvent(`${ bowlerStats.overs}.${bowlerStats.ballsBowled}: ${bowler} to ${striker}, ${runs} runs.`);
//     if (bowlerStats.ballsBowled === 5) {
//       changeBowler();
//     }
//   };

//   const handleWide = () => {
//     updateBowlerStats(1, false, true);
//     addCommentaryEvent(`${bowlerStats.overs}.${bowlerStats.ballsBowled}: ${bowler} to ${striker}, wide ball.`);
//   };

//   const handleNoBall = () => {
//     updateBatsmanStats(1, 'striker', false, true);
//     updateBowlerStats(1, false, false, true);
//     addCommentaryEvent(`${bowlerStats.overs}.${bowlerStats.ballsBowled}: ${bowler} to ${striker}, no ball.`);
//   };

//   const handleWicket = () => {
//     updateBatsmanStats(0, 'striker', false, false);
//     updateBowlerStats(0, true, false, false);
//     addCommentaryEvent(`${bowlerStats.overs}.${bowlerStats.ballsBowled}: ${bowler} to ${striker}, wicket.`);
//     switchStrike(); // Switch strike after a wicket
//   };

//   // Other event handlers...

//   return (
//     <div className="h-screen flex flex-col">
//       <TopBar />
//       <Dropdowns 
//         striker={striker} 
//         nonStriker={nonStriker} 
//         bowler={bowler} 
//         setStriker={setStriker} 
//         setNonStriker={setNonStriker} 
//         setBowler={setBowler} 
//       />
      
//       {/* Flex container for button grid and scorecard */}
//       <div className="flex justify-between space-x-4 mt-4">
//         {/* Button Grid */}
//         <div className="w-3/4">
//           <ButtonGrid 
//             onRunScored={handleRunScored} 
//             onWide={handleWide} 
//             onNoBall={handleNoBall} 
//             onWicket={handleWicket} 
//             onBowlerStop={() => console.log('Bowler stopped')} 
//             onAppeal={() => console.log('Appeal')} 
//             onCatchDrop={() => console.log('Catch drop')} 
//             onLegBye={() => console.log('Leg bye')} 
//             onBye={() => console.log('Bye')} 
//             onThirdUmpire={() => console.log('Third umpire')} 
//             onReview={() => console.log('Review')} 
//             onMisfeild={() => console.log('Misfield')} 
//             onOverthrow={() => console.log('Overthrow')} 
//             onWicketConfirm={() => console.log('Wicket confirmed')} 
//           />
//         </div>

//         {/* Scorecard */}
//         <div className="w-1/4">
//           <Scorecard batsmen={batsmen} bowler={bowlerStats} />
//         </div>
//       </div>

//       <Commentary events={events} />
//     </div>
//   );
// };

// export default App;



// import React, { useState } from 'react';
// import TopBar from './components/TopBar';
// import Dropdowns from './components/Dropdowns';
// import ButtonGrid from './components/ButtonGrid';
// import Scorecard from './components/Scorecard';
// import Commentary from './components/Commentary';

// const App: React.FC = () => {
//   const [striker, setStriker] = useState("");
//   const [nonStriker, setNonStriker] = useState("");
//   const [bowler, setBowler] = useState("");

//   // State for batsmen, bowler, and events
//   const [batsmen, setBatsmen] = useState([
//     { name: "", runs: 0, balls: 0 },
//     { name: "", runs: 0, balls: 0 },
//   ]);

//   const [bowlerStats, setBowlerStats] = useState({
//     name: "",
//     overs: 0,
//     runs: 0,
//     wickets: 0,
//     ballsBowled: 0, // Track balls bowled within an over
//   });

//   const [events, setEvents] = useState<string[]>([]);

//   // Function to update batsman stats
//   const updateBatsmanStats = (
//     runs: number,
//     currentBatsman: 'striker' | 'nonStriker',
//     isWide: boolean = false,
//     isNoBall: boolean = false
//   ) => {
//     setBatsmen(prevBatsmen => {
//       return prevBatsmen.map(batsman => {
//         if (
//           batsman.name === (currentBatsman === 'striker' ? striker : nonStriker)
//         ) {
//           return {
//             ...batsman,
//             runs: batsman.runs + runs,
//             balls: !isWide && !isNoBall && batsman.name === (currentBatsman === 'striker' ? striker : nonStriker) 
//               ? batsman.balls + 1 
//               : batsman.balls,
//           };
//         }
//         return batsman;
//       });
//     });
//   };

//   // Function to update bowler stats
//   const updateBowlerStats = (
//     runs: number,
//     isWicket: boolean = false,
//     isWide: boolean = false,
//     isNoBall: boolean = false
//   ) => {
//     setBowlerStats(prevBowler => {
//       const updatedOvers =
//         prevBowler.ballsBowled === 5 && !isWide && !isNoBall
//           ? Math.floor(prevBowler.overs) + 1
//           : prevBowler.overs;

//       const updatedBallsBowled =
//         (isWide || isNoBall) && prevBowler.ballsBowled < 6
//           ? prevBowler.ballsBowled
//           : prevBowler.ballsBowled === 5 && !isWide && !isNoBall
//             ? 0
//             : prevBowler.ballsBowled + 1;

//       return {
//         ...prevBowler,
//         overs: updatedOvers,
//         runs: prevBowler.runs + runs,
//         wickets: isWicket ? prevBowler.wickets + 1 : prevBowler.wickets,
//         ballsBowled: updatedBallsBowled,
//       };
//     });
//   };

//   // Function to add a commentary event
//   const addCommentaryEvent = (eventText: string) => {
//     setEvents(prevEvents => [eventText, ...prevEvents]);
//   };

//   // Function to switch strike
//   const switchStrike = () => {
//     setStriker(nonStriker);
//     setNonStriker(striker);
//   };

//   // Function to initialize/reset batsman when dropdown changes
//   const initializeBatsman = () => {
//     setBatsmen([
//       { name: striker, runs: 0, balls: 0 },
//       { name: nonStriker, runs: 0, balls: 0 },
//     ]);
//   };

//   // Function to initialize/reset bowler when dropdown changes
//   const initializeBowler = () => {
//     setBowlerStats({
//       name: bowler,
//       overs: 0,
//       runs: 0,
//       wickets: 0,
//       ballsBowled: 0,
//     });
//   };

  

//   // Event handler functions for ButtonGrid
//   const handleRunScored = (runs: number) => {
//     updateBatsmanStats(runs, 'striker');
//     updateBowlerStats(runs, false, false, false);
//     addCommentaryEvent(
//       `${bowlerStats.overs}.${bowlerStats .ballsBowled}: ${bowler} to ${striker}, ${runs} runs.`
//     );
//     if (bowlerStats.ballsBowled === 6) {
//       changeBowler();
//     }
//   };

//   const handleWide = () => {
//     updateBowlerStats(1, false, true, false);
//     addCommentaryEvent(
//       `${bowlerStats.overs}.${bowlerStats.ballsBowled}: ${bowler} to ${striker}, wide ball.`
//     );
//   };

//   const handleLegBye = () => {
//     updateBatsmanStats(1, 'striker', true, false);
//     updateBowlerStats(1, false, true, false);
//     addCommentaryEvent(
//       `${bowlerStats.overs}.${bowlerStats.ballsBowled}: ${bowler} to ${striker}, leg bye.`
//     );
//   };

//   const handleNoBall = () => {
//     updateBatsmanStats(1, 'striker', false, true);
//     updateBowlerStats(1, false, false, true);
//     addCommentaryEvent(
//       `${bowlerStats.overs}.${bowlerStats.ballsBowled}: ${bowler} to ${striker}, no ball.`
//     );
//   };

//   const handleWicket = () => {
//     updateBatsmanStats(0, 'striker', false, false);
//     updateBowlerStats(0, true, false, false);
//     addCommentaryEvent(
//       `${bowlerStats.overs}.${bowlerStats.ballsBowled}: ${bowler} to ${striker}, wicket.`
//     );
//     switchStrike(); // Switch strike after a wicket
//   };

//   // Other event handlers...

//   return (
//     <div className="h-screen flex flex-col">
//       <TopBar />
//       <Dropdowns
//         striker={striker}
//         nonStriker={nonStriker}
//         bowler={bowler}
//         setStriker={setStriker}
//         setNonStriker={setNonStriker}
//         setBowler={setBowler}
//         initializeBatsman={initializeBatsman}
//       initializeBowler={initializeBowler}
//       />

//       {/* Flex container for button grid and scorecard */}
//       <div className="flex justify-between space-x-4 mt-4">
//         {/* Button Grid */}
//         <div className="w-3/4">
//           <ButtonGrid
//             onRunScored={handleRunScored}
//             onWide={handleWide}
//             onNoBall={handleNoBall}
//             onWicket={handleWicket}
//             onBowlerStop={() => console.log('Bowler stopped')}
//             onAppeal={() => console.log('Appeal')}
//             onCatchDrop={() => console.log('Catch drop')}
//             onLegBye={() => console.log('Leg bye')}
//             onBye={() => console.log('Bye')}
//             onThirdUmpire={() => console.log('Third umpire')}
//             onReview={() => console.log('Review')}
//             onMisfeild={() => console.log('Misfield')}
//             onOverthrow={() => console.log('Overthrow')}
//             onWicketConfirm={() => console.log('Wicket confirmed')}
//           />
//         </div>

//         {/* Scorecard */}
//         <div className="w-1/4">
//           <Scorecard
//             batsmen={batsmen}
//             bowler={bowlerStats}
//             striker={striker}
//             nonStriker={nonStriker}
//           />
//         </div>
//       </div>

//       <Commentary events={events} />
//     </div>
//   );
// };

// export default App;



import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Dropdowns from './components/Dropdowns';
import ButtonGrid from './components/ButtonGrid';
import Scorecard from './components/Scorecard';
import Commentary from './components/Commentary';

const App: React.FC = () => {
  const [striker, setStriker] = useState("");
  const [nonStriker, setNonStriker] = useState("");
  const [bowler, setBowler] = useState("");

  // State for batsmen, bowler, and events
  const [batsmen, setBatsmen] = useState([
    { name: "", runs: 0, balls: 0, fours: 0, sixes: 0 }, // Added fours and sixes
    { name: "", runs: 0, balls: 0, fours: 0, sixes: 0 },
  ]);

  const [bowlerStats, setBowlerStats] = useState({
    name: "",
    overs: 0,
    runs: 0,
    wickets: 0,
    ballsBowled: 0, 
  });

  const [events, setEvents] = useState<string[]>([]);
  const [currentOver, setCurrentOver] = useState<string[]>([]);

  const startNewOver = () => {
    if (bowlerStats.ballsBowled > 0) {
      setCurrentOver([]);
    }
  };

  const recordOverEvent = (event: string) => {
    setCurrentOver((prevOver) => [...prevOver, event]);
  };

  const changeBowler = () => {
    const temp = striker;
    setStriker(nonStriker);
    setNonStriker(temp);
    startNewOver();
  }

  // Function to update batsman stats
  const updateBatsmanStats = (
    runs: number,
    currentBatsman: 'striker' | 'nonStriker',
    isWide: boolean = false,
    isNoBall: boolean = false
  ) => {
    setBatsmen(prevBatsmen => {
      return prevBatsmen.map(batsman => {
        if (
          batsman.name === (currentBatsman === 'striker' ? striker : nonStriker)
        ) {
          return {
            ...batsman,
            runs: batsman.runs + runs,
            balls: !isWide && !isNoBall && batsman.name === (currentBatsman === 'striker' ? striker : nonStriker) 
              ? batsman.balls + 1 
              : batsman.balls,
            fours: runs === 4 ? batsman.fours + 1 : batsman.fours, // Update fours
            sixes: runs === 6 ? batsman.sixes + 1 : batsman.sixes, // Update sixes
          };
        }
        return batsman;
      });
    });
  };

  // Function to update bowler stats
  const updateBowlerStats = (
    runs: number,
    isWicket: boolean = false,
    isWide: boolean = false,
    isNoBall: boolean = false
  ) => {
    setBowlerStats(prevBowler => {
      const updatedOvers =
        prevBowler.ballsBowled === 5 && !isWide && !isNoBall
          ? Math.floor(prevBowler.overs) + 1
          : prevBowler.overs;

      const updatedBallsBowled =
        (isWide || isNoBall) && prevBowler.ballsBowled < 6
          ? prevBowler.ballsBowled
          : prevBowler.ballsBowled === 5 && !isWide && !isNoBall
            ? 0
            : prevBowler.ballsBowled + 1;

      return {
        ...prevBowler,
        overs: updatedOvers,
        runs: prevBowler.runs + runs,
        wickets: isWicket ? prevBowler.wickets + 1 : prevBowler.wickets,
        ballsBowled: updatedBallsBowled,
      };
    });
  };

  // Function to add a commentary event
  const addCommentaryEvent = (eventText: string) => {
    setEvents(prevEvents => [eventText, ...prevEvents]);
  };

  // Function to switch strike
  const switchStrike = () => {
    setStriker(nonStriker);
    setNonStriker(striker);
  };

  // Function to initialize /reset batsman when dropdown changes
  const initializeBatsman = () => {
    setBatsmen([
      { name: striker, runs: 0, balls: 0, fours: 0, sixes: 0 },
      { name: nonStriker, runs: 0, balls: 0, fours: 0, sixes: 0 },
    ]);
  };

  // Function to initialize/reset bowler when dropdown changes
  const initializeBowler = () => {
    setBowlerStats({
      name: bowler,
      overs: 0,
      runs: 0,
      wickets: 0,
      ballsBowled: 0,
    });
  };

  // Event handler functions for ButtonGrid
  const handleRunScored = (runs: number) => {
    updateBatsmanStats(runs, 'striker');
    updateBowlerStats(runs, false, false, false);
    addCommentaryEvent(
      `${bowlerStats.overs}.${bowlerStats.ballsBowled}: ${bowler} to ${striker}, ${runs} runs.`
    );
    recordOverEvent(`${runs} runs`);
    if (bowlerStats.ballsBowled === 6) {
      changeBowler();
    }
  };

  const handleWide = () => {
    updateBowlerStats(1, false, true, false);
    addCommentaryEvent(
      `${bowlerStats.overs}.${bowlerStats.ballsBowled}: ${bowler} to ${striker}, wide ball.`
    );
    recordOverEvent('Wide');
  };

  const handleLegBye = () => {
    updateBatsmanStats(1, 'striker', true, false);
    updateBowlerStats(1, false, true, false);
    addCommentaryEvent(
      `${bowlerStats.overs}.${bowlerStats.ballsBowled}: ${bowler} to ${striker}, leg bye.`
    );
    recordOverEvent('Leg bye');
  };

  const handleNoBall = () => {
    updateBatsmanStats(1, 'striker', false, true);
    updateBowlerStats(1, false, false, true);
    addCommentaryEvent(
      `${bowlerStats.overs}.${bowlerStats.ballsBowled}: ${bowler} to ${striker}, no ball.`
    );
    recordOverEvent('No ball');
  };

  const handleWicket = () => {
    updateBatsmanStats(0, 'striker', false, false);
    updateBowlerStats(0, true, false, false);
    addCommentaryEvent(
      `${bowlerStats.overs}.${bowlerStats.ballsBowled}: ${bowler} to ${striker}, wicket.`
    );
    recordOverEvent('Wicket');
    switchStrike(); 
  };

  // Other event handlers...

  return (
    <div className="h-screen flex flex-col">
      <TopBar />
      <Dropdowns
        striker={striker}
        nonStriker={nonStriker}
        bowler={bowler}
        setStriker={setStriker}
        setNonStriker={setNonStriker}
        setBowler={setBowler}
        initializeBatsman={initializeBatsman}
        initializeBowler={initializeBowler}
      />

      {/* Flex container for button grid and scorecard */}
      <div className="flex justify-between space-x-4 mt-4">
        {/* Button Grid */}
        <div className="w-3/4">
          <ButtonGrid
            onRunScored={handleRunScored}
            onWide={handleWide}
            onNoBall={handleNoBall}
            onWicket={handleWicket}
            onBowlerStop={() => console.log('Bowler stopped')}
            onAppeal={() => console.log('Appeal')}
            onCatchDrop={() => console.log('Catch drop')}
            onLegBye={handleLegBye}
            onBye={handleLegBye}
            onThirdUmpire={() => console.log('Third umpire')}
            onReview={() => console.log('Review')}
            onMisfeild={() => console.log('Misfield')}
            onOverthrow={() => console.log('Overthrow')}
            onWicketConfirm={() => console.log('Wicket confirmed')}
          />
        </div>

        {/* Scorecard */}
        <div className="w-1/4">
          <Scorecard
            batsmen={batsmen}
            bowler={bowlerStats}
            striker={striker}
            nonStriker={nonStriker}
          />
        </div>
      </div>

      <Commentary events={events} />
    </div>
  );
};

export default App;