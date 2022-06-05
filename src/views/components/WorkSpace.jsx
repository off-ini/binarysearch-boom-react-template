import { NavLink  } from 'react-router-dom';
import { 
    TerminalIcon, 
    CogIcon,  
    SaveIcon, 
    RefreshIcon,
} from '@heroicons/react/outline';

import CodeEditor from './CodeEditor';

function WorkSpace(){

    return (
        <div className="flex flex-col w-full h-full relative">

            <div className="flex flex-row border-b h-16 px-5 space-x-5">
                <div className='flex items-center'>
                    <button type="button" className="py-1.5 px-3 mr-2 text-sm font-medium text-sky-500 outline-none bg-sky-100 rounded-md border-none  hover:bg-sky-200 hover:text-sky-600 focus:z-10 focus:ring-0">Me</button>
                </div>

                <div className='flex items-center cursor-pointe'>
                    <span class="flex items-center justify-center w-6 h-6 text-md font-medium text-blue-500 bg-blue-200 hover:bg-blue-300 border-2 border-white rounded-full mr-2">A</span>
                    <span class="flex items-center justify-center text-sm font-medium text-gray-500">Alin</span>
                </div>

                <div className='flex items-center cursor-pointer'>
                    <span class="flex items-center justify-center w-6 h-6 text-md font-medium text-red-500 bg-red-200 hover:bg-red-300 border-2 border-white rounded-full mr-2">M</span>
                    <span class="flex items-center justify-center text-sm font-medium text-gray-500">Marie</span>
                </div>

                <div className='flex items-center cursor-pointer'>
                    <span class="flex items-center justify-center w-6 h-6 text-md font-medium text-amber-500 bg-amber-200 hover:bg-amber-300 border-2 border-white rounded-full mr-2">O</span>
                    <span class="flex items-center justify-center text-sm font-medium text-gray-500">Olivier</span>
                </div>

                <div className='flex items-center cursor-pointer'>
                    <span class="flex items-center justify-center w-6 h-6 text-md font-medium text-purple-500 bg-purple-200 hover:bg-purple-300 border-2 border-white rounded-full mr-2">V</span>
                    <span class="flex items-center justify-center text-sm font-medium text-gray-500">Vincent</span>
                </div>
            </div>

            
            <CodeEditor />
            

            <div className="flex justify-between absolute inset-x-0 bottom-0 border-t h-16 z-10 bg-white">
                <div className="flex items-center px-4 space-x-4">
                    <NavLink to="#" className="flex items-center rounded-md hover:bg-blue-200">
                        <TerminalIcon className="w-7 h-7 p-1 text-gray-400 group-hover:text-gray-600"  />
                    </NavLink>
                    <NavLink to="#" className="flex items-center rounded-md hover:bg-blue-200">
                        <CogIcon className="w-7 h-7 p-1 text-gray-400 group-hover:text-gray-600" />
                    </NavLink>
                    <NavLink to="#" className="flex items-center rounded-md hover:bg-blue-200">
                        <SaveIcon className="w-7 h-7 p-1 text-gray-400 group-hover:text-gray-600" />
                    </NavLink>
                    <NavLink to="#" className="flex items-center rounded-md hover:bg-blue-200">
                        <RefreshIcon className="w-7 h-7 p-1 text-gray-400 group-hover:text-gray-600" />
                    </NavLink>
                    <select className="w-full text-sm text-gray-500 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="JS">JavaScript</option>
                        <option value="PY">Python</option>
                        <option value="CPP">C/C++</option>
                        <option value="JAVA">Java</option>
                    </select>
                </div>

                <div className="flex items-center px-4 space-x-4">
                    <button type="button" className="py-1.5 px-3 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">Run</button>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default WorkSpace;