

import './styles/index.scss'
import { Link, Route, Routes } from 'react-router-dom';

import { Suspense } from 'react';
import { useTheme } from '@/shared/lib/providers/theme';
import { classNames } from '@/shared/lib/helpers';
import { AboutPage } from '@/pages/about';
import { HomePage } from '@/pages/home';

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
          <Route path={'/about'} element={<AboutPage/>} />
          <Route path={'/'} element={<HomePage/>} />
        </Routes>
      </Suspense>
    
    </div>
   
  )
}

export default App