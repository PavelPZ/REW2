using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;

namespace EF7.Sample.Migrations {
  public partial class sqlcem1 : Migration {
    protected override void Up(MigrationBuilder migrationBuilder) {
      migrationBuilder.CreateTable(
          name: "Product",
          columns: table => new {
            Id = table.Column<int>(isNullable: false).Annotation("SqlCe:ValueGeneration", "True"),
            CreationDate = table.Column<DateTime>(isNullable: false),
            Name = table.Column<string>(isNullable: true)
          },
          constraints: table => {
            table.PrimaryKey("PK_Product", x => x.Id);
          });
    }

    protected override void Down(MigrationBuilder migrationBuilder) {
      migrationBuilder.DropTable("Product");
    }
  }
}
