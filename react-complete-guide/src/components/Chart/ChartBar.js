import React from 'react';

import './ChartBar.css'

const ChartBar = (props) => {
    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';        
    }
    return (
        <div className='chart_bar'>
            <div className='chart_bar_inner'>
                <div className='chart_bar_fill' style={{height: barFillHeight}}></div>  
            </div>
            <div className="chart_bar_label">{props.label}</div>
        </div>
    );
};


export default ChartBar;