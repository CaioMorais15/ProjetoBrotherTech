namespace APIBrotherTech.Models
{
    public class Notification
    {
        public long NotificationId { get; set; }
        public long ClientId { get; set; }
        public Client Client { get; set; }
        public long CryptocurrencyId { get; set; }
        public Cryptocurrency Cryptocurrency { get; set; }
        public string NotificationType { get; set; }
        public DateTime NotificationDate { get; set; } = DateTime.UtcNow;
    }
}

