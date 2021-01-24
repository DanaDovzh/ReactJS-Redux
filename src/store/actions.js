import {ADD_POST, LIKED, COMMENTED, SHARE} from './types';

export function addPost (post) {
    return {
        type: ADD_POST,
        newPost: post
    }
}

export function liked (id, likes) {
    return {
        type: LIKED,
        author: id,
        countLikes: likes
    }
}

export function leaveComments (id) {
    return {
        type: COMMENTED,
        author: id,
    }
}

export function shared (id) {
    return {
        type: SHARE,
        author: id
    }
}