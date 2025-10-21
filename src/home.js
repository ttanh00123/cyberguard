import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { Progress } from "progress";
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
} from "lucide-react";
import Layout from "./Layout";

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

export default function HomePage() {
  const [completedTopics, setCompletedTopics] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <Layout
      children={
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="py-16 px-4 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
            <div className="max-w-6xl mx-auto text-center relative z-10">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-lime-green brutalist-border transform rotate-12 opacity-20"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-hot-pink brutalist-border transform -rotate-12 opacity-20"></div>

              <div className="inline-block mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-hot-pink brutalist-border brutalist-shadow mx-auto flex items-center justify-center transform rotate-3">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-black mb-6 transform -rotate-1">
                CyberGuard
                <span className="block text-hot-pink transform rotate-2">

                </span>
              </h1>

              <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 max-w-4xl mx-auto leading-tight">
                Learn how to protect yourself from scams, spot fake news, and
                use the internet like a PRO! 🚀
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div
                  className="bg-blue-500 text-white px-8 py-4 brutalist-border brutalist-shadow font-black text-xl transform rotate-1 hover:scale-105 transition-all"
                  onClick={() => {
                    document
                      .querySelector("#choose-your-mission")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Target className="w-6 h-6" />
                    START LEARNING
                  </div>
                </div>

                <div className="bg-lime-green text-black px-6 py-4 brutalist-border brutalist-shadow-small font-bold transform -rotate-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    {completedTopics.length}/5 TOPICS COMPLETED
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-12 px-4 bg-black text-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-black text-hot-pink mb-2">
                    74%
                  </div>
                  <div className="text-xl font-bold">
                    of Singaporeans encounter harmful content online in 2025
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black text-lime-green mb-2">
                    52%
                  </div>
                  <div className="text-xl font-bold">
                    of Singaporeans between 15 and 60 do not feel confident in identifying scams
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Topics Grid */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto" id="choose-your-mission">
              <h2 className="text-4xl md:text-6xl font-black text-center mb-4 transform rotate-1">
                CHOOSE YOUR
                <span className="block text-blue-500 transform -rotate-2">
                  MISSION!
                </span>
              </h2>

              <p className="text-xl font-bold text-center mb-12 max-w-3xl mx-auto">
                Each topic teaches you essential skills to stay safe and smart
                online. Complete them all to be safer and more vigilant online!
                🏆
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {topics.map((topic, index) => {
                  const isCompleted = completedTopics.includes(topic.id);
                  const rotation =
                    index % 3 === 0
                      ? "rotate-1"
                      : index % 3 === 1
                        ? "-rotate-1"
                        : "rotate-2";

                  return (
                    <Link key={topic.id} to={topic.url}>
                      <div
                        className={`bg-white brutalist-border brutalist-shadow p-6 transform ${rotation} hover:scale-105 transition-all hover:brutalist-shadow-small relative group`}
                      >
                        {isCompleted && (
                          <div className="absolute -top-3 -right-3 w-8 h-8 bg-lime-green brutalist-border rounded-full flex items-center justify-center z-10">
                            <CheckCircle2 className="w-5 h-5 text-black" />
                          </div>
                        )}

                        <div
                          className={`inline-block p-4 ${topic.color} brutalist-border brutalist-shadow-small mb-4 transform group-hover:rotate-12 transition-transform`}
                        >
                          <topic.icon className="w-8 h-8 text-white" />
                        </div>

                        <div className="mb-3">
                          <span className="bg-black text-white px-3 py-1 text-xs font-black brutalist-border">
                            {topic.difficulty}
                          </span>
                        </div>

                        <h3 className="text-2xl font-black mb-3 text-black group-hover:text-hot-pink transition-colors">
                          {topic.title}
                        </h3>

                        <p className="font-bold text-gray-700 mb-4 leading-tight">
                          {topic.description}
                        </p>

                        <div className="flex items-center gap-2 font-black text-blue-500 group-hover:text-hot-pink transition-colors">
                          START LEARNING
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Why This Matters Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-hot-pink to-blue-500">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl font-black mb-8 brutalist-text transform -rotate-1">
                WHY THIS MATTERS
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white text-black p-6 brutalist-border brutalist-shadow transform rotate-2">
                  <Zap className="w-12 h-12 mb-4 text-hot-pink mx-auto" />
                  <h3 className="text-2xl font-black mb-3">PROTECT YOURSELF</h3>
                  <p className="font-bold">
                    Learn to identify threats before they can harm you or steal
                    your information.
                  </p>
                </div>

                <div className="bg-white text-black p-6 brutalist-border brutalist-shadow transform -rotate-1">
                  <Target className="w-12 h-12 mb-4 text-blue-500 mx-auto" />
                  <h3 className="text-2xl font-black mb-3">
                    MAKE SMART CHOICES
                  </h3>
                  <p className="font-bold">
                    Develop critical thinking skills to navigate the digital
                    world confidently.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      }
    />
  );
}
