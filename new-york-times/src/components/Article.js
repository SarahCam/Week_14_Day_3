import React from "react";

const Article = (props) =>
        <article className="newsItem">
          <span className="image"><img src={props.image} alt={props.title}/></span>
          <span className="details"><a href={props.tune} className="button">Play</a></span>
          <span className="title">{props.title}</span>
          <span className="byline">{props.byline}</span>
        </article>

export default Article;
