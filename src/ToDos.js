import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import { red500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import { Actions } from './Store';
import TextInput from './TextInput';

const { createToDo, deleteToDo, modifyToDo } = Actions;

const style = {
  minHeight: 100,
  width: '85%',
  margin: 20,
  textAlign: 'left',
  display: 'block',
};

const mapStateToProps = (state) => ({
  todos: state.todos || []
});

const mapDispatchToProps = (dispatch) => ({
  createToDo: (todo) => { 
    dispatch(createToDo(todo));
  },
  deleteToDo: (index) => {
    dispatch(deleteToDo(index));
  },
  modifyToDo: (index, todo) => {
    dispatch(modifyToDo(index, todo));
  }
});

const ToDos = ({ todos, createToDo, deleteToDo, modifyToDo, ...rest }) => (
  <Paper style={style} zDepth={2}>
    <RaisedButton label="Create a New ToDo" style={{ width: 500, margin: 20 }} primary={true} onClick={() => createToDo('a new todo!')} />
    <Divider inset={true} />
    <List>
      { 
        (Array.isArray(todos) && todos.length > 0) ?
          todos.map((n, i) =>  {
            const input = <TextInput 
                            id={`${i}`} 
                            value={n} 
                            onBlur={(e) => modifyToDo(i, e.target.value)} 
                          />;
            return (<ListItem 
                      primaryText={input} 
                      key={`todo_${i}`} 
                      rightIconButton={
                        <IconButton touch={true} onClick={() => deleteToDo(i)}>
                          <ActionDelete color={red500} />
                        </IconButton>
                      } 
                    />);
          }) :
          <ListItem primaryText="No ToDos found" />
      }
    </List>
  </Paper>
);

export default connect(mapStateToProps, mapDispatchToProps)(ToDos);
