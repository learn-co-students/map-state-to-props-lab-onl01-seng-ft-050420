import React, { Component } from 'react';
import {connect} from 'react-redux'
class Users extends Component {

  renderUsers() {
    return this.props.users.map((user, index) => {
      console.log(user)
      return <li key={index}>{user.username}</li>
    })
  }

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.renderUsers()}
        </ul>
        {this.props.users.length}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}


export default connect(mapStateToProps)(Users)
