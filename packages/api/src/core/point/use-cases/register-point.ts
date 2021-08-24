import { pipe } from 'fp-ts/function'
import { toError } from 'fp-ts/Either'
import { fromEither, chain, tryCatch, TaskEither } from 'fp-ts/TaskEither'

import { CreatePoint } from '../types'

import { validatePoint } from './validate-point'

type OutsideRegisterPoint<A> = (data: CreatePoint) => Promise<A>

type RegisterPoint = <A>(
  outsideRegister: OutsideRegisterPoint<A>,
) => (data: CreatePoint) => TaskEither<Error, A>

export const registerPoint: RegisterPoint = (outsideRegister) => (data) => {
  return pipe(
    data,
    validatePoint,
    fromEither,
    chain(() => tryCatch(() => outsideRegister(data), toError)),
  )
}
