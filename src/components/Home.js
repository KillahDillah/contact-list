import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Home extends Component {
  static defaultProps = {
    name: {
      first:'',
      last:''
    }
  }


  render() {
    return(
      <div className="app-wrap">
        <div className="contact-wrap">
          <header> Contacts</header>
          {this.props.contacts.map(function(contact){
            return (
              <div key={contact.id} className="person">
                <img className="tiny" src={contact.picture.thumbnail}/>
                <Link to={'/contact/' + contact.id}>{contact.name.first} {contact.name.last}</Link>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

function stateToProps(appState){
  return {contacts:appState.contacts}
}

export default connect(stateToProps)(Home)