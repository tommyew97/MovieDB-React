import React from "react";
import Pagination from "react-bootstrap/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Reducers";
import {changePage, newPage} from "../Actions/pageActions";

const PageBar = () => {
    const dispatch = useDispatch();
    const current = useSelector((state: RootState) => state.page.current);
    const total = useSelector((state: RootState) => state.page.total);
    const items: Array<any> = [];

    const onClick = (newCurrent: number) => {
        if (newCurrent < 1 || newCurrent > total) return;
        dispatch(newPage(newCurrent, total));
    };

    for (let i = 1; i <= total; i++) {
        const active = i === current;
        items.push(<Pagination.Item active={active} onClick={() => onClick(i)}>
            {i}
        </Pagination.Item>);
    }

    return (
        <Pagination>
            <Pagination.Prev onClick={() => onClick(current - 1)}/>
            {items}
            <Pagination.Next onClick={() => onClick(current + 1)}/>
        </Pagination>
    )
};

export default PageBar;