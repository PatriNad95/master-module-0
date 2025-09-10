import { uniqueNamesGenerator, Config, names } from 'unique-names-generator';

export interface Person {
  id: string;
  name: string;
}

const config: Config = {
  dictionaries: [names],
};

export const createPersons = (numberOfItems: number): Person[] => {
  return [...Array(numberOfItems).keys()].map(() => ({
    id: crypto.randomUUID(),
    name: uniqueNamesGenerator(config),
  }));
};
