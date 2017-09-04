import {CategoryEnum} from '../../common';

export class Product {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public category: CategoryEnum,
        public isAvailable: boolean,
        public ingredients: Array<string>
    ) {
    }
  }
