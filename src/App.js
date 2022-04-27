import './App.css';
import React from 'react'
// import HookCounter from './useState/HookCounter';
import ComponentD from './useState/ComponentD';
import ComponentE from './useState/ComponentE';

export const userContext = React.createContext();
export const channelContext = React.createContext();

function App() {

  return (
    <userContext.Provider value={'Harsh'} >
      <channelContext.Provider value={'CodeEvo'}>
        <div className="App">
          {/* <h1>State Hook</h1> */}
          {/* <ComponentD /> */}
          <ComponentE />
        </div>
      </channelContext.Provider>
    </userContext.Provider>
  );
}

export default App;

//below Component was use in useState Hook
{/* <HookCounter /> */}