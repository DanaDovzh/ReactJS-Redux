import { getRandomNumber, createIdGenerator } from '../../helpers/functions';

import postIron from '../../img/content/iron_man_body.jpg';
import avatarIron from '../../img/avatar/avatar_iron.jpg';
import avatarGroot from '../../img/avatar/groot.png';
import postGroot from '../../img/content/groot_body.jpg';

const starId = createIdGenerator(1);

const initialState = {
  posts: [
    {
      id: starId.next().value,

      name: 'Tony Stark',
      nickname: '@ironManBest',
      avatar: avatarIron,

      content: "Give me a scotch. I'm starving.",
      imageContent: postIron,
      date: new Date().toLocaleDateString(),
      likes: getRandomNumber(10, 9000),
      comments: getRandomNumber(5, 5000),
      share: getRandomNumber(20, 6000),
      isliked: false,
      isShared: false,
      isComment: false
    },

    {
      id: starId.next().value,

      name: 'Groot',
      nickname: '@i_am_groot',
      avatar: avatarGroot,

      content: "I am Groot",
      imageContent: postGroot,
      date: new Date().toLocaleDateString(),
      likes: getRandomNumber(10, 9000),
      comments: getRandomNumber(5, 5000),
      share: getRandomNumber(20, 6000),
      isliked: false,
      isShared: false,
      isComment: false
    }
  ],
};

export const actionTypes = {
  addPost: 'ADD_POST',
  liked: 'ADD_lIKE',
  commented: 'LEAVE_COMMENT',
  share: 'TO_SHARE'
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.liked: {
      const whosPost = document.getElementById(action.payload.id);
      const liked = whosPost.querySelector(".post__footer--likes");
      const updateLike = state.posts;
      const newArrayPost = [];

      liked.classList.toggle("unlike");
      liked.classList.toggle("liked");
      updateLike.forEach(post => {
        if (post.id === action.payload.id) {
          (!post.isliked) ? post.likes++ : post.likes--;
          post.isliked = !post.isliked;
          newArrayPost.push(post)
        } else
          newArrayPost.push(post)
      })
      return {
        ...state,
        posts: newArrayPost,
      }
    };
    case actionTypes.commented: {
      const newArrayPost = [];
      const updateComments = state.posts;
      updateComments.forEach(post => {
        if (post.id === action.payload.id) {
          (!post.isComment) ? post.comments++ : post.comments--;
          post.isComment = !post.isComment;
          newArrayPost.push(post)
        } else
          newArrayPost.push(post)
      })
      return {
        ...state,
        posts: newArrayPost,
      }
    };
    case actionTypes.share: {
      const newArrayPost = [];
      const updateShare = state.posts;
      updateShare.forEach(post => {
        if (post.id === action.payload.id) {
          (!post.isShared) ? post.share++ : post.share--;
          post.isShared = !post.isShared;
          newArrayPost.push(post)
        } else
          newArrayPost.push(post)
      })
      return {
        ...state,
        posts: newArrayPost,
      }
    };
    case actionTypes.addPost: {
      const { name, content, imageContent } = action.payload.newPost;
      const newPostAdd = {
        id: starId.next().value,
        name: name,
        nickname: name === 'Tony Stark' ? '@ironManBest' : '@i_am_groot',
        avatar: name === 'Tony Stark' ? avatarIron : avatarGroot,
        content: content,
        imageContent: imageContent,
        date: new Date().toLocaleDateString(),
        likes: getRandomNumber(10, 9000),
        comments: getRandomNumber(5, 5000),
        share: getRandomNumber(20, 6000),
        isliked: false,
        isShared: false,
        isComment: false
      }

      return {
        ...state, posts: [...state.posts, newPostAdd]
      }
    }
    default: {
      return state;
    }
  }
}
