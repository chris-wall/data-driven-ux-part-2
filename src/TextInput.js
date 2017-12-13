import React from 'react';
import TextField from 'material-ui/TextField';

export default class TextInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: props.value || ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const { id, value, ...rest } = this.props;
    return (
      <TextField
        id={`txt-${id}`}
        value={this.state.value}
        onChange={this.handleChange}
        {...rest}
      />
    );
  }
}
