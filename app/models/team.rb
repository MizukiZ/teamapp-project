# frozen_string_literal: true

# Article model documentation
class Team < ApplicationRecord
  has_many :players, dependent: :destroy
  validates :name, presence: true, length: { minimum: 2 }
  accepts_nested_attributes_for :players
end
