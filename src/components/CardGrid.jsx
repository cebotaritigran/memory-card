function CardGrid({ pokemonImgUrl, pokemonName }) {


    return (
        <>
            <div className="card">
                 <div class="border" aria-hidden="true"></div>
                <img src={pokemonImgUrl} alt={pokemonImgUrl}></img>
                <div className="pokemon-name">{pokemonName}</div>
            </div>
        </>
    )

}

export { CardGrid }