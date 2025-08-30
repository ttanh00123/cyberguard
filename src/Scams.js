import React, { useState, useEffect } from "react";
import { AlertTriangle, Mail, Phone, CreditCard, Gift, Shield, X, CheckCircle2, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";

const commonScams = [
  {
    id: "phishing",
    title: "PHISHING EMAILS",
    description: "Fake emails that try to steal your passwords or personal info",
    icon: Mail,
    color: "bg-red-500",
    example: {
      subject: "URGENT: Your Netflix account will be suspended!",
      sender: "netflix-security@netfl1x-support.com",
      content: "Click here immediately to verify your account or it will be deleted in 24 hours!",
      redFlags: ["Urgent language", "Misspelled domain", "Generic greeting", "Suspicious link"]
    }
  },
  {
    id: "fake-support",
    title: "FAKE TECH SUPPORT",
    description: "Scammers pretending to be from Microsoft, Apple, or other companies",
    icon: Phone,
    color: "bg-orange-500-500",
    example: {
      scenario: "Pop-up on your computer",
      message: "WARNING: Your computer is infected with 5 viruses! Call 1-800-FAKE-HELP now!",
      request: "Remote access to 'fix' your computer",
      redFlags: ["Scary pop-ups", "Unsolicited calls", "Asks for remote access", "Demands payment"]
    }
  },
  {
    id: "online-shopping",
    title: "FAKE ONLINE STORES",
    description: "Websites that take your money but never send products",
    icon: CreditCard,
    color: "bg-purple-500",
    example: {
      site: "amazing-deals-electronics.com",
      offer: "iPhone 15 Pro for only $99! Limited time!",
      payment: "Only accepts gift cards or cryptocurrency",
      redFlags: ["Too-good prices", "No contact info", "Unusual payment methods", "No reviews"]
    }
  },
  {
    id: "social-media",
    title: "SOCIAL MEDIA SCAMS",
    description: "Fake contests, friendship requests, and 'get rich quick' schemes",
    icon: Gift,
    color: "bg-pink-500",
    example: {
      post: "Congratulations! You've won a $1000 gift card! Click to claim!",
      requirement: "Share this post and enter your credit card info for 'verification'",
      friend: "Attractive stranger wants to be friends and share 'investment tips'",
      redFlags: ["Too good to be true", "Asks for personal info", "Pressure to act fast", "Unknown contacts"]
    }
  }
];

const protectionTips = [
  "NEVER give personal info to unsolicited contacts",
  "ALWAYS verify by contacting companies directly",
  "CHECK URLs carefully for misspellings",
  "USE strong, unique passwords for every account",
  "TRUST your instincts - if it feels wrong, it probably is",
  "RESEARCH before buying from unknown websites"
];

const scamQuizQuestions = [
  {
    question: "You receive an email saying your bank account will be closed unless you click a link and log in. What should you do?",
    options: [
      "Click the link and log in immediately",
      "Ignore the email and delete it",
      "Contact your bank using official channels",
      "Reply to the email for more info"
    ],
    correct: 2,
    explanation: "Always contact your bank directly using their official website or phone number. Never click suspicious links."
  },
  {
    question: "A website offers a new smartphone for $50 and only accepts payment by gift card. What is the safest action?",
    options: [
      "Buy quickly before the deal ends",
      "Ask for a discount",
      "Check reviews and payment options",
      "Report the site as suspicious"
    ],
    correct: 3,
    explanation: "Unusual payment methods and too-good-to-be-true offers are major red flags. Report and avoid such sites."
  }
];

export default function ScamsPage() {
  const [selectedScam, setSelectedScam] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const totalSteps = 5;
  const TOPIC_ID = "scams";

  useEffect(() => {
    checkProgress();
  }, []);

  const checkProgress = () => {
    const progress = localStorage.getItem('completedTopics');
    if (progress) {
      const completedArray = JSON.parse(progress);
      setCompleted(completedArray.includes(TOPIC_ID));
    }
  };

  const markComplete = () => {
    let progress = localStorage.getItem('completedTopics');
    let completedArray = progress ? JSON.parse(progress) : [];
    if (!completedArray.includes(TOPIC_ID)) {
      completedArray.push(TOPIC_ID);
      localStorage.setItem('completedTopics', JSON.stringify(completedArray));
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
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-red-500 brutalist-border brutalist-shadow flex items-center justify-center transform rotate-3">
              <AlertTriangle className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-black mb-4 transform -rotate-1">
            COMMON
            <span className="block text-red-500 transform rotate-2">SCAMS!</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-bold text-gray-800 max-w-4xl mx-auto">
            Learn to spot the most common online scams and protect yourself from cybercriminals! 🕵️‍♂️
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-2 font-black">
            <span>PROGRESS</span>
            <span>STEP {currentStep + 1} / {totalSteps}</span>
          </div>
          <div className="w-full bg-gray-200 brutalist-border h-8">
            <div
              className="bg-lime-500 brutalist-border border-r-4 h-full transition-all duration-300 ease-in-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Step-by-step content */}
        {currentStep === 0 && (
          <div className="text-center py-8">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-4">WHAT ARE SCAMS?</h2>
            <p className="font-bold text-lg md:text-xl text-center max-w-3xl mx-auto">
              Scams are dishonest attempts by cybercriminals to trick you into giving them money, personal information, or access to your devices. They come in many forms, often disguised as legitimate communications. Learning to recognize their tactics is the first step to staying safe!
            </p>
          </div>
        )}
        
        {currentStep === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {commonScams.map((scam, index) => {
              const rotation = index % 2 === 0 ? 'rotate-1' : '-rotate-1';
              
              return (
                <div key={scam.id} className={`bg-white brutalist-border brutalist-shadow p-6 transform ${rotation} hover:scale-105 transition-all cursor-pointer`}
                     onClick={() => setSelectedScam(scam)}>
                  <div className={`inline-block p-4 ${scam.color} brutalist-border brutalist-shadow-small mb-4`}>
                    <scam.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-black mb-3 text-black">
                    {scam.title}
                  </h3>
                  
                  <p className="font-bold text-gray-700 mb-4">
                    {scam.description}
                  </p>
                  
                  <div className="flex items-center gap-2 font-black text-red-500">
                    VIEW EXAMPLE
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {currentStep === 2 && (
          <div className="bg-lime-500 brutalist-border brutalist-shadow p-8 mb-12 transform -rotate-1">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-6 text-center">
              🛡️ PROTECTION TIPS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {protectionTips.map((tip, index) => (
                <div key={index} className="bg-white brutalist-border p-4 transform hover:scale-105 transition-transform">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-lime-600 flex-shrink-0 mt-1" />
                    <p className="font-bold text-black">{tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* NEW QUIZ STEP */}
        {currentStep === 3 && (
          <div className="text-center py-16">
            <h2 className="text-4xl font-black text-center mb-4">SCAM QUIZ!</h2>
            <p className="font-bold text-lg text-center max-w-3xl mx-auto mb-8">
              Answer all questions correctly to unlock the next step!
            </p>
            <ScamQuizSection
              questions={scamQuizQuestions}
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
             <h2 className="text-4xl md:text-5xl font-black text-center mb-4">YOU'RE READY!</h2>
             <p className="font-bold text-lg md:text-xl text-center max-w-3xl mx-auto mb-8">
              You've now learned about common scams and essential protection tips. By understanding these threats, you're much better equipped to defend yourself online. Click below to mark this important topic as complete!
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
               <div className="mt-6 inline-block bg-lime-500 text-black px-6 py-3 brutalist-border brutalist-shadow font-black transform rotate-1">
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
             className="bg-white text-black px-6 py-3 brutalist-border brutalist-shadow-small font-black text-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed">
              <div className="flex items-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                PREV
              </div>
           </button>
           
           <button 
            onClick={nextStep} 
            disabled={currentStep === totalSteps - 1 || (currentStep === 3 && !quizCompleted)}
            className="bg-pink-500 text-white px-6 py-3 brutalist-border brutalist-shadow-small font-black text-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed">
             <div className="flex items-center gap-2">
                NEXT
                <ArrowRight className="w-5 h-5" />
              </div>
           </button>
        </div>
      </div>
      {/* Scam Detail Modal */}
      {selectedScam && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white brutalist-border brutalist-shadow max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 ${selectedScam.color} brutalist-border`}>
                    <selectedScam.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-black">{selectedScam.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedScam(null)}
                  className="p-2 hover:bg-gray-100 brutalist-border"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="bg-red-50 brutalist-border p-4">
                  <h4 className="font-black text-lg mb-3 text-red-600">⚠️ EXAMPLE SCAM:</h4>
                  
                  {selectedScam.example.subject && (
                    <div className="mb-4">
                      <p className="font-bold mb-1">Email Subject:</p>
                      <p className="bg-white brutalist-border p-2 font-mono text-sm">
                        {selectedScam.example.subject}
                      </p>
                    </div>
                  )}
                  
                  {selectedScam.example.sender && (
                    <div className="mb-4">
                      <p className="font-bold mb-1">From:</p>
                      <p className="bg-white brutalist-border p-2 font-mono text-sm">
                        {selectedScam.example.sender}
                      </p>
                    </div>
                  )}
                  
                  {selectedScam.example.content && (
                    <div className="mb-4">
                      <p className="font-bold mb-1">Message:</p>
                      <p className="bg-white brutalist-border p-2">
                        {selectedScam.example.content}
                      </p>
                    </div>
                  )}

                  {selectedScam.example.scenario && (
                    <div className="mb-4">
                      <p className="font-bold mb-1">Scenario:</p>
                      <p className="bg-white brutalist-border p-2">
                        {selectedScam.example.scenario}
                      </p>
                    </div>
                  )}

                  {selectedScam.example.message && (
                    <div className="mb-4">
                      <p className="font-bold mb-1">Pop-up Message:</p>
                      <p className="bg-white brutalist-border p-2">
                        {selectedScam.example.message}
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-yellow-50 brutalist-border p-4">
                  <h4 className="font-black text-lg mb-3 text-yellow-600">🚩 RED FLAGS:</h4>
                  <ul className="space-y-2">
                    {selectedScam.example.redFlags.map((flag, index) => (
                      <li key={index} className="flex items-center gap-2 font-bold">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        {flag}
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
  );
}

// Add this component at the bottom of the file
function ScamQuizSection({ questions, onComplete, disabled }) {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showExplanation, setShowExplanation] = useState(Array(questions.length).fill(false));
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

  const allAnswered = answers.every(a => a !== null);
  const allCorrect = answers.every((a, i) => a === questions[i].correct);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {questions.map((q, qIdx) => (
        <div key={qIdx} className="mb-8 bg-white brutalist-border p-6 text-left">
          <div className="font-black mb-3">{qIdx + 1}. {q.question}</div>
          <div className="space-y-2">
            {q.options.map((opt, optIdx) => {
              const isSelected = answers[qIdx] === optIdx;
              const isCorrect = q.correct === optIdx;
              let optClass = "brutalist-border px-4 py-2 cursor-pointer font-bold";
              if (submitted || showExplanation[qIdx]) {
                if (isSelected && isCorrect) optClass += " bg-lime-200";
                else if (isSelected && !isCorrect) optClass += " bg-red-200";
                else if (isCorrect) optClass += " bg-lime-100";
              } else if (isSelected) {
                optClass += " bg-pink-100";
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
            <div className={`mt-3 p-3 brutalist-border ${answers[qIdx] === q.correct ? "bg-lime-50 text-lime-700" : "bg-red-50 text-red-700"}`}>
              {answers[qIdx] === q.correct ? "✅ Correct!" : "❌ Incorrect."} {q.explanation}
            </div>
          )}
        </div>
      ))}
      {!submitted && (
        <button
          className={`bg-pink-500 text-white px-8 py-4 brutalist-border brutalist-shadow font-black text-xl transform rotate-1 hover:scale-105 transition-all ${!allAnswered ? "opacity-50 cursor-not-allowed" : ""}`}
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
              className="bg-lime-500 text-black px-8 py-4 brutalist-border brutalist-shadow font-black text-xl transform rotate-1 hover:scale-105 transition-all"
              onClick={onComplete}
              disabled={disabled}
            >
              NEXT STEP
            </button>
          ) : (
            <div className="font-black text-red-600">Please try again. All answers must be correct to continue.</div>
          )}
        </div>
      )}
    </div>
  );
}
