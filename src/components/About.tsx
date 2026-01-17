import { Target, Users, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence Pédagogique",
      description: "Des programmes conçus par des experts du secteur pour garantir un apprentissage de qualité."
    },
    {
      icon: Users,
      title: "Accompagnement Personnalisé",
      description: "Un suivi individuel pour maximiser vos chances de réussite et d'insertion professionnelle."
    },
    {
      icon: Award,
      title: "Certifications Reconnues",
      description: "Des diplômes et certifications valorisés par les entreprises du secteur numérique."
    },
    {
      icon: TrendingUp,
      title: "Innovation Continue",
      description: "Des formations constamment mises à jour selon les dernières tendances technologiques."
    }
  ];

  const stats = [
    { number: "2023", label: "Année de création" },
    { number: "500+", label: "Étudiants diplômés" },
    { number: "95%", label: "Taux de satisfaction" },
    { number: "50+", label: "Partenaires entreprises" }
  ];

  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              À propos d'Infotelcom
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Depuis 2023, Infotelcom forme les professionnels du numérique de demain. 
              Notre mission est de démocratiser l'accès aux compétences technologiques.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Notre Histoire
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Infotelcom a été fondé en 2023 par monsieur MAWANA Christ, suite à une conférence 
                  d'OSIAN à laquelle il avait assisté en mai 2023. Cette rencontre a été le déclic 
                  pour créer un centre de formation dédié aux métiers du numérique au Congo.
                </p>
                <p>
                  Accompagné de son cofondateur monsieur MAYELE Albert Isaac (alias monsieur zenos 
                  anonymous), ils ont rassemblé une équipe de responsables passionnés : NGALIKO Juvel, 
                  KIHOUASSAMO Alpha Nash Divine, et KAMANZI Jean Paul Fiston.
                </p>
                <p>
                  Ensemble, cette équipe dynamique a développé une vision commune : démocratiser 
                  l'accès aux formations technologiques de qualité tout en étant basés sur la 
                  résolution des problèmes des différentes entreprises. Depuis notre création, nous 
                  proposons des formations spécialisées allant du développement web à la cybersécurité, 
                  en passant par le marketing digital, l'administration réseau, le réseau informatique 
                  et la télécommunication.
                </p>
                <p>
                  Avec plus de 500 diplômés et un taux d'insertion professionnelle de 95%, 
                  Infotelcom est devenu une référence dans la formation numérique au Congo.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center p-6 border-0 bg-gradient-secondary hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              Nos Valeurs
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={index} 
                  className="text-center p-6 border-0 bg-gradient-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mission Section */}
          <div className="text-center bg-gradient-primary rounded-2xl p-8 md:p-12 text-white animate-fade-in">
            <h3 className="text-3xl font-bold mb-6">Notre Mission</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
              Rendre accessible la formation numérique de qualité à tous, en proposant des 
              programmes innovants qui préparent nos étudiants aux défis technologiques de demain. 
              Nous croyons que chacun mérite d'avoir sa place dans la révolution numérique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;