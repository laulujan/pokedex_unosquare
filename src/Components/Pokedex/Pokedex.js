import React from 'react';
import {Container, Col } from 'reactstrap';
import styles from './styles.css'

function Pokedex(props){
    return (
        props.pokedex.length > 0) ? (
        
        <Container className="pokedex">
            {props.pokedex.map(p =>(
                
                <Col>
                     <div key={p.id}>
                        <h2>Name: {p.name}</h2>
                         <img  alt={p.name}src={p.sprites.front_default}/>
                        <p> id: {p.id}</p>
                     </div>
                </Col>
            ))}
        </Container>
        ): ( <div></div>)
}

export default Pokedex;