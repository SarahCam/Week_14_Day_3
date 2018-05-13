import React from "react";
import Article from "./Article";

const ArticleList = (props) => {

  if(!props.articles){
    return null;
  }

  const articles = props.articles.map((article, index) => {

    let image ="";

    if(article.multimedia.length !== 0){
      image = article.multimedia[0].url;
    }

    return (
      <li key={index}>
        <Article
          title={article.title}
          byline={article.byline}
          image={image}
        />
      </li>
    )
  });

  return (
    <ul>
      {articles}
    </ul>

  )
};

export default ArticleList;
