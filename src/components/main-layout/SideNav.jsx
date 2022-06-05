import { NavLink  } from 'react-router-dom';
import { 
    HomeIcon, 
    CogIcon, 
    ChevronDoubleRightIcon, 
    DocumentTextIcon, 
    ScaleIcon, 
    PuzzleIcon 
} from '@heroicons/react/outline';
import logo from '../../assets/images/logo.svg';

function SideNav(){
    return(
        <div className="flex flex-col  justify-between h-screen border-r">
            <div className='flex flex-col space-y-14 overflow-y-auto'>
                <div className='flex justify-center py-2'>
                    <img src={logo} alt="logo" className='w-8 h-8'/>
                </div>
                <div className="flex flex-col justify-between mx-3">
                    <aside>
                        <ul>
                            <li>
                                <NavLink to="/home" className="flex items-center px-2 py-1 text-blue-400 bg-blue-100 rounded-md hover:bg-blue-300" >
                                    <HomeIcon className="w-8 h-8 text-blue-600" />
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="#" className="flex items-center px-2 py-1 mt-3 text-gray-600 rounded-md hover:bg-blue-200">
                                    <DocumentTextIcon className="w-6 h-6 text-gray-600" />
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="#" className="flex items-center px-2 py-1 mt-3 text-gray-600 rounded-md hover:bg-blue-200">
                                    <ScaleIcon className="w-6 h-6 text-gray-600" />
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="#" className="flex items-center px-2 py-1 mt-3 text-gray-600 rounded-md hover:bg-blue-200">
                                    <PuzzleIcon className="w-6 h-6 text-gray-600" />
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="#" className="flex items-center px-2 py-1 mt-3 text-gray-600 rounded-md hover:bg-blue-200">
                                    <CogIcon className="w-6 h-6 text-gray-600" />
                                </NavLink>
                            </li>
                        </ul>
                    </aside> 
                </div>
            </div>
            

            <div className="flex flex-row justify-center mb-4">
                <aside>
                    <ul>
                        <li>
                            <NavLink to="#" className="flex items-center px-4 py-2 text-gray-600 rounded-md hover:bg-blue-200">
                                <ChevronDoubleRightIcon className="w-4 h-4 text-gray-600" />
                            </NavLink>
                        </li>
                    </ul>

                </aside>
            </div>
                
        </div>
    )
}

export default SideNav;