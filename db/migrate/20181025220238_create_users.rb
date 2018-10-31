class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users, id: :uuid do |t|
      t.bigint :user_id, limit: 10, null: false
      t.bigint :user_contact_id, limit: 10, default: 0
      t.string :user_firstname
      t.string :user_lastname
      t.string :user_username, limit: 20
      t.string :user_password, limit: 20
      t.string :user_email_address
      t.string :user_image
      t.integer :user_status, limit: 2, default: 1, comment: '1 is Enabled and n2 is Disabled'
      t.integer :user_profile, limit: 2, default: 2, comment: '1 is Internal and n2 is External'
      t.integer :user_deleted, limit: 2, default: 0

      t.timestamps
    end
    add_index :users, :user_id
  end
end
