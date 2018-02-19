import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { onChangeText, onCallApi, onChangeElement } from 'actions/actionA';
class A extends PureComponent { //esline-disabe-line

  constructor(props) {
    super(props);
    this.changeElement = this.changeElement.bind(this);
  }

  changeElement(id) {
    const newItem = {
      id,
      name: 'edited'
    }
    this.props.changeElement(newItem);
  }

  render() {
    const { text, apiText, testImu } = this.props;
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
        <br />
        <br />
        <ul>
          {
            testImu.map((e, i) => <li key={i}>{e.name}  <button onClick={() => this.changeElement(e.id)}>Click here to edit anme element of array above</button></li>)
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ reducerA }) => ({
  text: reducerA.textA,
  apiText: reducerA.apiText,
  testImu: reducerA.testImu,
});

const mapDispatchToProps = (dispatch) => ({
  changeText: (text) => dispatch(onChangeText(text)),
  callApi: () => dispatch(onCallApi()),
  changeElement: (element) => dispatch(onChangeElement(element)),
});


export default connect(mapStateToProps, mapDispatchToProps)(A);