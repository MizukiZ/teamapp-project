class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players, id: :uuid do |t|
      t.string :name
      t.references :team, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
