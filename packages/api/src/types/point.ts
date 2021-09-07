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
