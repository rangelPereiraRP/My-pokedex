import { useEffect } from 'react'
import { useHooks } from '../../../../core'
import './styles.scss'

function Filters() {
    const {
        memoTypes,
        memoGenerations,
        selectedType,
        selectedGenerationId,
        setSelectedType,
        setSelectedGeneration,
        setSelectedGenerationId,
        setSelectedStatus
    } = useHooks()

    useEffect(() => {
        setSelectedGeneration()
    }, [selectedType, selectedGenerationId])

    return (
        <div className='filter-container'>
            <strong>Filter: </strong>
            <select className='type-list' onChange={(e) => setSelectedType(e?.target?.value)}>
                <option value={'none'}> None </option>
                {memoTypes?.map((type: any) => (
                    <option key={"type_" + type?.id} value={type?.id} >
                        {type?.name}
                    </option>
                ))}
            </select>


            <select className='generations-list' onChange={(e) => setSelectedGenerationId(Number(e.target.value))}>
                {memoGenerations?.generation?.map((generation: any) => (
                    <option key={"generation_" + generation?.id} value={generation?.id}>{generation?.name}</option>
                ))}
            </select>

            <select className='generations-list' onChange={(e) => setSelectedStatus(e.target.value)}>
                <option value='name'> Name </option>
                <option value={0}> Hp </option>
                <option value={1}> Attack </option>
                <option value={2}> Defense </option>
                <option value={3}> Special-Attack </option>
                <option value={4}> Special-Defense </option>
                <option value={5}> Speed </option>
            </select>
        </div>
    )
}

export default Filters