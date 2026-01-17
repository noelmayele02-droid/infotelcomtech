import { Target, Users, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ScrollAnimationWrapper, ParallaxWrapper, ScaleOnScroll, staggerContainer, staggerItem } from "./ScrollAnimationWrapper";

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
    <section id="apropos" className="py-20 bg-white relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ParallaxWrapper speed={0.3}>
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        </ParallaxWrapper>
        <ParallaxWrapper speed={-0.2}>
          <div className="absolute bottom-40 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </ParallaxWrapper>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimationWrapper className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1.02, 1] }}
              transition={{ duration: 0.6 }}
            >
              À propos d'Infotelcom
            </motion.h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Depuis 2023, Infotelcom forme les professionnels du numérique de demain. 
              Notre mission est de démocratiser l'accès aux compétences technologiques.
            </p>
          </ScrollAnimationWrapper>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <ScrollAnimationWrapper direction="left">
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
                  résolution des problèmes des différentes entreprises.
                </p>
                <p>
                  Avec plus de 500 diplômés et un taux d'insertion professionnelle de 95%, 
                  Infotelcom est devenu une référence dans la formation numérique au Congo.
                </p>
              </div>
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper direction="right" delay={0.2}>
              <motion.div 
                className="grid grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {stats.map((stat, index) => (
                  <motion.div key={index} variants={staggerItem}>
                    <Card className="text-center p-6 border-0 bg-gradient-secondary hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <motion.div 
                          className="text-3xl font-bold text-primary mb-2"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {stat.number}
                        </motion.div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </ScrollAnimationWrapper>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <ScrollAnimationWrapper className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground">
                Nos Valeurs
              </h3>
            </ScrollAnimationWrapper>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {values.map((value, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="text-center p-6 border-0 bg-gradient-secondary hover:shadow-xl transition-all duration-300 h-full">
                      <CardContent className="p-0">
                        <motion.div 
                          className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <value.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h4 className="text-lg font-semibold mb-3 text-foreground">{value.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mission Section */}
          <ScaleOnScroll>
            <motion.div 
              className="text-center bg-gradient-primary rounded-2xl p-8 md:p-12 text-white"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h3 
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Notre Mission
              </motion.h3>
              <motion.p 
                className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Rendre accessible la formation numérique de qualité à tous, en proposant des 
                programmes innovants qui préparent nos étudiants aux défis technologiques de demain. 
                Nous croyons que chacun mérite d'avoir sa place dans la révolution numérique.
              </motion.p>
            </motion.div>
          </ScaleOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
