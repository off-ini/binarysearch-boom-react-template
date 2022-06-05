import { Component } from 'react';

import Task from '../components/Task';
import WorkSpace from '../components/WorkSpace';
import Chat from '../components/Chat';

class Home extends Component{

    render(){
        return(
            <div className="flex flex-row justify-between  h-full">
                <Task />
                <WorkSpace />
                <Chat />
            </div>
        )
    }
}

export default Home;