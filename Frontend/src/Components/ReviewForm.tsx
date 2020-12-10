import React from "react";
import {SubmitHandler, useForm} from 'react-hook-form';
import '../Style/Review.css';
import {useDispatch} from "react-redux";
import {postReview} from "../Actions";
import {Review, ReviewScores} from "../types/reviews";


type FormValues = {
    description: string,
    score: 1 | 2 | 3 | 4 | 5,
};

type FormProps = {
    movieId: number,
}

const ReviewForm = (props: FormProps) => {
    const {register, handleSubmit} = useForm<FormValues>({
        criteriaMode: 'all',
        reValidateMode: 'onSubmit',
    });
    const dispatch = useDispatch();
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        dispatch(postReview(props.movieId, data.description, data.score));
    };
    return (
        <div className={"review-form"}>
            <form>
                <div className={"scores"}>
                    <label htmlFor={"score-1"}>1</label>
                    <input name="score" type="radio" value={1} id={"score-1"} ref={register({required: true})}/>
                    <label htmlFor={"score-2"}>2</label>
                    <input name="score" type="radio" value={2} id={"score-2"} ref={register({required: true})}/>
                    <label htmlFor={"score-3"}>3</label>
                    <input name="score" type="radio" value={3} id={"score-3"} ref={register({required: true})}/>
                    <label htmlFor={"score-4"}>4</label>
                    <input name="score" type="radio" value={4} id={"score-4"} ref={register({required: true})}/>
                    <label htmlFor={"score-5"}>5</label>
                    <input name="score" type="radio" value={5} id={"score-5"} ref={register({required: true})}/>
                </div>
                <textarea
                    name={'description'}
                    placeholder={"Write a review..."}
                    ref={register({
                        required: true,
                    })}
                />
                <button className="btn btn-secondary submit-button" onClick={handleSubmit(onSubmit)}>Submit</button>
            </form>
        </div>
    )
};

export default ReviewForm;