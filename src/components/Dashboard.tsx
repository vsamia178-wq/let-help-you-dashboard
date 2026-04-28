import React from "react";
import { 
  Book, 
  Brain, 
  TrendingUp, 
  MessageSquare, 
  Award, 
  Clock, 
  ChevronRight,
  Flame,
  Star,
  PlayCircle,
  Zap,
  Target,
  GraduationCap
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { View } from "../App";
import { toast } from "sonner";

interface DashboardProps {
  onViewChange: (view: View) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onViewChange }) => {
  const handleClaimBonus = () => {
    toast.success("Bonus Claimed! +50 Points added to your profile.", {
      icon: <Zap className="w-5 h-5 text-amber-500 fill-amber-500" />,
      duration: 5000
    });
  };

  return (
    <div className="container mx-auto px-6 py-10 max-w-7xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center gap-4 mb-3">
             <div className="bg-primary/10 px-3 py-1 rounded-full text-primary text-xs font-bold uppercase tracking-widest">
               Grade 6 Student
             </div>
             <div className="bg-success/10 px-3 py-1 rounded-full text-success text-xs font-bold uppercase tracking-widest">
               CBC Track
             </div>
          </div>
          <h1 className="text-4xl font-black text-foreground">Hujambo, Jabari! 👋</h1>
          <p className="text-lg text-muted-foreground mt-1">Ready to explore more concepts today?</p>
        </motion.div>
        
        <div className="flex gap-4">
          <div className="bg-white dark:bg-card border-2 border-primary/10 rounded-2xl px-6 py-3 flex items-center gap-4 shadow-sm">
             <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
               <Zap className="w-6 h-6 fill-current" />
             </div>
             <div>
               <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider leading-none">Total Points</p>
               <p className="text-xl font-black">2,450</p>
             </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 mb-12">
        {/* Progress Overview */}
        <Card className="lg:col-span-8 clay-card border-none">
          <CardHeader className="flex flex-row items-center justify-between pb-8">
            <div>
              <CardTitle className="text-2xl font-black">Curriculum Mastery</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">Your performance across Term 1 subjects</p>
            </div>
            <Button variant="ghost" className="text-primary font-bold" onClick={() => onViewChange("analytics")}>
              View Details <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { subject: "Mathematics", progress: 75, color: "bg-primary", icon: "📐" },
                { subject: "Science & Technology", progress: 62, color: "bg-success", icon: "🧪" },
                { subject: "Kiswahili", progress: 88, color: "bg-secondary", icon: "🇰🇪" },
                { subject: "English", progress: 82, color: "bg-primary", icon: "📚" },
                { subject: "Social Studies", progress: 45, color: "bg-primary", icon: "🌍" },
                { subject: "Creative Arts", progress: 95, color: "bg-success", icon: "🎨" }
              ].map((sub, i) => (
                <div key={i} className="space-y-3 group cursor-pointer" onClick={() => onViewChange("learning")}>
                  <div className="flex justify-between text-sm font-bold">
                    <span className="flex items-center gap-2">
                      <span className="text-lg group-hover:scale-125 transition-transform">{sub.icon}</span>
                      {sub.subject}
                    </span>
                    <span className="text-muted-foreground">{sub.progress}%</span>
                  </div>
                  <div className="relative h-3 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${sub.progress}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`h-full ${sub.color}`} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Mascot & Streak */}
        <div className="lg:col-span-4 space-y-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-primary rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-primary/30"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
                  <Flame className="w-8 h-8 text-secondary fill-secondary" />
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Daily Streak</p>
                  <p className="text-3xl font-black">12 Days</p>
                </div>
              </div>
              <p className="text-lg font-medium opacity-90 mb-6">You're on fire, Jabari! 3 more days to unlock the <span className="text-secondary font-black">Streak Master</span> badge.</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                  <div key={d} className={`h-12 flex-1 rounded-xl flex items-center justify-center text-xs font-black transition-all ${d < 6 ? 'bg-secondary text-secondary-foreground shadow-lg shadow-secondary/20' : 'bg-white/10 text-white/40 border border-white/10'}`}>
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'][d-1]}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <Card className="clay-card border-none bg-success/5 overflow-hidden">
             <div className="p-8">
               <div className="flex items-start justify-between mb-4">
                 <div className="bg-success text-white p-3 rounded-2xl shadow-lg shadow-success/20">
                   <Target className="w-6 h-6" />
                 </div>
                 <span className="text-[10px] font-black uppercase text-success bg-success/10 px-2 py-1 rounded">Active Quest</span>
               </div>
               <h3 className="text-xl font-black mb-2">Math Wizard II</h3>
               <p className="text-sm text-muted-foreground font-medium mb-6">Complete 5 more algebra quizzes to earn a legendary badge.</p>
               <div className="flex items-center gap-3">
                 <Progress value={40} className="h-2 flex-grow" />
                 <span className="text-xs font-black">2/5</span>
               </div>
             </div>
          </Card>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Recommended Learning */}
        <div className="lg:col-span-8 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-black flex items-center">
              <Brain className="w-8 h-8 mr-3 text-primary" />
              For You
            </h2>
            <Button variant="ghost" className="text-primary font-bold" onClick={() => onViewChange("learning")}>
              Explore Library <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Introduction to Fractions",
                subject: "Mathematics",
                time: "15 mins",
                type: "AI Animation",
                icon: "📐",
                image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7acde193-ffe0-4fbb-9a8e-fbc5f0c3ac49/hero-students-94a89939-1777405144112.webp"
              },
              {
                title: "The Water Cycle",
                subject: "Science",
                time: "20 mins",
                type: "Interactive Journey",
                icon: "🧪",
                image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7acde193-ffe0-4fbb-9a8e-fbc5f0c3ac49/dashboard-preview-32d88a75-1777405144470.webp"
              },
              {
                title: "National Government",
                subject: "Social Studies",
                time: "18 mins",
                type: "Story Mode",
                icon: "🌍",
                image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7acde193-ffe0-4fbb-9a8e-fbc5f0c3ac49/career-roadmap-path-fd77b082-1777405144544.webp"
              },
              {
                title: "Creative Arts & Design",
                subject: "Arts",
                time: "12 mins",
                type: "Hands-on Project",
                icon: "🎨",
                image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7acde193-ffe0-4fbb-9a8e-fbc5f0c3ac49/hero-students-94a89939-1777405144112.webp"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white dark:bg-card border-2 border-primary/5 rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all cursor-pointer"
                onClick={() => onViewChange("learning")}
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider text-primary shadow-sm">
                      {item.subject}
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground shadow-lg">
                      <PlayCircle className="w-7 h-7 fill-current" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                  <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {item.time}</span>
                    <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-secondary fill-secondary" /> {item.type}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Actions & AI Assistant */}
        <div className="lg:col-span-4 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-black">Quick Actions</h2>
            <Button 
              className="clay-button-primary w-full justify-start h-20 text-xl font-black rounded-3xl" 
              onClick={() => onViewChange("tutor")}
            >
              <MessageSquare className="mr-4 w-7 h-7" />
              Ask AI Tutor
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start h-20 text-xl font-black rounded-3xl border-2 border-success/20 hover:bg-success/5 hover:border-success/40"
              onClick={() => onViewChange("careers")}
            >
              <TrendingUp className="mr-4 w-7 h-7 text-success" />
              My Career Path
            </Button>
          </div>
          
          <div className="bg-amber-500 rounded-[2.5rem] p-8 text-secondary-foreground relative overflow-hidden group shadow-2xl shadow-amber-500/20">
             <div className="absolute -right-4 -bottom-4 w-40 h-40 opacity-20 transition-transform group-hover:rotate-12 duration-500">
               <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7acde193-ffe0-4fbb-9a8e-fbc5f0c3ac49/ai-tutor-character-01c3ef39-1777405143945.webp" alt="Mascot" className="w-full h-full object-contain" />
             </div>
             <div className="relative z-10">
               <h3 className="text-2xl font-black mb-3 flex items-center">
                 <Zap className="w-6 h-6 mr-2 fill-current" />
                 Daily Bonus!
               </h3>
               <p className="text-lg font-bold opacity-80 mb-6 leading-tight">
                 Earn double points for every Science quiz completed today.
               </p>
               <Button className="w-full bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90 font-black h-12 rounded-2xl" onClick={handleClaimBonus}>
                 Claim & Start
               </Button>
             </div>
          </div>

          <div className="bg-white dark:bg-card border-2 border-muted p-8 rounded-[2.5rem]">
             <h3 className="text-lg font-black mb-6">Upcoming Webinar</h3>
             <div className="flex gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="font-bold">Career Talk: STEM</p>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">This Saturday @ 10 AM</p>
                </div>
             </div>
             <Button variant="ghost" className="w-full text-primary font-bold border-2 border-primary/10 rounded-2xl h-12">
               Register Now
             </Button>
          </div>
        </div>
      </div>
    </div>
  );
};