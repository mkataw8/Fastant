import React, { Component } from 'react';
import {cc} from '../config/chart.js';

export default function getChartData(symbol) {
    return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${cc.CHART_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            let xvalues = [];
            let yvalues = [];
            for (let key in data["Time Series (Daily)"]) {
                xvalues.push(key);
                yvalues.push(data["Time Series (Daily)"][key]["1. open"]);
            }

            return {xvalues, yvalues, symbol};
        })
        .catch(error => {
            console.log(error);
        });
}