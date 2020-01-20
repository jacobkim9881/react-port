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
    position: relative;
    top: 100px;
    width: 57%;
    margin: 0 auto;
        @media (max-width: 1500px) {
            width: 70%;
        }
`;

const Image = styled.img`
    padding: 1rem;
`;