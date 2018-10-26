class CreateJoinTableUserAccount < ActiveRecord::Migration[5.2]
  def change
    create_join_table :users, :accounts do |t|
      t.index [:user_id, :account_id]
    end
  end
end
