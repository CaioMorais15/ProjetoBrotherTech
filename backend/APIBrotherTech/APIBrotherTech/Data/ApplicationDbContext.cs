using APIBrotherTech.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Reflection.Emit;

namespace APIBrotherTech.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    
        public DbSet<Client> Clientes { get; set; }
        public DbSet<Cryptocurrency> CriptoMoedas { get; set; }
        public DbSet<Notification> Notificacoes { get; set; }
        public DbSet<InvestmentTip> DicasInvest { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<Client>().ToTable("Clientes");
            builder.Entity<Cryptocurrency>().ToTable("CriptoMoedas");
            builder.Entity<Notification>().ToTable("Notificacoes");
            builder.Entity<InvestmentTip>().ToTable("DicasInvest");

        }
    }
}
