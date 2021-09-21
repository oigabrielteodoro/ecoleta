import * as db from '@/database'

import { CreatePoint, Point } from '@/types'

class PointsRepository {
  async findAll() {
    const rows = await db.query(`
      SELECT points.*,
        places.city AS city,
        places.state AS state,
        places.lat AS lat,
        places.lng AS lng
      FROM points
      LEFT JOIN places ON places.id = points.place_id
    `)

    return rows
  }

  async findById(id: string) {
    const [row] = await db.query<Point | undefined>(
      `
        SELECT points.*, places.city AS city
        FROM points
        LEFT JOIN places ON places.id = points.place_id
        WHERE points.id = $1
      `,
      [id],
    )

    return row
  }

  async findByEmail(email: string) {
    const [row] = await db.query('SELECT * FROM points WHERE email = $1', [
      email,
    ])

    return row
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

  async delete(id: string) {
    const deleteOp = await db.query('DELETE FROM points WHERE id = $1;', [id])
    return deleteOp
  }
}

export default new PointsRepository()
