import { NavLink  } from 'react-router-dom';
import { 
    CogIcon,  
    MicrophoneIcon,
    VolumeUpIcon,
    ChevronDoubleLeftIcon,
    ChatIcon,
} from '@heroicons/react/outline';

function Chat(){

    return (
        <div className="flex flex-col h-full border-l">
            <div className="flex flex-row justify-center my-5">
                <aside>
                    <ul>
                        <li>
                            <NavLink to="#" className="flex items-center px-4 py-2 text-gray-600 rounded-md hover:bg-blue-200">
                                <ChevronDoubleLeftIcon className="w-4 h-4 text-gray-600" />
                            </NavLink>
                        </li>
                    </ul>

                </aside>
            </div>

            <div className='flex flex-col space-y-2 py-2 mx-2 border-b'>
                <h3 className='text-center text-gray-600 font-medium text-base'>VOICE</h3>
                <div className='flex justify-center'>
                    <span class="flex items-center justify-center w-10 h-10 text-md font-medium text-red-500 bg-red-200 hover:bg-red-300 border-2 border-white rounded-full">J</span>
                </div>
                <div className="flex flex-col mx-3 justify-between">
                    <NavLink to="#" className="flex items-center px-2 py-1 rounded-md hover:bg-blue-200">
                        <MicrophoneIcon className="w-5 h-5 text-gray-500" />
                    </NavLink>
                    <NavLink to="#" className="flex items-center px-2 py-1 mt-3 rounded-md hover:bg-blue-200">
                        <VolumeUpIcon className="w-5 h-5 text-gray-500" />
                    </NavLink>
                    <NavLink to="#" className="flex items-center px-2 py-1 mt-3 rounded-md hover:bg-blue-200">
                        <CogIcon className="w-5 h-5 text-gray-500" />
                    </NavLink>
                </div>
            </div>
            
            <div className='flex flex-row justify-center space-y-2 py-2 mx-2 border-b'>
                <div className='flex flex-col justify-center'>
                    <span class="flex items-center justify-center w-10 h-10 text-md font-medium text-blue-500 bg-blue-200 hover:bg-blue-300 border-2 border-white rounded-full">A</span>
                    <span class="flex items-center justify-center w-10 h-10 text-md font-medium text-red-500 bg-red-200 hover:bg-red-300 border-2 border-white rounded-full">M</span>
                    <span class="flex items-center justify-center w-10 h-10 text-md font-medium text-amber-500 bg-amber-200 hover:bg-amber-300 border-2 border-white rounded-full">O</span>
                    <span class="flex items-center justify-center w-10 h-10 text-md font-medium text-purple-500 bg-purple-200 hover:bg-purple-300 border-2 border-white rounded-full">V</span>
                </div>
            </div>

            <div className='flex flex-col space-y-2 py-2 mx-2'>
                <h3 className='text-center text-gray-600 font-medium text-base'>TEXT</h3>
                <div className="flex flex-col mx-3 justify-between">
                    <NavLink to="#" className="flex items-center px-2 py-1 rounded-full bg-blue-300 hover:bg-blue-200">
                        <ChatIcon className="w-6 h-6 text-blue-500" />
                    </NavLink>
                </div>
            </div>        
        </div>
    )
}

export default Chat;