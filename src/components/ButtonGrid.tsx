// // src/components/ButtonGrid.tsx
// import React from 'react';

// const ButtonGrid: React.FC = () => {
//   return (
//     <div className="grid grid-cols-3 gap-4 p-4">
//       <button className="bg-green-500 text-white px-4 py-2 rounded">Ball Start</button>
//       <button className="bg-blue-500 text-white px-4 py-2 rounded">0</button>
//       <button className="bg-yellow-500 text-white px-4 py-2 rounded">1</button>
//       <button className="bg-purple-500 text-white px-4 py-2 rounded">2</button>
//       <button className="bg-purple-200 text-white px-4 py-2 rounded">3</button>
//       <button className="bg-orange-700 text-white px-4 py-2 rounded">4</button>
//       <button className="bg-orange-900 text-white px-4 py-2 rounded">6</button>
//       <button className="bg-red-500 text-white px-4 py-2 rounded">Wicket</button>
//       <button className="bg-yellow-500 text-white px-4 py-2 rounded">Wide</button>
//       <button className="bg-teal-500 text-white px-4 py-2 rounded">No Ball</button>
//       <button className="bg-red-900 text-white px-4 py-2 rounded">Bowler Stop</button>
//       <button className="bg-teal-200 text-white px-4 py-2 rounded">Appeal</button>
//       <button className="bg-purple-500 text-white px-4 py-2 rounded">Catch Drop</button>
//       <button className="bg-blue-300 text-white px-4 py-2 rounded">Leg Bye</button>
//       <button className="bg-green-700 text-white px-4 py-2 rounded">Bye</button>
//       <button className="bg-yellow-600 text-white px-4 py-2 rounded">Third Umpire</button>
//       <button className="bg-red-500 text-white px-4 py-2 rounded">Review</button>
//       <button className="bg-blue-900 text-white px-4 py-2 rounded">Misfeild</button>
//       <button className="bg-purple-900 text-white px-4 py-2 rounded">Overthrow</button>
//       <button className="bg-red-500 text-white px-4 py-2 rounded">Wicket Confirm</button>

      
//       {/* Add more buttons as required */}
//     </div>
//   );
// };

// export default ButtonGrid;

// src/components/ButtonGrid.tsx

// src/components/ButtonGrid.tsx
import React from 'react';

interface ButtonGridProps {
  onRunScored: (runs: number) => void;
  onWide: () => void;
  onNoBall: () => void;
  onWicket: () => void;
  onBowlerStop: () => void;
  onAppeal: () => void;
  onCatchDrop: () => void;
  onLegBye: () => void;
  onBye: () => void;
  onThirdUmpire: () => void;
  onReview: () => void;
  onMisfeild: () => void;
  onOverthrow: () => void;
  onWicketConfirm: () => void;
}

const ButtonGrid: React.FC<ButtonGridProps> = ({
  onRunScored,
  onWide,
  onNoBall,
  onWicket,
  onBowlerStop,
  onAppeal,
  onCatchDrop,
  onLegBye,
  onBye,
  onThirdUmpire,
  onReview,
  onMisfeild,
  onOverthrow,
  onWicketConfirm,
}) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => onBowlerStop()}
      >
        Ball Start
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => onRunScored(0)}
      >
        0
      </button>
      <button
        className="bg-yellow-500 text-white px-4 py-2 rounded"
        onClick={() => onRunScored(1)}
      >
        1
      </button>
      <button
        className="bg-purple-500 text-white px-4 py-2 rounded"
        onClick={() => onRunScored(2)}
      >
        2
      </button>
      <button
        className="bg-purple-200 text-white px-4 py-2 rounded"
        onClick={() => onRunScored(3)}
      >
        3
      </button>
      <button
        className="bg-orange-700 text-white px-4 py-2 rounded"
        onClick={() => onRunScored(4)}
      >
        4
      </button>
      <button
        className="bg-orange-900 text-white px-4 py-2 rounded"
        onClick={() => onRunScored(6)}
      >
        6
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => onWicket()}
      >
        Wicket
      </button>
      <button
        className="bg-yellow-500 text-white px-4 py-2 rounded"
        onClick={() => onWide()}
      >
        Wide
      </button>
      <button
        className="bg-teal-500 text-white px-4 py-2 rounded"
        onClick={() => onNoBall()}
      >
        No Ball
      </button>
      <button
        className="bg-red-900 text-white px-4 py-2 rounded"
        onClick={() => onBowlerStop()}
      >
        Bowler Stop
      </button>
      <button
        className="bg-teal-200 text-white px-4 py-2 rounded"
        onClick={() => onAppeal()}
      >
        Appeal
      </button>
      <button
        className="bg-purple-500 text-white px-4 py-2 rounded"
        onClick={() => onCatchDrop()}
      >
        Catch Drop
      </button>
      <button
        className="bg-blue-300 text-white px-4 py-2 rounded"
        onClick={() => onLegBye()}
      >
        Leg Bye
      </button>
      <button
        className="bg-green-700 text-white px-4 py-2 rounded"
        onClick={() => onBye()}
      >
        Bye
      </button>
      <button
        className="bg-yellow-600 text-white px-4 py-2 rounded"
        onClick={() => onThirdUmpire()}
      >
        Third Umpire
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => onReview()}
      >
        Review
      </button>
      <button
        className="bg-blue-900 text-white px-4 py-2 rounded"
        onClick={() => onMisfeild()}
      >
        Misfeild
      </button>
      <button
        className="bg-purple-900 text-white px-4 py-2 rounded"
        onClick={() => onOverthrow()}
      >
        Overthrow
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => onWicketConfirm()}
      >
        Wicket Confirm
      </button>

      {/* Add more buttons as required */}
    </div>
  );
};

export default ButtonGrid;