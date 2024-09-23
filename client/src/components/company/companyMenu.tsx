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
  //allow set value to parent form state
  setValue?: React.Dispatch<React.SetStateAction<string>>;
};

export const CompanyMenu = ({ className, register, setValue }: Props) => {
  const dispatch = useAppDispatch();
  //get all company menu items from store
  const data: IMenuItem[] | null = useAppSelector(selectAll);
  const status = useSelector(selectStatus);

  //populate store menu items first load
  useEffect(() => {
    if (
      status === CompanyMenuStatus.IDLE ||
      status === CompanyMenuStatus.FAILED
    )
      dispatch(fetchCompanyMenu());
  }, [status, dispatch]);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    // console.log('CHANGED: ' + event.currentTarget.value);
    if (setValue) setValue(event.currentTarget.value);
  };

  const content = (
    <select
      id='company'
      className={className}
      {...register('companyId')}
      onChange={onChange}>
      {
        <option
          key={'_default'}
          value={'-select an option'}
          defaultValue={'-select an option-'}></option>
      }
      {data.map((d) => (
        <option key={d.key} value={d.key}>
          {d.value}
        </option>
      ))}
    </select>
  );
  const loading = <select id='company'></select>;

  return status === CompanyMenuStatus.LOADING ? loading : content;
};
