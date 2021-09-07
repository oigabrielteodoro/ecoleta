import { getErrorMessage, mapAll } from '@/config/tests/fixtures'
import { pipe } from 'fp-ts/function'
import { fromEither } from 'fp-ts/TaskEither'

import { emailCodec } from './email'

const states = {
  success: 'example@email.com',
  invalid: 'invalid-email',
}

it('should validate the email properly', async () => {
  return pipe(
    states.success,
    emailCodec.decode,
    fromEither,
    mapAll((result) => expect(result).toBe(states.success)),
  )()
})

it('should not accept an invalid email', async () => {
  return pipe(
    states.invalid,
    emailCodec.decode,
    fromEither,
    mapAll((errors) => expect(getErrorMessage(errors)).toBe('Invalid email')),
  )()
})
