import {SubmitHandler, useForm} from "react-hook-form";
import React, {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {changeFilters} from "../Actions";
import '../Style/BrowsePage.css'
import '../Style/FilterForm.css'

export type Genres = "Action" | "Comedy" | "Musical" | "Romance" | "Drama" | "Horror";
export const genres: Array<Genres> = ['Action', 'Comedy', 'Musical', 'Romance', 'Drama', 'Horror'];
export type FilterFormData = {
    [key in Genres]: boolean;
} & {
    from: string;
    to: string;
};

const FilterForm = () => {
    const dispatch = useDispatch();
    const {register, handleSubmit, errors} = useForm();

    const onSubmit: SubmitHandler<FilterFormData> = (data) => {
        const {from, to} = data;
        const difference = parseInt(to) - parseInt(from);
        if (difference < 0)
            alert("To field must be greater than or equal to From field");
        else {
            dispatch(changeFilters(data));
        }
    }
    const genreElements = genres.map(genre =>
        <div className={`${genre.toLowerCase()}-checkbox`} key={genre}>
            <div className="filter-movies">{genre}</div>
            <input
                type="checkbox"
                placeholder={genre}
                name={genre}
                ref={register}/>
        </div>
    )
    const numberRules = {
        max: {value: 2020, message: "Max value cannot be in the future"},
        minLength: {value: 4, message: "Must be a 4 digit number"}
    };
    return (<form>
        <div className="from-to-year">
            <input type="number" placeholder="From year" name="from" ref={register(numberRules)}/>
            <input type="number" placeholder="To year" name="to" ref={register(numberRules)}/>
        </div>
        {errors.to && <p className={"error"}>{errors.to.message}</p>}
        {genreElements}
        <div className = "d-flex filter-options">
            <button type="submit" className="btn btn-secondary" onClick={handleSubmit(onSubmit)}>Filter movies</button>
        </div>
    </form>);
};

export default FilterForm;