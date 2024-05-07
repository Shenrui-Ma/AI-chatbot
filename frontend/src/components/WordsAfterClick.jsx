// WordsAfterClick.jsx
import React from 'react';

function WordsAfterClick({ auPosition }) {
  if (!auPosition.visible) {
    return null;
  }

  return (
    <div style={{
      position: 'absolute',
      top: `${auPosition.top}px`,
      left: `${auPosition.left}px`,
      fontSize: '24px', // 可以根据需要调整样式
      color: 'red' // 可以根据需要调整样式
    }}>
      Au~
    </div>
  );
}

export default WordsAfterClick;