import { Clock, Users, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ScrollAnimationWrapper, staggerContainer, staggerItem } from "./ScrollAnimationWrapper";
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
    <section id="formations" className="py-20 bg-gradient-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimationWrapper className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
            whileInView={{ scale: [0.9, 1.02, 1] }}
            transition={{ duration: 0.6 }}
          >
            Nos Formations
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez notre catalogue de formations conçues pour vous préparer aux métiers du numérique. 
            Chaque programme est adapté aux besoins actuels du marché.
          </p>
        </ScrollAnimationWrapper>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {formations.map((formation, index) => (
            <motion.div
              key={formation.id}
              variants={staggerItem}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 bg-white border-0 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={formation.image} 
                    alt={formation.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant={getBadgeVariant(formation.badge)} className="font-semibold">
                      {formation.badge}
                    </Badge>
                  </div>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
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
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full mt-6 bg-gradient-primary hover:opacity-90 transition-opacity group">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <ScrollAnimationWrapper className="text-center mt-12" delay={0.3}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
              Voir toutes les formations
            </Button>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default Formations;
