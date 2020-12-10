import React from 'react';
import {Movie} from '../types/movies';

import { Jumbotron } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import '../Style/MoviePage.css'

const MovieInfoCard = (movie: Movie) => {

    return(
        <Jumbotron className={"jumbo"}>
            <Container align-self={'center'} >
                <Row>
                    <Col className='MoviePoster' xs='12' md='4'>
                        <Image className='poster mx-auto d-block img-fluid movie-img' src={movie.image} />
                    </Col>

                    <Col className='MovieDetails' xs='12' md='8'>
                        <section className='d-flex flex-column justify-content-between p-3'>
                            <h1 className='title font-weight-bold mb-2'>{movie.title}
                                <span className='font-weight-light'> ({movie.year})</span>
                            </h1>
                            
                            <div className="genre mb-1">Genre: {movie.genre}</div>
                            <div className="runtime mb-1">Runtime: {movie.length}min</div>
                            <div className="description mb-1">Description: <br />
                                {movie.description}
                            </div>
                        </section>

                    </Col>
                </Row>
            </Container>
        </Jumbotron >
    );

}

export default MovieInfoCard;
