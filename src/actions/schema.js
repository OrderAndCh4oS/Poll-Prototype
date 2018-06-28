import {schema} from 'normalizr';

export const poll = new schema.Entity('polls');
export const arrayOfPolls = new schema.Array(poll);