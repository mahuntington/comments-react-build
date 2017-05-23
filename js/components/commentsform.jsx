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
            fetch(
                'https://stupidcomments.herokuapp.com/comments',
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({ body:body })
                }
            ).then(function(response){
                response.json().then(function(data){
                    console.log(data);
                    dispatch({type:'ADD', comment: data.body });
                });
            });
        }
    }
}

const VisibleCommentsForm = connect(
    null,
    mapDispatchToProps
)(CommentsForm)

export default VisibleCommentsForm;
