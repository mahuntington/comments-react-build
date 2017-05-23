import React from 'react';
import { connect } from 'react-redux';

class CommentsList extends React.Component {
    render(){
        return <ul>
            {this.props.comments.map((comment, index) =>
                <li key={index}>{comment}</li>
            )}
        </ul>

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
