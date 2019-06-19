interface IStorage<T> {
  set(val: T): void;
  get(defaultValue?: T): T;
}

export declare const theme: IStorage<string>;