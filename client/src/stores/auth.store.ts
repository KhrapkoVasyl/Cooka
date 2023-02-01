import { makeObservable, observable } from 'mobx';

type Auth = {
  refreshToken: string;
  accessToken: string;
};

export class AuthStore {
  @observable auth: Auth = {} as Auth;

  constructor() {
    makeObservable(this);
  }

  get isAuthenticated() {
    return !!this.auth.accessToken;
  }
}
