import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from 'react-bootstrap/Card'
import { Review } from "../types/reviews";
import { ReactComponent as star_empty } from '../Media/star_empty.svg';
import { ReactComponent as star_full } from '../Media/star_full.svg';
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import '../Style/Review.css'

const ReviewCard = (props: Review) => {
    const [open, setOpen] = useState<boolean>(false);
    const [sliceIndex, setSliceIndex] = useState<number>(0);

    const rating = (score: number) => {
        let items: JSX.Element[] = [];
        for (let i = 1; i <= 5; i++) {
            if (score >= i) {
                items[i] = <ListGroup.Item as={star_full} key={`star-${i}`} />
            } else {
                items[i] = <ListGroup.Item as={star_empty} key={`star-${i}`} />
            }
        }
        return items;
    }

    useEffect(() => {
        let index = 0
        if (props.description.length <= 400) {
            index = props.description.length
        } else {
            index = props.description.lastIndexOf(' ', 400)
        }
        setSliceIndex(index)
    }, [props.description])



    return (
        <Card  className="review-card" bg='light' key={`review-${props.id}`}>
            <Card.Body>
                {/* <Card.Subtitle className="text-muted mb-2">Rating:</Card.Subtitle> */}
                <ListGroup horizontal={true} >
                    {rating(props.score)}
                </ListGroup>
                <hr />
                {/* <Card.Subtitle className="text-muted mb-2" >Description: </Card.Subtitle> */}
                <Card.Text as="div" >
                    {props.description.slice(0, sliceIndex) + ` ${(sliceIndex <= 385) ? ' ' : '...'}`}
                    
                    <Collapse in={(open)} >
                        <Card.Text id="collapse-text">
                            {props.description.slice(sliceIndex)}
                        </Card.Text>
                    </Collapse>
                </Card.Text>

            </Card.Body>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="collapse-text"
                aria-expanded={open}
                variant="outline-dark"
                className={`DisplayMore m-auto ${(sliceIndex === props.description.length)? 'd-none': 'd-block'}`} >

                {(open) ? "Show Less" : "Show Rest"}
            </Button>
            <br />
            <Card.Footer>
                <small className="text-muted">ReviewId: {props.id} , UserId: {props.user} </small>
            </Card.Footer>
        </Card>
    )
}

export default ReviewCard;
