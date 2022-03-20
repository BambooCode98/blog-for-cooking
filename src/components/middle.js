import React, { useState } from 'react';
import '../styles/middle.css';


function ImageSelect(props) {
  // const [images, setImage] = useState(require("../images/cinnamoroll.png"));
  // let idnum = props.id;
  if(props.article.id <= 2) {
    return(
      <img
      src={ require("../images/cinnamoroll.png")}
      className='articleImage'
      />
    )
    
  } else if(props.article.id >= 3) {
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
    author: "Ashlyn2",
    body: "texttexttextextextextextextextext",
    title: "DC-Riddler",
    id: 3,
  }, {
    author: "Ashlyn4",
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
  }
  ])
  // const [images, setImage] = useState(require("../images/cinnamoroll.png"));



  return(
    <div>
      {articles.map( (article) => {
          return(
            <div key={article.id} className="articleBlocks">
              {/* <img
              src={ images }
              className='articleImage'
              /> */}
              < ImageSelect article={article}/>
              <p className='articleTitle'>{article.title}</p>

            </div>
          );
        }
      )}
    </div>
  )
}
















