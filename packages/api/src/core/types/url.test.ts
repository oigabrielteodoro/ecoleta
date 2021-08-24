import { pipe } from 'fp-ts/function'
import { fromEither } from 'fp-ts/TaskEither'

import { getErrorMessage, mapAll } from '@/config/tests/fixtures'

import { urlCodec } from './url'

const states = {
  success: 'https://url.com',
  invalid: 'invalid-url',
}

it('should validate the URL properly', async () => {
  return pipe(
    states.success,
    urlCodec.decode,
    fromEither,
    mapAll((result) => expect(result).toBe(states.success)),
  )()
})

it('should not accept an invalid URL', async () => {
  return pipe(
    states.invalid,
    urlCodec.decode,
    fromEither,
    mapAll((errors) => expect(getErrorMessage(errors)).toBe('Invalid URL')),
  )()
})
