declare module 'class-transformer' {
    export function plainToClass<T>(cls: new () => T, plain: Object): T;
    export function classToPlain<T>(obj: T): Object;
    export function classToClass<T>(obj: T): T;
    export function classToClass<T>(obj: T, options?: any): T;
    // Add other exports as needed
  }
  