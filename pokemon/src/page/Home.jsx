import React from 'react'
import PokeBase from '../components/PokeBase';
import SearchForm from '../components/SearchForm'
import useFetch from '../util/useFetch';
import {Link} from 'react-router-dom'

function Home() {
    const {data, loading} = useFetch("/")
    const{results} = data
    console.log(data);
    if(loading){
        return <div className="loading"></div>
    }
    return (
        <>

            <SearchForm />
            {results.map((result) => {
                const {name, i} = result
                return (
                    <div key={i}>
                        <Link to={`/${name}`}>

                        <h3>{name}</h3>
                        </Link>
                    </div>
                )
            })}

            {/* <PokeBase /> */}
        </>
    )
}

export default Home
