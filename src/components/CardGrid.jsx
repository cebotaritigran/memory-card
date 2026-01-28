function CardGrid({ pokemon }) {


    return (
        <>

            <div className="card">
                <img src={pokemon} alt={pokemon}></img>
            </div>



        </>
    )

}

export { CardGrid }