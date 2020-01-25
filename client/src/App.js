import React from 'react';


function App() {
  return (
    <div className="App">
      <button onClick={() => window.location = 'http://localhost:8888/login'}>
        Sign in
      </button>
    </div>
  );
}

export default App;
