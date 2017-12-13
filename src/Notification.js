import React from 'react';
import Snackbar from 'material-ui/Snackbar';

export default class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoHideDuration: props.duration || 4000,
      message: props.message || '--',
      open: true,
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          action="close"
          autoHideDuration={this.state.autoHideDuration}
          onActionClick={this.handleRequestClose}
          onRequestClose={this.handleRequestClose}
        />
    );
  }
};
