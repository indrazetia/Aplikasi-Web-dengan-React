import React from 'react';
import NoteList from './NoteList';
import { getInitialData } from '../utils/index';
import NoteInput from './noteInput';

class NoteApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        notes: getInitialData(),
      }
    
      this.onDeleteHandler = this.onDeleteHandler.bind(this);
      this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }
  
    onAddNoteHandler({ title, body }) {
      this.setState((prevState) => {
        return {
            notes: [
            ...prevState.notes,
            {
                id: +new Date(),
                title,
                body,
                archived: false,
                createdAt: new Date().toJSON(),
            }
          ]
        }
      });
    }
    
    onDeleteHandler(id) {
      const notes = this.state.notes.filter(note => note.id !== id);
      this.setState({ notes });
    }
    
    render() {
      return (
        <div className="note-app__body">
          <h1>Notes</h1>
          <NoteInput addNote={this.onAddNoteHandler} />
          <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
        </div>
      );
    }
   }
 
export default NoteApp;