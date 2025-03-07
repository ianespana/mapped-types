import { Type } from './common';

/**
 * @publicApi
 */
export interface MappedType<T> extends Type<T> {
  new (): T;
}
