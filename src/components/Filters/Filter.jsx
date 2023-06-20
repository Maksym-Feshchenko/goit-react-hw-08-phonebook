import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

const Filter = function () {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <label>
      Find contacts by name
      <input
        placeholder="Enter a name"
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;