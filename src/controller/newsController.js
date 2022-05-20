import React, { Component } from 'react';
import { NEWS_API_KEY } from '../config/news';

export default function getNewsData() {
    return fetch(`https://newsapi.org/v2/everything?q=Apple&from=2021-12-05&sortBy=popularity&apiKey=${NEWS_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return data;    
        })
        .catch(error => {
            console.log(error);
        })
}