import { Routes, Route  } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Err404 from './errors/404';
import Home from './pages/home';

export const Views = () =>{
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route path="home" element={<Home />}/>
            </Route>

            <Route path="*" element={<Err404 />}/>
        </Routes>
    )
}

export default Views;