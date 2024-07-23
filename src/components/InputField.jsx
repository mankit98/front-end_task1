import React from 'react';

const InputField = ({
  inputValue,
  setInputValue,
  setSuggestionsVisible,
  suggestionsVisible,
  suggestions,
  handleSuggestionClick,
}) => {
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onFocus={() => setSuggestionsVisible(true)}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Step"
      />
      {suggestionsVisible && (
        <div className="dropdown">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="suggestion"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputField;
