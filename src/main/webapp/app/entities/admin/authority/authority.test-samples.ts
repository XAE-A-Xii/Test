import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '63709e76-24b0-416a-8e8f-faeb5ddbf2c9',
};

export const sampleWithPartialData: IAuthority = {
  name: 'bd4f469b-e3dd-41ac-bab4-a4258cbde3cd',
};

export const sampleWithFullData: IAuthority = {
  name: '1732a831-b0df-4f40-aeb8-274e4f8a1d68',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
