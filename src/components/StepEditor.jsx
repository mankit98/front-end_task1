import React, { useState } from 'react';

const StepEditor = ({
  selectedStep,
  firstText,
  setFirstText,
  secondText,
  setSecondText,
  globalDataVisible,
  setGlobalDataVisible,
  globalData,
}) => {
  const [isEditingFirst, setIsEditingFirst] = useState(false);
  const [isEditingSecond, setIsEditingSecond] = useState(false);

  const handleDoubleClickFirstText = () => {
    setIsEditingFirst(true);
  };

  const handleDoubleClickSecondText = () => {
    setGlobalDataVisible(true);
    setIsEditingSecond(true);
  };

  const handleGlobalDataClick = (data) => {
    setSecondText(data);
    setGlobalDataVisible(false);
  };

  return (
    <div className="step-editor">
      {selectedStep.split(' ').map((word, index) => {
        if (word === '"Text"') {
          if (index === 1) {
            return isEditingFirst ? (
              <input
                key={index}
                value={firstText}
                onChange={(e) => setFirstText(e.target.value)}
                onBlur={() => setIsEditingFirst(false)}
              />
            ) : (
              <span key={index} className="editable" onDoubleClick={handleDoubleClickFirstText}>
                {firstText}
              </span>
            );
          } else {
            return isEditingSecond ? (
              <input
                key={index}
                value={secondText}
                onChange={(e) => setSecondText(e.target.value)}
                onBlur={() => setIsEditingSecond(false)}
              />
            ) : (
              <span key={index} className="editable" onDoubleClick={handleDoubleClickSecondText}>
                {secondText}
              </span>
            );
          }
        } else {
          return <span key={index}>{word} </span>;
        }
      })}
      {globalDataVisible && (
        <div className="dropdown">
          {globalData.map((data, index) => (
            <div key={index} className="suggestion" onClick={() => handleGlobalDataClick(data)}>
              {data}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StepEditor;
