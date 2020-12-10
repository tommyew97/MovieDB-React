import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReviewForm from "../Components/ReviewForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Reducers";
import { Movie } from '../types/movies';
import {fetchMovie, searchMovies} from '../Actions';
import { fetchReviewsByIdType } from '../Actions/reviewActions';
import '../Style/MoviePage.css';
import { Review } from '../types/reviews';
import ReviewCard from '../Components/ReviewCard';
import Header from '../Components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardColumns from 'react-bootstrap/CardColumns';
import MovieInfoCard from '../Components/MovieInfoCard';
import { Card } from 'react-bootstrap';


interface MovieParams {
    movieId: string
}

const MoviePage = () => {
    const { movieId } = useParams<MovieParams>();

    const loggedIn = useSelector((state: RootState) => state.user.details.username);
    const reviews = useSelector((state: RootState) => state.reviews.byId);
    const movie: Movie = useSelector((state: RootState) => {
        if (Object.is(state.movies.byId[+movieId], undefined)) {
            return { id: -1, title: 'loading', genre: '', year: 0, length: 0, description: '', image: '' }
        } else {
            return state.movies.byId[+movieId]
        }
    });
    const [reviewList, setReviewList] = useState<Review[]>([])


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMovie(+movieId))
        dispatch(fetchReviewsByIdType('movie_id', +movieId))
    }, [dispatch, movieId])

    useEffect(() => {
        setReviewList(Object.values(reviews));
    }, [reviews])

    const showForm = loggedIn ?
        <div className={"revs-form"}>
            <ReviewForm movieId={+movieId} />
        </div>: <Link to={"/login"} className={"btn btn-dark log-in-button"}>Log in to post a review</Link>;
    return (
        <Container className='MoviePage clearfix' fluid={true}>
            <header className='headerRow'>
                <Header searchbar={false} />
            </header>
            <Row className='MovieInfoRow'>
                <MovieInfoCard {...movie} />
            </Row>
            <Row className='ReviewRow p-5'>
                <Col className='ReviewCol' align-self={'center'}>
                    <div className="Reviews">
                            <div className='FormCard'>
                                <Card.Body>
                                    {showForm}
                                </Card.Body>
                                <hr/>
                            </div>
                            {reviewList.map(value =>
                                <div>
                                    <ReviewCard {...value} key={`card-${value.id}`} />
                                <br style={{clear:"both"}}/>
                                </div>)}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default MoviePage;

