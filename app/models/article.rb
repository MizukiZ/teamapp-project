# frozen_string_literal: true

# Article model documentation
class Article < ApplicationRecord
  has_many :comments, dependent: :destroy
  validates :title, presence: true, length: { minimum: 5 }
end
