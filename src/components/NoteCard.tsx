export const NoteCard = () => {
    return (
        <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
            <span className='text-sm font-medium text-slate-300'>Há 2 dias</span>
            <p className='text-sm leading-6 text-slate-400'>O Drizzle possui um plugin do ESLint para evitar que realizemos <span className='text-lime-500'>updates</span> ou <span className='text-lime-500'>deletes</span> sem <span className='text-lime-500'>where</span>...
                Para configurar o plugin, é preciso instalar como abaixo:</p>
            <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
        </div>
    )
}
