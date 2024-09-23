import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import { RootState } from '../../store/store.js';
import { IMenuPC } from '../../types/types.js';
import {
  OrgMenuState,
  OrgMenuStatus,
} from '../../types/organization/organization.js';
import { GET_COMPANYORG_IDS } from '../../types/queries.js';
import { client } from '../../config/apollo.js';
// import { number } from 'zod';

const initialState: OrgMenuState = {
  status: OrgMenuStatus.IDLE,
  data: [],
  error: null,
};

export const orgMenuReducer = createSlice({
  name: 'orgMenu',
  initialState: initialState,
  reducers: {
    getOrgMenuSuccess: (state, action: PayloadAction<IMenuPC[]>) => {
      return action.payload
        ? {
            ...state,
            payload: state.data.concat(action.payload),
          }
        : state;
    },
    getOrgMenuFail: (state) => {
      return { ...state, isOrgMenuLoading: false };
    },
    getOrgMenuLoading: (state) => {
      return { ...state, isOrgMenuLoading: true };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrgMenu.pending, (state) => {
        state.status = OrgMenuStatus.LOADING;
      })
      .addCase(fetchOrgMenu.fulfilled, (state, action) => {
        state.status = OrgMenuStatus.DONE;
        if (action.payload) state.data = action.payload;
      })
      .addCase(fetchOrgMenu.rejected, (state) => {
        state.status = OrgMenuStatus.FAILED;
      });
  },
});

export const { getOrgMenuSuccess, getOrgMenuFail, getOrgMenuLoading } =
  orgMenuReducer.actions;

export const fetchOrgMenu = createAsyncThunk(
  'orgMenu/fetchMenuData',
  async () => {
    try {
      const { data, error } = await client.query({
        query: GET_COMPANYORG_IDS,
        // fetchPolicy: 'network-only',
        variables: { where: { isMarkedDelete: false } },
      });
      // console.log(JSON.stringify(data));
      if (error) {
        console.log(error);
        return Promise.reject({ reason: error });
      }

      const mopts: IMenuPC[] = [];
      //convert query response to menu
      if (data && data.organizations)
        data.organizations.forEach((c) => {
          let cc = c.company.length > 0 ? c.company[0].instanceId : null;
          mopts.push({ parent: cc, key: c.instanceId, value: c.name });
        });
      // console.log('HERE:' + JSON.stringify(mopts));
      return mopts;
    } catch (err) {
      console.log(err);
      return Promise.reject({ reason: err });
    }
  }
);

export const selectAll = (state: RootState) => state.reducer.orgMenu.data;
export const selectStatus = (state: RootState) => state.reducer.orgMenu.status;

const selectItems = (state: RootState) => state.reducer.orgMenu.data;
const selectItemId = (_state: RootState, id: string) => id;

export const selectItemsById = createSelector(
  [selectItems, selectItemId],
  (items, itemId) =>
    items.filter((i) => {
      // console.log(i);
      return i.parent === itemId;
    })
);
