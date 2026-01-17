import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ScrollAnimationWrapper, ParallaxWrapper, staggerContainer, staggerItem } from "./ScrollAnimationWrapper";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "17 rue linengue (nkombo)\nBrazzaville, Congo"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+242 068498792 / +242 068660821"
    },
    {
      icon: Mail,
      title: "Email",
      content: "infotelcomtech@gmail.com"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun - Ven: 9h00 - 18h00\nSam: 9h00 - 13h00"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ParallaxWrapper speed={0.3}>
          <div className="absolute top-40 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        </ParallaxWrapper>
        <ParallaxWrapper speed={-0.2}>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
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
              Contactez-nous
            </motion.h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Vous avez des questions sur nos formations ? Notre équipe est là pour vous accompagner 
              dans votre projet de formation.
            </p>
          </ScrollAnimationWrapper>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <ScrollAnimationWrapper direction="left">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Informations de contact
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  N'hésitez pas à nous contacter pour toute question concernant nos formations, 
                  les modalités d'inscription ou pour planifier une visite de nos locaux.
                </p>
              </ScrollAnimationWrapper>

              <motion.div 
                className="grid gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {contactInfo.map((info, index) => (
                  <motion.div key={index} variants={staggerItem}>
                    <motion.div
                      whileHover={{ x: 10, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="border-0 bg-gradient-secondary hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <motion.div 
                              className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <info.icon className="w-6 h-6 text-white" />
                            </motion.div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                              <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Map */}
              <ScrollAnimationWrapper delay={0.4}>
                <Card className="border-0 bg-gradient-secondary overflow-hidden">
                  <CardContent className="p-0">
                    <motion.div 
                      className="h-64"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.3234567890123!2d15.2662095!3d-4.2634012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a31cdc27a6d67%3A0x8b8c6e8f8a9b7c6d!2s17%20Rue%20Linengue%2C%20Brazzaville%2C%20Congo!5e0!3m2!1sfr!2s!4v1234567890123!5m2!1sfr!2s"
                        width="100%"
                        height="256"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                      ></iframe>
                    </motion.div>
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>
            </div>

            {/* Contact Form */}
            <ScrollAnimationWrapper direction="right" delay={0.2}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      Envoyez-nous un message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <motion.div 
                          className="space-y-2"
                          whileFocus={{ scale: 1.02 }}
                        >
                          <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                            Prénom *
                          </label>
                          <Input 
                            id="firstName"
                            placeholder="Votre prénom"
                            required
                            className="border-border focus:ring-primary transition-all duration-300"
                          />
                        </motion.div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                            Nom *
                          </label>
                          <Input 
                            id="lastName"
                            placeholder="Votre nom"
                            required
                            className="border-border focus:ring-primary transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email *
                        </label>
                        <Input 
                          id="email"
                          type="email"
                          placeholder="votre.email@exemple.com"
                          required
                          className="border-border focus:ring-primary transition-all duration-300"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground">
                          Téléphone
                        </label>
                        <Input 
                          id="phone"
                          type="tel"
                          placeholder="068498792"
                          className="border-border focus:ring-primary transition-all duration-300"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="formation" className="text-sm font-medium text-foreground">
                          Formation d'intérêt
                        </label>
                        <select 
                          id="formation"
                          className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Sélectionnez une formation</option>
                          <option value="dev-fullstack">Développement Web Full Stack</option>
                          <option value="cybersecurity">Cybersécurité & Ethical Hacking</option>
                          <option value="marketing-digital">Marketing Digital & Design</option>
                          <option value="ia">Intelligence Artificielle</option>
                          <option value="devops">DevOps & Cloud Computing</option>
                          <option value="ux-ui">UX/UI Design</option>
                          <option value="reseau-admin">Réseau Informatique et Administration</option>
                          <option value="maintenance">Maintenance Informatique</option>
                          <option value="intro-web">Introduction à la Programmation Web</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-foreground">
                          Message *
                        </label>
                        <Textarea 
                          id="message"
                          placeholder="Décrivez votre projet ou posez vos questions..."
                          rows={5}
                          required
                          className="border-border focus:ring-primary resize-none transition-all duration-300"
                        />
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          type="submit"
                          className="w-full bg-gradient-primary hover:opacity-90 transition-opacity group"
                          size="lg"
                        >
                          <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          Envoyer le message
                        </Button>
                      </motion.div>

                      <p className="text-xs text-muted-foreground text-center">
                        En envoyant ce formulaire, vous acceptez d'être contacté par notre équipe 
                        concernant votre demande de formation.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
