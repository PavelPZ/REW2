using System;
using System.Diagnostics;

namespace EF7.Sample {
  public class Program {
    static void Main() {
      using (var dbContext = new ProductContext()) {
        var stopwatch = new Stopwatch();
        stopwatch.Start();
        for (var i = 0; i < 5000; i++) {
          dbContext.Products.Add(new Product {
            CreationDate = DateTime.Now,
            Name = "Product"
          });
        }
        dbContext.SaveChanges();
        stopwatch.Stop();
        Console.WriteLine("ProductContext executed in : {0}ms", stopwatch.ElapsedMilliseconds);
      }
      using (var dbContext = new ProductContextSqlCE()) {
        var stopwatch = new Stopwatch();
        stopwatch.Start();
        for (var i = 0; i < 5000; i++) {
          dbContext.Products.Add(new Product {
            CreationDate = DateTime.Now,
            Name = "Product"
          });
        }
        dbContext.SaveChanges();
        stopwatch.Stop();
        Console.WriteLine("ProductContextSqlCE executed in : {0}ms", stopwatch.ElapsedMilliseconds);
        Console.ReadKey();
      }
    }
  }
}
