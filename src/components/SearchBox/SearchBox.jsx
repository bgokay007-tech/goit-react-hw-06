import { useDispatch, useSelector } from "react-redux";
import {
    changeFilter,
    selectNameFilter,
} from "../../redux/filtersSlice";

export default function SearchBox() {
    const dispatch = useDispatch();
    const value = useSelector(selectNameFilter);

    return (
        <input
            value={value}
            onChange={e => dispatch(changeFilter(e.target.value))}
            placeholder="Search..."
        />
    );
}