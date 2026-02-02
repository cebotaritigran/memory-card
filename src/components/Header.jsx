function Header({ score, bestScore }) {
    return (
        <>
            <div className="header-container">
                <div>
                    <div className="header">Pokemon Memory Game</div>
                    <div className="header-info">Each click the game shuffles and remembers who you clicked on; try not to click the same Card twice!</div>
                </div>
                <div className="score-container">
                    <div>Current Score: {score}</div>
                    <div>Best Score: {bestScore}</div>
                </div>
            </div>
        </>
    )
}

export { Header }