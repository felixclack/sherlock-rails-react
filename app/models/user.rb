class User < ApplicationRecord
  validates :birthdate, presence: true
  validates :job, presence: true
  validates :name, presence: true
  validates :phone, presence: true
end
