import React, { useState } from "react";
import { 
  Menu, 
  X, 
  BookOpen, 
  LayoutDashboard, 
  MessageSquare, 
  TrendingUp, 
  PieChart, 
  User,
  LogOut,
  Bell,
  Search,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { View } from "../App";
import { Badge } from "@/components/ui/badge";
import { AnimatePresence, motion } from "framer-motion";

interface NavbarProps {
  currentView: View;
  onViewChange: (view: View) => void;
  isLoggedIn: boolean;
  onLogout: () => void;
  onLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentView, 
  onViewChange, 
  isLoggedIn, 
  onLogout,
  onLogin 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { id: View; label: string; icon: React.ReactNode }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'learning', label: 'Library', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'tutor', label: 'AI Tutor', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'careers', label: 'Careers', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'analytics', label: 'Analytics', icon: <PieChart className="w-4 h-4" /> },
  ];

  if (!isLoggedIn) {
    return (
      <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background/80 backdrop-blur-xl border-b border-primary/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => onViewChange('landing')}>
            <div className="bg-primary p-2 rounded-2xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter">Elimu<span className="text-primary">Smart</span></span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-10">
            {['Curriculum', 'For Schools', 'Pricing', 'Resources'].map((item) => (
              <a key={item} href="#" className="text-sm font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">{item}</a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="font-black text-sm uppercase tracking-widest hover:text-primary" onClick={onLogin}>Sign In</Button>
            <Button className="clay-button-primary h-12 px-8 rounded-xl font-black uppercase tracking-widest text-xs" onClick={onLogin}>Join Free</Button>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background/80 backdrop-blur-xl border-b border-primary/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between gap-8">
        <div className="flex items-center space-x-3 cursor-pointer group shrink-0" onClick={() => onViewChange('dashboard')}>
          <div className="bg-primary p-2 rounded-2xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
            <BookOpen className="w-7 h-7 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter hidden sm:inline-block">Elimu<span className="text-primary">Smart</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-2 bg-muted/40 p-1.5 rounded-[1.25rem] border border-primary/5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${
                currentView === item.id 
                  ? 'bg-white dark:bg-card shadow-lg text-primary scale-105' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.icon}
              <span className="hidden lg:inline">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-3 lg:space-x-6">
          <div className="hidden xl:flex items-center bg-muted/30 h-11 px-4 rounded-xl border border-primary/5">
            <Search className="w-4 h-4 text-muted-foreground mr-3" />
            <input type="text" placeholder="Search CBC content..." className="bg-transparent border-none outline-none text-sm font-medium w-40" />
          </div>

          <button className="relative p-2.5 text-muted-foreground hover:text-primary transition-colors bg-muted/30 rounded-xl border border-primary/5 group">
            <Bell className="w-6 h-6" />
            <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-destructive rounded-full border-2 border-white dark:border-background group-hover:scale-125 transition-transform" />
          </button>
          
          <div className="hidden lg:flex items-center gap-3 bg-secondary/10 px-4 py-2 rounded-xl border border-secondary/20 shadow-sm shadow-secondary/10">
             <Zap className="w-5 h-5 text-secondary fill-secondary" />
             <span className="text-sm font-black text-secondary-foreground">2,450</span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-12 w-12 rounded-2xl p-0 hover:scale-105 transition-all ring-offset-background focus-visible:ring-2 focus-visible:ring-primary">
                <Avatar className="h-12 w-12 rounded-2xl border-2 border-primary/20 shadow-md">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jabari" alt="Jabari" />
                  <AvatarFallback className="font-black">JB</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 p-3 rounded-3xl border-2 border-primary/5 shadow-2xl" align="end" forceMount>
              <DropdownMenuLabel className="font-black p-4">
                <div className="flex flex-col space-y-1">
                  <p className="text-lg leading-tight">Jabari Maina</p>
                  <p className="text-[10px] leading-tight text-muted-foreground uppercase tracking-widest font-bold">Grade 6 • ID: ES-8821</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="p-2 space-y-1">
                <DropdownMenuItem className="rounded-xl h-12 font-black uppercase tracking-widest text-xs cursor-pointer focus:bg-primary/5" onClick={() => onViewChange('dashboard')}>
                  <User className="mr-3 h-5 w-5 text-primary" />
                  <span>My Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-xl h-12 font-black uppercase tracking-widest text-xs cursor-pointer focus:bg-primary/5" onClick={() => onViewChange('analytics')}>
                  <PieChart className="mr-3 h-5 w-5 text-success" />
                  <span>Performance</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-xl h-12 font-black uppercase tracking-widest text-xs cursor-pointer focus:bg-primary/5">
                  <Bell className="mr-3 h-5 w-5 text-secondary" />
                  <span>Notifications</span>
                </DropdownMenuItem>
              </div>
              <DropdownMenuSeparator />
              <div className="p-2">
                <DropdownMenuItem className="rounded-xl h-12 font-black uppercase tracking-widest text-xs cursor-pointer text-destructive focus:bg-destructive/10 focus:text-destructive" onClick={onLogout}>
                  <LogOut className="mr-3 h-5 w-5" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <button 
            className="md:hidden p-2.5 bg-muted/30 rounded-xl border border-primary/5 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-card border-b-2 border-primary/5 z-40 overflow-hidden"
          >
            <div className="p-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onViewChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center space-x-4 p-5 rounded-2xl w-full text-lg font-black uppercase tracking-widest transition-all ${
                    currentView === item.id 
                      ? 'bg-primary/10 text-primary border-2 border-primary/10 shadow-sm' 
                      : 'text-muted-foreground border-2 border-transparent hover:bg-muted/50'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${currentView === item.id ? 'bg-primary text-white' : 'bg-muted'}`}>
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </button>
              ))}
              <div className="pt-4 border-t-2 border-muted">
                <Button variant="destructive" className="w-full h-16 rounded-[1.5rem] font-black uppercase tracking-widest text-sm shadow-xl shadow-destructive/10" onClick={onLogout}>
                  <LogOut className="mr-3 h-6 w-6" />
                  Logout
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};