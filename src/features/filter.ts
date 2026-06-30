import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export type FilterState = {
  query: string;
  status: 'all' | 'active' | 'completed';
};

const initialState: FilterState = {
  query: '',
  status: 'all',
};

export const filterTodoSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterQuery: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.query = action.payload;
    },
    setStatusFilter: (
      state,
      action: PayloadAction<'all' | 'active' | 'completed'>,
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.status = action.payload;
    },
  },
});

export const { setFilterQuery, setStatusFilter } = filterTodoSlice.actions;

export default filterTodoSlice.reducer;
