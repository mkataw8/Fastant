import React, { Component, useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

export default function Chart(props) {
    const data = props.data;
    return (
        <div>
        
        <Plot
            data={[
                {
                    x: data.xvalues,
                    y: data.yvalues,
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'red'},
                }
            ]}
            layout={{width: 980, height: 720, title: data.symbol}}
        />
        </div>
    )
}