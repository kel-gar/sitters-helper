import React, { Component } from 'react';
import SitterNotes from './SitterNotes';

class NoteManager extends Component { 
  render() {
   return ( 

     <div className='notemanager'>

      <SitterNotes />

       My Note Manager Page will go here
       <i class="fas fa-edit fa-3x"></i>
       EDIT NOTE
       <i class="fas fa-plus fa-3x"></i>
       ADD NOTE
       <i class="fas fa-minus fa-3x"></i>
       DELETE NOTE
       <i class="fas fa-undo fa-3x"></i>
       UNDO LAST 
      </div>
      
      
    );
  }
}

export default NoteManager;