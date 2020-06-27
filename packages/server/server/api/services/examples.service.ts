import L from '../../common/logger';
import axios from "axios";

export const APIURL = "https://jsonplaceholder.typicode.com/photos";
export const fetchImages = (page = 1) => axios.get(`${APIURL}?albumId=${page}`);

let id = 0;
interface Example {
  id: number;
  name: string;
}

const examples: Example[] = [
  { id: id++, name: 'example 0' },
  { id: id++, name: 'example 1' },
];

export interface ApiImage {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  width?: number;
  height?: number;
}

export class ExamplesService {
  async all (albumId: number ) {
    try {
      return await axios.get(`${APIURL}?albumId=${albumId}`);
    } catch (error) {
      console.error(error)
    }
  }

 /*  byId(id: number): Promise<Example> {
    L.info(`fetch example with id ${id}`);
    return this.all().then((r) => r[id]);
  } */

  create(name: string): Promise<Example> {
    L.info(`create example with name ${name}`);
    const example: Example = {
      id: id++,
      name,
    };
    examples.push(example);
    return Promise.resolve(example);
  }
}

export default new ExamplesService();
