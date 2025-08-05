import React from 'react';

const RemoteButton = React.lazy(() => import('remote/Button'));// button is exposed in remote's module federation config

function App() {
  return (
    <div>
      <h1>Micro Frontend Shell</h1>
      <RemoteButton />
    </div>
  );
}

export default App;