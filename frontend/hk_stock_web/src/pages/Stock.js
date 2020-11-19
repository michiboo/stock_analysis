import React from 'react';
import TimeLineGraph from '../components/TimeLineGraph';


export default function Stock() {
    return (
        <div>
            <div style={{ position: "relative", width: '20%' }}><TimeLineGraph /></div>
        </div>
    );
}