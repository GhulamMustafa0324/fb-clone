import React from 'react';
import './App.css';
import Header from './comps/Header';
import SideBar from './comps/SideBar';
import Feed from './comps/Feed'
import Widgets from './comps/Widgets';
import Login from './comps/Login';
import {useStateValue} from './StateProvider'

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      )
        : (<> <Header />
          <div className='app__body' >
            <SideBar />
            <Feed />
            <Widgets />
          </div>

        </>
        )
      }
    </div>
  );
}

export default App;
