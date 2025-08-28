import React, { useState, useEffect } from "react";
import { Users, MessageCircle, Heart, Shield, AlertTriangle, CheckCircle2, X, ThumbsUp, ThumbsDown, ArrowLeft, ArrowRight } from "lucide-react";

const netiquetteRules = [
  {
    id: "be-respectful",
    title: "BE RESPECTFUL",
    description: "Treat others online the same way you would in person",
    icon: Heart,
    color: "bg-pink-500",
    dos: [
      "Use polite language",
      "Respect different opinions", 
      "Say 'please' and 'thank you'",
      "Consider others' feelings"
    ],
    donts: [
      "Use offensive language",
      "Attack people personally",
      "Make fun of others",
      "Discriminate or bully"
    ]
  },
  {
    id: "think-before-posting",
    title: "THINK BEFORE YOU POST",
    description: "Once it's online, it's there forever - make it count!",
    icon: MessageCircle,
    color: "bg-blue-500",
    dos: [
      "Read your message before sending",
      "Check if it's appropriate",
      "Make sure it's accurate",
      "Consider who might see it"
    ],
    donts: [
      "Post when you're angry",
      "Share personal information",
      "Spread rumors or gossip",
      "Post without thinking"
    ]
  },
  {
    id: "protect-privacy",
    title: "PROTECT PRIVACY",
    description: "Keep personal information safe - yours and others'!",
    icon: Shield,
    color: "bg-green-500",
    dos: [
      "Use privacy settings",
      "Ask before sharing photos of friends",
      "Keep addresses and phone numbers private",
      "Report inappropriate content"
    ],
    donts: [
      "Share passwords",
      "Post personal details publicly",
      "Share others' private info",
      "Tag people without permission"
    ]
  },
  {
    id: "avoid-cyberbullying",
    title: "STOP CYBERBULLYING",
    description: "Stand up for others and create a positive online space",
    icon: AlertTriangle,
    color: "bg-red-500",
    dos: [
      "Support victims of bullying",
      "Report bullying when you see it",
      "Block or mute bullies",
      "Tell a trusted adult"
    ],
    donts: [
      "Join in on bullying",
      "Share embarrassing content",
      "Ignore bullying happening to others",
      "Retaliate with more bullying"
    ]
  }
];

const scenarios = [
  {
    id: 1,
    situation: "Your friend posts an embarrassing photo of you without asking. What do you do?",
    options: [
      { text: "Post an embarrassing photo of them back", correct: false, feedback: "This creates more problems and escalates the situation!" },
      { text: "Ask them politely to take it down", correct: true, feedback: "Perfect! Direct, respectful communication is always best." },
      { text: "Ignore it and hope it goes away", correct: false, feedback: "Your feelings matter! It's okay to speak up for yourself." },
      { text: "Report them immediately", correct: false, feedback: "Try talking to them first - they might not realize it bothered you." }
    ]
  },
  {
    id: 2,
    situation: "Someone in a group chat is making racist jokes. What should you do?",
    options: [
      { text: "Leave the group chat quietly", correct: false, feedback: "While leaving is okay, speaking up helps create change." },
      { text: "Laugh along to fit in", correct: false, feedback: "Never compromise your values to fit in - that's not worth it." },
      { text: "Tell them it's not okay and ask them to stop", correct: true, feedback: "Yes! Standing up for what's right takes courage but makes a difference." },
      { text: "Share the screenshots publicly to shame them", correct: false, feedback: "Public shaming isn't the right approach - try direct communication first." }
    ]
  }
];

export default function NetiquettePage() {
  const [selectedRule, setSelectedRule] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 4;
  const TOPIC_ID = "netiquette";

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

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
    setShowFeedback(true);
  };

  const nextScenario = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  const nextContentStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevContentStep = () => {
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
            <div className="w-20 h-20 bg-pink-500 brutalist-border brutalist-shadow flex items-center justify-center transform rotate-3">
              <Users className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-black mb-4 transform -rotate-1">
            DIGITAL
            <span className="block text-pink-500 transform rotate-2">MANNERS!</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-bold text-gray-800 max-w-4xl mx-auto">
            Learn how to be respectful, kind, and safe in online communities! 🤝
          </p>

          {completed && (
            <div className="mt-6 inline-block bg-lime-500 text-black px-6 py-3 brutalist-border brutalist-shadow font-black transform rotate-1">
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
            <span>STEP {currentStep + 1} / {totalSteps}</span>
          </div>
          <div className="w-full bg-gray-200 brutalist-border h-8">
            <div
              className="bg-pink-500 h-full transition-all duration-300 ease-in-out brutalist-border border-r-4"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Step-by-step content */}
        {currentStep === 0 && (
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-8 transform rotate-1">
              THE GOLDEN RULES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {netiquetteRules.map((rule, index) => {
                const rotation = index % 2 === 0 ? 'rotate-1' : '-rotate-1';
                
                return (
                  <div key={rule.id} 
                       className={`bg-white brutalist-border brutalist-shadow p-6 transform ${rotation} hover:scale-105 transition-all cursor-pointer`}
                       onClick={() => setSelectedRule(rule)}>
                    <div className={`inline-block p-4 ${rule.color} brutalist-border brutalist-shadow-small mb-4`}>
                      <rule.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-black mb-3 text-black">
                      {rule.title}
                    </h3>
                    
                    <p className="font-bold text-gray-700 mb-4">
                      {rule.description}
                    </p>
                    
                    <div className="flex items-center gap-2 font-black text-pink-500">
                      SEE EXAMPLES
                      <Users className="w-4 h-4" />
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
              🤔 WHAT WOULD YOU DO?
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white brutalist-border p-6 mb-6">
                <h3 className="text-xl font-black mb-4">
                  Scenario {currentScenario + 1} of {scenarios.length}
                </h3>
                <p className="font-bold text-lg mb-6">
                  {scenarios[currentScenario].situation}
                </p>
                
                <div className="space-y-3">
                  {scenarios[currentScenario].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(option)}
                      disabled={showFeedback}
                      className={`w-full text-left p-4 brutalist-border font-bold transition-all ${
                        showFeedback
                          ? option.correct
                            ? 'bg-green-100 border-green-500'
                            : selectedAnswer === option
                            ? 'bg-red-100 border-red-500'
                            : 'bg-gray-100'
                          : 'bg-white hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {showFeedback && (
                          option.correct ? (
                            <ThumbsUp className="w-5 h-5 text-green-500" />
                          ) : selectedAnswer === option ? (
                            <ThumbsDown className="w-5 h-5 text-red-500" />
                          ) : null
                        )}
                        {option.text}
                      </div>
                    </button>
                  ))}
                </div>
                
                {showFeedback && (
                  <div className="mt-6 p-4 bg-yellow-50 brutalist-border">
                    <p className="font-bold mb-4">
                      <strong>Feedback:</strong> {selectedAnswer.feedback}
                    </p>
                    {currentScenario < scenarios.length - 1 ? (
                      <button
                        onClick={nextScenario}
                        className="bg-blue-500 text-white px-6 py-2 brutalist-border font-black hover:scale-105 transition-transform"
                      >
                        NEXT SCENARIO
                      </button>
                    ) : (
                      <div className="text-center">
                        <p className="font-black text-lg text-green-600 mb-4">
                          🎉 Great job! You've completed all scenarios!
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="bg-lime-500 brutalist-border brutalist-shadow p-8 mb-12 transform rotate-1">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-8">
              💡 REMEMBER
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white brutalist-border p-6 text-center">
                <h3 className="font-black mb-3">BE THE CHANGE</h3>
                <p className="font-bold text-sm">Create the kind of online world you want to live in</p>
              </div>
              <div className="bg-white brutalist-border p-6 text-center">
                <h3 className="font-black mb-3">SPEAK UP</h3>
                <p className="font-bold text-sm">Don't be a bystander - help make the internet safer</p>
              </div>
              <div className="bg-white brutalist-border p-6 text-center">
                <h3 className="font-black mb-3">STAY HUMAN</h3>
                <p className="font-bold text-sm">There's a real person behind every screen</p>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="text-center py-16">
            <h2 className="text-4xl font-black text-center mb-4">YOU'RE A GREAT DIGITAL CITIZEN!</h2>
            <p className="font-bold text-lg text-center max-w-3xl mx-auto mb-8">
              You know how to treat others with kindness and respect online. Keep it up!
            </p>
            {!completed && (
              <button
                onClick={markComplete}
                className="bg-pink-500 text-white px-8 py-4 brutalist-border brutalist-shadow font-black text-xl transform rotate-1 hover:scale-105 transition-all"
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
             onClick={prevContentStep} 
             disabled={currentStep === 0}
             className="bg-white text-black px-6 py-3 brutalist-border brutalist-shadow-small font-black text-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed">
              <div className="flex items-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                PREV
              </div>
           </button>
           
           <button 
            onClick={nextContentStep} 
            disabled={currentStep === totalSteps - 1}
            className="bg-pink-500 text-white px-6 py-3 brutalist-border brutalist-shadow-small font-black text-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed">
             <div className="flex items-center gap-2">
                NEXT
                <ArrowRight className="w-5 h-5" />
              </div>
           </button>
        </div>
      </div>

      {/* Rule Detail Modal */}
      {selectedRule && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white brutalist-border brutalist-shadow max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 ${selectedRule.color} brutalist-border`}>
                    <selectedRule.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-black">{selectedRule.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedRule(null)}
                  className="p-2 hover:bg-gray-100 brutalist-border"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 brutalist-border p-4">
                  <h4 className="font-black text-lg mb-3 text-green-600 flex items-center gap-2">
                    <ThumbsUp className="w-5 h-5" />
                    DO THIS:
                  </h4>
                  <ul className="space-y-2">
                    {selectedRule.dos.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 font-bold">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 brutalist-border p-4">
                  <h4 className="font-black text-lg mb-3 text-red-600 flex items-center gap-2">
                    <ThumbsDown className="w-5 h-5" />
                    DON'T DO THIS:
                  </h4>
                  <ul className="space-y-2">
                    {selectedRule.donts.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 font-bold">
                        <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        {item}
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