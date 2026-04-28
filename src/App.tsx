import React, { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { LandingPage } from "./components/LandingPage";
import { Dashboard } from "./components/Dashboard";
import { LearningContent } from "./components/LearningContent";
import { AITutor } from "./components/AITutor";
import { CareerGuidance } from "./components/CareerGuidance";
import { ProgressAnalytics } from "./components/ProgressAnalytics";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AnimatePresence, motion } from "framer-motion";

export type View = "landing" | "dashboard" | "learning" | "tutor" | "careers" | "analytics";

function App() {
  const [currentView, setCurrentView] = useState<View>("landing");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentView("dashboard");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView("landing");
  };

  const renderView = () => {
    switch (currentView) {
      case "landing":
        return <LandingPage onStart={handleLogin} />;
      case "dashboard":
        return <Dashboard onViewChange={setCurrentView} />;
      case "learning":
        return <LearningContent />;
      case "tutor":
        return <AITutor />;
      case "careers":
        return <CareerGuidance />;
      case "analytics":
        return <ProgressAnalytics />;
      default:
        return <LandingPage onStart={handleLogin} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar 
        currentView={currentView} 
        onViewChange={setCurrentView} 
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        onLogin={handleLogin}
      />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <Toaster position="top-center" expand={true} richColors />
    </div>
  );
}

export default App;