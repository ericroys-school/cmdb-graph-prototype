import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../store/store.js';
import { IMenuItem } from '../../types/types.js';
import {
  CompanyMenuState,
  CompanyMenuStatus,
} from '../../types/company/company.js';
import { GET_ALL_COMPANY_IDS } from '../../types/queries.js';
import { client } from '../../config/apollo.js';

const initialState: CompanyMenuState = {
  status: CompanyMenuStatus.IDLE,
  data: [],
  error: null,
};

export const companyMenuReducer = createSlice({
  name: 'companyMenu',
  initialState: initialState,
  reducers: {
    getCompanyMenuSuccess: (state, action: PayloadAction<IMenuItem[]>) => {
      return action.payload
        ? {
            ...state,
            payload: state.data.concat(action.payload),
          }
        : state;
    },
    getCompanyMenuFail: (state) => {
      return { ...state, isComMenuLoading: false };
    },
    getCompanyMenuLoading: (state) => {
      return { ...state, isComMenuLoading: true };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanyMenu.pending, (state) => {
        state.status = CompanyMenuStatus.LOADING;
      })
      .addCase(fetchCompanyMenu.fulfilled, (state, action) => {
        state.status = CompanyMenuStatus.DONE;
        if (action.payload) state.data = action.payload;
      })
      .addCase(fetchCompanyMenu.rejected, (state) => {
        state.status = CompanyMenuStatus.FAILED;
      });
  },
});

export const {
  getCompanyMenuSuccess,
  getCompanyMenuFail,
  getCompanyMenuLoading,
} = companyMenuReducer.actions;

export const fetchCompanyMenu = createAsyncThunk(
  'companyMenu/fetchMenuData',
  async () => {
    try {
      const { data, error } = await client.query({
        query: GET_ALL_COMPANY_IDS,
        // fetchPolicy: 'network-only',
        variables: { where: { isMarkedDelete: false } },
      });
      if (error) {
        console.log(error);
        return Promise.reject({ reason: error });
      }

      const mopts: IMenuItem[] = [];
      //convert query response to menu
      if (data && data.companies)
        data.companies.forEach((c) =>
          mopts.push({ key: c.instanceId, value: c.name })
        );
      return mopts;
    } catch (err) {
      console.log(err);
      return Promise.reject({ reason: err });
    }
  }
);

export const selectAll = (state: RootState) => state.reducer.companyMenu.data;
export const selectStatus = (state: RootState) =>
  state.reducer.companyMenu.status;
