import { Routes, Route } from 'react-router-dom';

import { Main } from './components';

function App() {
  return (
    <div className="App wrapper">
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
