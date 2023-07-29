// TypingIndicator.tsx
import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className='flex flex row items-end'>
    <p className='italic mb-2'>Typing</p>
    <div className="flex flex row: baseline: baseline space-x-2 mb-2">
      <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
    </div>
    </div>
  );
};

export default TypingIndicator;
