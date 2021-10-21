import { Component } from "react";

import "./styles.css";

import { Posts } from "../../components/Posts";
import { loadPosts } from "../../services/load-posts";
import { Buttons } from "../../components/Button";
import { FormControl, Input, InputLabel } from "@material-ui/core";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 6,
    searchValue: "",
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
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, allPosts, page, postsPerPage, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length; //testa se a paginação é maior que a quantidade de postagens retorna true ou false

    const filteredPosts = !!searchValue? 
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    }) 
    : 
    posts;

    return (
      <section className="container">
        <FormControl>
          <InputLabel htmlFor="input-with-icon-adornment">
            Procurar...
          </InputLabel>
          <Input
            onChange={this.handleChange}
            id="standard-search"
            label="Procurar..."
            type="search"
            value={searchValue}
          />
        </FormControl>

        {!!searchValue && <h3>Procurando por: {searchValue}</h3>}

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}
        {filteredPosts.length === 0 && (
          <p>Ops... nada encontrado por aqui... =(</p>
        )}

        {!searchValue && (
          <Buttons
            onClick={this.loadMorePosts}
            text="Ver mais"
            disabled={noMorePosts}
          />
        )}
      </section>
    );
  }
}

export default Home;
