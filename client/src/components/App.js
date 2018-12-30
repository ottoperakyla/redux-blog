import React from "react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import PostsList from "./PostsList";
import Post from "./Post";
import PopularPosts from "./PopularPosts";
import FollowMe from "./FollowMe";
import AdminPanel from "./container/AdminPanelContainer";

const Grid = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftColumn = styled.div`
  flex: 1 1 75%;
  margin-right: 0.5rem;
`;

const RightColumn = styled.div`
  flex: 1 1 25%;
  margin-left: 0.5rem;
`;

class App extends React.PureComponent {
  componentDidMount() {
    this.props.fetchPosts();
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    const { posts, popularPosts, logout, loggedIn } = this.props;
    return (
      <>
        {loggedIn ? (
          <div>
            Logged in as admin. <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <div>
            <Link to="/admin">Admin login</Link>
          </div>
        )}
        <Header />
        <Grid>
          <LeftColumn>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <PostsList posts={posts} />}
              />
              <Route path="/posts/:slug" component={Post} />
              <Route path="/admin" component={AdminPanel} />
            </Switch>
          </LeftColumn>
          <RightColumn>
            <About />
            <PopularPosts posts={popularPosts} />
            <FollowMe />
          </RightColumn>
        </Grid>

        <Footer />
      </>
    );
  }
}

export default App;
