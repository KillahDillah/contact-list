import React, { Component } from 'react';
import {singleView} from '../actions/contact';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';


class SingleView extends Component {

static defaultProps = {
    name:{
      first:'',
      last: ''
    },
    locale:{
      city:'',
      state:''
    },
    picture:{
      large:'',
      medium:'',
      thumbnail:''
    },
    email:''
}

  componentDidMount(){
    singleView(this.props.match.params.id)
  }

  render() {
    console.log('hello',this.props)
    return(
      <div className="app-wrap">
        <div className="photo">
          <div className="button">
            <NavLink activeClassName="active" to="/">
              <i className="fa fa-arrow-left" aria-hidden="true"/>
            </NavLink>
          </div>
          <img src={this.props.picture.large} />
        </div>
        <div className="name">
        <i className="fa fa-user-circle" aria-hidden="true"></i>
          <div className="first">
            {this.props.name.first}
          </div>
          <div className="last">
            {this.props.name.last}
          </div>
        </div>
        <div className="email">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          {this.props.email} 
        </div>
        <div className="cell">
        <i className="fa fa-mobile" aria-hidden="true"></i>
          {this.props.cell}
        </div>
        <div className="location">
        <i className="fa fa-globe" aria-hidden="true"></i>
          <div className="city">
          {this.props.locale.city},
        </div>
        <div className="state"> 
          {this.props.locale.state}
        </div>
        </div>
      </div>
    )
  }
}

function stateToProps(appState, ownprops){
  return {...appState.person, ...ownprops}
}

export default connect(stateToProps)(SingleView)