import { pipe } from 'fp-ts/function'
import { Either, mapLeft } from 'fp-ts/Either'
import { failure } from 'io-ts/PathReporter'

import { CreatePoint, createPointCodec } from '../types'

type ValidatePoint = (data: CreatePoint) => Either<Error, unknown>

export const validatePoint: ValidatePoint = (data) => {
  return pipe(
    createPointCodec.decode(data),
    mapLeft((errors) => new Error(failure(errors).join(':::'))),
  )
}
