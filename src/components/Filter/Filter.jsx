import { useDispatch } from 'react-redux';
import { Div, Input } from './Filter.styled';
import { setFilter } from '../../redux/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleInputChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Div>
      <label htmlFor="filter">Find contacts by name</label>
      <Input type="text" name="filter" onChange={handleInputChange} />
    </Div>
  );
};

export default Filter;
