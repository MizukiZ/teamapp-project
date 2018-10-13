class DropPlayersTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :players do |t|
      t.string :name, null: false
      t.timestamps null: false
    end
  end
end
