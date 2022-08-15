import { useEffect } from 'react';
import { useHooks } from '../../core'

function Filters() {
    const { memoTypes, memoGenerations, selectedType, setSelectedType, selectedGenerationId, setSelectedGenerationId, setSelectedGeneration } = useHooks()
    useEffect(() => {
        setSelectedGeneration(selectedGenerationId)
    }, [selectedGenerationId])

    const { loading: loadingGenerations, data: dataGenerations } = memoGenerations

    return (
        <>
            <div className='type-list'>
                {memoTypes?.map((type: any) => (
                    <button key={"type_" + type?.id} className={type?.id === selectedType ? 'typeSelected' : ''} onClick={() => setSelectedType(type?.id)}>
                        {type?.name}
                    </button>
                ))}
            </div>

            <div className='generations-list'>
                {!loadingGenerations && dataGenerations?.generation?.map((generation: any) => (
                    <button key={"generation_" + generation?.id} className={generation?.id === selectedGenerationId && 'generationSelected'} onClick={() => setSelectedGenerationId(generation?.id)}>
                        {generation?.name}
                    </button>
                ))}
            </div>
        </>
    )
}

export default Filters