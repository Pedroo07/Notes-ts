import { useState } from 'react'
import Logo from './assets/Logo.svg'
import { AddNoteCard } from './components/AddNoteCard'
import { NoteCard } from './components/NoteCard'
type Note = {
  id: string,
  date:Date,
  content: string
}
export const App = () => {
  const [notes, SetNotes] = useState<Note[]>([])
  const onNoteCreated = (content : string) => {
    let newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content
    }
    SetNotes([newNote, ...notes])
  }
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={Logo} alt="Logo Nlw" />
      <form className='w-full'>
        <input
          className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500'
          type="text"
          placeholder='Busque em suas notas...' />
      </form>
      <div className='h-px bg-slate-700' />
      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        <AddNoteCard onNoteCreated={onNoteCreated}/>
        {notes.map(note => {
          return <NoteCard key={note.id} note={note} />
        })}
      </div>
    </div>
  )
}