import React, { Component } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { NEWS_API_KEY } from '../../config/news';
import "./style.css";

export default function NewsFeed(props) {
  const data = props.data;

  return (
    <div className ="body1">
      {data.articles.map((article, index) => {
        return (
        <div className="container">
          <div className="row">
            <div className="title">{article.title} - {article.author}</div>
            <div className='articleContainer'>
              <img className='articleImage' src={article.urlToImage} alt="news image" />
              <div className='description'>
                <div>{article.description}</div>
                <a href={article.url}>Read More...</a>
              </div>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  );
}
