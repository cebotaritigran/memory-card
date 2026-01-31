function CardGrid({ pokemonImgUrl, pokemonName }) {


    return (
        <>
            <div className="card">
                <img src={pokemonImgUrl} alt={pokemonImgUrl}></img>
                <div className="pokemon-name">{pokemonName}</div>
            </div>
        </>
    )

}

export { CardGrid }