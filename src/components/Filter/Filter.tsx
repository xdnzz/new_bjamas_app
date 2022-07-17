import {IFilter} from '../../@types/AllTypes';


export function Filter({title}: IFilter) {
    return (
        <div>
            <p className="pb-6 font-semibold">Category</p>
            <label> <input type="checkbox"/>{title}</label>   
        </div>
    )
}