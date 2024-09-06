namespace APIBrotherTech.Models
{
    public class Cryptocurrency
    {
        public long CryptocurrencyId { get; set; }
        public string Name { get; set; }
        public string RiskLevel { get; set; }
        public string PotentialReturn { get; set; }
        public string GrowthHistory { get; set; }

        public ICollection<Notification> Notifications { get; set; }
        public ICollection<InvestmentTip> InvestmentTips { get; set; }
    }
}
