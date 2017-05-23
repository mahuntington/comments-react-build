import React from 'react';
import { connect } from 'react-redux';

class CommentsForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.handleSubmit(this.refs.comment.value);
    }
    render() {
        return <form onSubmit={this.handleSubmit}>
            <input ref="comment" type="text" placeholder="Your Comment"/>
            <input type="submit" value="Post Comment"/>
        </form>
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        handleSubmit: function(body){
            dispatch({type:'ADD', comment: body });
        }
    }
}

const VisibleCommentsForm = connect(
    null,
    mapDispatchToProps
)(CommentsForm)

export default VisibleCommentsForm;
