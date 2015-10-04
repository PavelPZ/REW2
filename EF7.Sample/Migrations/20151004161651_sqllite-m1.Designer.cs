using System;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Infrastructure;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Data.Entity.Migrations;
using EF7.Sample;

namespace EF7.Sample.Migrations
{
    [DbContext(typeof(ProductContext))]
    partial class sqllitem1
    {
        public override string Id
        {
            get { return "20151004161651_sqllite-m1"; }
        }

        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Annotation("ProductVersion", "7.0.0-beta7-15540");

            modelBuilder.Entity("EF7.Sample.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreationDate");

                    b.Property<string>("Name");

                    b.Key("Id");
                });
        }
    }
}
