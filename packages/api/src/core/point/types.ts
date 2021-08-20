import * as t from 'io-ts'

export const pointCodec = t.type({
  name: t.string,
  email: t.string,
  cellphone: t.string,
  image_url: t.string,
  address: t.type({
    city: t.string,
    region: t.string,
    number: t.number,
    coordinates: t.partial({
      latitude: t.number,
      longitude: t.number,
    }),
  }),
})

export type Point = t.TypeOf<typeof pointCodec>
