import React from 'react';
const Commentdetail = props => {
    return (
        <div class="comment">
            <a class="avatar">
                <img src={props.avatar} />
            </a>
            <div class="content">
                <a class="author">{props.auther}</a>
                <div class="metadata">
                    <span class="date">{props.timeAgo}</span>
                </div>
                <div class="text">
                    {props.comment}
                </div>
            </div>
        </div>
    );
}
export default Commentdetail;