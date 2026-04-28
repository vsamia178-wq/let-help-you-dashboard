import React, { useState } from "react";
import { 
  BookOpen, 
  Search, 
  ChevronRight, 
  Play, 
  FileText, 
  CheckSquare, 
  Filter,
  ArrowLeft,
  Clock,
  LayoutGrid,
  List,
  Star,
  Download,
  Share2,
  PlayCircle
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

interface Lesson {
  id: number;
  title: string;
  subject: string;
  duration: string;
  type: 'animation' | 'note' | 'quiz' | 'video';
  level: string;
  image: string;
}

export const LearningContent: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<Lesson | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const subjects = [
    { id: 'math', name: 'Mathematics', icon: '📐', count: 24, color: 'bg-blue-100 text-blue-600' },
    { id: 'science', name: 'Science & Tech', icon: '🧪', count: 18, color: 'bg-green-100 text-green-600' },
    { id: 'english', name: 'English', icon: '📚', count: 15, color: 'bg-purple-100 text-purple-600' },
    { id: 'kiswahili', name: 'Kiswahili', icon: '🇰🇪', count: 12, color: 'bg-amber-100 text-amber-600' },
    { id: 'social', name: 'Social Studies', icon: '🌍', count: 20, color: 'bg-rose-100 text-rose-600' },
    { id: 'creative', name: 'Creative Arts', icon: '🎨', count: 10, color: 'bg-indigo-100 text-indigo-600' },
  ];

  const lessons: Lesson[] = [
    { id: 1, title: 'Understanding Fractions', subject: 'Mathematics', duration: '12 min', type: 'animation', level: 'Grade 6', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7acde193-ffe0-4fbb-9a8e-fbc5f0c3ac49/hero-students-94a89939-1777405144112.webp' },
    { id: 2, title: 'The Water Cycle', subject: 'Science', duration: '15 min', type: 'animation', level: 'Grade 6', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7acde193-ffe0-4fbb-9a8e-fbc5f0c3ac49/dashboard-preview-32d88a75-1777405144470.webp' },
    { id: 3, title: 'Parts of Speech', subject: 'English', duration: '10 min', type: 'note', level: 'Grade 5', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7acde193-ffe0-4fbb-9a8e-fbc5f0c3ac49/career-roadmap-path-fd77b082-1777405144544.webp' },
    { id: 4, title: 'Human Digestive System', subject: 'Science', duration: '20 min', type: 'video', level: 'Grade 6', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7acde193-ffe0-4fbb-9a8e-fbc5f0c3ac49/hero-students-94a89939-1777405144112.webp' },
    { id: 5, title: 'National Government', subject: 'Social Studies', duration: '18 min', type: 'note', level: 'Grade 6', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7acde193-ffe0-4fbb-9a8e-fbc5f0c3ac49/dashboard-preview-32d88a75-1777405144470.webp' },
    { id: 6, title: 'Insha: Letter Writing', subject: 'Kiswahili', duration: '15 min', type: 'quiz', level: 'Grade 5', image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7acde193-ffe0-4fbb-9a8e-fbc5f0c3ac49/hero-students-94a89939-1777405144112.webp' },
  ];

  const handleStartLesson = () => {
    toast.success("Lesson started! Enjoy your learning experience.");
  };

  if (selectedTopic) {
    return (
      <div className="container mx-auto px-6 py-10 max-w-6xl">
        <Button 
          variant="ghost" 
          onClick={() => setSelectedTopic(null)}
          className="mb-8 font-bold text-muted-foreground hover:text-primary transition-colors h-12 rounded-2xl"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Back to Library
        </Button>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-primary/10 text-primary border-none font-black px-4 py-1.5 rounded-xl uppercase tracking-widest text-[10px]">
                  {selectedTopic.subject}
                </Badge>
                <Badge variant="outline" className="border-muted font-bold px-4 py-1.5 rounded-xl uppercase tracking-widest text-[10px]">
                  {selectedTopic.level}
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4 leading-tight">{selectedTopic.title}</h1>
              <div className="flex items-center gap-6 text-sm font-bold text-muted-foreground">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {selectedTopic.duration}</span>
                <span className="flex items-center gap-2"><Star className="w-4 h-4 text-secondary fill-secondary" /> 4.9/5 Student Rating</span>
              </div>
            </motion.div>

            <div className="aspect-video bg-black rounded-[2.5rem] relative overflow-hidden group shadow-2xl">
              <img 
                src={selectedTopic.image} 
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000"
                alt="Lesson preview"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleStartLesson}
                  className="w-24 h-24 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.5)] group-hover:shadow-[0_0_70px_rgba(245,158,11,0.7)] transition-all"
                >
                  <Play className="w-10 h-10 fill-current ml-2" />
                </motion.button>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-white text-sm font-black uppercase tracking-widest">AI Animation Ready</span>
                </div>
                <div className="flex gap-2">
                  <Button size="icon" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md rounded-xl h-12 w-12 border-white/10">
                    <Download className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md rounded-xl h-12 w-12 border-white/10">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            <section className="bg-white dark:bg-card border-2 border-muted p-10 rounded-[2.5rem]">
              <h3 className="text-2xl font-black mb-8">What You'll Learn</h3>
              <div className="prose dark:prose-invert max-w-none">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center shrink-0">
                        <CheckSquare className="w-4 h-4 text-success" />
                      </div>
                      <p className="font-bold text-muted-foreground">Fundamental concepts of {selectedTopic.title.toLowerCase()} aligned with CBC standards.</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center shrink-0">
                        <CheckSquare className="w-4 h-4 text-success" />
                      </div>
                      <p className="font-bold text-muted-foreground">Step-by-step problem solving with real-world examples from Kenya.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center shrink-0">
                        <CheckSquare className="w-4 h-4 text-success" />
                      </div>
                      <p className="font-bold text-muted-foreground">Interactive visual storytelling to simplify complex logic.</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center shrink-0">
                        <CheckSquare className="w-4 h-4 text-success" />
                      </div>
                      <p className="font-bold text-muted-foreground">Assessment questions to test your competency levels.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <Card className="clay-card border-none bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl font-black">Knowledge Check</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-sm font-medium text-muted-foreground">Take a quick quiz to earn <span className="text-primary font-black">20 Points</span> and unlock the next lesson.</p>
                <Button className="clay-button-primary w-full h-14 text-lg font-black rounded-2xl">
                  Start Assessment
                </Button>
                <div className="pt-4 border-t border-muted">
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4">Required Competencies</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="rounded-lg font-bold">Observation</Badge>
                    <Badge variant="secondary" className="rounded-lg font-bold">Analysis</Badge>
                    <Badge variant="secondary" className="rounded-lg font-bold">Creative Thinking</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="clay-card border-none bg-amber-500 text-secondary-foreground">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-md flex items-center justify-center">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black">Need Extra Help?</h3>
                <p className="font-bold opacity-80 leading-snug">Our AI Tutor is specialized in {selectedTopic.subject} and can explain these concepts in Kiswahili or English.</p>
                <Button className="w-full bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90 font-black h-14 rounded-2xl">
                  Ask AI Tutor
                </Button>
              </CardContent>
            </Card>

            <div className="bg-white dark:bg-card border-2 border-muted p-8 rounded-[2.5rem]">
              <h3 className="text-lg font-black mb-6">Learning Path</h3>
              <div className="space-y-6 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-1 before:bg-muted before:rounded-full">
                {[
                  { title: "Current Concept", active: true },
                  { title: "Extended Practice", active: false },
                  { title: "Creative Project", active: false },
                  { title: "Mastery Test", active: false }
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-6 relative">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 transition-colors ${step.active ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-muted text-muted-foreground'}`}>
                      {i + 1}
                    </div>
                    <span className={`font-bold ${step.active ? 'text-foreground' : 'text-muted-foreground'}`}>{step.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10 max-w-7xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl lg:text-5xl font-black text-foreground">Learning Library</h1>
          <p className="text-lg text-muted-foreground mt-2">Discover curated CBC-aligned content for your grade level.</p>
        </motion.div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-grow md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              className="pl-12 h-14 rounded-2xl bg-white dark:bg-card border-2 border-muted focus-visible:ring-primary focus-visible:border-primary text-base" 
              placeholder="What do you want to learn?" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon" className="h-14 w-14 rounded-2xl border-2 border-muted hover:bg-muted">
            <Filter className="w-6 h-6" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
        {subjects.map((sub, i) => (
          <motion.button 
            key={sub.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex flex-col items-center p-8 rounded-[2rem] bg-white dark:bg-card border-2 border-primary/5 hover:border-primary hover:shadow-2xl hover:-translate-y-2 transition-all group"
          >
            <div className={`w-16 h-16 ${sub.color} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
              {sub.icon}
            </div>
            <span className="font-black text-sm text-center tracking-tight mb-2 leading-none">{sub.name}</span>
            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{sub.count} Lessons</span>
          </motion.button>
        ))}
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <TabsList className="bg-muted/50 p-1.5 rounded-2xl h-14">
            <TabsTrigger value="all" className="rounded-xl px-6 font-black data-[state=active]:bg-white data-[state=active]:shadow-sm">All</TabsTrigger>
            <TabsTrigger value="animations" className="rounded-xl px-6 font-black data-[state=active]:bg-white data-[state=active]:shadow-sm">Animations</TabsTrigger>
            <TabsTrigger value="notes" className="rounded-xl px-6 font-black data-[state=active]:bg-white data-[state=active]:shadow-sm">Notes</TabsTrigger>
            <TabsTrigger value="quizzes" className="rounded-xl px-6 font-black data-[state=active]:bg-white data-[state=active]:shadow-sm">Quizzes</TabsTrigger>
          </TabsList>
          
          <div className="flex items-center gap-3">
             <div className="flex bg-muted/30 p-1 rounded-xl">
               <Button size="icon" variant="ghost" className="rounded-lg h-9 w-9 bg-white shadow-sm text-primary">
                 <LayoutGrid className="w-4 h-4" />
               </Button>
               <Button size="icon" variant="ghost" className="rounded-lg h-9 w-9 text-muted-foreground">
                 <List className="w-4 h-4" />
               </Button>
             </div>
             <Badge variant="outline" className="h-11 px-4 border-2 border-muted rounded-xl font-black text-xs uppercase tracking-widest cursor-pointer hover:bg-muted transition-colors">
               Grade 6
             </Badge>
          </div>
        </div>

        <TabsContent value="all" className="mt-0">
          <AnimatePresence mode="popLayout">
            <motion.div 
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {lessons.map((lesson, i) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  key={lesson.id}
                  className="group bg-white dark:bg-card border-2 border-primary/5 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer shadow-sm"
                  onClick={() => setSelectedTopic(lesson)}
                >
                  <div className="aspect-[16/10] bg-muted relative overflow-hidden">
                    <img 
                      src={lesson.image} 
                      alt={lesson.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40" />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-black border-none backdrop-blur-md px-3 py-1 font-black rounded-xl text-[10px] uppercase tracking-widest shadow-sm">
                      {lesson.level}
                    </Badge>
                    <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1.5 rounded-xl text-[10px] font-black backdrop-blur-md border border-white/10 uppercase tracking-widest">
                      {lesson.duration}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg ${
                        lesson.type === 'animation' ? 'bg-secondary/10 text-secondary' :
                        lesson.type === 'note' ? 'bg-primary/10 text-primary' :
                        'bg-success/10 text-success'
                      }`}>
                        {lesson.type === 'animation' && <Play className="w-4 h-4 fill-current" />}
                        {lesson.type === 'note' && <FileText className="w-4 h-4" />}
                        {lesson.type === 'quiz' && <CheckSquare className="w-4 h-4" />}
                        {lesson.type === 'video' && <PlayCircle className="w-4 h-4" />}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{lesson.subject}</span>
                    </div>
                    <h3 className="font-black text-2xl leading-tight mb-6 group-hover:text-primary transition-colors">{lesson.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-3">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-muted overflow-hidden">
                               <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + lesson.id}`} alt="User" />
                            </div>
                          ))}
                        </div>
                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">+{Math.floor(Math.random() * 50) + 10} Learning</span>
                      </div>
                      <Button variant="ghost" className="h-10 w-10 p-0 rounded-full text-primary hover:bg-primary/10 transition-colors">
                        <ChevronRight className="w-6 h-6" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </div>
  );
};