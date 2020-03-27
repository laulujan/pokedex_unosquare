import React, { useState } from 'react';
import getPokemon from '../../Services/getPokemon';
import Pokedex from '../Pokedex/Pokedex';
import {Container, Row, Col, Input, Button} from 'reactstrap';


function Search (){
    const [pokemonName, setPokemonName] = useState([]);
    const [pokemon, setPokemon] = useState({});
    const [pokedex, setPokedex] = useState([]);



    const onChange = function(e){
        setPokemonName(e.target.value)
    }

    const onClick = async function (pokemonName){
        let pokemon = await getPokemon(pokemonName)
        setPokemon(pokemon);
        setPokedex([...pokedex, pokemon]);
    }


    return(
        <Container>
            <div>
                <Input type="text" name="pokemonName"  onChange={(e)=>onChange(e)} value={pokemonName}/>
                <Button color="primary" onClick={()=>onClick(pokemonName)}>Catch</Button> 
            </div>
            
            {
                !pokemon.sprites ? <div> No Pokemons captured yet </div> : <Pokedex pokedex={pokedex}/>
            }
            
        </Container>
    )
}

export default Search;