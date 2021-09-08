CREATE DATABASE ecoleta;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS places (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  city VARCHAR NOT NULL,
  state VARCHAR NOT NULL,
  lat DECIMAL NOT NULL,
  lng DECIMAL NOT NULL
);

CREATE TABLE IF NOT EXISTS points (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  phone VARCHAR NOT NULL,
  image_url VARCHAR,
  place_id UUID,
  FOREIGN KEY(place_id) REFERENCES places(id)
);

CREATE TABLE IF NOT EXISTS categories (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  image_url VARCHAR NOT NULL,
  point_id UUID,
  FOREIGN KEY(point_id) REFERENCES points(id)
);
