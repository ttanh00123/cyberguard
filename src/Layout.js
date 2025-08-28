import React from "react";import { Link, useLocation } from "react-router";
import { Shield, Home, AlertTriangle, Eye, Bot, Users, BookOpen } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  const navigationItems = [
    { name: "Home", url: createPageUrl("Home"), icon: Home },
    { name: "Scams", url: createPageUrl("Scams"), icon: AlertTriangle },
    { name: "Misinformation", url: createPageUrl("Misinformation"), icon: Eye },
    { name: "AI Media", url: createPageUrl("AIMedia"), icon: Bot },
    { name: "Netiquette", url: createPageUrl("Netiquette"), icon: Users },
    { name: "Study Tips", url: createPageUrl("StudyTips"), icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        :root {
          --electric-blue: #0066FF;
          --hot-pink: #FF0066;
          --lime-green: #66FF00;
          --orange: #FF6600;
          --pure-white: #FFFFFF;
          --deep-black: #000000;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 700;
        }
        
        .brutalist-shadow {
          box-shadow: 8px 8px 0px #000000;
        }
        
        .brutalist-shadow-small {
          box-shadow: 4px 4px 0px #000000;
        }
        
        .brutalist-border {
          border: 4px solid #000000;
        }
        
        .brutalist-text {
          text-shadow: 3px 3px 0px #000000;
        }
      `}</style>

      {/* Navigation Header */}
      <header className="bg-white brutalist-border border-b-4 border-l-0 border-r-0 border-t-0 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to={createPageUrl("Home")} className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-pink-500 brutalist-border brutalist-shadow-small flex items-center justify-center transform rotate-2">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-black text-black transform -rotate-1">
                STAY SAFE ONLINE
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  className={`px-6 py-3 brutalist-border font-black text-sm transform transition-all hover:scale-105 ${
                    location.pathname === item.url
                      ? 'bg-lime-500 text-black brutalist-shadow'
                      : 'bg-white text-black hover:bg-pink-500 hover:text-white brutalist-shadow-small'
                  } ${item.name === 'Scams' ? 'rotate-1' : item.name === 'AI Media' ? '-rotate-1' : ''}`}
                >
                  <div className="flex items-center gap-2">
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </div>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden bg-blue-500 text-white px-4 py-2 brutalist-border brutalist-shadow font-black">
              MENU
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-lime-green" />
            <h3 className="text-2xl font-black transform rotate-1">STAY SAFE ONLINE</h3>
          </div>
          <p className="text-lg font-bold">
            Knowledge is your best protection on the internet! 🛡️
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm font-bold">
            {navigationItems.slice(1).map((item) => (
              <Link
                key={item.name}
                to={item.url}
                className="text-white hover:text-lime-green transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}