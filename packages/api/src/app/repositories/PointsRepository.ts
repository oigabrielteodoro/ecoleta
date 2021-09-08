import * as db from '@/database'

import { CreatePoint } from '@/types'

class PointsRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM points;')
    return rows
  }

  async create({ name, email, phone, image_url, place_id }: CreatePoint) {
    const [row] = await db.query(
      `
      INSERT INTO points(name, email, phone, image_url, place_id)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `,
      [name, email, phone, image_url, place_id],
    )

    return row
  }
}

export default new PointsRepository()
