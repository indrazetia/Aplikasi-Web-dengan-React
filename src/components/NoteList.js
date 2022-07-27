import React from 'react';
import NoteItem from './NoteItem';
 
function NoteList({ notes, onDelete }) {
 return (
   <>
    <section className="mb-15">
      <h2>Catatan Aktif</h2>
      <div className="notes-list">
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              {...note} />
          ))
        ) : (
          <p>Tidak ada catatan</p>
        )}
      </div>
      </section>
    </>
 );
}
 
export default NoteList;