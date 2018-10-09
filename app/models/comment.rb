# frozen_string_literal: true

# Comment model documentation
class Comment < ApplicationRecord
  belongs_to :article
end
