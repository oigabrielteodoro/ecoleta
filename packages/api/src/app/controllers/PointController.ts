import { Request, Response } from 'express'

import { Point } from '@/types'

const points: Point[] = [
  {
    name: 'Mercado do seu Zé',
    email: 'mercado@mail.com',
    image_url: 'https://github.com/brainnco.png',
    address: {
      city: 'São Paulo',
      coordinates: [1, 1],
      state: 'SP',
    },
  },
]

class PointController {
  async index(_: Request, response: Response) {
    return response.json(points)
  }
}

export default new PointController()
