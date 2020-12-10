import {
    ADD_REVIEW,
    ADD_REVIEWS,
    IdTypes, PostReviewResponse,
    Review,
    ReviewActionTypes,
    ReviewScores,
    UPDATE_REVIEWS
} from "../types/reviews";
import AppThunk from "../types";
import axios from "../api/axiosREST";

const addReview = (review: Review): ReviewActionTypes => {
    return {
        type: ADD_REVIEW,
        payload: review
    }
};
const addReviews = (reviews: Array<Review>): ReviewActionTypes => {
    return {
        type: ADD_REVIEWS,
        payload: reviews
    }
};
const updateReviews = (reviews: Array<Review>): ReviewActionTypes => {
    return {
        type: UPDATE_REVIEWS,
        payload: reviews
    }
};

export const fetchReviewsByIdType = (idType: IdTypes, id: number): AppThunk => {
    return async (dispatch) => {
        const response = await axios.get<Review[]>(`/reviews?${idType}=${id}`);
        dispatch(updateReviews(response.data));
    };
};

export const postReview = (movieId: number, description: string, score: ReviewScores): AppThunk => {
    return async (dispatch, getState) => {
        const userId: number = getState().user.details.userId;
        const review = {user: userId, movie: movieId, description, score};
        const response = await axios.post<PostReviewResponse>(`/reviews/`, review);
        const reviewId = response.data.id;
        dispatch(addReview({...review, id: reviewId}));
    };
};