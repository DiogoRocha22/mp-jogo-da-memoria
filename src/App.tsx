import { Routes, Route } from 'react-router-dom';
import { Start } from './Views/Start';
import { Game } from './Views/Game';

function App() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full min-h-screen">
      <Routes>
        <Route
          path="/"
          element= {<Start/>}
        />
        <Route
          path='/game'
          element= {<Game/>}
        />
      </Routes>
    </div>
  );
}

export default App;
