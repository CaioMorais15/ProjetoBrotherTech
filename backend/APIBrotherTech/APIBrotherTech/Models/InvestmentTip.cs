namespace APIBrotherTech.Models
{
    public class InvestmentTip
    {
        public long InvestmentTipId { get; set; }
        public long ClientId { get; set; }
        public Client Client { get; set; }
        public long CryptocurrencyId { get; set; }
        public Cryptocurrency Cryptocurrency { get; set; }
        public string Tip { get; set; }
        public DateTime TipDate { get; set; } = DateTime.UtcNow;
    }
}
