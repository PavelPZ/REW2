//Add-Migration -name sqllite-m1 -c EF7.Sample.ProductContext
//Add-Migration -name sqlce-m1 -c EF7.Sample.ProductContextSqlCE
using Microsoft.Data.Entity;

namespace EF7.Sample {
  public class ProductContext : DbContext {
    public DbSet<Product> Products { get; set; }

    public ProductContext() {
      Database.EnsureCreated();
    }
    protected override void OnConfiguring(DbContextOptionsBuilder options) {
      base.OnConfiguring(options);
      options.UseSqlite(@"Data Source=d:\temp\Blogging.sqlite");
    }
  }
  public class ProductContextSqlCE : DbContext {
    public DbSet<Product> Products { get; set; }

    public ProductContextSqlCE() {
      Database.EnsureCreated();
    }
    protected override void OnConfiguring(DbContextOptionsBuilder options) {
      base.OnConfiguring(options);
      options.UseSqlCe(@"Data Source=d:\temp\Blogging.sdf");
    }
  }
}
