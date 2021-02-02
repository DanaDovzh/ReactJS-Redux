import { actionTypes } from '../reducers/reducer';

export const addPost = (newPost) => ({
    type: actionTypes.addPost,
    payload: { newPost },
});

export const liked = (id) => ({
    type: actionTypes.liked,
    payload: { id }

});

export const leaveComments = (id) => ({
    type: actionTypes.commented,
    payload: { id }
});

export const shared = (id) => ({
    type: actionTypes.share,
    payload: { id }
});