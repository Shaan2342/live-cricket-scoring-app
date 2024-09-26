// src/components/Commentary.tsx
import React from 'react';

interface CommentaryProps {
  events: string[];
}

const Commentary: React.FC<CommentaryProps> = ({ events }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold">Ball-by-Ball Commentary</h3>
      <ul className="space-y-2">
        {events.map((event, index) => (
          <li key={index} className="p-2 bg-gray-100 rounded-lg">{event}</li>
        ))}
      </ul>
    </div>
  );
};

export default Commentary;
