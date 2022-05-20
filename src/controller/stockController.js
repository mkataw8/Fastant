import React, { Component } from 'react';
import { fh } from '../config/fh';

export default function getStockData(symbol) {
    return fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${fh.FH_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            data.symbol = symbol;
            return data;
        })
        .catch(error => {
            console.log(error);
        });
}