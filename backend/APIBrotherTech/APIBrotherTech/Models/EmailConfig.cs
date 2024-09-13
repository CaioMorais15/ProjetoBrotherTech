using MailKit.Security;

namespace ExemploAPI.Services
{
    public class EmailConfig
    {
        public string SmtpServer { get; internal set; }
        public SaslMechanism UserName { get; internal set; }
        public int Port { get; internal set; }
    }
}