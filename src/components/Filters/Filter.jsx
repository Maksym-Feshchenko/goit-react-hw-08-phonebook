import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import css from './Filter.module.css';

const Filter = function () {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <label className={css.filter}>
      <span className={css.label}>Find contacts by name</span>
      <input
        className={css.input}
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
