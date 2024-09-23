import { useAppDispatch, useAppSelector } from '../../store/storeHooks';
import {
  fetchOrgMenu,
  selectItemsById,
  selectStatus,
} from '../../reducers/organization/organization';
import { useSelector } from 'react-redux';
import { UseFormRegister } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { OrgMenuStatus } from '../../types/organization/organization';
import { IMenuPC } from '../../types/types';

export type Props = {
  className: string | undefined;
  register: UseFormRegister<any>;
  companyId?: string | null;
};

export const OrganizationMenu = ({ className, register, companyId }: Props) => {
  const dispatch = useAppDispatch();
  const [id, setId] = useState<string>('');

  //pull menu items from store that match parent id of companyId
  const data: IMenuPC[] | null = useAppSelector((state) =>
    selectItemsById(state, id)
  );
  const status: OrgMenuStatus = useSelector(selectStatus);

  //first time load, dispatch event to populate the store with menu options
  useEffect(() => {
    if (status === OrgMenuStatus.IDLE || status === OrgMenuStatus.FAILED)
      dispatch(fetchOrgMenu());
  }, [status, dispatch]);

  //because we want to update when companyId passed in on
  //props changes
  useEffect(() => {
    if (companyId) {
      setId(companyId);
    }
  }, [companyId]);

  const content = (
    <select
      id='organization'
      className={className}
      {...register('organizationId')}>
      {
        <option
          key={'_default'}
          value={'-select an option-'}
          defaultValue={'-select an option-'}></option>
      }
      {data.map((d) => (
        <option key={d.key} value={d.value}>
          {d.value}
        </option>
      ))}
    </select>
  );
  const loading = <select id='organization' className={className} />;

  return status === OrgMenuStatus.LOADING ? loading : content;
};
