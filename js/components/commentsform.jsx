import React from 'react';

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

export default CommentsForm;
