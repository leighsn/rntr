class Apartment < ApplicationRecord
  belongs_to :user
  has_many :apt_schools
  has_many :apt_commutes
  has_many :apt_crimes
  has_many :apt_amenities
end
