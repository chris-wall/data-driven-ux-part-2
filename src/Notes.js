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

const { createNote, deleteNote, modifyNote } = Actions;

const style = {
  minHeight: 100,
  width: '85%',
  margin: 20,
  textAlign: 'left',
  display: 'block',
};

const mapStateToProps = (state) => {
  console.log(state);
  return ({
    notes: state.get('notes').toIndexedSeq().toArray()
  });
};

const mapDispatchToProps = (dispatch) => ({
  createNote: (note) => { 
    dispatch(createNote(note));
  },
  deleteNote: (index) => {
    dispatch(deleteNote(index));
  },
  modifyNote: (index, note) => {
    dispatch(modifyNote(index, note));
  }
});

const Notes = ({ notes, createNote, deleteNote, modifyNote, ...rest }) => (
  <Paper style={style} zDepth={2}>
    <RaisedButton label="Create a New Note" style={{ width: 500, margin: 20 }} primary={true} onClick={() => createNote('a new note!')} />
    <Divider inset={true} />
    <List>
      { 
        (Array.isArray(notes) && notes.length > 0) ?
          notes.map((n, i) =>  {
            const input = <TextInput 
                            id={`${i}`} 
                            value={n.text} 
                            onBlur={(e) => modifyNote({ id: n.id, text: e.target.value })} 
                          />;
            return (<ListItem 
                      primaryText={input} 
                      key={`note_${i}`} 
                      rightIconButton={
                        <IconButton touch={true} onClick={() => deleteNote(n.id)}>
                          <ActionDelete color={red500} />
                        </IconButton>
                      } 
                    />);
          }) :
          <ListItem primaryText="No Notes found" />
      }
    </List>
  </Paper>
);

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
