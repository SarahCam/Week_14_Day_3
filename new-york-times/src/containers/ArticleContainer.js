import React from "react";
import Title from "../components/Title";
import ArticleList from "../components/ArticleList";
import Footer from "../components/Footer";

class ArticleContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      articles: [],
      currentArticle: null
    };
  }

  componentDidMount(){
    fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=6f3612aa92a14c679ca10ac2979219ba")     // gives us a 'promise'
      .then((response) => response.json())                                                                  // gives us another 'promise'
      .then(json => this.setState({articles: json.results}));
  }

  render(){
    return (
      <article className="newsPage">
        <Title />
        <article className="newsContainer">
          <ArticleList articles={this.state.articles} />
        </article>
        <Footer />
      </article>
    )
  }
}

export default ArticleContainer;
