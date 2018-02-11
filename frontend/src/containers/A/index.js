import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { onChangeText } from 'actions/actionA';
class A extends PureComponent { //esline-disabe-line

  render() {
    const { text } = this.props;
    return (
      <div>
        <h1>Hello there I am Container A</h1>
        <h3>A dynamic text will show here: <span style={{ color: 'red' }}>{text}</span></h3>
        <button
          onClick={() => this.props.changeText('text changed !!')}
        > Click to change text</button>
      </div>
    );
  }
}

const mapStateToProps = ({ reducerA }) => ({
  text: reducerA.textA,
});

const mapDispatchToProps = (dispatch) => ({
  changeText: (text) => dispatch(onChangeText(text)),
});


export default connect(mapStateToProps, mapDispatchToProps)(A);