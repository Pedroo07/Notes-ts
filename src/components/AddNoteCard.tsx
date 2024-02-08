import *  as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import {toast} from 'sonner'
type OnNoteCreated = {
    onNoteCreated : (content:string) => void
}
export const AddNoteCard = ({onNoteCreated}: OnNoteCreated) => {
    const [showOnboarding, setShowOnboarding] = useState(true)
    const [content, setContent] = useState('')

    const handleStartEditor = () => {
        setShowOnboarding(false)
    }
    const handleResetEditor = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let value = event.target.value
        if (value === '') {
            setShowOnboarding(true)
        }
        setContent(value)
    }
    const handleSaveNote = (event : FormEvent) => {
       event.preventDefault()
       onNoteCreated(content)
       toast.success('Nota criada com sucesso!')
    }
    return (
        <Dialog.Root>
            <Dialog.Trigger className='rounded-md bg-slate-700 p-5 flex flex-col  text-left gap-3 overflow-hidden'>
                <span className='text-sm font-medium text-slate-200'>Adicionar Nota</span>
                <p className='text-sm leading-6 text-slate-400'>Grave uma nota em audio que será convertido para texto automaticamente.</p>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className=' inset-0 fixed bg-black/45' />
                <Dialog.Content className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none'>
                    <Dialog.DialogClose className='absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100'>
                        <X className='size-5' />
                    </Dialog.DialogClose>
                    <form onSubmit={handleSaveNote} className='flex-1 flex flex-col'>
                        <div className='flex flex-1 flex-col gap-3 p-5'>
                            <span className='text-sm font-medium text-slate-300'>
                                Adicionar Nota
                            </span>
                            {showOnboarding ? (<p className='text-sm leading-6 text-slate-400'>
                                Começe <button className='text-lime-500 hover:underline'>gravando uma nota</button> em aúdio ou <button className='text-lime-500 hover:underline' onClick={handleStartEditor}>apenas texto</button>.
                            </p>) : <textarea onChange={handleResetEditor} autoFocus className='flex-1 text-sm outline-none bg-transparent text-slate-400 resize-none leading-6' />}
                        </div>
                        <button type='submit'
                            className='w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500'>Salvar Nota</button>
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
