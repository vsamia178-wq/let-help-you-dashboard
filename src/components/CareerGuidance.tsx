import React from "react";
import { 
  Compass, 
  Map, 
  Lightbulb, 
  GraduationCap, 
  Briefcase, 
  Dna, 
  Code, 
  Palette,
  ArrowRight,
  TrendingUp,
  Target,
  ChevronRight,
  Award
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export const CareerGuidance: React.FC = () => {
  const careerPaths = [
    {
      title: "Software Engineer",
      match: 95,
      icon: <Code className="w-8 h-8" />,
      subjects: ["Math", "Science", "Creative Arts"],
      desc: "Based on your strong logical reasoning and problem-solving skills in Term 1.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      accent: "border-blue-500/20"
    },
    {
      title: "Medical Specialist",
      match: 88,
      icon: <Dna className="w-8 h-8" />,
      subjects: ["Science", "Math", "English"],
      desc: "Your consistent performance in Biological Sciences makes this a perfect fit.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      accent: "border-emerald-500/20"
    },
    {
      title: "Digital Architect",
      match: 76,
      icon: <Palette className="w-8 h-8" />,
      subjects: ["Arts", "Math", "Social Studies"],
      desc: "Combines your creative eye with structural thinking seen in your projects.",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
      accent: "border-amber-500/20"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-10 max-w-7xl">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 mb-16">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-1.5 rounded-full mb-6 border border-success/20"
          >
            <Compass className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Career Intelligence v2.0</span>
          </motion.div>
          <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-[1.1]">Your Future, <span className="text-primary">Intelligently Mapped.</span></h1>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed">
            ElimuSmart analyzes your academic performance, subject mastery, and personal interests to recommend pathways that align with the Kenyan CBC framework.
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-card p-8 rounded-[2.5rem] border-2 border-primary/10 flex items-center gap-6 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="bg-primary text-white p-5 rounded-[1.5rem] shadow-xl shadow-primary/20">
            <Target className="w-10 h-10" />
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mb-1">Analysis Reliability</p>
            <p className="text-3xl font-black text-primary">84% Match</p>
          </div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 mb-20">
        <div className="lg:col-span-8 space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-black">Recommended Pathways</h2>
            <Button variant="ghost" className="text-primary font-bold">Explore All <ChevronRight className="ml-1 w-4 h-4" /></Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerPaths.map((path, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white dark:bg-card border-2 ${path.accent} rounded-[2.5rem] p-8 hover:shadow-2xl hover:-translate-y-2 transition-all group flex flex-col h-full shadow-sm`}
              >
                <div className={`${path.bgColor} ${path.color} w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform`}>
                  {path.icon}
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-black text-2xl tracking-tight leading-none">{path.title}</h3>
                  <Badge className="bg-success text-white border-none font-black px-3 py-1 rounded-lg">{path.match}%</Badge>
                </div>
                <p className="text-sm text-muted-foreground font-medium mb-8 leading-relaxed flex-grow">{path.desc}</p>
                
                <div className="space-y-4 mb-8">
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Required Strengths:</p>
                  <div className="flex flex-wrap gap-2">
                    {path.subjects.map(s => (
                      <Badge key={s} variant="secondary" className="text-[10px] font-bold rounded-lg px-3 py-1">{s}</Badge>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full h-12 bg-muted text-foreground hover:bg-primary hover:text-white transition-all font-black rounded-2xl border-none">
                  View Roadmap
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-primary rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl shadow-primary/30">
             <div className="absolute top-0 right-0 w-full h-full opacity-10">
                <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7acde193-ffe0-4fbb-9a8e-fbc5f0c3ac49/career-roadmap-path-fd77b082-1777405144544.webp" alt="Map" className="w-full h-full object-cover" />
             </div>
             <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-black mb-6">Explore the Global Marketplace</h3>
                  <p className="text-lg opacity-80 font-medium mb-8 leading-relaxed">See how your current CBC skills translate to the job market of 2030 and beyond.</p>
                  <Button className="clay-button-secondary h-14 px-8 text-lg font-black rounded-2xl">
                    Open interactive Map
                  </Button>
                </div>
                <div className="hidden md:block">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-secondary-foreground shadow-lg">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60">High Growth Field</p>
                        <p className="font-bold">Renewable Energy</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-success rounded-xl flex items-center justify-center text-white shadow-lg">
                        <Map className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Local Demand</p>
                        <p className="font-bold">Fintech in Kenya</p>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
           <Card className="clay-card border-none bg-secondary/10">
             <CardHeader className="pb-4">
               <CardTitle className="text-2xl font-black flex items-center">
                 <Lightbulb className="w-7 h-7 mr-3 text-secondary fill-secondary" />
                 Skill Gap Analysis
               </CardTitle>
             </CardHeader>
             <CardContent className="space-y-8">
               <p className="text-sm font-medium text-muted-foreground leading-relaxed">Focus on these core competencies to strengthen your profile for <span className="text-primary font-black">STEM careers</span>:</p>
               <div className="space-y-6">
                 {[
                   { name: 'Logical Reasoning', level: 60, color: 'bg-primary' },
                   { name: 'Digital Literacy', level: 85, color: 'bg-success' },
                   { name: 'Critical Thinking', level: 45, color: 'bg-secondary' }
                 ].map((skill, i) => (
                   <div key={i} className="space-y-3">
                     <div className="flex justify-between text-xs font-black uppercase tracking-widest">
                       <span>{skill.name}</span>
                       <span className="text-muted-foreground">{skill.level}%</span>
                     </div>
                     <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        className={`h-full ${skill.color}`} 
                       />
                     </div>
                   </div>
                 ))}
               </div>
               <Button variant="outline" className="w-full h-14 rounded-2xl border-2 border-primary/10 text-primary font-black hover:bg-primary/5 transition-colors">
                  Take Skill Assessment
               </Button>
             </CardContent>
           </Card>

           <Card className="clay-card border-none overflow-hidden group">
             <div className="aspect-[4/3] overflow-hidden relative">
               <img 
                 src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7acde193-ffe0-4fbb-9a8e-fbc5f0c3ac49/ai-tutor-character-01c3ef39-1777405143945.webp" 
                 alt="Webinar" 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
               <div className="absolute bottom-6 left-6 right-6">
                 <Badge className="mb-3 bg-secondary text-secondary-foreground font-black uppercase tracking-widest border-none rounded-lg">Live Webinar</Badge>
                 <h3 className="text-xl font-black text-white leading-tight">Becoming a Tech Leader in Africa</h3>
                 <p className="text-xs text-white/70 font-bold uppercase tracking-widest mt-2">Sat, Oct 12 • 10:00 AM</p>
               </div>
             </div>
             <CardContent className="p-8">
               <Button className="clay-button-primary w-full h-12 font-black rounded-2xl">Register Now</Button>
             </CardContent>
           </Card>

           <div className="bg-white dark:bg-card border-2 border-muted p-8 rounded-[2.5rem]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center text-success">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight">Milestone Progress</h3>
              </div>
              <div className="space-y-6">
                {[
                  { label: "Grade 6 Mastery", status: "Completed", date: "June 2024" },
                  { label: "Junior Secondary Transition", status: "In Progress", date: "Est. Jan 2025" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-muted/30 rounded-2xl border border-muted/50">
                    <div>
                      <p className="font-bold text-sm">{item.label}</p>
                      <p className="text-[10px] text-muted-foreground font-black uppercase mt-1">{item.date}</p>
                    </div>
                    <Badge variant={item.status === "Completed" ? "secondary" : "outline"} className={`rounded-lg font-black text-[10px] uppercase ${item.status === "Completed" ? 'bg-success/10 text-success border-none' : ''}`}>
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};