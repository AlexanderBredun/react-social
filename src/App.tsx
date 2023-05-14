

import './styles/index.scss'
import { Link, Route, Routes } from 'react-router-dom';
import LazyAbout from './pages/about/lazy';
import LazyHome from './pages/home/lazy';
import { Suspense } from 'react';


import useTheme from './hooks/useTheme';
import { classNames } from './helpers/classNames/classNames';

function App() {

  const {setTheme} = useTheme()

 

  return (
    <div className={classNames('app')}>
      <button onClick={setTheme}>
        Toggle
      </button>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>
              Home
            </Link>
          </li>
          <li>
            <Link to={'/about'}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<LazyAbout/>} />
          <Route path={'/'} element={<LazyHome/>} />
        </Routes>
      </Suspense>
    
    </div>
   
  )
}

export default App