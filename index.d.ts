declare module 'clsx' {
  export type FilteredClassValue<T extends string> =
    | FilteredClassArray<T>
    | Record<Extract<T, string>, any>
    | T
    | number
    | boolean
    | null
    | undefined;

  export interface FilteredClassArray<T extends string>
    extends Array<FilteredClassValue<T>> {}

  export type FilteredClassFunction<T extends string> = (
    ...classes: FilteredClassValue<T>[]
  ) => string;

  export type Clsx<T extends string> = FilteredClassFunction<T>;

  export default function clsx<T extends string>(
    ...classes: FilteredClassValue<T>[]
  ): string;
}
