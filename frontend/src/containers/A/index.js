import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { onChangeText, onCallApi } from 'actions/actionA';
class A extends PureComponent { //esline-disabe-line

  render() {
    const { text, apiText } = this.props;
    return (
      <div>
        <h1>Hello there I am Container A</h1>
        <h3>A dynamic text will show here: <span style={{ color: 'red' }}>{text}</span></h3>
        <h3>A text from server will show here: <span style={{ color: 'red' }}>{apiText}</span></h3>
        <button
          onClick={() => this.props.changeText('text changed !!')}
        > Click to change text</button>
        <button
          onClick={() => this.props.callApi()}
        > Make api call get data from server</button>
      </div>
    );
  }
}

const mapStateToProps = ({ reducerA }) => ({
  text: reducerA.textA,
  apiText: reducerA.apiText,
});

const mapDispatchToProps = (dispatch) => ({
  changeText: (text) => dispatch(onChangeText(text)),
  callApi: () => dispatch(onCallApi()),
});


export default connect(mapStateToProps, mapDispatchToProps)(A);