export const ADD_REVIEW = 'ADD_REVIEW';
export const ADD_REVIEWS = 'ADD_REVIEWS';
export const UPDATE_REVIEWS = 'UPDATE_REVIEWS';

export type IdTypes = "movie_id" | "id" | "user_id";

export type ReviewScores = 1 | 2 | 3 | 4 | 5;

export type Review = {
    id: number,
    movie: number,
    user: number,
    description: string,
    score: ReviewScores
}

type AddReviewAction = {
    type: typeof ADD_REVIEW,
    payload: Review
}

type AddReviewsAction = {
    type: typeof ADD_REVIEWS,
    payload: Array<Review>
}

type UpdateReviewsAction = {
    type: typeof UPDATE_REVIEWS,
    payload: Array<Review>
}

export type ReviewActionTypes = AddReviewAction | AddReviewsAction | UpdateReviewsAction;

export type PostReviewResponse = { id: number}