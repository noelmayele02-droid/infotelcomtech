import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-video-bg.jpg";

const Hero = () => {
  const scrollToFormations = () => {
    const element = document.querySelector("#formations");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with People */}
      <div className="absolute inset-0">
        {/* Static background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        
        {/* Walking people silhouettes */}
        <div className="absolute inset-0">
          {/* Person 1 - Walking left to right */}
          <div className="absolute bottom-20 left-0 w-12 h-20 bg-white/30 rounded-full animate-walk-right">
            <div className="w-4 h-4 bg-white/40 rounded-full mx-auto mb-1"></div>
            <div className="w-8 h-12 bg-white/30 rounded-lg mx-auto"></div>
            <div className="flex justify-between mt-1">
              <div className="w-2 h-4 bg-white/30 rounded animate-leg-walk"></div>
              <div className="w-2 h-4 bg-white/30 rounded animate-leg-walk-delay"></div>
            </div>
          </div>
          
          {/* Person 2 - Walking right to left */}
          <div className="absolute bottom-32 right-0 w-12 h-20 bg-white/20 rounded-full animate-walk-left">
            <div className="w-4 h-4 bg-white/30 rounded-full mx-auto mb-1"></div>
            <div className="w-8 h-12 bg-white/20 rounded-lg mx-auto"></div>
            <div className="flex justify-between mt-1">
              <div className="w-2 h-4 bg-white/20 rounded animate-leg-walk"></div>
              <div className="w-2 h-4 bg-white/20 rounded animate-leg-walk-delay"></div>
            </div>
          </div>
          
          {/* Person 3 - Working at desk */}
          <div className="absolute bottom-24 left-1/4 w-16 h-24 bg-white/15 rounded-lg animate-typing">
            <div className="w-5 h-5 bg-white/25 rounded-full mx-auto mb-2"></div>
            <div className="w-10 h-8 bg-white/15 rounded mx-auto mb-2"></div>
            <div className="w-12 h-4 bg-white/10 rounded-sm mx-auto"></div>
          </div>
          
          {/* Person 4 - Moving in background */}
          <div className="absolute bottom-40 left-1/3 w-10 h-16 bg-white/10 rounded-full animate-float-person">
            <div className="w-3 h-3 bg-white/20 rounded-full mx-auto mb-1"></div>
            <div className="w-6 h-10 bg-white/10 rounded mx-auto"></div>
          </div>
          
          {/* Building/office elements */}
          <div className="absolute bottom-0 left-0 w-32 h-16 bg-white/5 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-24 h-12 bg-white/5 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-1/2 w-40 h-20 bg-white/5 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Moving gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-accent/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Formez-vous au
            <span className="block bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
              Numérique de demain
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Infotelcom vous accompagne dans votre transition numérique avec des formations 
            de pointe adaptées aux besoins du marché actuel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              onClick={scrollToFormations}
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 font-semibold px-8 py-4 text-lg group"
            >
              Découvrir nos formations
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 font-semibold px-8 py-4 text-lg group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Voir la vidéo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-slide-up">
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Étudiants formés</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="text-white/80">Taux d'insertion</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-white/80">Formations disponibles</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;