import React from "react";
import {CHANGE_ORDERING, OrderingOptions, OrderingState} from "../types/ordering";
import {useDispatch} from "react-redux";
import Form from "react-bootstrap/Form";
import _ from "lodash";
import OrderingToggle from "./OrderingToggle";
import {changeOrdering} from "../Actions";

type Props = {
    options: OrderingOptions[]
}

const OrderingDropDown = (props: Props) => {
    const dispatch = useDispatch();
    const items = props.options.map(option =>
        <option
            onClick={() => dispatch(
                changeOrdering({key: option}))
            }
            key={option}>
            {_.startCase(option)}
        </option>);

    return (<Form inline id={"select-ordering-button"} title={"Order by"}>
        <Form.Control as={"select"} custom>
            <option>Choose Sort...</option>
            {items}
        </Form.Control>
        <OrderingToggle />
    </Form>);
};

export default OrderingDropDown;