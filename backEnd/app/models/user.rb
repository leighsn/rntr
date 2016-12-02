class User < ApplicationRecord
  has_secure_password
  has_many :destinations
  validates :email, uniqueness: true
  validates :password, presence: true
end
