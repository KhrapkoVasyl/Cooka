import { AuthStore } from './auth.store';
import { TestStore } from './test.store';

export class RootStore {
  testStore = new TestStore();
  authStore = new AuthStore();
}

export const store = new RootStore();
