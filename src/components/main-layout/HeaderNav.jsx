import { NavLink } from 'react-router-dom';
import { 
    ArrowLeftIcon,
    DotsVerticalIcon
} from '@heroicons/react/outline';

function HeaderNav(){
    return(
        <nav className="flex justify-between py-2 border-b">
            <div className='flex flex-row space-x-2'>
                <div className="flex items-center ml-3">
                    <NavLink to="#" className="px-2 py-1 rounded-md hover:bg-blue-200">
                        <ArrowLeftIcon className='h-4 w-4 font-bold text-gray-500' />
                    </NavLink>
                </div>

                <div className='flex items-center'>
                    <h1 className='text-xl font-bold'>Array of hope</h1>
                </div>
                
                <div className='flex items-center'>
                    <span class="bg-emerald-200 text-emerald-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md">EASY</span>
                    <span class="bg-orange-200 text-orange-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md">MEDIUM</span>
                    <span class="text-xs font-semibold text-gray-500 px-2.5 py-0.5">5 players</span>
                </div>
                
            </div>

            <div className='flex flex-row space-x-4'>
                
                <div class="flex items-center -space-x-4">
                    <span class="flex items-center justify-center w-8 h-8 text-xs font-medium text-red-500 bg-red-200 hover:bg-red-300 border-2 border-white rounded-full">H</span>
                    <span class="flex items-center justify-center w-8 h-8 text-xs font-medium text-blue-500 bg-blue-200 hover:bg-blue-300 border-2 border-white rounded-full">A</span>
                    <span class="flex items-center justify-center w-8 h-8 text-xs font-medium text-amber-500 bg-amber-200 hover:bg-amber-300 border-2 border-white rounded-full">O</span>
                    <span class="flex items-center justify-center w-8 h-8 text-xs font-medium text-purple-500 bg-purple-200 hover:bg-purple-300 border-2 border-white rounded-full">V</span>
                    <span class="flex items-center justify-center w-8 h-8 text-xs font-medium text-green-500 bg-green-200 border-2 border-green-600 rounded-full hover:bg-green-300">+9</span>
                </div>

                <div className="flex items-center space-x-2">
                    <button type="button" class="text-blue-900 bg-blue-200 hover:bg-blue-100 border border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center">
                        Invite
                    </button>
                    <button type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        20:21
                    </button>
                </div>
                
                <div className="flex items-center mr-3">
                    <NavLink to="#" className="px-2 py-1 rounded-md hover:bg-blue-200">
                        <DotsVerticalIcon className='h-5 w-5 font-bold text-gray-500' />
                    </NavLink>
                </div>
                
            </div>
        </nav>
    )
}

export default HeaderNav;