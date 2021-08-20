import { NonEmptyString, withMessage } from 'io-ts-types'
import { failure } from 'io-ts/PathReporter'
import { pipe } from 'fp-ts/function'
import { fold } from 'fp-ts/Either'

type Envinroment = 'PORT' | 'JWT_SECRET'

export const env = (value: Envinroment) => {
  const envCodec = withMessage(
    NonEmptyString,
    () => `You must set the env var ${value}`,
  )

  return pipe(
    envCodec.decode(process.env[value]),
    fold(
      (errors) => {
        throw new Error(failure(errors).join(':::'))
      },
      (value) => value,
    ),
  )
}
