# frozen_string_literal: true

# Player model documentation
class Player < ApplicationRecord
  belongs_to :team
  validates :name, presence: true, length: { minimum: 2 }
end
