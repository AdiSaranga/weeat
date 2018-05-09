json.extract! review, :id, :name, :rating, :comment, :deleted, :resturant_id, :created_at, :updated_at
json.url review_url(review, format: :json)
