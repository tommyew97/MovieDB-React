import {Link} from "react-router-dom";
import React from "react";
import '../Style/BrowsePage.css';

type Props = {
    movieId: number,
    image: string,
    title: string
}

export default function Header(props: Props) {
    const title = props.title.length < 20 ? props.title : props.title.slice(0, 20) + "...";
    return (
        <div className="p-2">
            <Link to={`/movie/${props.movieId}`} style={{textDecoration: 'none'}}>
                <img src={props.image}/>
                <h5 className="movie-title">{title}</h5>
            </Link>
        </div>
    );

}

