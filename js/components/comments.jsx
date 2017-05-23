import React from 'react';
import CommentsList from './commentslist.jsx'
import CommentsForm from './commentsform.jsx'

class Comments extends React.Component {
    render(){
        return <section>
            <CommentsList></CommentsList>
            <CommentsForm></CommentsForm>
        </section>
    }
}

export default Comments;
