import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../store/actions';

import './post-form.sass';
const PostForm = (props) => {

  const [content, setContent] = useState('');
  const [linkImg, setLinkImg] = useState('');
  const [postAuthor, setPostAuthor] = useState('');
  const [checkField, setCheckField] = useState(true);

  const contentHandler = (e) => setContent(e.target.value);
  const linkImgHandler = (e) => setLinkImg(e.target.value);
  const postAuthorHandler = (e) => setPostAuthor(e.target.value);
  const authors = props.posts.map(post =>  (post.name));
  const unAuthor = Array.from(new Set(authors));

  const resetInput = () => {
    setContent('');
    setLinkImg('');
    setPostAuthor('');
  }

  const sendPost = (e) => {
    e.preventDefault();
    if (!content || !linkImg) {
      setCheckField(false); 
    } else {
      const newPost = {
        name: postAuthor,
        imageContent: linkImg,
        content: content
      }
      setCheckField(true);
      props.addPost(newPost);
      resetInput();
    }    
  }

  
  useEffect(() => {
    setContent(content);
    setLinkImg(linkImg);
    setPostAuthor(postAuthor)
  }, [content, linkImg, postAuthor])

  return (
    <div className='block-form'>
      <h2 className='form-header'>Add Post</h2>
      <form noValidate className='form'>
        <input
        className='form__input'
          onChange={(e) => contentHandler(e)}
          type='text'
          value={content}
          placeholder="What do you want to say?"
        />
        <input
        className='form__input'
          onChange={(e) => linkImgHandler(e)}
          type='text'
          value={linkImg}
          placeholder="Enter link for image"
        />

        <select 
        onChange={(e) => postAuthorHandler(e)} 
        className='form__input'>
          <option value="none" hidden="" disabled>
            Choose author
        </option>
          {unAuthor.map(author => <option value={author}>{author}</option>)}
        </select>

        <input
          type='submit'
          value='Make post'
          className={`form__input form__input--btn`}
          onClick={(e) => sendPost(e)}
        />
      </form>
      {!checkField &&
        <p className='form__warning'>Fill all fields</p>
      }
    </div>
  )
}

const mapStateToProps = (store) => {
  console.log(store) // посмотрим, что же у нас в store?
  return {
    posts: store.posts,
  }
}

const mapDispatchToProps = {
  // return {
    addPost,
  // }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);