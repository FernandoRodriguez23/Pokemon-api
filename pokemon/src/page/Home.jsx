import React, {useState} from "react";
import PokeBase from "../components/PokeBase";
import SearchForm from "../components/SearchForm";
import useFetch from "../util/useFetch";
import { Link } from "react-router-dom";
import { CgPokemon } from "react-icons/cg";

function Home() {
  const [query, setQuery] = useState("");
  const { data, loading } = useFetch("/");
  const { results, count } = data;
  console.log(data);
  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <>
      <div className="top"></div>
      <SearchForm query={query} setQuery={setQuery} />
      {/* <Link to={data.next}>Next</Link> */}
      <div className="container">
        {results
        .filter((result)=> {
            return result.name.toLowerCase().includes(query.toLowerCase())
        })
        .map((result) => {
          const { name, i } = result;
          return (
            <div key={i} className="poke-links">
              <Link to={`/${name}`} className="poke-link">
                <CgPokemon style={{ fontSize: 30 }} className="icon" /> {name}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="footer"></div>

      {/* <PokeBase /> */}
    </>
  );
}

export default Home;
