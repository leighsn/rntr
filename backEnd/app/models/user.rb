class User < ApplicationRecord
  has_secure_password
  has_many :destinations
  has_many :apartments
  validates :email, uniqueness: true
  validates :password, presence: true, on: :create
end
