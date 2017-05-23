import React from 'react';
import { connect } from 'react-redux';
import store from '../store.js';

class CommentsList extends React.Component {
    render(){
        return <ul>
            {this.props.comments.map((comment, index) =>
                <li key={index}>{comment}</li>
            )}
        </ul>

    }
    componentDidMount(){
        fetch('https://stupidcomments.herokuapp.com/comments').then(function(response){
            response.json().then(function(data){
                let commentsArray = data.map(function(comment){
                    return comment.body
                });
                store.dispatch({type:'SET', comments:commentsArray});
            });
        });
    }
}

const mapStateToProps = function(state){
    return {
        comments: state
    }
}

const VisibleCommentsList = connect(
    mapStateToProps
)(CommentsList);

export default VisibleCommentsList;
