import { TestStore } from './test.store';

export class RootStore {
  testStore: TestStore = new TestStore();
}

export const store = new RootStore();
