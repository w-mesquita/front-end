import { Component } from "react";

import "./styles.css";

import { Posts } from "../../components/Posts";
import { loadPosts } from "../../services/load-posts";
import { Buttons } from "../../components/Button";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 6,
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push( ...nextPosts );

    this.setState({ posts, page: nextPage });
  };

  render() {
    const { posts, allPosts, page, postsPerPage } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length; //testa se a paginação é maior que a quantidade de postagens retorna true ou false

    return (
      <section className="container">
        <Posts posts={posts} />
        <Buttons onClick={this.loadMorePosts} text="Ver mais" disabled={noMorePosts}/> 
      </section>
    );
  }
}

export default Home;
