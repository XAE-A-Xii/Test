import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 13476,
  login: 'VJ@pLoW\\F2SWxV',
};

export const sampleWithPartialData: IUser = {
  id: 15703,
  login: 'e6tlwR',
};

export const sampleWithFullData: IUser = {
  id: 2688,
  login: '9Yc',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
