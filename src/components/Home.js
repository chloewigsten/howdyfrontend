import { useState, useEffect } from 'react'


function Home() {

    return (
    <div className="Home">
        <form>
            <label for='keyword'>Start your search: </label>
            <input id='keyword' type='text' />
        </form>
        <button onClick={useEffect}>Go</button>
    </div>
        )
}

export default Home;