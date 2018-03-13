import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
class C extends PureComponent { //esline-disabe-line

  render() {
    console.log(this.props);
    return (
      <div className={'container-C'}>
        <h1>Welcome here. This page is private page !</h1>
        <h2>This is your info: {this.props.currentUser.name} </h2>
      </div>
    );
  }
}

const mapStateToProps = ({ currentUserReducer }) => ({ currentUser: currentUserReducer.currentUser })

export default connect(mapStateToProps, null)(C);