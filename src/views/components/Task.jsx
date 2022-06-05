import { NavLink  } from 'react-router-dom';
import { 
    ChevronLeftIcon,
    ChevronRightIcon,
    FlagIcon,
    StarIcon,
    ShareIcon,
    HeartIcon,
} from '@heroicons/react/outline';

function Task(){

    return(
        <div className="flex flex-col overflow-y-auto w-5/12 border-r h-full relative xs:invisible">
            <div className="flex flex-row border-b h-16 px-5 space-x-5">
                <div className='flex items-center'>
                    <button type="button" className="py-1.5 px-3 mr-2 text-sm font-medium text-sky-500 outline-none bg-sky-100 rounded-md border-none  hover:bg-sky-200 hover:text-sky-600 focus:z-10 focus:ring-0">Problem</button>
                    <button type="button" className="py-1.5 px-3 mr-2 text-sm font-medium text-gray-500 outline-none bg-white rounded-md border-none  hover:bg-gray-100 hover:text-sky-600 focus:z-10 focus:ring-0">Submitions</button>
                    <button type="button" className="py-1.5 px-3 mr-2 text-sm font-medium text-gray-500 outline-none bg-white rounded-md border-none  hover:bg-gray-100 hover:text-sky-600 focus:z-10 focus:ring-0">Editorials</button>
                </div>
            </div>

            <div className='flex flex-col px-3 py-5 space-y-3'>
                <div className='flex justify-between'> 
                    <div className='flex items-center space-x-2'>
                        <span className='font-bold text-base'>Merging Tow Sorter Lists</span>
                        <span class="bg-emerald-200 text-emerald-600 text-xs font-semibold px-2.5 py-0.5 rounded-md">EASY</span>
                    </div>
                    <div className='flex items-center'>
                        <span className='text-gray-400 text-xs'>Problem 1/4</span>
                    </div>
                </div>

                <div className='flex justify-between'> 
                    <div className="flex flex-row">
                        <NavLink to="#" className="flex items-center px-2 py-1 hover:bg-blue-200">
                            <HeartIcon className="w-5 h-5 text-gray-400" />
                        </NavLink>
                        <NavLink to="#" className="flex items-center px-2 py-1 rounded-md hover:bg-blue-200">
                            <StarIcon className="w-5 h-5 text-gray-400" />
                        </NavLink>
                        <NavLink to="#" className="flex items-center px-2 py-1 rounded-md hover:bg-blue-200">
                            <ShareIcon className="w-5 h-5 text-gray-400" />
                        </NavLink>
                        <NavLink to="#" className="flex items-center px-2 py-1 rounded-md hover:bg-blue-200">
                            <FlagIcon className="w-5 h-5 text-gray-400" />
                        </NavLink>
                    </div>
                    
                    <div className='flex items-center'>
                        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-sm px-2 py-1 mr-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                            <ChevronLeftIcon className="w-4 h-4 text-gray-400" />
                        </button>
                        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-sm px-2 py-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                            <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                        </button>
                    </div>
                </div>

                <div className='flex'> 
                    <span className='font-bold text-sm text-sky-600 cursor-pointer'>Show More</span>
                </div>
                <div className='flex py-1'> 
                    <span className='text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel condimentum mauris. Phasellus non sapien et lectus finibus.</span>
                </div>
                <div className='flex'> 
                    <span className='font-bold text-sm'>Contraints</span>
                </div>

                <div className='flex justify-around'> 
                    <ul className='list-disc'>
                        <li>
                            <p className='text-xs'>
                                <span className='border border-teal-200 p-0.5 rounded-md bg-teal-50 m-1'>0 {'<'} n {'<'} 200 000</span>
                                    where  
                                <span className='border border-teal-200 p-0.5 rounded-md bg-teal-50 m-1'>n</span>
                                    is the length of 
                                <span className='border border-teal-200 p-0.5 rounded-md bg-teal-50 m-1'>a</span>
                            </p>
                        </li>
                        <li>
                            <p className='text-xs'>
                                <span className='border border-teal-200 p-0.5 rounded-md bg-teal-50 m-1'>0 {'<'} m {'<'} 200 000</span>
                                    where  
                                <span className='border border-teal-200 p-0.5 rounded-md bg-teal-50 m-1'>m</span>
                                    is the length of 
                                <span className='border border-teal-200 p-0.5 rounded-md bg-teal-50 m-1'>b</span>
                            </p>
                        </li>
                    </ul>
                </div>

                {/* <div className='flex'> 
                    <span className='font-bold text-sm'>Exemples</span>
                </div> */}

                <div className='flex'> 
                    <span className='font-bold text-sm'>Hints</span>
                </div>

                <div className='flex flex-col space-y-2'> 
                    <span className='text-sm text-gray-400 mb-1'>Not sure how to solve it ? Use hints!</span>
                    <select className="w-full text-xs text-gray-500 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="#1">Hint #1</option>
                        <option value="#2">Hint #2</option>
                        <option value="#3">Hint #3</option>
                        <option value="#4">Hint #4</option>
                    </select>
                    <select className="w-full text-xs text-gray-500 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="#2">Hint #2</option>
                        <option value="#3">Hint #3</option>
                        <option value="#4">Hint #4</option>
                        <option value="#5">Hint #5</option>
                    </select>
                </div>
            </div>
            
            <div className="flex justify-around absolute inset-x-0 bottom-0 border-t h-16 z-10 bg-white">
                <div className="flex items-center">
                    <p className="inline-block text-gray-600 mr-2 text-sm">Authored by</p>
                    <p className="inline-block text-sky-700 text-sm hover:text-sky-600 cursor-pointer">vds1234</p>
                </div>

                <div className="flex items-center">
                    <p className="inline-block text-gray-600 mr-2 text-sm">Edited by</p>
                    <p className="inline-block text-sky-700 text-sm hover:text-sky-600 cursor-pointer">Jean-Claude</p>
                </div>
            </div>
        </div>
    )
}

export default Task;