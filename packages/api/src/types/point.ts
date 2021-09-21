export type Point = {
  name: string
  email: string
  image_url?: string
  place_id: string
}

export type CreatePoint = {
  name: string
  email: string
  phone: string
  image_url?: string
  place_id?: string
}
