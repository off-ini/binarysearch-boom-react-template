import { Outlet } from 'react-router-dom';
import SideNav from '../components/main-layout/SideNav';
import HeaderNav from '../components/main-layout/HeaderNav';

const MainLayout = () =>{
    return(
        <div className="flex">
            
            <SideNav />

            <div className='flex flex-col w-full h-screen'>
                <HeaderNav />

                <div className="h-full w-full">
                    <Outlet />
                </div>
            </div>
            
        </div>
    )
}

export default MainLayout;