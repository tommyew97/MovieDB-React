export const CHANGE_ORDERING = "CHANGE_ORDERING";
export const CLEAR_ORDERING = "CLEAR_ORDERING";

export type OrderingAction = { type: string, payload: OrderingActionPayload};
export type OrderingActionPayload = OrderingState | {key: OrderingOptions} | {order: "asc" | "desc"};
export type OrderingOptions = "" | "title" | "length" | "year"
export type OrderingState = {
    key: OrderingOptions,
    order: "asc" | "desc",
}
