import React from "react";
import { BookOpen, Twitter, Facebook, Instagram, Mail, Globe, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-card border-t-2 border-primary/5 py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-3 mb-8 group cursor-pointer w-fit">
              <div className="bg-primary p-2.5 rounded-2xl shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <span className="text-3xl font-black tracking-tighter">Elimu<span className="text-primary">Smart</span></span>
            </div>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed mb-10 max-w-md">
              The next evolution in Kenyan education. AI-powered, CBC-aligned, and built for the future of every student.
            </p>
            <div className="flex gap-4">
              {[Twitter, Facebook, Instagram, Mail].map((Icon, i) => (
                <button key={i} className="w-14 h-14 bg-muted/50 rounded-2xl flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all hover:scale-110 hover:shadow-xl hover:shadow-primary/20">
                  <Icon className="w-6 h-6" />
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-black uppercase text-[10px] tracking-[0.3em] text-primary mb-8">Platform</h4>
              <ul className="space-y-5 text-base font-bold text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2">Learning Library <Globe className="w-3 h-3 opacity-30" /></a></li>
                <li><a href="#" className="hover:text-primary transition-colors">AI Tutor Chat</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Career Pathways</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Interactive CBC Notes</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black uppercase text-[10px] tracking-[0.3em] text-primary mb-8">Ecosystem</h4>
              <ul className="space-y-5 text-base font-bold text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">For Schools</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Parent Dashboard</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Teacher Toolkit</a></li>
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2">ElimuCloud <Shield className="w-3 h-3 opacity-30" /></a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="font-black uppercase text-[10px] tracking-[0.3em] text-primary mb-8">Stay Updated</h4>
              <p className="text-sm font-medium text-muted-foreground mb-6 leading-relaxed">Join 5,000+ parents getting CBC tips every week.</p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full h-12 bg-muted/50 rounded-xl px-4 border-2 border-transparent focus:border-primary/20 outline-none font-bold text-sm transition-all"
                />
                <Button className="w-full clay-button-primary h-12 font-black uppercase tracking-widest text-[10px]">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t-2 border-primary/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
              © 2024 ElimuSmart. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
               <a href="#" className="text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Privacy</a>
               <a href="#" className="text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Terms</a>
               <a href="#" className="text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-muted/30 px-6 py-3 rounded-2xl border border-primary/5">
            <span className="text-xs font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              Built with <Heart className="w-4 h-4 text-destructive fill-destructive" /> for the future of Kenya
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};