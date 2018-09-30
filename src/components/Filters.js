import React from 'react';
import FilterLink from './FilterLink';
import { ToggleActionFilters } from '../actions';

// Add Action filter type strings as the fitler prop so the the FilterLink
// component has this value.
const Filters = () => (
  <div>
    <FilterLink filter={ToggleActionFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={ToggleActionFilters.SHOW_TODO}>
      Todo
    </FilterLink>
    <FilterLink filter={ToggleActionFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>
);

export default Filters;
