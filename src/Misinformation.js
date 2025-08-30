import React, { useState, useEffect } from "react";
import {
  Eye,
  Search,
  Users,
  Clock,
  ExternalLink,
  CheckCircle2,
  X,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Layout from "./Layout";

const misinfoTypes = [
  {
    id: "fake-news",
    title: "FAKE NEWS ARTICLES",
    description: "False stories designed to mislead or get clicks",
    icon: Eye,
    color: "bg-red-500",
    example: {
      headline:
        "SCIENTISTS DISCOVER CURE FOR ALL DISEASES (DOCTORS HATE THIS!)",
      source: "healthtruth.blogspot.com",
      issues: [
        "Clickbait headline",
        "Unreliable source",
        "Too good to be true",
        "No author credited",
      ],
    },
  },
  {
    id: "manipulated-images",
    title: "DOCTORED PHOTOS",
    description: "Images edited to show false events or misleading contexts",
    icon: ExternalLink,
    color: "bg-orange",
    example: {
      claim: "Photo shows massive crowd at political rally",
      reality:
        "Image from different event, different year, crowd size digitally enhanced",
      issues: [
        "No date/location info",
        "Suspicious quality",
        "Reverse image search shows original",
      ],
    },
  },
  {
    id: "social-rumors",
    title: "SOCIAL MEDIA RUMORS",
    description:
      "Unverified claims that spread quickly through social networks",
    icon: Users,
    color: "bg-purple-500",
    example: {
      post: "My cousin's friend works at [Company] and says they're putting microchips in products!",
      spread: "Shared 50,000 times in 24 hours",
      issues: [
        "Third-hand information",
        "No evidence provided",
        "Appeals to fear",
        "Anonymous source",
      ],
    },
  },
  {
    id: "outdated-info",
    title: "OLD NEWS RECYCLED",
    description: "Outdated information shared as if it's current news",
    icon: Clock,
    color: "bg-blue-500",
    example: {
      post: "BREAKING: Major earthquake hits Japan!",
      reality: "Article from 2011 being shared again without date context",
      issues: [
        "No current date",
        "Emotional language",
        "Lack of recent sources",
      ],
    },
  },
];

const verificationSteps = [
  {
    step: 1,
    title: "CHECK THE SOURCE",
    description:
      "Look for author name, publication date, and reputable website",
    icon: Search,
  },
  {
    step: 2,
    title: "CROSS-REFERENCE",
    description: "See if multiple reliable sources report the same information",
    icon: ExternalLink,
  },
  {
    step: 3,
    title: "EXAMINE EVIDENCE",
    description:
      "Look for photos, videos, data, or expert quotes that support claims",
    icon: Eye,
  },
  {
    step: 4,
    title: "CHECK YOUR BIAS",
    description:
      "Ask yourself: Do I want this to be true? Am I being objective?",
    icon: AlertTriangle,
  },
];

const reliableSources = [
  "BBC News",
  "Reuters",
  "Associated Press",
  "NPR",
  "Scientific journals",
  "Government websites (.gov)",
  "Established newspapers",
  "Fact-checking sites (Snopes, FactCheck.org)",
];

export default function MisinformationPage() {
  const [selectedExample, setSelectedExample] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 5;
  const TOPIC_ID = "misinformation";

  const quizQuestions = [
    {
      question:
        "You see a shocking news headline on social media. What should you do FIRST?",
      options: [
        "Share it immediately to warn friends",
        "Check if it's from a reliable source",
        "Read only the headline",
        "Assume it's true if many people shared it",
      ],
      correct: 1,
      explanation: "Always verify the source before sharing anything!",
    },
    {
      question:
        "A news article has no author name and was published on 'truthnews.info'. This is:",
      options: [
        "Completely normal",
        "A red flag for fake news",
        "Only a problem if you disagree with it",
        "Fine as long as it has photos",
      ],
      correct: 1,
      explanation:
        "Legitimate news always credits authors and comes from established sources.",
    },
  ];

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
    <Layout
      children={
        <div className="min-h-screen bg-white py-8 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-block mb-6">
                <div className="w-20 h-20 bg-orange brutalist-border brutalist-shadow flex items-center justify-center transform rotate-3">
                  <Eye className="w-10 h-10 text-white" />
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-black mb-4 transform -rotate-1">
                SPOT FAKE
                <span className="block text-orange transform rotate-2">
                  NEWS!
                </span>
              </h1>

              <p className="text-xl md:text-2xl font-bold text-gray-800 max-w-4xl mx-auto">
                Learn how to identify misinformation and verify what you read
                online! 🔍
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
                  className="bg-orange h-full transition-all duration-300 ease-in-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            {/* Step-by-step content */}
            {currentStep === 0 && (
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-center mb-8 transform rotate-1">
                  TYPES OF MISINFORMATION
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {misinfoTypes.map((type, index) => {
                    const rotation = index % 2 === 0 ? "rotate-1" : "-rotate-1";

                    return (
                      <div
                        key={type.id}
                        className={`bg-white brutalist-border brutalist-shadow p-6 transform ${rotation} hover:scale-105 transition-all cursor-pointer`}
                        onClick={() => setSelectedExample(type)}
                      >
                        <div
                          className={`inline-block p-4 ${type.color} brutalist-border brutalist-shadow-small mb-4`}
                        >
                          <type.icon className="w-8 h-8 text-white" />
                        </div>

                        <h3 className="text-2xl font-black mb-3 text-black">
                          {type.title}
                        </h3>

                        <p className="font-bold text-gray-700 mb-4">
                          {type.description}
                        </p>

                        <div className="flex items-center gap-2 font-black text-orange">
                          SEE EXAMPLE
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="bg-blue-50 brutalist-border brutalist-shadow p-8 mb-12 transform -rotate-1">
                <h2 className="text-3xl md:text-4xl font-black text-center mb-8">
                  🕵️ HOW TO VERIFY INFORMATION
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {verificationSteps.map((step, index) => (
                    <div
                      key={step.step}
                      className="bg-white brutalist-border p-6 text-center transform hover:scale-105 transition-transform"
                    >
                      <div className="w-12 h-12 bg-blue-500 brutalist-border rounded-full flex items-center justify-center text-white font-black text-xl mx-auto mb-4">
                        {step.step}
                      </div>

                      <div className="mb-4">
                        <step.icon className="w-8 h-8 text-blue-500 mx-auto" />
                      </div>

                      <h3 className="text-lg font-black mb-3">{step.title}</h3>
                      <p className="font-bold text-gray-700 text-sm">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="bg-lime-green brutalist-border brutalist-shadow p-8 mb-12 transform rotate-1">
                <h2 className="text-3xl md:text-4xl font-black text-center mb-8">
                  ✅ RELIABLE SOURCES
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {reliableSources.map((source, index) => (
                    <div
                      key={index}
                      className="bg-white brutalist-border p-4 text-center transform hover:scale-105 transition-transform"
                    >
                      <p className="font-black text-sm">{source}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Placeholder for quiz, can be added as a step */}
            {currentStep === 3 && (
              <div className="text-center py-16">
                <h2 className="text-4xl font-black text-center mb-4">
                  KNOWLEDGE CHECK!
                </h2>
                <p className="font-bold text-lg text-center max-w-3xl mx-auto mb-8">
                  Answer all questions to unlock the next step!
                </p>
                <QuizSection
                  questions={quizQuestions}
                  onComplete={nextStep}
                  disabled={currentStep !== 3}
                />
              </div>
            )}

            {currentStep === 4 && (
              <div className="text-center py-16">
                <h2 className="text-4xl font-black text-center mb-4">
                  YOU'RE A FACT-CHECKER!
                </h2>
                <p className="font-bold text-lg text-center max-w-3xl mx-auto mb-8">
                  You now have the tools to tell fact from fiction online. Great
                  job!
                </p>
                {!completed && (
                  <button
                    onClick={markComplete}
                    className="bg-orange text-white px-8 py-4 brutalist-border brutalist-shadow font-black text-xl transform rotate-1 hover:scale-105 transition-all"
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
                disabled={currentStep === totalSteps - 1}
                className="bg-orange text-black px-6 py-3 brutalist-border brutalist-shadow-small font-black text-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                <div className="flex items-center gap-2">
                  NEXT
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            </div>
          </div>

          {/* Example Modal */}
          {selectedExample && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedType(null)}
            >
              <div
                className="bg-white brutalist-border brutalist-shadow max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 ${selectedExample.color} brutalist-border`}
                      >
                        <selectedExample.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-black">
                        {selectedExample.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedExample(null)}
                      className="p-2 hover:bg-gray-100 brutalist-border"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-red-50 brutalist-border p-4">
                      <h4 className="font-black text-lg mb-3 text-red-600">
                        ⚠️ EXAMPLE:
                      </h4>
                      {selectedExample.example.headline && (
                        <div className="mb-4">
                          <p className="font-bold mb-1">Fake Headline:</p>
                          <p className="bg-white brutalist-border p-3 font-bold text-lg">
                            {selectedExample.example.headline}
                          </p>
                        </div>
                      )}
                      {selectedExample.example.claim && (
                        <div className="mb-4">
                          <p className="font-bold mb-1">False Claim:</p>
                          <p className="bg-white brutalist-border p-3">
                            {selectedExample.example.claim}
                          </p>
                        </div>
                      )}
                      {selectedExample.example.post && (
                        <div className="mb-4">
                          <p className="font-bold mb-1">Social Media Post:</p>
                          <p className="bg-white brutalist-border p-3">
                            {selectedExample.example.post}
                          </p>
                        </div>
                      )}
                      {selectedExample.example.spread && (
                        <div className="mb-4">
                          <p className="font-bold mb-1">Spread:</p>
                          <p className="bg-white brutalist-border p-3">
                            {selectedExample.example.spread}
                          </p>
                        </div>
                      )}
                      {selectedExample.example.source && (
                        <div className="mb-4">
                          <p className="font-bold mb-1">Source:</p>
                          <p className="bg-white brutalist-border p-3">
                            {selectedExample.example.source}
                          </p>
                        </div>
                      )}
                      {selectedExample.example.reality && (
                        <div className="mb-4">
                          <p className="font-bold mb-1">Reality:</p>
                          <p className="bg-white brutalist-border p-3">
                            {selectedExample.example.reality}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="bg-yellow-50 brutalist-border p-4">
                      <h4 className="font-black text-lg mb-3 text-yellow-600">
                        🚩 WARNING SIGNS:
                      </h4>
                      <ul className="space-y-2">
                        {selectedExample.example.issues.map((issue, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 font-bold"
                          >
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      }
    />
  );
}

function QuizSection({ questions, onComplete, disabled }) {
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
                optClass += " bg-orange-100";
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
              {answers[qIdx] === q.correct ? "✅ Correct!" : "❌ Incorrect."}{" "}
              {q.explanation}
            </div>
          )}
        </div>
      ))}
      {!submitted && (
        <button
          className={`bg-orange text-white px-8 py-4 brutalist-border brutalist-shadow font-black text-xl transform rotate-1 hover:scale-105 transition-all ${
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
