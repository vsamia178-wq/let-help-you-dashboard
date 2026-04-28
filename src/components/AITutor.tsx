import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Volume2, Mic, Image as ImageIcon, RotateCcw, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

export const AITutor: React.FC = () => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      role: 'bot', 
      content: "Hujambo! I'm your ElimuSmart AI Tutor. I'm here to help you master your CBC subjects. You can ask me to explain a concept, help with homework, or even quiz you!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newUserMessage = {
      id: Date.now(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI Response
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = {
        id: Date.now() + 1,
        role: 'bot',
        content: `That's a brilliant question about "${input}"! In the Kenyan CBC curriculum, this concept is part of your Grade 6 competencies. Let me break it down for you step-by-step so you can apply it in your next assessment...`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1500);
  };

  const suggestions = [
    "Explain photosynthesis simply",
    "Help me with long division",
    "What is the role of the President?",
    "Give me a Kiswahili Insha prompt"
  ];

  return (
    <div className="container mx-auto px-6 py-10 max-w-5xl h-[calc(100vh-140px)] flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-[2rem] bg-primary flex items-center justify-center text-white shadow-2xl shadow-primary/30 overflow-hidden border-4 border-white dark:border-card">
              <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7acde193-ffe0-4fbb-9a8e-fbc5f0c3ac49/ai-tutor-character-01c3ef39-1777405143945.webp" alt="AI Mascot" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-4 border-white dark:border-card animate-pulse shadow-lg" />
          </div>
          <div>
            <h1 className="text-3xl font-black">AI Tutor</h1>
            <div className="flex items-center gap-3 mt-1">
              <Sparkles className="w-4 h-4 text-secondary fill-secondary" />
              <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Smart Learning Assistant</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-12 px-6 rounded-2xl border-2 border-muted font-bold hover:bg-muted" onClick={() => setMessages([messages[0]])}>
             <RotateCcw className="w-5 h-5 mr-2" />
             Reset Chat
          </Button>
          <Badge variant="secondary" className="bg-secondary/10 text-secondary-foreground border-none px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-[10px]">
            Grade 6 Expert
          </Badge>
        </div>
      </div>

      <Card className="flex-grow flex flex-col overflow-hidden bg-white dark:bg-card border-2 border-primary/5 rounded-[3rem] shadow-2xl relative">
        <div className="flex-grow p-8 overflow-y-auto custom-scrollbar" ref={scrollRef}>
          <div className="space-y-10 max-w-4xl mx-auto">
            <AnimatePresence initial={false}>
              {messages.map((m) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  key={m.id}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex max-w-[85%] gap-4 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg ${m.role === 'user' ? 'bg-secondary' : 'bg-primary'}`}>
                      {m.role === 'user' ? <User className="w-6 h-6 text-secondary-foreground" /> : <Bot className="w-6 h-6 text-white" />}
                    </div>
                    <div className="space-y-2">
                      <div className={`p-6 rounded-[2rem] shadow-sm font-medium leading-relaxed ${
                        m.role === 'user' 
                          ? 'bg-primary text-white rounded-tr-none' 
                          : 'bg-muted dark:bg-card border-2 border-primary/5 rounded-tl-none'
                      }`}>
                        <p className="text-base">{m.content}</p>
                      </div>
                      <div className={`flex items-center gap-4 px-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                         <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                            {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                         </span>
                         {m.role === 'bot' && (
                           <div className="flex gap-2">
                             <button className="text-muted-foreground hover:text-primary transition-colors">
                               <Volume2 className="w-3 h-3" />
                             </button>
                           </div>
                         )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 shadow-lg">
                      <Bot className="w-6 h-6" />
                    </div>
                    <div className="bg-muted dark:bg-card border-2 border-primary/5 p-6 rounded-[2rem] rounded-tl-none flex gap-1 items-center h-16">
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-2 h-2 bg-primary rounded-full" />
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 bg-primary rounded-full" />
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-8 bg-muted/30 border-t-2 border-primary/5 backdrop-blur-md">
           <div className="max-w-4xl mx-auto space-y-6">
             <div className="flex flex-wrap gap-2">
               {suggestions.map((s, i) => (
                 <button 
                  key={i}
                  onClick={() => setInput(s)}
                  className="bg-white dark:bg-card border-2 border-primary/5 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest text-muted-foreground hover:border-primary hover:text-primary transition-all flex items-center gap-2"
                 >
                   {s} <ChevronRight className="w-3 h-3" />
                 </button>
               ))}
             </div>
             
             <div className="flex gap-4">
               <Button variant="outline" size="icon" className="shrink-0 rounded-2xl h-16 w-16 border-2 border-muted hover:bg-white transition-all shadow-sm">
                 <Mic className="w-7 h-7 text-muted-foreground" />
               </Button>
               <Button variant="outline" size="icon" className="shrink-0 rounded-2xl h-16 w-16 border-2 border-muted hover:bg-white transition-all shadow-sm hidden sm:flex">
                 <ImageIcon className="w-7 h-7 text-muted-foreground" />
               </Button>
               <div className="relative flex-grow">
                 <Input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything about your studies..." 
                  className="pr-20 h-16 rounded-2xl bg-white dark:bg-card border-2 border-primary/10 focus-visible:ring-primary focus-visible:border-primary text-lg font-medium shadow-sm"
                 />
                 <Button 
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="absolute right-2 top-2 h-12 px-6 bg-primary hover:bg-primary/90 rounded-xl font-black text-white shadow-xl shadow-primary/20 transition-all active:scale-95"
                 >
                   <Send className="w-5 h-5 mr-2" />
                   Send
                 </Button>
               </div>
             </div>
             <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-60">AI can make mistakes. Always check with your teacher.</p>
           </div>
        </div>
      </Card>
    </div>
  );
};