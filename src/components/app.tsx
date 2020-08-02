import React from 'react';

type AppProps = {
  language: string;
  stateTest: string;
  action(): void;
};

function App({ language, stateTest, action }: AppProps) {
  console.log('###', action);
  return (
    <div style={{ margin: '5rem' }}>
      <h1 style={{ textAlign: 'center' }}>Welcome to start-kit of react application</h1>
      <p>Language: {language}</p>
      <p>StateTest: {stateTest}</p>
      <button onClick={action}>click</button>
    </div>
  );
}

export default App;
