import React, {Component} from 'react';
import './CreateHelp.css';
import HelpTable from './HelpTable/HelpTable';

class CreateHelp extends Component{

    render(){
        return(
            <div className="helpContainer">
                <h1>Create Help</h1> 
                <HelpTable/>
            </div>
        )
    }
}

export default CreateHelp;