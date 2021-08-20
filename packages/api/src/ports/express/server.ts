import { env } from '@/lib'
import express from 'express'

const app = express()

const PORT = env('PORT')

app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`)
})
