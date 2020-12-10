import {Action} from "redux";
import {RootState} from "../Reducers";
import {ThunkAction} from "redux-thunk";

type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

export default AppThunk;