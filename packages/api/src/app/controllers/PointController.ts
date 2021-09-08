import { Request, Response } from 'express'

import PointsRepository from '../repositories/PointsRepository'

class PointController {
  async index(_: Request, response: Response) {
    const points = await PointsRepository.findAll()
    response.json(points)
  }

  async store(request: Request, response: Response) {
    const { name, email, phone, image_url, place_id } = request.body

    const point = await PointsRepository.create({
      name,
      email,
      phone,
      image_url,
      place_id,
    })

    response.json(point)
  }
}

export default new PointController()
