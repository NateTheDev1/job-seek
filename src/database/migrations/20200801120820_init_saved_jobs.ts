import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("saved_jobs", (tbl) => {
    tbl.increments();
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl.string("notes", 350).notNullable();
    tbl.string("createdAt").defaultTo(new Date());
    tbl.string("status").notNullable();
    tbl.string("url").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("saved_jobs");
}
