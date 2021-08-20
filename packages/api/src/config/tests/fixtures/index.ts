import { pipe } from 'fp-ts/function'
import { map, mapLeft, TaskEither } from 'fp-ts/TaskEither'

export function unsafe<T>(value: unknown) {
  return value as T
}

type Callback<E, T> = (a: E | T) => unknown

type MapAll = <E, T>(
  fn: Callback<E, T>,
) => (data: TaskEither<E, T>) => TaskEither<unknown, unknown>

export const mapAll: MapAll = (fn) => (data) => {
  return pipe(data, map(fn), mapLeft(fn))
}

export function getErrorMessage(errors: unknown): string {
  return Array.isArray(errors) ? errors[0].message : ''
}
