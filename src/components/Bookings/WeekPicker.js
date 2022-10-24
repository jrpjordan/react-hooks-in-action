import React, {useReducer} from "react";
import reducer from "./weekReducer";
import { getWeek } from "../../utils/date-wrangler";

export default function WeekPicker({date}) {
    const [week, dispatch] = useReducer(reducer, date, getWeek);

    return (
        <p className="datePicker">
            <button 
                onClick={() => dispatch({type: "PREV_WEEK"})}>
                    Previous
            </button>
            <button
                onClick={() => dispatch({type: "TODAY"})}>
                    Today
            </button>
            <button
                onClick={() => dispatch({type: "NEXT_WEEK"})}>
                    Next
            </button>
            {week.start.toDateString()} - {week.end.toDateString()}
        </p>
    )
}