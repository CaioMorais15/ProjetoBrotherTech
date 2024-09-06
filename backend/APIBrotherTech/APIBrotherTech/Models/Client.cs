namespace APIBrotherTech.Models
{
    public class Client
    {
        public long ClientId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public DateTime RegistrationDate { get; set; } = DateTime.UtcNow;
        public bool InterestedInTechnology { get; set; } = false;
        public bool InterestedInHighReturns { get; set; } = false;
        public bool InterestedInDiversification { get; set; } = false;

        public ICollection<Notification> Notifications { get; set; }
        public ICollection<InvestmentTip> InvestmentTips { get; set; }

    }
}
