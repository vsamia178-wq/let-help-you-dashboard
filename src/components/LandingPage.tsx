import React from "react";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  BrainCircuit, 
  TrendingUp, 
  Sparkles, 
  ChevronRight,
  ShieldCheck,
  Users,
  Award,
  PlayCircle,
  GraduationCap
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  const handleSchoolsCTA = () => {
    toast.info("Thank you for your interest! School portal registration is coming soon.");
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-secondary opacity-20 blur-[120px] rounded-full" 
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 -right-[5%] w-[50%] h-[50%] bg-success opacity-20 blur-[120px] rounded-full" 
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full mb-8 border border-white/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-secondary fill-secondary" />
                <span className="text-sm font-semibold tracking-wide uppercase">AI-Powered CBC Excellence</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 leading-[1.1]">
                Unlocking Every <span className="text-secondary">Learner's</span> Potential
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-xl font-medium leading-relaxed">
                ElimuSmart is Kenya's first AI-driven platform tailored for the CBC curriculum, merging animation with interactive pedagogy.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Button 
                  size="lg" 
                  className="clay-button-secondary h-16 px-10 text-xl font-bold"
                  onClick={onStart}
                >
                  Get Started Free
                  <ChevronRight className="ml-2 w-6 h-6" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-16 px-10 text-xl font-bold border-2 border-white/30 text-white hover:bg-white/10"
                  onClick={handleSchoolsCTA}
                >
                  ElimuSmart for Schools
                </Button>
              </div>
              <div className="mt-12 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-muted overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <p className="text-white/70 text-sm font-medium">
                  <span className="text-white font-bold">12,000+</span> Kenyan students learning today
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-white/10 aspect-video group">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7acde193-ffe0-4fbb-9a8e-fbc5f0c3ac49/hero-students-94a89939-1777405144112.webp" 
                  alt="Kenyan students learning with technology" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center shadow-2xl shadow-secondary/40"
                  >
                    <PlayCircle className="w-12 h-12 text-secondary-foreground fill-current" />
                  </motion.button>
                </div>
              </div>
              
              {/* Floating Element 1 */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 bg-white dark:bg-card p-5 rounded-2xl shadow-2xl border-2 border-success/20 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-success/20 p-3 rounded-xl">
                    <TrendingUp className="w-8 h-8 text-success" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Mastery Rate</p>
                    <p className="text-2xl font-black">+42% Higher</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-10 -left-10 bg-white dark:bg-card p-5 rounded-2xl shadow-2xl border-2 border-primary/20 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-xl">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Achievements</p>
                    <p className="text-2xl font-black text-primary">Badge Earned!</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white dark:bg-background py-10 border-b">
        <div className="container mx-auto px-6">
          <p className="text-center text-muted-foreground font-bold uppercase tracking-widest text-xs mb-8">Trusted by schools across</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            {['Nairobi County', 'Mombasa Education', 'Kisumu Hub', 'Nakuru Schools', 'Eldoret Academy'].map((school) => (
              <span key={school} className="text-xl font-bold tracking-tighter">{school}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-foreground">Future-Proof Education</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We've redesigned the educational experience from the ground up to support the Competency-Based Curriculum.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <BookOpen className="w-10 h-10 text-primary" />,
                title: "CBC Alignment",
                desc: "Every lesson is strictly mapped to the Kenyan curriculum from PP1 to Senior School.",
                color: "border-primary/20"
              },
              {
                icon: <BrainCircuit className="w-10 h-10 text-secondary" />,
                title: "AI Animations",
                desc: "Complex topics like the Solar System or Human Anatomy are explained via AI visual storytelling.",
                color: "border-secondary/20"
              },
              {
                icon: <TrendingUp className="w-10 h-10 text-success" />,
                title: "Personalized Paths",
                desc: "Our engine tracks learning speed and adapts content difficulty in real-time.",
                color: "border-success/20"
              },
              {
                icon: <GraduationCap className="w-10 h-10 text-primary" />,
                title: "Career Mapping",
                desc: "Data-driven insights suggest career pathways based on subject strengths and interests.",
                color: "border-primary/20"
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-10 rounded-[2.5rem] border-2 ${feature.color} bg-white dark:bg-card hover:shadow-xl transition-all group`}
              >
                <div className="mb-6 bg-muted p-4 rounded-2xl w-fit group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">A Control Center for <span className="text-success">Growth</span></h2>
              <div className="space-y-10">
                {[
                  {
                    title: "Progress Visualization",
                    desc: "Interactive charts show mastery across all 8 learning areas of the CBC.",
                    icon: <TrendingUp className="w-6 h-6 text-success" />
                  },
                  {
                    title: "24/7 AI Assistance",
                    desc: "An always-available tutor that answers questions and explains steps like a real teacher.",
                    icon: <Sparkles className="w-6 h-6 text-secondary" />
                  },
                  {
                    title: "Parental Oversight",
                    desc: "Real-time alerts and simple summaries for parents to monitor performance.",
                    icon: <ShieldCheck className="w-6 h-6 text-primary" />
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-muted flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-4 bg-muted/50 rounded-[3rem]"
            >
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7acde193-ffe0-4fbb-9a8e-fbc5f0c3ac49/dashboard-preview-32d88a75-1777405144470.webp" 
                alt="ElimuSmart Dashboard Preview" 
                className="rounded-[2.5rem] shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Users / Ecosystem */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary opacity-10 blur-[150px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">Designed for the Whole School</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">One platform that connects students, teachers, and parents in a unified learning loop.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "For Students",
                desc: "Engaging animations, game-like progress, and personalized help when they're stuck.",
                icon: <Users className="w-8 h-8" />
              },
              {
                title: "For Teachers",
                desc: "Automated lesson planning, class analytics, and tools for differentiated instruction.",
                icon: <BookOpen className="w-8 h-8" />
              },
              {
                title: "For Parents",
                desc: "Simplified performance reports and clear insights into their child's future pathways.",
                icon: <ShieldCheck className="w-8 h-8" />
              }
            ].map((user, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[2.5rem]">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-secondary-foreground mb-8 shadow-xl shadow-secondary/20">
                  {user.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{user.title}</h3>
                <p className="text-white/70 leading-relaxed font-medium">{user.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white dark:bg-background">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-secondary p-12 lg:p-20 rounded-[4rem] text-center text-secondary-foreground relative overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="grid grid-cols-6 h-full">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="border-r border-b border-secondary-foreground" />
                  ))}
                </div>
             </div>
             <div className="relative z-10">
               <h2 className="text-4xl lg:text-6xl font-black mb-8">Start Your Smarter <br/>Learning Journey Today</h2>
               <p className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto opacity-90 font-medium leading-relaxed">
                 Free to get started. No credit card required. Join the CBC revolution with ElimuSmart.
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <Button 
                  size="lg" 
                  className="bg-primary text-white hover:bg-primary/90 h-16 px-12 text-2xl font-black rounded-2xl"
                  onClick={onStart}
                 >
                   Join ElimuSmart
                   <ChevronRight className="ml-2 w-7 h-7" />
                 </Button>
               </div>
               <p className="mt-8 text-sm font-bold uppercase tracking-widest opacity-60">Available on Web • Android • iOS</p>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};