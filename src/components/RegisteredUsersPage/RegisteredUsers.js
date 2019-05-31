import React, {Component} from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

class RegisteredUsersPage extends Component {
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_USERS'});
  }

  render()  {
      return (
          <div>
            <ul>
                {this.props.users.map(user => (
                    <li>
                        Username: {user.username} 
                    </li>
          ))}
        </ul>
          </div>
      )
  }
}

const mapStateToProps = state => ({
    secrets: state.secrets,
    user: state.user,
    users: state.users
  });
  
export default connect(mapStateToProps)(RegisteredUsersPage);
  