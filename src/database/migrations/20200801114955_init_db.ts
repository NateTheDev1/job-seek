import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments();
    tbl.string("name").notNullable();
    tbl.string("username").notNullable();
    tbl.string("password").notNullable();
    tbl.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("users");
}
