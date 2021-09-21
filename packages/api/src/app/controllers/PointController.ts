import { Request, Response } from 'express'

import PointsRepository from '../repositories/PointsRepository'
import PlacesRepository from '../repositories/PlacesRepository'

class PointController {
  async index(_: Request, response: Response) {
    const points = await PointsRepository.findAll()
    return response.json(points)
  }

  async store(request: Request, response: Response) {
    const { name, email, phone, image_url, city, state, lat, lng } =
      request.body

    const pointByEmail = await PointsRepository.findByEmail(email)

    if (pointByEmail) {
      return response
        .status(400)
        .json({ error: 'This email already is in use', statusCode: 400 })
    }

    const place = await PlacesRepository.create({
      city,
      state,
      lat,
      lng,
    })

    const point = await PointsRepository.create({
      name,
      email,
      phone,
      image_url,
      place_id: place?.id,
    })

    return response.json({ point, place })
  }

  async show(request: Request, response: Response) {
    const { id } = request.params

    if (!id) {
      return response
        .status(400)
        .json({ error: 'Id not found', statusCode: 400 })
    }

    const pointById = await PointsRepository.findById(id)

    if (!pointById) {
      return response
        .status(404)
        .json({ error: 'This point not found', statusCode: 404 })
    }

    return response.json(pointById)
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params

    if (!id) {
      return response
        .status(400)
        .json({ error: 'Id not found', statusCode: 400 })
    }

    const pointById = await PointsRepository.findById(id)

    if (!pointById) {
      return response
        .status(404)
        .json({ error: 'This point not found', statusCode: 404 })
    }

    await PointsRepository.delete(id)
    await PlacesRepository.delete(pointById.place_id)

    return response.status(200).send()
  }
}

export default new PointController()
