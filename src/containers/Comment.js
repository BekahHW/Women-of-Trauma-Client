import React, {Component} from 'react'
import Button from '@material-ui/core/Button';

class Comment extends Component {

  constructor(props) {
     super(props);
     this.state = {comments: []};

     // this.handleChange = this.handleChange.bind(this);
     // this.handleSubmit = this.handleSubmit.bind(this);
   }


handleOnSubmit = e => {
  e.preventDefault();
  console.log("Adding comment")
  let newComment = this.state.comment

  this.setState({
    comments: [...this.state.comments,
              newComment] //["hi", "test"]
  })
}

handleOnChange = e => {
  this.setState({comment: e.target.value});

}



  render(){
    return (
      <div>
        <h3>Add Comment</h3>
        <form onSubmit= {this.handleOnSubmit}>
          <div key={this.id}>
            <label htmlform="comment">Comment</label>
            <input
              type="string"
              onChange = {this.handleOnChange}
              name="comment"
              />
            </div>
          < br/>
          <Button type="submit" variant="contained" color="primary">
               Submit
             </Button>

   </form>
   <p>{this.state.comments}</p>

      </div>
    )
  }
}



export default Comment
