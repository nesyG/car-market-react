import { observer } from "mobx-react";

const SortDropdown = (props) => {
return (
    <div className="sorting-section">
<span className="lead">Sort by:</span>
<select
  className="form-select form-select-sm sort-container"
  aria-label="Default select"
  onChange={props.setSortValue}
  value={props.sortData}
>
  <option value={""}>{null}</option>
  <option value="price|asc">Price (Lowest to Highest)</option>
  <option value="price|desc">Price (Highest to Lowest)</option>
</select>
</div>
)
}

export default observer(SortDropdown);
