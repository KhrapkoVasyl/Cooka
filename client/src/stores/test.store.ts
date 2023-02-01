import { makeObservable, observable, action } from 'mobx';

export class TestStore {
  @observable count = 1;

  constructor() {
    makeObservable(this);
  }

  @action.bound
  inc() {
    this.count += 1;
  }
}
