import React from "react";
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  ArrowUpRight, 
  ArrowDownRight, 
  Calendar,
  Download,
  Award,
  Lightbulb,
  TrendingUp,
  Target,
  ChevronRight,
  Zap
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export const ProgressAnalytics: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-10 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 w-fit border border-primary/10"
          >
            Performance Insights
          </motion.div>
          <h1 className="text-4xl lg:text-6xl font-black text-foreground">Academic Journey</h1>
          <p className="text-xl text-muted-foreground mt-2 font-medium">A deep dive into Jabari's learning milestones.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 border-muted font-black hover:bg-muted flex-grow md:flex-grow-0">
            <Calendar className="w-5 h-5 mr-2" />
            Term 1 (2024)
          </Button>
          <Button className="clay-button-primary h-14 px-8 rounded-2xl font-black flex-grow md:flex-grow-0">
            <Download className="w-5 h-5 mr-2" />
            Full Report
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          { label: 'Overall Grade', value: 'B+', trend: '+2.5%', icon: Award, color: 'text-primary', up: true },
          { label: 'Completion Rate', value: '78%', trend: '+12%', icon: PieChart, color: 'text-success', up: true },
          { label: 'Study Hours', value: '42.5h', trend: '-5%', icon: TrendingUp, color: 'text-secondary', up: false },
          { label: 'Assessments', value: '154', trend: '+18%', icon: Zap, color: 'text-primary', up: true },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="clay-card border-none hover:shadow-2xl transition-all shadow-sm">
              <CardContent className="pt-8">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl bg-muted ${stat.color} shadow-sm`}>
                    <stat.icon className="w-7 h-7" />
                  </div>
                  <Badge variant={stat.up ? 'secondary' : 'destructive'} className={`rounded-xl px-3 py-1 font-black text-[10px] uppercase border-none ${stat.up ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'}`}>
                    {stat.up ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                    {stat.trend}
                  </Badge>
                </div>
                <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</p>
                <h3 className="text-4xl font-black tracking-tighter">{stat.value}</h3>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-12 gap-10 mb-16">
        <Card className="lg:col-span-8 clay-card border-none shadow-sm overflow-hidden">
          <CardHeader className="p-10 pb-0">
            <CardTitle className="text-2xl font-black">Performance Trend</CardTitle>
            <CardDescription className="font-bold text-muted-foreground">Monthly average scores across all CBC learning areas</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px] flex items-end justify-between gap-6 pt-20 px-10 pb-16">
            {[45, 60, 55, 75, 82, 90].map((h, i) => (
              <div key={i} className="flex flex-col items-center flex-1 group h-full">
                <div className="flex-grow flex items-end w-full">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="w-full bg-primary/20 rounded-t-[1.5rem] group-hover:bg-primary transition-all relative cursor-pointer shadow-sm group-hover:shadow-primary/30 group-hover:shadow-lg" 
                  >
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
                      Score: {h}%
                    </div>
                  </motion.div>
                </div>
                <span className="text-[10px] text-muted-foreground mt-6 font-black uppercase tracking-widest">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i]}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="lg:col-span-4 space-y-8">
          <Card className="clay-card border-none bg-primary/5 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-black">Subject Mastery</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {[
                { label: 'Logical Reasoning', value: 92, color: 'bg-primary' },
                { label: 'Linguistic Skills', value: 85, color: 'bg-secondary' },
                { label: 'Critical Thinking', value: 78, color: 'bg-success' },
                { label: 'Digital Literacy', value: 65, color: 'bg-primary' },
                { label: 'Financial Literacy', value: 45, color: 'bg-destructive' },
              ].map((skill, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="text-foreground">{skill.label}</span>
                    <span className="text-muted-foreground">{skill.value}%</span>
                  </div>
                  <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.value}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`h-full ${skill.color} rounded-full`} 
                    />
                  </div>
                </div>
              ))}
              <Button variant="ghost" className="w-full text-primary font-black mt-4 h-12 rounded-xl bg-primary/5 hover:bg-primary/10">
                View Subject Details <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="clay-card border-none bg-success/5 shadow-sm">
             <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-success text-white p-3 rounded-2xl shadow-lg shadow-success/20">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black">Next Milestone</h3>
                </div>
                <p className="text-sm font-medium text-muted-foreground leading-relaxed">Reach <span className="text-success font-black">90% Mastery</span> in Science to unlock the "Nature Guardian" achievement.</p>
                <div className="flex items-center gap-4">
                  <div className="flex-grow h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-success rounded-full" style={{ width: '70%' }} />
                  </div>
                  <span className="text-xs font-black">70%</span>
                </div>
             </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <Card className="clay-card border-none shadow-sm">
          <CardHeader className="p-10 pb-6">
            <CardTitle className="text-2xl font-black">Adaptive Insights</CardTitle>
            <CardDescription className="font-bold">Personalized feedback for parents and teachers</CardDescription>
          </CardHeader>
          <CardContent className="p-10 pt-0 space-y-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex gap-6 p-8 rounded-[2rem] bg-primary/5 border-2 border-primary/5 cursor-pointer"
            >
              <div className="bg-primary text-white p-4 rounded-2xl shadow-xl shadow-primary/20 shrink-0 h-fit">
                <Lightbulb className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Academic Observation</p>
                <p className="text-lg font-bold leading-snug">
                  Jabari demonstrates exceptional spatial reasoning. His project-based work in Mathematics is 15% more advanced than his peer group.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex gap-6 p-8 rounded-[2rem] bg-success/5 border-2 border-success/5 cursor-pointer"
            >
              <div className="bg-success text-white p-4 rounded-2xl shadow-xl shadow-success/20 shrink-0 h-fit">
                <TrendingUp className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-success mb-2">Recommended Focus</p>
                <p className="text-lg font-bold leading-snug">
                  Integrate "Visual Programming" into his Creative Arts sessions to leverage his math strengths for digital creation.
                </p>
              </div>
            </motion.div>
          </CardContent>
        </Card>

        <Card className="clay-card border-none shadow-sm">
          <CardHeader className="p-10 pb-6">
            <CardTitle className="text-2xl font-black">Mastery Badges</CardTitle>
            <CardDescription className="font-bold">Recognizing consistency and excellence</CardDescription>
          </CardHeader>
          <CardContent className="p-10 pt-0 grid grid-cols-3 gap-6">
            {[
              { label: 'Math Whiz', color: 'bg-blue-100 text-blue-600', icon: Zap },
              { label: 'Book Worm', color: 'bg-amber-100 text-amber-600', icon: Award },
              { label: 'Quick Learner', color: 'bg-emerald-100 text-emerald-600', icon: TrendingUp },
              { label: 'Perfect Quiz', color: 'bg-purple-100 text-purple-600', icon: Target },
              { label: 'Streak Master', color: 'bg-rose-100 text-rose-600', icon: Zap },
              { label: 'Team Leader', color: 'bg-indigo-100 text-indigo-600', icon: Award },
            ].map((badge, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, scale: 1.05 }}
                className={`aspect-square rounded-[2rem] ${badge.color} flex flex-col items-center justify-center p-4 text-center cursor-pointer shadow-sm`}
              >
                <div className="mb-3 opacity-80">
                  <badge.icon className="w-10 h-10" />
                </div>
                <span className="text-[10px] font-black leading-none uppercase tracking-tighter">{badge.label}</span>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};