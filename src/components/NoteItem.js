import React from 'react';
import NoteItemBody from './NoteItemBody';
import DeleteButton from './DeleteButton';
 
function NoteItem({ title, body, id, onDelete }) {
 return (
   <div className="note-item">
     <NoteItemBody title={title} body={body} />
     <DeleteButton id={id} onDelete={onDelete} />
   </div>
 );
}
 
export default NoteItem;