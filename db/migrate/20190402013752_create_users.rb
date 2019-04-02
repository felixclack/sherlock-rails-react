class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :job
      t.string :phone
      t.date :birthdate

      t.timestamps
    end
  end
end
