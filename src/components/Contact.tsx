import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollAnimationWrapper, ParallaxWrapper, staggerContainer, staggerItem } from "./ScrollAnimationWrapper";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "Prénom requis").max(100),
  lastName: z.string().trim().min(1, "Nom requis").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().max(20).optional(),
  formation: z.string().max(100).optional(),
  message: z.string().trim().min(10, "Message trop court (min 10 caractères)").max(1000),
});

const Contact = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    formation: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validated = contactSchema.parse({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || undefined,
        formation: formData.formation || undefined,
        message: formData.message,
      });

      setLoading(true);

      const { error } = await supabase.from("contact_requests").insert({
        first_name: validated.firstName,
        last_name: validated.lastName,
        email: validated.email,
        phone: validated.phone || null,
        formation: validated.formation || null,
        message: validated.message,
        user_id: user?.id || null,
      });

      if (error) {
        toast.error("Erreur lors de l'envoi du message");
        console.error("Contact form error:", error);
        return;
      }

      setSubmitted(true);
      toast.success("Message envoyé avec succès !");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        formation: "",
        message: "",
      });

      // Reset submitted state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setLoading(false);
    }
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
                    <AnimatePresence mode="wait">
                      {submitted ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="text-center py-12"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                          >
                            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                          </motion.div>
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            Message envoyé !
                          </h3>
                          <p className="text-muted-foreground">
                            Nous vous répondrons dans les plus brefs délais.
                          </p>
                        </motion.div>
                      ) : (
                        <motion.form
                          key="form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onSubmit={handleSubmit}
                          className="space-y-6"
                        >
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                                Prénom *
                              </label>
                              <Input 
                                id="firstName"
                                placeholder="Votre prénom"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={`border-border focus:ring-primary transition-all duration-300 ${errors.firstName ? "border-destructive" : ""}`}
                              />
                              {errors.firstName && (
                                <p className="text-xs text-destructive">{errors.firstName}</p>
                              )}
                            </div>
                            <div className="space-y-2">
                              <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                                Nom *
                              </label>
                              <Input 
                                id="lastName"
                                placeholder="Votre nom"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={`border-border focus:ring-primary transition-all duration-300 ${errors.lastName ? "border-destructive" : ""}`}
                              />
                              {errors.lastName && (
                                <p className="text-xs text-destructive">{errors.lastName}</p>
                              )}
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
                              value={formData.email}
                              onChange={handleChange}
                              className={`border-border focus:ring-primary transition-all duration-300 ${errors.email ? "border-destructive" : ""}`}
                            />
                            {errors.email && (
                              <p className="text-xs text-destructive">{errors.email}</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium text-foreground">
                              Téléphone
                            </label>
                            <Input 
                              id="phone"
                              type="tel"
                              placeholder="068498792"
                              value={formData.phone}
                              onChange={handleChange}
                              className="border-border focus:ring-primary transition-all duration-300"
                            />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="formation" className="text-sm font-medium text-foreground">
                              Formation d'intérêt
                            </label>
                            <select 
                              id="formation"
                              value={formData.formation}
                              onChange={handleChange}
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
                              value={formData.message}
                              onChange={handleChange}
                              className={`border-border focus:ring-primary resize-none transition-all duration-300 ${errors.message ? "border-destructive" : ""}`}
                            />
                            {errors.message && (
                              <p className="text-xs text-destructive">{errors.message}</p>
                            )}
                          </div>

                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button 
                              type="submit"
                              className="w-full bg-gradient-primary hover:opacity-90 transition-opacity group"
                              size="lg"
                              disabled={loading}
                            >
                              {loading ? (
                                <motion.div
                                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                />
                              ) : (
                                <>
                                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                  Envoyer le message
                                </>
                              )}
                            </Button>
                          </motion.div>

                          <p className="text-xs text-muted-foreground text-center">
                            En envoyant ce formulaire, vous acceptez d'être contacté par notre équipe 
                            concernant votre demande de formation.
                          </p>
                        </motion.form>
                      )}
                    </AnimatePresence>
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
