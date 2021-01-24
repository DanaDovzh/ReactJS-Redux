import React from 'react';
import { connect } from 'react-redux';
import { liked, leaveComments, shared } from '../../store/actions';

import './post.sass';

const Post = ({id, name, avatar, verifiedAccount, nickname, date, content, imageContent, comments, likes, share, liked, leaveComments, shared}) => {
    const updateLike = () => liked(id);
    const updateComments = () => leaveComments(id);
    const updateShare = () => shared(id);

    return(
        <div className = "post" id = {id}>
                <div className = "post__heading">
                    <div><img alt = {name} src={avatar} className = "post__heading--photo"/>
                    </div>
                    <div className = "post__heading--info">
                        <div className = "post__heading--personal-info">
                            <p className = {
                                verifiedAccount ? "post__heading--personal-info-check" : ""
                            }>{name}</p>
                            <p className = "nickname">{nickname}</p>
                            <p className = "date">{date}</p>
                        </div>
                        <div className = "post__heading--content">
                            <p>{content}</p>
                        </div>
                    </div>
                </div> 
                <div className = "post__body">
                    <img src = {imageContent} alt = "Post" className = "post__body--content"/>
                </div>
                <div className = "post__footer">
                    <p className = "post__footer--comments post-action" onClick={updateComments}>{comments}</p>
                    <p className = "post__footer--likes unlike post-action" onClick={updateLike}>{likes}</p>
                    <p className = "post__footer--share post-action" onClick={updateShare}>{share}</p>
                    <p className = "post__footer--cloud post-action"></p>
                </div>
        </div>
    )
}

const mapDispatchToProps = {
    liked,
    leaveComments,
    shared,
  }

  export default connect(null, mapDispatchToProps)(Post);