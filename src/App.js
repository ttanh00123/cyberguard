import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import {
  AlertTriangle,
  Eye,
  Bot,
  Users,
  BookOpen,
  Shield,
  Target,
  Zap,
  CheckCircle2,
  ArrowRight,
  Home,
} from "lucide-react";
import ScamsPage from "./Scams";
import MisinformationPage from "./Misinformation";
import NetiquettePage from "./Netiquette";
import StudyTipsPage from "./StudyTips";
import AIMediaPage from "./AIMedia";
import Layout from "./Layout";
import HomePage from "./home";
import AboutPage from "./about";

const topics = [
  {
    id: "scams",
    title: "Common Scams",
    description:
      "Learn to spot fake emails, phishing attempts, and online fraud",
    icon: AlertTriangle,
    color: "bg-hot-pink",
    url: "/scams",
    difficulty: "BEGINNER",
  },
  {
    id: "misinformation",
    title: "Spot Fake News",
    description: "Identify false information and verify sources online",
    icon: Eye,
    color: "bg-orange",
    url: "/misinformation",
    difficulty: "INTERMEDIATE",
  },
  {
    id: "ai-media",
    title: "AI-Generated Content",
    description: "Recognize deepfakes, AI images, and synthetic media",
    icon: Bot,
    color: "bg-blue-500",
    url: "/ai-media",
    difficulty: "ADVANCED",
  },
  {
    id: "netiquette",
    title: "Digital Etiquette",
    description: "Be respectful and safe in online communities",
    icon: Users,
    color: "bg-lime-green",
    url: "/netiquette",
    difficulty: "BEGINNER",
  },
  {
    id: "study-tips",
    title: "Smart Internet Use",
    description: "Use the web effectively for research and learning",
    icon: BookOpen,
    color: "bg-purple-500",
    url: "/study-tips",
    difficulty: "INTERMEDIATE",
  },
];

function AppUI() {
  const [completedTopics, setCompletedTopics] = useState([]);

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = () => {
    const progress = localStorage.getItem("completedTopics");
    if (progress) {
      setCompletedTopics(JSON.parse(progress));
    }
  };

  return <HomePage />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/scams" element={<ScamsPage />} />
        <Route path="/misinformation" element={<MisinformationPage />} />
        <Route path="/ai-media" element={<AIMediaPage />} />
        <Route path="/netiquette" element={<NetiquettePage />} />
        <Route path="/study-tips" element={<StudyTipsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
