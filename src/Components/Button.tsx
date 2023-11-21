import React from 'react';
import { FilterButtonDiv, FilterDiv } from '../Styled/styled';

interface FilterButtonsProps {
  filterHandler: (criteria: string) => void;
  clearFiltersHandler: () => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ filterHandler, clearFiltersHandler }) => {
  return (
    <FilterDiv>
      <FilterButtonDiv>
        <button onClick={() => filterHandler('Frontend')}>Frontend</button>
        <button onClick={() => filterHandler('Fullstack')}>Fullstack</button>
        <button onClick={() => filterHandler('Backend')}>Backend</button>
      </FilterButtonDiv>
      <div>
        <button onClick={clearFiltersHandler}>Clear</button>
      </div>
    </FilterDiv>
  );
};

export default FilterButtons;
