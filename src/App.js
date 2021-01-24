import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import Post from './components/Post/Post';
import PostForm from './components/FormForPost/PostForm';
import PostsPage from './components/PostsPage';

class App extends Component {
  
  render() {
 
    return (
      <div className='wrapper'>
        <PostsPage />
        <PostForm />
      </div>
    );
  }
}

export default (App);
