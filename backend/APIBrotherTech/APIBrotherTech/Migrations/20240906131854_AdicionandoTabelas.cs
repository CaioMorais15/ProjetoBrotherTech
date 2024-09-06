using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace APIBrotherTech.Migrations
{
    /// <inheritdoc />
    public partial class AdicionandoTabelas : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Clientes",
                columns: table => new
                {
                    ClientId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RegistrationDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    InterestedInTechnology = table.Column<bool>(type: "bit", nullable: false),
                    InterestedInHighReturns = table.Column<bool>(type: "bit", nullable: false),
                    InterestedInDiversification = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clientes", x => x.ClientId);
                });

            migrationBuilder.CreateTable(
                name: "CriptoMoedas",
                columns: table => new
                {
                    CryptocurrencyId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RiskLevel = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PotentialReturn = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GrowthHistory = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CriptoMoedas", x => x.CryptocurrencyId);
                });

            migrationBuilder.CreateTable(
                name: "DicasInvest",
                columns: table => new
                {
                    InvestmentTipId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ClientId = table.Column<long>(type: "bigint", nullable: false),
                    CryptocurrencyId = table.Column<long>(type: "bigint", nullable: false),
                    Tip = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TipDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DicasInvest", x => x.InvestmentTipId);
                    table.ForeignKey(
                        name: "FK_DicasInvest_Clientes_ClientId",
                        column: x => x.ClientId,
                        principalTable: "Clientes",
                        principalColumn: "ClientId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DicasInvest_CriptoMoedas_CryptocurrencyId",
                        column: x => x.CryptocurrencyId,
                        principalTable: "CriptoMoedas",
                        principalColumn: "CryptocurrencyId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Notificacoes",
                columns: table => new
                {
                    NotificationId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ClientId = table.Column<long>(type: "bigint", nullable: false),
                    CryptocurrencyId = table.Column<long>(type: "bigint", nullable: false),
                    NotificationType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NotificationDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notificacoes", x => x.NotificationId);
                    table.ForeignKey(
                        name: "FK_Notificacoes_Clientes_ClientId",
                        column: x => x.ClientId,
                        principalTable: "Clientes",
                        principalColumn: "ClientId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Notificacoes_CriptoMoedas_CryptocurrencyId",
                        column: x => x.CryptocurrencyId,
                        principalTable: "CriptoMoedas",
                        principalColumn: "CryptocurrencyId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DicasInvest_ClientId",
                table: "DicasInvest",
                column: "ClientId");

            migrationBuilder.CreateIndex(
                name: "IX_DicasInvest_CryptocurrencyId",
                table: "DicasInvest",
                column: "CryptocurrencyId");

            migrationBuilder.CreateIndex(
                name: "IX_Notificacoes_ClientId",
                table: "Notificacoes",
                column: "ClientId");

            migrationBuilder.CreateIndex(
                name: "IX_Notificacoes_CryptocurrencyId",
                table: "Notificacoes",
                column: "CryptocurrencyId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DicasInvest");

            migrationBuilder.DropTable(
                name: "Notificacoes");

            migrationBuilder.DropTable(
                name: "Clientes");

            migrationBuilder.DropTable(
                name: "CriptoMoedas");
        }
    }
}
