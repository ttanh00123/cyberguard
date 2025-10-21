import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Search,
  Filter,
  Clock,
  Target,
  CheckCircle2,
  Lightbulb,
  Star,
  TrendingUp,
  ArrowLeft,
  ArrowRight,
  X
} from "lucide-react";
import Layout from "./Layout";

const studyStrategies = [
  {
    id: "smart-searching",
    title: "SMART SEARCHING",
    description: "Find exactly what you need with advanced search techniques",
    icon: Search,
    color: "bg-blue-500",
    tips: [
      "Use specific keywords instead of full sentences",
      'Put exact phrases in "quotation marks"',
      "Use site:edu to search only educational websites",
      'Add "filetype:pdf" to find PDF documents',
      "Use the minus sign (-) to exclude unwanted terms",
    ],
    examples: [
      '"climate change effects" site:edu',
      "Shakespeare biography -William",
      "math formulas filetype:pdf",
    ],
  },
  {
    id: "reliable-sources",
    title: "FIND RELIABLE SOURCES",
    description: "Identify trustworthy information for your research",
    icon: Target,
    color: "bg-green-500",
    tips: [
      "Check if the author is an expert in the field",
      "Look for recent publication dates",
      "Verify information across multiple sources",
      "Use academic databases and libraries",
      "Avoid Wikipedia as a primary source (but check its references!)",
    ],
    trustworthy: [
      "Google Scholar",
      "Library databases",
      "Government websites (.gov)",
      "Educational institutions (.edu)",
      "Peer-reviewed journals",
      "Established news sources",
    ],
  },
  {
    id: "organize-research",
    title: "ORGANIZE YOUR RESEARCH",
    description: "Keep track of sources and information effectively",
    icon: Filter,
    color: "bg-purple-500",
    tips: [
      "Create folders for different topics or subjects",
      "Bookmark important websites with descriptive names",
      "Keep a document with all your sources and links",
      "Take notes in your own words to avoid plagiarism",
      "Use citation tools to format references properly",
    ],
    tools: [
      "Google Drive/OneDrive for cloud storage",
      "Bookmark folders in your browser",
      "Note-taking apps like Notion or OneNote",
      "Citation tools like EasyBib or Zotero",
    ],
  },
  {
    id: "time-management",
    title: "MANAGE YOUR TIME",
    description: "Use the internet efficiently without getting distracted",
    icon: Clock,
    color: "bg-orange",
    tips: [
      "Set specific time limits for research sessions",
      "Use website blockers during study time",
      "Take regular breaks to avoid screen fatigue",
      "Create a list of sites to visit before you start",
      "Turn off social media notifications while studying",
    ],
    techniques: [
      "Pomodoro Technique (25 min work, 5 min break)",
      "Time-blocking your calendar",
      'Setting phone to "Do Not Disturb" mode',
      "Using apps like Forest or Cold Turkey",
    ],
  },
];

const quickTips = [
  {
    icon: Lightbulb,
    tip: "Use multiple search engines - Google, Bing, and DuckDuckGo may show different results",
  },
  {
    icon: Star,
    tip: "Create a 'Research' bookmark folder and organize by subject or assignment",
  },
  {
    icon: TrendingUp,
    tip: "Check when articles were published - older info might be outdated",
  },
  {
    icon: Target,
    tip: "Always fact-check important information with at least 2 other sources",
  },
];

const studyQuizQuestions = [
  {
    question:
      "Which search technique helps you find results from educational websites only?",
    options: [
      "Use the minus sign (-) to exclude terms",
      'Put phrases in "quotation marks"',
      "Add site:edu to your search",
      "Use filetype:pdf",
    ],
    correct: 2,
    explanation: "Adding site:edu limits results to educational domains.",
  },
  {
    question: "What is a sign of a trustworthy source?",
    options: [
      "No author listed",
      "Recent publication date",
      "Lots of ads",
      "Unusual website address",
    ],
    correct: 1,
    explanation: "Trustworthy sources are recent and credit their authors.",
  },
];

export default function StudyTipsPage() {
  const [selectedStrategy, setSelectedStrategy] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [expandedTip, setExpandedTip] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const totalSteps = 5;
  const TOPIC_ID = "study-tips";

  useEffect(() => {
    checkProgress();
  }, []);

  const checkProgress = () => {
    const progress = localStorage.getItem("completedTopics");
    if (progress) {
      const completedArray = JSON.parse(progress);
      setCompleted(completedArray.includes(TOPIC_ID));
    }
  };

  const markComplete = () => {
    let progress = localStorage.getItem("completedTopics");
    let completedArray = progress ? JSON.parse(progress) : [];
    if (!completedArray.includes(TOPIC_ID)) {
      completedArray.push(TOPIC_ID);
      localStorage.setItem("completedTopics", JSON.stringify(completedArray));
    }
    setCompleted(true);
  };

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  return (
    <Layout>
      <div className="min-h-screen bg-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-blue-500 brutalist-border brutalist-shadow flex items-center justify-center transform rotate-3">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-black mb-4 transform -rotate-1">
              STUDY
              <span className="block text-blue-500 transform rotate-2">
                SMARTER!
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-bold text-gray-800 max-w-4xl mx-auto">
              Master the art of online research and boost your academic success!
              📚
            </p>

            {completed && (
              <div className="mt-6 inline-block bg-lime-green text-black px-6 py-3 brutalist-border brutalist-shadow font-black transform rotate-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  TOPIC COMPLETED!
                </div>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-2 font-black">
              <span>PROGRESS</span>
              <span>
                STEP {currentStep + 1} / {totalSteps}
              </span>
            </div>
            <div className="w-full bg-gray-200 brutalist-border h-8">
              <div
                className="bg-blue-500 h-full transition-all duration-300 ease-in-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Step-by-step content */}
          {currentStep === 0 && (
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-center mb-8 transform rotate-1">
                MASTER THESE SKILLS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {studyStrategies.map((strategy, index) => {
                  const rotation = index % 2 === 0 ? "rotate-1" : "-rotate-1";

                  return (
                    <div
                      key={strategy.id}
                      className={`bg-white brutalist-border brutalist-shadow p-6 transform ${rotation} hover:scale-105 transition-all cursor-pointer`}
                      onClick={() => setSelectedStrategy(strategy)}
                    >
                      <div
                        className={`inline-block p-4 ${strategy.color} brutalist-border brutalist-shadow-small mb-4`}
                      >
                        <strategy.icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-2xl font-black mb-3 text-black">
                        {strategy.title}
                      </h3>

                      <p className="font-bold text-gray-700 mb-4">
                        {strategy.description}
                      </p>

                      <div className="flex items-center gap-2 font-black text-blue-500">
                        LEARN MORE
                        <BookOpen className="w-4 h-4" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="bg-yellow-50 brutalist-border brutalist-shadow p-8 mb-12 transform -rotate-1">
              <h2 className="text-3xl md:text-4xl font-black text-center mb-8">
                💡 QUICK TIPS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {quickTips.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white brutalist-border p-6 transform hover:scale-105 transition-transform"
                  >
                    <div className="flex items-start gap-4">
                      <item.icon className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                      <p className="font-bold text-black">{item.tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="bg-blue-50 brutalist-border brutalist-shadow p-8 mb-12 transform rotate-1">
              <h2 className="text-3xl md:text-4xl font-black text-center mb-8">
                🔍 SEARCH EXAMPLES
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white brutalist-border p-6">
                  <h3 className="font-black mb-3 text-blue-600">
                    BASIC SEARCH:
                  </h3>
                  <p className="font-mono bg-gray-100 p-2 brutalist-border text-sm mb-2">
                    World War 2 causes
                  </p>
                  <p className="font-bold text-sm">Gets general results</p>
                </div>

                <div className="bg-white brutalist-border p-6">
                  <h3 className="font-black mb-3 text-green-600">
                    BETTER SEARCH:
                  </h3>
                  <p className="font-mono bg-gray-100 p-2 brutalist-border text-sm mb-2">
                    "causes of World War 2" site:edu
                  </p>
                  <p className="font-bold text-sm">Educational sources only</p>
                </div>

                <div className="bg-white brutalist-border p-6">
                  <h3 className="font-black mb-3 text-purple-600">
                    EXPERT SEARCH:
                  </h3>
                  <p className="font-mono bg-gray-100 p-2 brutalist-border text-sm mb-2">
                    "World War 2" causes 1939 -wikipedia filetype:pdf
                  </p>
                  <p className="font-bold text-sm">
                    PDF documents, excludes Wikipedia
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Knowledge Quiz Step */}
          {currentStep === 3 && (
            <div className="text-center py-16">
              <h2 className="text-4xl font-black text-center mb-4">
                KNOWLEDGE CHECK!
              </h2>
              <p className="font-bold text-lg text-center max-w-3xl mx-auto mb-8">
                Answer all questions correctly to unlock the final step!
              </p>
              <StudyQuizSection
                questions={studyQuizQuestions}
                onComplete={() => {
                  setQuizCompleted(true);
                  nextStep();
                }}
                disabled={quizCompleted}
              />
            </div>
          )}

          {currentStep === 4 && (
            <div className="text-center py-16">
              <h2 className="text-4xl font-black text-center mb-4">
                YOU'RE A RESEARCH PRO!
              </h2>
              <p className="font-bold text-lg text-center max-w-3xl mx-auto mb-8">
                You've got the skills to find reliable information and use the
                internet to boost your learning.
              </p>
              {!completed && (
                <button
                  onClick={markComplete}
                  className="bg-blue-500 text-white px-8 py-4 brutalist-border brutalist-shadow font-black text-xl transform rotate-1 hover:scale-105 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6" />
                    MARK AS COMPLETE
                  </div>
                </button>
              )}
              {completed && (
                <div className="mt-6 inline-block bg-lime-green text-black px-6 py-3 brutalist-border brutalist-shadow font-black transform rotate-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    TOPIC COMPLETED!
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="bg-white text-black px-6 py-3 brutalist-border brutalist-shadow-small font-black text-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
            >
              <div className="flex items-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                PREV
              </div>
            </button>

            <button
              onClick={nextStep}
              disabled={
                currentStep === totalSteps - 1 ||
                (currentStep === 3 && !quizCompleted)
              }
              className="bg-hot-pink text-white px-6 py-3 brutalist-border brutalist-shadow-small font-black text-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
            >
              <div className="flex items-center gap-2">
                NEXT
                <ArrowRight className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>

        {/* Strategy Detail Modal */}
        {selectedStrategy && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedType(null)}
          >
            <div
              className="bg-white brutalist-border brutalist-shadow max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 ${selectedStrategy.color} brutalist-border`}
                    >
                      <selectedStrategy.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-black">
                      {selectedStrategy.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedStrategy(null)}
                    className="p-2 hover:bg-gray-100 brutalist-border"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Tips Section */}
                  <div className="bg-blue-50 brutalist-border p-4">
                    <h4 className="font-black text-lg mb-3 text-blue-600">
                      💡 EXPERT TIPS:
                    </h4>
                    <ul className="space-y-2">
                      {selectedStrategy.tips.map((tip, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 font-bold"
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Examples or Tools */}
                  {selectedStrategy.examples && (
                    <div className="bg-green-50 brutalist-border p-4">
                      <h4 className="font-black text-lg mb-3 text-green-600">
                        🔍 SEARCH EXAMPLES:
                      </h4>
                      <div className="space-y-2">
                        {selectedStrategy.examples.map((example, index) => (
                          <div
                            key={index}
                            className="bg-white brutalist-border p-2 font-mono text-sm"
                          >
                            {example}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedStrategy.trustworthy && (
                    <div className="bg-green-50 brutalist-border p-4">
                      <h4 className="font-black text-lg mb-3 text-green-600">
                        ✅ TRUSTWORTHY SOURCES:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedStrategy.trustworthy.map((source, index) => (
                          <div
                            key={index}
                            className="bg-white brutalist-border p-2 text-sm font-bold text-center"
                          >
                            {source}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedStrategy.tools && (
                    <div className="bg-yellow-50 brutalist-border p-4">
                      <h4 className="font-black text-lg mb-3 text-yellow-600">
                        🛠️ USEFUL TOOLS:
                      </h4>
                      <ul className="space-y-2">
                        {selectedStrategy.tools.map((tool, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 font-bold"
                          >
                            <Star className="w-4 h-4 text-yellow-500" />
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedStrategy.techniques && (
                    <div className="bg-orange-50 brutalist-border p-4">
                      <h4 className="font-black text-lg mb-3 text-orange-600">
                        ⏰ TIME MANAGEMENT TECHNIQUES:
                      </h4>
                      <ul className="space-y-2">
                        {selectedStrategy.techniques.map((technique, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 font-bold"
                          >
                            <Clock className="w-4 h-4 text-orange" />
                            {technique}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

// Add this component at the bottom of the file
function StudyQuizSection({ questions, onComplete, disabled }) {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showExplanation, setShowExplanation] = useState(
    Array(questions.length).fill(false)
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIdx, optIdx) => {
    if (submitted) return;
    const newAnswers = [...answers];
    newAnswers[qIdx] = optIdx;
    setAnswers(newAnswers);

    const newShow = [...showExplanation];
    newShow[qIdx] = true;
    setShowExplanation(newShow);
  };

  const allAnswered = answers.every((a) => a !== null);
  const allCorrect = answers.every((a, i) => a === questions[i].correct);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {questions.map((q, qIdx) => (
        <div
          key={qIdx}
          className="mb-8 bg-white brutalist-border p-6 text-left"
        >
          <div className="font-black mb-3">
            {qIdx + 1}. {q.question}
          </div>
          <div className="space-y-2">
            {q.options.map((opt, optIdx) => {
              const isSelected = answers[qIdx] === optIdx;
              const isCorrect = q.correct === optIdx;
              let optClass =
                "brutalist-border px-4 py-2 cursor-pointer font-bold";
              if (submitted || showExplanation[qIdx]) {
                if (isSelected && isCorrect) optClass += " bg-lime-200";
                else if (isSelected && !isCorrect) optClass += " bg-red-200";
                else if (isCorrect) optClass += " bg-lime-100";
              } else if (isSelected) {
                optClass += " bg-blue-100";
              }
              return (
                <div
                  key={optIdx}
                  className={optClass}
                  onClick={() => handleSelect(qIdx, optIdx)}
                  style={{ pointerEvents: submitted ? "none" : "auto" }}
                >
                  {opt}
                </div>
              );
            })}
          </div>
          {(showExplanation[qIdx] || submitted) && (
            <div
              className={`mt-3 p-3 brutalist-border ${
                answers[qIdx] === q.correct
                  ? "bg-lime-50 text-lime-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {answers[qIdx] === q.correct ? (
                <b>
                  <Check className="w-5 h-5" /> Correct!
                </b>
              ) : (
                <b>
                  <X className="w-5 h-5" /> Incorrect!
                </b>
              )}{" "}
              {q.explanation}
            </div>
          )}
        </div>
      ))}
      {!submitted && (
        <button
          className={`bg-blue-500 text-white px-8 py-4 brutalist-border brutalist-shadow font-black text-xl transform rotate-1 hover:scale-105 transition-all ${
            !allAnswered ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!allAnswered}
          onClick={handleSubmit}
        >
          CHECK ANSWERS
        </button>
      )}
      {submitted && (
        <div className="mt-6">
          {allCorrect ? (
            <button
              className="bg-lime-green text-black px-8 py-4 brutalist-border brutalist-shadow font-black text-xl transform rotate-1 hover:scale-105 transition-all"
              onClick={onComplete}
              disabled={disabled}
            >
              NEXT STEP
            </button>
          ) : (
            <div className="font-black text-red-600">
              Please try again. All answers must be correct to continue.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
