# == Schema Information
#
# Table name: apartments
#
#  id      :integer          not null, primary key
#  user_id :integer
#  address :string
#

class Apartment < ApplicationRecord
  belongs_to :user
  has_many :apt_schools
  has_many :apt_commutes
  has_many :apt_crimes
  has_many :apt_amenities
end
