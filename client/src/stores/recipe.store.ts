import { action, makeObservable, observable } from 'mobx';

export type Recipe = {
  id: string;
  title: string;
  description: string;
  img: string;
  time: string;
  servings: string;
};

export class RecipeStore {
  @observable recipes: Recipe[] = [];

  constructor() {
    makeObservable(this);
  }

  @action.bound
  getRecipes() {
    return [
      {
        id: crypto.randomUUID(),
        title: 'Lasagna',
        description:
          'This lasagna recipe from John Chandler is our most popular recipe! With sausage, ground beef',
        img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574',
        time: '30',
        servings: '4',
      },
      {
        id: crypto.randomUUID(),
        title: 'Lasagna',
        description:
          'This lasagna recipe from John Chandler is our most popular recipe! With sausage, ground beef',
        img: 'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
        time: '30',
        servings: '4',
      },
      {
        id: crypto.randomUUID(),
        title: 'Lasagna',
        description:
          'This lasagna recipe from John Chandler is our most popular recipe! With sausage, ground beef',
        img: 'https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg',
        time: '90',
        servings: '4',
      },
      {
        id: crypto.randomUUID(),
        title: 'Lasagna',
        description:
          'This lasagna recipe from John Chandler is our most popular recipe! With sausage, ground beef',
        img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574',
        time: '33',
        servings: '4',
      },
      {
        id: crypto.randomUUID(),
        title: 'Lasagna',
        description:
          'This lasagna recipe from John Chandler is our most popular recipe! With sausage, ground beef',
        img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574',
        time: '3',
        servings: '4',
      },
    ];
  }
}
