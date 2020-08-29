import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user, index) => (
            <li key={index}>{user.username}</li>
          ))}
        </ul>
        <p>{this.props.userCount}</p>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => ({
   users: state.users,
   userCount: state.users.length
})

const mapDispatchToProps = {
  
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
