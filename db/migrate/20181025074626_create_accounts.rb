class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts, id: :uuid do |t|
      t.bigint :account_id, limit: 10, null: false
      t.bigint :account_parent_id, limit: 10, default: 0
      t.string :account_name
      t.integer :account_type, limit: 2, default: 10
      t.integer :account_status, limit: 2, default: 1, comment: '1 is Active and n2 is Archived'
      t.integer :account_deleted, limit: 2, default: 0
      t.string :tournament_group_prefix, default: 'Group'
      t.string :tournament_round_prefix, default: 'Round'
      t.string :account_street, limit: 45
      t.string :account_suburb, limit: 45
      t.string :account_state, limit: 45
      t.string :account_postcode, limit: 45
      t.string :account_country, limit: 45
      
      t.timestamps
    end
    add_index :accounts, :account_id, unique: true
  end
end
