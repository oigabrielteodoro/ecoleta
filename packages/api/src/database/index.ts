import { Client } from 'pg'

const client = new Client({
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
})

client.connect()

export async function query<T>(queryRow: string, values?: unknown[]) {
  const { rows } = await client.query<T>(queryRow, values)
  return rows
}
