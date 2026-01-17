import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ScrollAnimationWrapper, staggerContainer, staggerItem } from "./ScrollAnimationWrapper";

const Testimonials = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const testimonials = [
    {
      id: 1,
      name: "Marie Dubois",
      role: "Développeuse Full Stack chez TechCorp",
      formation: "Développement Web Full Stack",
      content: "Grâce à Infotelcom, j'ai pu me reconvertir dans le développement web. Les formateurs sont exceptionnels et le programme très complet. J'ai trouvé un emploi 2 semaines après ma formation !",
      rating: 5,
      avatar: "/placeholder.svg",
      company: "TechCorp"
    },
    {
      id: 2,
      name: "Ahmed Ben Ali",
      role: "Expert en Cybersécurité chez SecureIT",
      formation: "Cybersécurité & Ethical Hacking",
      content: "La formation en cybersécurité m'a permis d'acquérir des compétences pointues. Les travaux pratiques sont très réalistes et préparent vraiment au monde professionnel.",
      rating: 5,
      avatar: "/placeholder.svg",
      company: "SecureIT"
    },
    {
      id: 3,
      name: "Sophie Martin",
      role: "Digital Marketing Manager chez CreativeAgency",
      formation: "Marketing Digital & Design",
      content: "Formation complète qui m'a donné toutes les clés pour réussir dans le marketing digital. L'équipe pédagogique est à l'écoute et les projets très concrets.",
      rating: 5,
      avatar: "/placeholder.svg",
      company: "CreativeAgency"
    },
    {
      id: 4,
      name: "Thomas Leroux",
      role: "Data Scientist chez DataFlow",
      formation: "Intelligence Artificielle",
      content: "Un programme d'IA vraiment poussé avec des cas d'usage réels. J'ai pu monter en compétences rapidement et décrocher le poste de mes rêves en data science.",
      rating: 5,
      avatar: "/placeholder.svg",
      company: "DataFlow"
    },
    {
      id: 5,
      name: "Laura Petit",
      role: "UX Designer chez DesignStudio",
      formation: "UX/UI Design",
      content: "Excellente formation qui couvre tous les aspects du design UX/UI. Les méthodes enseignées sont modernes et directement applicables en entreprise.",
      rating: 5,
      avatar: "/placeholder.svg",
      company: "DesignStudio"
    },
    {
      id: 6,
      name: "Karim Mansouri",
      role: "DevOps Engineer chez CloudTech",
      formation: "DevOps & Cloud Computing",
      content: "Formation très technique avec de nombreux labs pratiques. J'ai pu maîtriser AWS et Kubernetes rapidement. Recommandé pour tous ceux qui veulent se spécialiser en DevOps.",
      rating: 5,
      avatar: "/placeholder.svg",
      company: "CloudTech"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <Star
              className={`w-4 h-4 ${
                i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
              }`}
            />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section id="témoignages" className="py-20 bg-gradient-secondary relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            y: [0, 50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimationWrapper className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
            whileInView={{ scale: [0.9, 1.02, 1] }}
            transition={{ duration: 0.6 }}
          >
            Témoignages
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez les retours de nos anciens étudiants qui ont réussi leur reconversion 
            professionnelle grâce à nos formations.
          </p>
        </ScrollAnimationWrapper>

        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-7xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Card className="relative p-6 border-0 bg-white hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                    <CardContent className="p-0">
                      {/* Quote Icon */}
                      <motion.div 
                        className="absolute top-4 right-4 opacity-10"
                        whileHover={{ opacity: 0.3, scale: 1.2 }}
                      >
                        <Quote className="w-8 h-8 text-primary" />
                      </motion.div>

                      {/* Rating */}
                      <div className="mb-4">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Content */}
                      <p className="text-muted-foreground mb-6 leading-relaxed italic text-sm">
                        "{testimonial.content}"
                      </p>

                      {/* Author Info */}
                      <div className="flex items-start space-x-4">
                        <motion.div whileHover={{ scale: 1.1 }}>
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                          <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Formation: {testimonial.formation}
                          </p>
                        </div>
                      </div>

                      {/* Company Badge */}
                      <motion.div 
                        className="mt-4 inline-block"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="px-3 py-1 bg-gradient-secondary text-xs font-medium text-primary rounded-full">
                          {testimonial.company}
                        </span>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Success Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            { number: "95%", label: "Taux de satisfaction" },
            { number: "4.8/5", label: "Note moyenne" },
            { number: "92%", label: "Recommandent nos formations" },
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center"
              variants={staggerItem}
            >
              <motion.div 
                className="text-4xl font-bold text-primary mb-2"
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
