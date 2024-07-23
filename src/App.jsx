import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField'
import StepEditor from './components/StepEditor';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);
  const [selectedStep, setSelectedStep] = useState('');
  const [firstText, setFirstText] = useState('Text');
  const [secondText, setSecondText] = useState('Text');
  const [globalDataVisible, setGlobalDataVisible] = useState(false);

  const suggestions = [
    'Click on "Text"',
    'Click on "Text" after "Text"',
    'Click on "Text" for "Text"',
  ];

  const globalData = ['test', 'test67'];

  const handleSuggestionClick = (suggestion) => {
    setSelectedStep(suggestion);
    setSuggestionsVisible(false);
  };

  return (
    <div className="App">
      <InputField
        inputValue={inputValue}
        setInputValue={setInputValue}
        setSuggestionsVisible={setSuggestionsVisible}
        suggestionsVisible={suggestionsVisible}
        suggestions={suggestions}
        handleSuggestionClick={handleSuggestionClick}
      />

      {selectedStep && (
        <StepEditor
          selectedStep={selectedStep}
          firstText={firstText}
          setFirstText={setFirstText}
          secondText={secondText}
          setSecondText={setSecondText}
          globalDataVisible={globalDataVisible}
          setGlobalDataVisible={setGlobalDataVisible}
          globalData={globalData}
        />
      )}
    </div>
  );
};

export default App;
