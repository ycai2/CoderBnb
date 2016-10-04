# Schema Information

## spots
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
type        | string    | not null
price       | integer   | not null
lat         | float     | not null
lng         | float     | not null
user_id     | integer   | not null, foreign key (references users), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
name            | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## reviews
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
overall_rating  | integer   | not null
cleanness       | integer   | not null
quietness       | integer   | not null
communication   | integer   | not null
description     | text      | 
user_id         | integer   | not null, foreign key (references users), indexed
booking_id      | integer   | not null, foreign key (references booking), indexed

## bookings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
start_date      | date      | not null
end_date        | date      | not null
guest_count     | integer   | not null, minimum 1
user_id         | integer   | not null
spot_id         | integer   | not null
