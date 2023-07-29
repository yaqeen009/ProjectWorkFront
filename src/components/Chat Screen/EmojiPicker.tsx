import React, { useState } from 'react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { RiEmojiStickerFill } from 'react-icons/ri';

const EmojiPicker: React.FC = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [text, setText] = useState('');

  return (
    <div className="EmojiPicker" onClick={() => setShowEmoji(!showEmoji)}>
      <RiEmojiStickerFill className="text-secondary-400 w-[30.50px] h-[30px] cursor-pointer hover:text-slate-300" />
      {showEmoji && (
        <div className="absolute top-[45%] left-8">
          <Picker data={data} emojiSize={20} emojiButtonSize={30} onEmojiSelect={console.log} maxFrequentRows={2} perLine={8} />
        </div>
      )}
    </div>
  );
};

export default EmojiPicker;
