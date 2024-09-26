
// import React from 'react';

// const TopBar: React.FC = () => {
//   return (
//     <div className="flex justify-between bg-gray-100 p-4 shadow-md">
//       <button className="px-4 py-2 bg-blue-500 text-white rounded">Settings</button>
//       <button className="px-4 py-2 bg-blue-500 text-white rounded">Match Commentary</button>
//     </div>
//   );
// };

// export default TopBar;


import React from 'react';

const TopBar: React.FC = () => {
  const handleCommentaryClick = () => {
    const commentarySection = document.querySelector('.commentary-section');
    if (commentarySection) {
      commentarySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-between bg-gray-100 p-4 shadow-md">
      <button className="px-4 py-2 bg-blue-500 text-white rounded">Settings</button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleCommentaryClick}
      >
        Match Commentary
      </button>
    </div>
  );
};

export default TopBar;