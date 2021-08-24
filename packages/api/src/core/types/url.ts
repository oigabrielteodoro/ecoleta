import * as t from 'io-ts'
import { withMessage } from 'io-ts-types'

import { constFalse, constTrue, pipe } from 'fp-ts/function'
import { tryCatch, fold, toError } from 'fp-ts/Either'

type UrlBrand = {
  readonly Url: unique symbol
}

export const urlCodec = withMessage(
  t.brand(
    t.string,
    (value): value is t.Branded<string, UrlBrand> => isUrl(value),
    'Url',
  ),
  () => 'Invalid URL',
)

export type Url = t.TypeOf<typeof urlCodec>

function isUrl(input: unknown) {
  return pipe(
    tryCatch(() => new URL(typeof input === 'string' ? input : ''), toError),
    fold(constFalse, constTrue),
  )
}
