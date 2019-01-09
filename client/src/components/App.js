import React from "react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import PostsList from "./PostsList";
import Button from "./Button";
import Post from "./container/PostContainer";
import PopularPosts from "./PopularPosts";
import PostFormContainer from "./container/PostFormContainer";
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
  @media (min-width: 768px) {
    margin-right: 0.5rem;
  }
`;

const RightColumn = styled.div`
  flex: 1 1 25%;
  @media (min-width: 768px) {
    margin-left: 0.5rem;
  }
`;

class App extends React.PureComponent {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts, popularPosts, logout, loggedIn } = this.props;
    return (
      <>
        {loggedIn ? (
          <div>
            Logged in as admin. <Link to="/admin">Admin panel</Link>
            <Button onClick={logout}>Logout</Button>
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
              <Route exact path="/posts/create" component={PostFormContainer} />
              <Route path="/posts/:id/edit" component={PostFormContainer} />
              <Route path="/posts/:slug" component={Post} />
              <Route path="/admin" component={AdminPanel} />
            </Switch>
          </LeftColumn>
          <RightColumn>
            <About />
            <PopularPosts posts={popularPosts} />
          </RightColumn>
        </Grid>

        <Footer />
      </>
    );
  }
}

export default App;
