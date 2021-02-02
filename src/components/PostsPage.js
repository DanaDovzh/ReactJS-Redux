import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post/Post';
class PostsPage extends Component {

  render() {
    const postsData = this.props.posts;
    return (
      <>
        <div className='posts--all'>
          {postsData.map(post => <Post {...post} />)}
        </div>
      </>
    );
  }
}
const mapStateToProps = (store) => {
  return {
    posts: store.posts,
  }
}
export default connect(mapStateToProps)(PostsPage);
