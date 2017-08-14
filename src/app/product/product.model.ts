import {CategoryEnum} from '../common/enums/category.enum';

export class Product {
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public category: CategoryEnum,
        public isAvailable: boolean,
        public ingredients: Array<string>
    ) {
    }
  }
  