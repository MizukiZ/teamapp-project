ActiveRecord::Schema.define(version: 2018_10_06_040942) do
  # frozen_string_literal: true
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'articles', force: :cascade do |t|
    t.string 'title'
    t.text 'text'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'comments', force: :cascade do |t|
    t.string 'commenter'
    t.text 'body'
    t.bigint 'article_id'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['article_id'], name: 'index_comments_on_article_id'
  end

  add_foreign_key 'comments', 'articles'
end
