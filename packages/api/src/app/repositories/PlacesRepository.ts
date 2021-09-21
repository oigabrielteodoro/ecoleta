import * as db from '@/database'
import { CreatePlace, Place } from '@/types/place'

class PlacesRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM places')
    return rows
  }

  async findById(id: string) {
    const [row] = await db.query('SELECT * FROM places WHERE id = $1', [id])
    return row
  }

  async create({ city, state, lat, lng }: CreatePlace) {
    const [row] = await db.query<Place>(
      `
      INSERT INTO places(city, state, lat, lng)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `,
      [city, state, lat, lng],
    )

    return row
  }

  async delete(id: string) {
    return db.query('DELETE FROM places WHERE id = $1', [id])
  }
}

export default new PlacesRepository()
