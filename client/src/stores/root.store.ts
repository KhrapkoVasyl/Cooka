import { AuthStore } from './auth.store';
import { RecipeStore } from './recipe.store';
import { TestStore } from './test.store';

export class RootStore {
  testStore = new TestStore();
  authStore = new AuthStore();
  recipeStore = new RecipeStore();
}

export const store = new RootStore();
