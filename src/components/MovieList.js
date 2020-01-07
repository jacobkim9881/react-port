import React from 'react'
import styled from 'styled-components'
import movies from './movie.json'

class Portfolio extends React.Component {
    render() {
    
    return (          
        <Square>
            {movies.map(movie =>         
            <a href={movie.adress}>
            <Image src={movie.img} alt={movie.name} /></a>        
            )}
        </Square>
    )
}
}

export default Portfolio

const Square = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 1000px;
    margin: auto;
`;

const Image = styled.img`
    padding: 1rem;
`;