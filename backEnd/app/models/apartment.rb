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
  has_one :apt_school
  has_one :apt_commute
  has_one :apt_crime
  has_many :apt_amenities
end
