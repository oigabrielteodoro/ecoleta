export type Point = {
  name: string
  email: string
  image_url?: string
  address: {
    city: string
    state: string
    coordinates: [number, number]
  }
}

export type CreatePoint = {
  name: string
  email: string
  phone: string
  image_url?: string
  place_id: string
}
