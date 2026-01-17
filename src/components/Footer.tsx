import { GraduationCap, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, QrCode } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const formations = [
    "Développement Web Full Stack",
    "Cybersécurité & Ethical Hacking",
    "Marketing Digital & Design",
    "Intelligence Artificielle",
    "DevOps & Cloud Computing",
    "UX/UI Design"
  ];

  const quickLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "Formations", href: "#formations" },
    { name: "À propos", href: "#apropos" },
    { name: "Témoignages", href: "#témoignages" },
    { name: "Contact", href: "#contact" }
  ];

  const legalLinks = [
    "Mentions légales",
    "Politique de confidentialité",
    "CGV",
    "Plan du site"
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Infotelcom
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre partenaire de confiance pour une formation de qualité dans le numérique. 
              Nous formons les talents de demain aux technologies d'aujourd'hui.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61578582612743" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/infotelcom1?igsh=Y2tnNnF3MXVqc3Bu" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Formations */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nos Formations</h3>
            <ul className="space-y-3">
              {formations.map((formation) => (
                <li key={formation}>
                  <a href="#formations" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {formation}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  17 rue linengue (nkombo)<br />
                  Brazzaville, Congo
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">+242 068498792 / +242 068660821</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">infotelcomtech@gmail.com</span>
              </li>
            </ul>
            
            {/* QR Code Section */}
            <div className="mt-8 p-4 bg-white rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <QrCode className="w-4 h-4 text-gray-800" />
                <span className="text-sm font-semibold text-gray-800">Accès rapide</span>
              </div>
              <QRCodeSVG 
                value={window.location.origin}
                size={100}
                bgColor="#ffffff"
                fgColor="#000000"
                level="M"
                includeMargin={true}
              />
              <p className="text-xs text-gray-600 mt-2">
                Scannez pour accéder au site
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Restez informé de nos actualités</h3>
            <p className="text-gray-300 mb-6">
              Inscrivez-vous à notre newsletter pour recevoir nos dernières offres de formation 
              et actualités du secteur numérique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-primary rounded-lg font-semibold hover:opacity-90 transition-opacity">
                S'inscrire
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Infotelcom. Tous droits réservés.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;