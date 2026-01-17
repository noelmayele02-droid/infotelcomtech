import { Clock, Users, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import formationDev from "@/assets/formation-dev.jpg";
import formationCyber from "@/assets/formation-cyber.jpg";
import formationMarketing from "@/assets/formation-marketing.jpg";

const Formations = () => {
  const formations = [
    {
      id: 1,
      title: "Développement Web Full Stack",
      description: "Maîtrisez les technologies web modernes : React, Node.js, MongoDB, et plus encore.",
      image: formationDev,
      duration: "6 mois",
      level: "Débutant à Avancé",
      students: "120+ étudiants",
      price: "À partir de 2500€",
      skills: ["React", "Node.js", "MongoDB", "JavaScript", "CSS", "Git"],
      badge: "Populaire"
    },
    {
      id: 2,
      title: "Cybersécurité & Ethical Hacking",
      description: "Apprenez à sécuriser les systèmes informatiques et à détecter les vulnérabilités.",
      image: formationCyber,
      duration: "4 mois",
      level: "Intermédiaire",
      students: "80+ étudiants",
      price: "À partir de 3000€",
      skills: ["Pentesting", "Linux", "Cryptographie", "OSINT", "Forensics"],
      badge: "Certifiant"
    },
    {
      id: 3,
      title: "Marketing Digital & Design",
      description: "Créez des campagnes digitales efficaces et maîtrisez les outils de design moderne.",
      image: formationMarketing,
      duration: "3 mois",
      level: "Débutant",
      students: "150+ étudiants",
      price: "À partir de 1800€",
      skills: ["SEO", "Google Ads", "Photoshop", "Illustrator", "Analytics"],
      badge: "Nouveau"
    },
    {
      id: 4,
      title: "Intelligence Artificielle",
      description: "Explorez le machine learning, deep learning et les applications IA modernes.",
      image: formationDev,
      duration: "8 mois",
      level: "Avancé",
      students: "60+ étudiants",
      price: "À partir de 4000€",
      skills: ["Python", "TensorFlow", "PyTorch", "Data Science", "NLP"],
      badge: "Expert"
    },
    {
      id: 5,
      title: "DevOps & Cloud Computing",
      description: "Maîtrisez l'infrastructure cloud et les pratiques DevOps avec AWS, Docker, Kubernetes.",
      image: formationCyber,
      duration: "5 mois",
      level: "Intermédiaire",
      students: "90+ étudiants",
      price: "À partir de 3500€",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      badge: "Demandé"
    },
    {
      id: 6,
      title: "UX/UI Design",
      description: "Concevez des interfaces utilisateur intuitives et des expériences mémorables.",
      image: formationMarketing,
      duration: "4 mois",
      level: "Débutant à Intermédiaire",
      students: "110+ étudiants",
      price: "À partir de 2200€",
      skills: ["Figma", "Adobe XD", "Prototype", "User Research", "Design System"],
      badge: "Créatif"
    },
    {
      id: 7,
      title: "Réseau Informatique et Administration",
      description: "Maîtrisez la gestion des réseaux, serveurs et infrastructure informatique.",
      image: formationCyber,
      duration: "5 mois",
      level: "Intermédiaire",
      students: "70+ étudiants",
      price: "À partir de 2800€",
      skills: ["TCP/IP", "Windows Server", "Linux", "Cisco", "Sécurité réseau"],
      badge: "Technique"
    },
    {
      id: 8,
      title: "Maintenance Informatique",
      description: "Apprenez à diagnostiquer, réparer et maintenir les équipements informatiques.",
      image: formationDev,
      duration: "3 mois",
      level: "Débutant",
      students: "90+ étudiants",
      price: "À partir de 1500€",
      skills: ["Hardware", "Software", "Diagnostic", "Réparation", "Assemblage PC"],
      badge: "Pratique"
    },
    {
      id: 9,
      title: "Introduction à la Programmation Web",
      description: "Découvrez les bases de la programmation web avec HTML, CSS et JavaScript.",
      image: formationMarketing,
      duration: "2 mois",
      level: "Débutant",
      students: "200+ étudiants",
      price: "À partir de 1200€",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Git"],
      badge: "Essentiel"
    }
  ];

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "Populaire": return "default";
      case "Certifiant": return "secondary";
      case "Nouveau": return "destructive";
      case "Expert": return "outline";
      case "Technique": return "secondary";
      case "Pratique": return "default";
      case "Essentiel": return "destructive";
      default: return "default";
    }
  };

  return (
    <section id="formations" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Nos Formations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez notre catalogue de formations conçues pour vous préparer aux métiers du numérique. 
            Chaque programme est adapté aux besoins actuels du marché.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formations.map((formation, index) => (
            <Card 
              key={formation.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={formation.image} 
                  alt={formation.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant={getBadgeVariant(formation.badge)} className="font-semibold">
                    {formation.badge}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {formation.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {formation.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {formation.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {formation.skills.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{formation.skills.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    {formation.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    {formation.students}
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-2 text-primary" />
                    {formation.level}
                  </div>
                  <div className="font-semibold text-primary">
                    {formation.price}
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-gradient-primary hover:opacity-90 transition-opacity group">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
            Voir toutes les formations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Formations;