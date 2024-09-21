import { useAppDispatch, useAppSelector } from '../../store/storeHooks.js';
import { IMenuItem } from '../../types/types.js';

import {
  fetchCompanyMenu,
  selectAll,
  selectStatus,
} from '../../reducers/company/company.js';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { CompanyMenuStatus } from '../../types/company/company.js';
import { UseFormRegister } from 'react-hook-form';

export type Props = {
  className: string;
  register: UseFormRegister<any>;
};

export const CompanyMenu = ({ className, register }: Props) => {
  const dispatch = useAppDispatch();
  const data: IMenuItem[] | null = useAppSelector(selectAll);
  const status = useSelector(selectStatus);
  useEffect(() => {
    console.log('STATUS: ' + status);
    if (
      status === CompanyMenuStatus.IDLE ||
      status === CompanyMenuStatus.FAILED
    )
      dispatch(fetchCompanyMenu());
  }, [status, dispatch]);

  const content = (
    <select id='company' className={className} {...register('companyId')}>
      {data.map((d) => (
        <option key={d.key} value={d.value}>
          {d.value}
        </option>
      ))}
    </select>
  );
  const loading = <select id='company'></select>;

  return status === CompanyMenuStatus.LOADING ? loading : content;
};
