import React from "react";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/cjs/ToggleButton";
import {CHANGE_ORDERING, OrderingAction} from "../types/ordering";
import {changeOrdering} from "../Actions";
import {useDispatch} from "react-redux";

const OrderingToggle = () => {
    const dispatch = useDispatch();
    return (
        <ToggleButtonGroup type={"radio"} name={"sort"} defaultValue={"asc"}>
            <ToggleButton
                value={"asc"}
                onClick={() => dispatch(changeOrdering({order: "asc"}))}
            >
                ↓
            </ToggleButton>
            <ToggleButton
                value={"desc"}
                onClick={() => dispatch(changeOrdering({order: "desc"}),)
                }
            >
                ↑
            </ToggleButton>
        </ToggleButtonGroup>
    );
};

export default OrderingToggle;