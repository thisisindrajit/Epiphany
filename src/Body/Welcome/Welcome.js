import React,{PureComponent} from 'react';
import './welcome.css';
import Notes from './Notes/Notes';

export default class Welcome extends PureComponent
{
    render() {

    var hour = new Date().getHours();

    return(
        <div id="content">
        <div id="welcome">
            {hour < 12 ? "Good Morning" : hour < 16 ? "Good Afternoon" : hour < 20 ? "Good Evening" : "Good Night"} Indrajit!
        </div>

        <div id="widget-grid">
            <Notes />
        </div>
        </div>
    );
    }
}