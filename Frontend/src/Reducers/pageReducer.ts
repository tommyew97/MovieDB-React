import {CHANGE_PAGE, PAGE_SIZE, ChangePageAction, PageState, UPDATE_TOTAL_PAGES, PageActions} from "../types/page";

const initialPageState = {
    total: 1,
    current: 1,
    next: null,
    prev: null,
}

const page = (state: PageState = initialPageState, action: PageActions) => {
    switch(action.type) {
        case CHANGE_PAGE:
        case UPDATE_TOTAL_PAGES:
            return {...state, ...action.payload}
        default:
            return state;
    }
};

export default page;