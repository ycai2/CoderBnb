# Schema Information

## spots
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | string    | not null
type        | string    | not null
price       | integer   | not null
lat         | integer   | not null
lng         | integer   | not null
user_id     | integer   | not null, foreign key (references users), indexed
location_id | integer   | not null, foreign key (references locations), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## reviews
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
rating          | integer   | not null
description     | text      |
user_id         | integer   | not null, foreign key (references users), indexed
pet_id          | integer   | not null, foreign key (references pets), indexed

## locations
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
center_lat      | integer   | not null
center_lng      | integer   | not null

## bookings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
start_date      | date      | not null
end_date        | date      | not null
guest_count     | integer   | not null, minimum 1
user_id         | integer   | not null
spot_id         | integer   | not null
