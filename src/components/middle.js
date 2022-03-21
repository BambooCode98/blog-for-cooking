import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/middle.css';


function ImageSelect(props) {

  if(props.article.author === "Katie") {
    return(
      <img
      src={ require("../images/cinnamoroll.png")}
      className='articleImage'
      />
    )
    
  } else if(props.article.author === "Ashlyn") {
    return(
      <img
      src={ require("../images/riddler.png") }
      className='articleImage'
      />

    )
  }
}


export default function MiddleArticles () {
  const [articles, setArticles] = useState([{
    author: "Katie",
    body: "texttexttextextextextextextextext",
    title: "cooking",
    id: 1,
  }, {
    author: "Ashlyn",
    body: "texttexttextextextextextextextext",
    title: "DC-Riddler",
    id: 25,
  }, {
    author: "Ashlyn",
    body: "texttexttextextextextextextextext",
    title: "DC-Riddler",
    id: 3,
  }, {
    author: "Ashlyn",
    body: "texttexttextextextextextextextext",
    title: "DC-Riddler",
    id: 4,
  }, {
    author: "Katie",
    body: "cooking time",
    title: "Head Chef",
    id: 2
  }, {
    author: "Ashlyn",
    body: "texttexttextextextextextextextext",
    title: "DC-Riddler",
    id: 27,
  }, {
    author: "Ashlyn",
    body: "texttexttextextextextextextextextrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
    title: "DC-Riddler",
    id: 29,
  }, {
    author: "Katie",
    body: "cooking time is fun",
    title: "Boss Cooks",
    id: 90
  },
  ])


  return(
    <>
      {articles.map( (article) => {
          return(
            <div>
              <Link to={`article/${article.id}`} key={article.id} className="articleBlocks">
                < ImageSelect article={article}/>
                <p className='articleTitle'>{article.title}</p>
              </Link>
            </div>
          );
        }
      )}
    </>
  )
}
















