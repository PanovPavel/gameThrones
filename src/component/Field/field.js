export const Field =({field, label, characterData})=>{
    return(
        <>
            <div className={[field]}>
                <mark>{label}</mark>
                <span>{characterData[field]}</span>
            </div>
        </>
    )
}
