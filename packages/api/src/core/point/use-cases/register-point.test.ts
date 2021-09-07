import { pipe } from 'fp-ts/function'

import { mapAll, unsafe } from '@/config/tests/fixtures'
import { CreatePoint } from '@/core/point/types'

import { registerPoint, OutsideRegisterPoint } from './register-point'

const registerSuccess: OutsideRegisterPoint<string> = async (data) => {
  return `Region ${data.name} created successfuly.`
}

const registerFailure: OutsideRegisterPoint<never> = async () => {
  throw new Error('External error!')
}

const defaultProps = {
  name: 'Market',
  phone: '(00) 90000-0000',
  address: {
    city: 'São Paulo',
    number: 1,
    region: 'SP',
    coordinates: {
      latitude: Math.random(),
      longitude: Math.random(),
    },
  },
}

const data: CreatePoint = {
  email: unsafe('market@mail.com'),
  image_url: unsafe('https://example.com'),
  ...defaultProps,
}

const dataWithWrongEmailAndImage: CreatePoint = {
  email: unsafe('invalid-email'),
  image_url: unsafe('invalid-image'),
  ...defaultProps,
}

it('should be able register region successfuly', async () => {
  return pipe(
    data,
    registerPoint(registerSuccess),
    mapAll((result) =>
      expect(result).toBe(`Region ${data.name} created successfuly.`),
    ),
  )()
})

it('should not accept a register from a point with invalid email and/or image', async () => {
  return pipe(
    dataWithWrongEmailAndImage,
    registerPoint(registerSuccess),
    mapAll((error) =>
      expect(error).toEqual(new Error('Invalid email:::Invalid URL')),
    ),
  )()
})

it('should return a Left if register function throws an error', async () => {
  return pipe(
    data,
    registerPoint(registerFailure),
    mapAll((error) => expect(error).toEqual(new Error('External error!'))),
  )()
})
