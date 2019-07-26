import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//connect is used to connect your components to the redux store that was provided by the provider component
import { fetchPosts } from "../actions/postActions";
class Posts extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       posts: []
  //     };
  //   }

  //   //you can use axios if you want
  componentWillMount() {
    this.props.fetchPosts();
  }
  componentWillReceiveProps(nextProps) {
    console.log("nextProps");
    console.log(nextProps);
    if (nextProps.newPost) {
      //adds it to the beginning
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

//mapStateToProps get state from redux , map to properties of our component, use the component
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});
//fetchPosts calls the fetch request
//second parethesis is the component
export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
