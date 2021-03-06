# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161013183907) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer  "user_id",                 null: false
    t.integer  "spot_id",                 null: false
    t.integer  "guest_count", default: 1
    t.date     "start_date",              null: false
    t.date     "end_date",                null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  add_index "bookings", ["spot_id"], name: "index_bookings_on_spot_id", using: :btree
  add_index "bookings", ["user_id"], name: "index_bookings_on_user_id", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "user_id",                   null: false
    t.integer  "booking_id",                null: false
    t.text     "body"
    t.integer  "cleanliness",   default: 3, null: false
    t.integer  "quietness",     default: 3, null: false
    t.integer  "communication", default: 3, null: false
    t.integer  "overall",       default: 3, null: false
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  add_index "reviews", ["booking_id"], name: "index_reviews_on_booking_id", using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "spots", force: :cascade do |t|
    t.string   "title",                            null: false
    t.text     "description",                      null: false
    t.string   "room_type",                        null: false
    t.integer  "price",                            null: false
    t.float    "lat",                              null: false
    t.float    "lng",                              null: false
    t.integer  "user_id",                          null: false
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.integer  "guest_count",                      null: false
    t.float    "rating",             default: 0.0, null: false
  end

  add_index "spots", ["user_id"], name: "index_spots_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "first_name",      null: false
    t.string   "last_name",       null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

end
