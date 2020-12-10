import {FilteringState} from "../../types/filter";
import {genres, Genres} from "../../Components/FilterForm";

export const decideFilters = ({filter, ordering}: FilteringState) => {
    let returnString = "";
    if (filter.year.to && filter.year.from) {
        returnString += `&year__gte=${filter.year.from}&year__lte=${filter.year.to}`;
    }
    const regex = decideRegex(filter.genres);
    returnString += `&genre__regex=${regex}`;
    if (ordering) {
        const orderingPrefix = ordering.order === "asc" ? "" : "-"; // Django needs - to sort desc
        returnString += `&ordering=${orderingPrefix}${ordering.key}`;
    }
    return returnString;
};

const decideRegex = (filterGenres: {[key in Genres]: boolean}) => {
    let regex = "(";
    const checkedGenres = genres.filter(genre => filterGenres[genre]);
    for (let i = 0; i < checkedGenres.length; i++) {
        regex+= checkedGenres[i].toString();
        regex+= i === checkedGenres.length - 1 ? "" : "|"; // Last element, don't add final |
    }
    regex += ")";
    return regex;
}