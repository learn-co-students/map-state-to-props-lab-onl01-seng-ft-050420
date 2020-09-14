import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    console.log("THE PROPS", this.props)
    return (
      <div>
        <ul>
          Users! {this.props.users.length}
          <ul>
            { this.props.users.map( e => (<li>{e.username} - {e.hometown} </li>) ) }
          </ul>
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps) (Users)
