import React, { useState } from 'react';

const CONFIG = {
  domainName: "everupward.co.in",
  instagramLink: "https://ig.everupward.co.in", // Redirects to your Instagram
  googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSevk5ve9FjwSndMLAk0AxH8QVnFEYo_PucGqYHLEdTJ-qSg_w/viewform", // Updated Official Google Form Link
  supportEmail: "support@everupward.co.in",
  contactPhone: "+91 98765 43210" // Update with your actual contact number
};

// Private Ivy/Top-tier Career Assessment Data
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Where do you find your focus naturally drifting when left to explore?",
    options: [
      { text: "Architecting logic, exploring algorithms, or analyzing systemic data", category: "tech" },
      { text: "Sculpting visual narratives, creative copywriting, or brand experiences", category: "creative" },
      { text: "Modeling business ventures, portfolio trends, or operational strategies", category: "business" },
      { text: "Evaluating cultural psychology, educational frameworks, or social behavior", category: "humanities" }
    ]
  },
  {
    id: 2,
    question: "What style of environment fosters your greatest intellectual breakthrough?",
    options: [
      { text: "An analytical, data-rich workstation with crisp, functional flow", category: "tech" },
      { text: "A vibrant, multi-disciplinary design studio rich with concept drafts", category: "creative" },
      { text: "A fast-paced executive chamber, pitching high-stakes ideas", category: "business" },
      { text: "A collaborative counsel, active classroom, or psychology roundtable", category: "humanities" }
    ]
  },
  {
    id: 3,
    question: "Which field of academic study sparks your curiosity the most?",
    options: [
      { text: "Computational Logic, Mathematics, or Theoretical Physics", category: "tech" },
      { text: "Comparative Literature, Modern Media, or Visual Fine Arts", category: "creative" },
      { text: "Macroeconomics, Game Theory, or Organizational Behavior", category: "business" },
      { text: "Developmental Psychology, Public Policy, or Linguistics", category: "humanities" }
    ]
  },
  {
    id: 4,
    question: "How do you intuitively establish your value inside a high-achieving team?",
    options: [
      { text: "Providing structural clarity and solving the hardest logic hurdles", category: "tech" },
      { text: "Curating the aesthetic tone, narrative direction, and presentation beauty", category: "creative" },
      { text: "Coordinating timelines, resources, deliverables, and team momentum", category: "business" },
      { text: "Fostering active empathy, resolving internal friction, and aligning voices", category: "humanities" }
    ]
  }
];

const CAREER_RESULTS = {
  tech: {
    title: "Technology & Computational Pioneer",
    description: "You possess a powerful analytical architecture. You excel at deconstructing abstract systemic problems and engineering high-impact, scalable solutions.",
    careers: ["Quantum Computing Architect", "AI Core Researcher", "Fintech Quant Dev", "Distributed Systems Engineer"],
    skills: ["Quantitative Modeling", "Algorithmic Architecture", "Logic Optimization", "Data Integrity"],
    nextStep: "Prioritize strong fundamentals in deep computer science paradigms and high-level applied mathematics. Our mentorship tracks will bridge you with senior research scientists from Stanford and Silicon Valley."
  },
  creative: {
    title: "Creative Director & Brand Strategist",
    description: "You perceive human experience through aesthetics, narrative, and evocative design. You translate complex concepts into stunning physical and digital artifacts.",
    careers: ["Lead UI/UX Designer", "Creative Director", "Aesthetic Brand Strategist", "Spatial Product Curator"],
    skills: ["Visual Communication", "Emotional UX Design", "Narrative Structuring", "Conceptual Articulation"],
    nextStep: "Construct a highly unique, multi-disciplinary portfolio. Our elite creative program connects you with award-winning studio directors and brand consultants."
  },
  business: {
    title: "Global Builder & Venture Strategist",
    description: "You hold a keen instinct for market dynamics, commercial leverage, and scale. Your focus is driven by strategic coordination and long-range organizational vision.",
    careers: ["Corporate Strategy Advisor", "Venture Capital Analyst", "High-Growth Product Lead", "Commercial Founder"],
    skills: ["Strategic Game Theory", "Asset Modeling", "Operational Leadership", "Capital Allocation"],
    nextStep: "Engage with real-world venture case studies, master public pitching, and learn portfolio building. Our private business track connects you with premier startup founders."
  },
  humanities: {
    title: "Humanitarian Strategist & Clinical Expert",
    description: "You are deeply tuned into social systems, behavioral psychology, and the enrichment of human potential. Your superpower is high-fidelity emotional intelligence.",
    careers: ["Neuropsychologist", "Global Policy Advisor", "Human Capital Director", "Educational Curriculum Pioneer"],
    skills: ["Active Insight Delivery", "Behavioral Diagnosis", "Systemic Policy Analysis", "Strategic Mentoring"],
    nextStep: "Immerse yourself in active research journals and real-world counseling frameworks. Our tracks place you under the wing of certified psychotherapists and educational policy leaders."
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // home, quiz, programs, dashboard, enroll
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [calculatedPath, setCalculatedPath] = useState(null);

  // Simple Notification Toast
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 4000);
  };

  const handleQuizAnswer = (category) => {
    const updatedAnswers = [...quizAnswers, category];
    setQuizAnswers(updatedAnswers);

    if (quizStep < QUIZ_QUESTIONS.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      const counts = updatedAnswers.reduce((acc, cat) => {
        acc[cat] = (acc[cat] || 0) + 1;
        return acc;
      }, {});

      let maxCategory = 'tech';
      let maxCount = 0;
      Object.entries(counts).forEach(([cat, count]) => {
        if (count > maxCount) {
          maxCount = count;
          maxCategory = cat;
        }
      });

      setCalculatedPath(CAREER_RESULTS[maxCategory]);
      setQuizFinished(true);
      showToast("Premium evaluation complete. Trajectory unlocked.", "success");
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setQuizFinished(false);
    setCalculatedPath(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#3D524C] font-sans selection:bg-[#B28A46]/20 selection:text-[#1C2D27] overflow-x-hidden antialiased">
      
      {/* Editorial Decorative Background Flourishes */}
      <div className="absolute top-0 right-0 w-[45vw] h-[45vw] bg-gradient-to-bl from-[#E5ECE7]/40 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-[40vh] left-0 w-[35vw] h-[35vw] bg-gradient-to-tr from-[#F0ECE1]/50 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      {/* Elegant Editorial Header */}
      <header className="sticky top-0 z-50 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E5ECE7] transition-all">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-24 flex items-center justify-between">
          
          {/* Logo Brand Frame */}
          <div className="flex items-center space-x-3.5 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="h-11 w-11 rounded-lg bg-[#1C2D27] flex items-center justify-center shadow-lg shadow-[#1C2D27]/10 border border-[#B28A46]/30">
              <svg className="w-5 h-5 text-[#FAF9F5]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-[#1C2D27] uppercase font-mono">
                EVER UPWARD
              </span>
              <span className="block text-[10px] text-[#B28A46] font-semibold tracking-widest uppercase mt-0.5">Academic Advisory</span>
            </div>
          </div>

          {/* Luxury Navigation Links */}
          <nav className="hidden md:flex items-center space-x-2">
            {[
              { id: 'home', label: 'Home Portfolio' },
              { id: 'quiz', label: 'Evaluation Advisor' },
              { id: 'programs', label: 'Cohort Syllabus' },
              { id: 'dashboard', label: 'Active Student Hub' },
              { id: 'enroll', label: 'Enrollment Center' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#1C2D27] text-[#FAF9F5] shadow-md shadow-[#1C2D27]/10'
                    : 'text-[#4F685D] hover:text-[#1C2D27] hover:bg-[#E5ECE7]/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Actions & Brand Instagram */}
          <div className="flex items-center space-x-4">
            <a 
              href={CONFIG.instagramLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-lg bg-white border border-[#E5ECE7] text-[#4F685D] hover:text-[#B28A46] hover:border-[#B28A46]/60 transition-all shadow-sm flex items-center justify-center"
              title="Official Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <button 
              onClick={() => setActiveTab('enroll')}
              className="bg-[#1C2D27] hover:bg-[#15221D] text-[#FAF9F5] font-bold text-sm px-5 py-3 rounded-xl transition-all shadow-lg shadow-[#1C2D27]/20 border border-[#B28A46]/35 active:scale-95"
            >
              Enroll Online
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 py-12">

        {}
        {activeTab === 'home' && (
          <div className="space-y-28">
            
            {/* Elegant Column Hero Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center pt-4">
              <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center space-x-2 bg-[#E5ECE7] border border-[#1C2D27]/10 px-4 py-1.5 rounded-full text-[#1C2D27] text-xs font-semibold uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 bg-[#B28A46] rounded-full"></span>
                  <span>PREMIUM CAREER ADVISORY</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1C2D27] leading-[1.12] tracking-tight">
                  Design your trajectory. <br />
                  <span className="italic font-normal text-[#B28A46]">
                    Ascend with Ever Upward.
                  </span>
                </h1>
                
                <p className="text-[#4F685D] text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                  A elite, bespoke career strategy firm designed exclusively for ambitious high-achievers. Discover your vocational archetype, devise a bulletproof Ivy-grade roadmap, and learn alongside world-class mentors.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                  <button 
                    onClick={() => setActiveTab('quiz')}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-[#1C2D27] hover:bg-[#15221D] text-[#FAF9F5] border border-[#B28A46]/40 shadow-xl shadow-[#1C2D27]/20 transition-all flex items-center justify-center space-x-2 active:scale-95"
                  >
                    <span>Begin Executive Evaluation</span>
                    <svg className="w-5 h-5 text-[#B28A46]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('programs')}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-white border border-[#E5ECE7] text-[#1C2D27] hover:bg-[#E5ECE7]/40 shadow-sm transition-all flex items-center justify-center"
                  >
                    View Cohort Syllabus
                  </button>
                </div>

                {/* Highly Refined Trust Statistics */}
                <div className="grid grid-cols-3 gap-6 pt-10 border-t border-[#E5ECE7] max-w-lg mx-auto lg:mx-0">
                  <div>
                    <p className="text-3xl font-light text-[#1C2D27] font-serif">98%</p>
                    <p className="text-[10px] text-[#4F685D] uppercase tracking-widest mt-1 font-bold">Placement Rate</p>
                  </div>
                  <div>
                    <p className="text-3xl font-light text-[#1C2D27] font-serif">1.5k+</p>
                    <p className="text-[10px] text-[#4F685D] uppercase tracking-widest mt-1 font-bold">Alumni Mentored</p>
                  </div>
                  <div>
                    <p className="text-3xl font-light text-[#1C2D27] font-serif">50+</p>
                    <p className="text-[10px] text-[#4F685D] uppercase tracking-widest mt-1 font-bold">Ivy Executives</p>
                  </div>
                </div>
              </div>

              {/* Sophisticated Simulated Hub Preview Box */}
              <div className="lg:col-span-5 relative">
                <div className="absolute inset-0 bg-[#E5ECE7]/40 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white border border-[#E5ECE7] rounded-3xl p-7 sm:p-9 shadow-[0_30px_70px_-15px_rgba(28,45,39,0.06)] space-y-7">
                  
                  {/* Luxury Layout Header */}
                  <div className="flex items-center justify-between border-b border-[#E5ECE7] pb-5">
                    <div className="flex items-center space-x-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#1C2D27]"></span>
                      <span className="h-2.5 w-2.5 rounded-full bg-[#B28A46]"></span>
                      <span className="h-2.5 w-2.5 rounded-full bg-[#FAF9F5] border border-[#E5ECE7]"></span>
                    </div>
                    <span className="text-[10px] text-[#4F685D] font-bold uppercase tracking-widest font-mono">ADVISORY_PORTAL.OS</span>
                  </div>

                  {/* Feature Box 1 */}
                  <div className="bg-[#FAF9F5] rounded-2xl p-5 border border-[#E5ECE7] flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-11 w-11 bg-[#1C2D27] rounded-xl flex items-center justify-center text-[#FAF9F5] border border-[#B28A46]/20">
                        <svg className="w-5 h-5 text-[#B28A46]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] text-[#4F685D] uppercase tracking-wider font-bold">Psychometric Assessment</p>
                        <p className="text-sm font-semibold text-[#1C2D27] mt-0.5">Evaluation Status Verified</p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-[#E5ECE7] text-[#1C2D27] px-3 py-1 rounded-full font-bold">Tier-1 Class</span>
                  </div>

                  {/* Feature Box 2 */}
                  <div className="bg-[#FAF9F5] rounded-2xl p-5 border border-[#E5ECE7] space-y-3.5">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-[#4F685D] uppercase tracking-wider font-bold">Core Archetype Compatibility</span>
                      <span className="text-xs text-[#B28A46] font-bold uppercase tracking-wider font-mono">Matched</span>
                    </div>
                    <div className="h-1.5 bg-[#E5ECE7] rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-[#1C2D27] rounded-full"></div>
                    </div>
                    <p className="text-xs text-[#1C2D27] font-semibold flex items-center justify-between">
                      <span>Advisory Alignment Score</span>
                      <span className="font-mono text-[#B28A46] font-bold">94% Core Match</span>
                    </p>
                  </div>

                  {/* Feature Box 3 */}
                  <div className="bg-[#FAF9F5] rounded-2xl p-5 border border-[#E5ECE7] flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-11 w-11 bg-[#1C2D27] rounded-xl flex items-center justify-center text-[#FAF9F5] border border-[#B28A46]/20">
                        <svg className="w-5 h-5 text-[#B28A46]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] text-[#4F685D] uppercase tracking-wider font-bold">Direct Counselor Link</p>
                        <p className="text-sm font-semibold text-[#1C2D27] mt-0.5">Next Session: Sunday, 4:00 PM</p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-[#1C2D27] text-[#FAF9F5] px-3 py-1.5 rounded-lg font-bold">Join Portal</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Narrative Pitch Section */}
            <div className="bg-white border border-[#E5ECE7] rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-[0_20px_50px_rgba(28,45,39,0.03)] space-y-6">
              <span className="text-[11px] font-mono font-bold text-[#B28A46] uppercase tracking-widest block">The Philosophy</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1C2D27]">
                We don't match you to standard careers. <br />
                <span className="italic font-normal">We construct lifelong trajectories.</span>
              </h2>
              <p className="text-[#4F685D] leading-relaxed max-w-2xl mx-auto font-light">
                At Ever Upward, we combine modern analytical tools with executive-level counseling to craft strategic educational roadmaps. We guide high-school and undergraduate aspirants toward high-impact trajectories in technology, visual arts, systemic business, and modern clinical sciences.
              </p>
            </div>

            {/* Structured Methodology Steps */}
            <div className="space-y-16">
              <div className="text-center max-w-2xl mx-auto space-y-4">
                <span className="text-[11px] font-mono font-bold text-[#B28A46] uppercase tracking-widest block">Our Methodology</span>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#1C2D27]">The Three-Pillar Trajectory Strategy</h2>
                <p className="text-[#4F685D] font-light">An elegant, phased academic curriculum designed to align personal genius with global distinction.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: "I",
                    title: "Bespoke Archetype Parsing",
                    desc: "Analyze intellectual pathways using deep motivational evaluation techniques. We uncover the exact intersections where organic genius aligns with professional market value."
                  },
                  {
                    step: "II",
                    title: "Ivy-Chamber Mentorship",
                    desc: "Skip corporate handbooks. Connect directly with elite researchers, senior software leads, medical directors, and commercial founders on live, private consults."
                  },
                  {
                    step: "III",
                    title: "The Portfolio Playbook",
                    desc: "Receive an customized, beautifully curated strategy manual tracking precise research projects, college applications, CV edits, and resume leverage milestones."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="relative bg-white p-8 rounded-3xl border border-[#E5ECE7] hover:border-[#B28A46]/60 hover:shadow-lg transition-all group">
                    <span className="absolute top-6 right-8 text-5xl font-serif italic text-[#B28A46]/10 group-hover:text-[#B28A46]/20 transition-all">
                      {item.step}
                    </span>
                    <h3 className="text-xl font-serif text-[#1C2D27] mb-3 mt-6">{item.title}</h3>
                    <p className="text-[#4F685D] text-sm leading-relaxed font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Action CTA Panel */}
            <div className="relative rounded-3xl overflow-hidden bg-[#1C2D27] border border-[#B28A46]/30 p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-xl shadow-[#1C2D27]/10">
              <div className="space-y-4 text-center md:text-left max-w-2xl">
                <span className="text-[10px] font-mono text-[#B28A46] uppercase tracking-widest font-bold">Secure Your Seat</span>
                <h3 className="text-3xl font-serif text-[#FAF9F5] leading-snug">Prepare to transcend academic norms.</h3>
                <p className="text-[#E5ECE7]/80 text-sm font-light leading-relaxed">
                  Enroll in our next strategic cohort today. Get registered securely into our priority Sheets queue, and immediately unlock your private psychometric assessment pass.
                </p>
              </div>
              <div className="flex-shrink-0 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <button 
                  onClick={() => setActiveTab('enroll')}
                  className="px-8 py-4 bg-[#B28A46] hover:bg-[#9B7536] text-[#FAF9F5] font-bold rounded-xl shadow-lg shadow-[#B28A46]/20 border border-[#FAF9F5]/25 transition-all text-center w-full active:scale-95"
                >
                  Enroll Online Now
                </button>
                <button 
                  onClick={() => setActiveTab('quiz')}
                  className="px-8 py-4 bg-[#FAF9F5] hover:bg-white text-[#1C2D27] font-bold rounded-xl border border-[#B28A46]/35 transition-all text-center w-full active:scale-95"
                >
                  Take Free Archetype Assessment
                </button>
              </div>
            </div>

          </div>
        )}

        {}
        {activeTab === 'quiz' && (
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[11px] font-mono font-bold text-[#B28A46] uppercase tracking-widest block">Interactive Diagnostic</span>
              <h1 className="text-3xl sm:text-4xl font-serif text-[#1C2D27]">Discover Your Strategic Archetype</h1>
              <p className="text-[#4F685D] text-sm max-w-lg mx-auto font-light">
                Participate in our core evaluation process to identify your primary behavioral trajectory. Receive automatic syllabus mappings upon completion.
              </p>
            </div>

            <div className="bg-white border border-[#E5ECE7] rounded-3xl p-6 sm:p-12 shadow-[0_20px_50px_rgba(28,45,39,0.05)] relative overflow-hidden">
              {!quizFinished ? (
                <div className="space-y-10">
                  {/* Premium Progress Bar */}
                  <div>
                    <div className="flex justify-between text-[10px] text-[#4F685D] font-bold tracking-widest font-mono mb-3">
                      <span>STEP {quizStep + 1} OF {QUIZ_QUESTIONS.length}</span>
                      <span>{Math.round(((quizStep + 1) / QUIZ_QUESTIONS.length) * 100)}% ANALYSIS COMPLETE</span>
                    </div>
                    <div className="h-1.5 bg-[#FAF9F5] rounded-full overflow-hidden border border-[#E5ECE7]">
                      <div 
                        className="h-full bg-[#1C2D27] transition-all duration-300" 
                        style={{ width: `${((quizStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Question Title */}
                  <div className="space-y-2">
                    <h2 className="text-xl sm:text-2xl font-serif text-[#1C2D27] leading-snug">
                      {QUIZ_QUESTIONS[quizStep].question}
                    </h2>
                  </div>

                  {/* Elegant Assessment Options */}
                  <div className="grid grid-cols-1 gap-4">
                    {QUIZ_QUESTIONS[quizStep].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuizAnswer(option.category)}
                        className="w-full text-left p-5 rounded-2xl bg-[#FAF9F5] hover:bg-white border border-[#E5ECE7] hover:border-[#B28A46]/60 text-[#4F685D] hover:text-[#1C2D27] hover:shadow-md transition-all duration-150 flex items-center space-x-4 group"
                      >
                        <span className="flex-shrink-0 h-8 w-8 rounded-lg bg-white border border-[#E5ECE7] flex items-center justify-center text-xs font-mono font-bold text-[#4F685D] group-hover:bg-[#1C2D27] group-hover:border-[#B28A46]/30 group-hover:text-[#FAF9F5] transition-all shadow-sm">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-sm sm:text-base font-medium">{option.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Sophisticated Results Display */
                <div className="space-y-8 animate-fadeIn">
                  <div className="text-center py-4">
                    <div className="inline-flex p-4 bg-[#E5ECE7] rounded-full text-[#1C2D27] border border-[#B28A46]/30 mb-4">
                      <svg className="w-9 h-9 text-[#B28A46]" fill="none" stroke="currentColor" strokeWidth="2.1" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                      </svg>
                    </div>
                    <span className="block text-[10px] font-mono text-[#B28A46] font-bold uppercase tracking-widest">Matched Pathway Archtype</span>
                    <h2 className="text-2xl sm:text-3xl font-serif text-[#1C2D27] mt-1.5">{calculatedPath?.title}</h2>
                  </div>

                  <div className="bg-[#FAF9F5] p-7 rounded-2xl border border-[#E5ECE7] space-y-5">
                    <p className="text-[#4F685D] text-sm sm:text-base leading-relaxed font-light">{calculatedPath?.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="text-[10px] font-mono font-bold text-[#1C2D27] uppercase tracking-widest">Elite Target Positions:</h4>
                      <div className="flex flex-wrap gap-2">
                        {calculatedPath?.careers.map((career, i) => (
                          <span key={i} className="text-xs bg-white border border-[#E5ECE7] text-[#1C2D27] px-3.5 py-1.5 rounded-lg font-semibold shadow-sm">
                            {career}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-[10px] font-mono font-bold text-[#1C2D27] uppercase tracking-widest">Core Leverage Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {calculatedPath?.skills.map((skill, i) => (
                          <span key={i} className="text-xs bg-[#E5ECE7] text-[#1C2D27] px-3.5 py-1.5 rounded-lg font-mono font-semibold">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 bg-[#E5ECE7]/30 border border-[#E5ECE7] rounded-2xl space-y-3">
                    <h3 className="text-sm font-bold text-[#1C2D27] uppercase font-mono tracking-wider">Advisory Action Steps:</h3>
                    <p className="text-sm text-[#4F685D] leading-relaxed font-light">{calculatedPath?.nextStep}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-[#E5ECE7]">
                    <button
                      onClick={() => setActiveTab('enroll')}
                      className="flex-1 px-6 py-4 bg-[#1C2D27] hover:bg-[#15221D] text-[#FAF9F5] border border-[#B28A46]/30 font-bold rounded-xl shadow-lg transition-all text-center active:scale-95"
                    >
                      Lock In Priority Enrollment Intake
                    </button>
                    <button
                      onClick={resetQuiz}
                      className="px-6 py-4 bg-white hover:bg-[#FAF9F5] border border-[#E5ECE7] text-[#1C2D27] font-bold rounded-xl transition-all text-center"
                    >
                      Reset Assessment
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {}
        {activeTab === 'programs' && (
          <div className="space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-[11px] font-mono font-bold text-[#B28A46] uppercase tracking-widest block">The Curriculum</span>
              <h1 className="text-3xl sm:text-4xl font-serif text-[#1C2D27]">Advisory Tracks & Premium Packages</h1>
              <p className="text-[#4F685D] text-sm font-light">
                Structured multi-month cohorts guiding you from foundational diagnostic evaluation up to lifelong positioning strategy.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Private Diagnostic Strategy",
                  audience: "Ideal for High Schoolers (Class 9-11)",
                  price: "₹4,999",
                  term: "Bespoke Intake + Consultation",
                  features: [
                    "Full Trajectory Alignment Mapping",
                    "Strengths & Interest Diagnostics",
                    "Detailed Roadmap Execution Plan",
                    "1-on-1 Strategic Counselor Video Consult",
                    "Direct Parent-Student Roadmap Align"
                  ],
                  highlight: false,
                  cta: "Book Diagnostic Session"
                },
                {
                  title: "Spruce Mentorship Cohort",
                  audience: "Ideal for College Transitioners & Class 12+",
                  price: "₹14,999",
                  term: "3-Month Intensive Boardroom",
                  features: [
                    "Everything inside Private Diagnostic",
                    "Bi-weekly Private Industry Executive Syncs",
                    "CV/Resume Narrative Reconstruction",
                    "Global College Application Target Mapping",
                    "Access to Private Premium Study Lounge",
                    "Introductory Project Portfolio Review"
                  ],
                  highlight: true,
                  cta: "Apply to Elite Cohort"
                },
                {
                  title: "Elite Trajectory Guarantee",
                  audience: "For Strategic Career & Portfolio Founders",
                  price: "₹29,999",
                  term: "6-Month Premium Pipeline",
                  features: [
                    "Everything in Spruce Mentorship",
                    "On-Demand Private Executive Advisor Message Access",
                    "Intense Mock Application Drills & Interview Prep",
                    "Personal Portfolio & Github Architecture Audits",
                    "Tailored Scholarship & Fellowship Strategy",
                    "Bespoke Summer Internship Coordination Support"
                  ],
                  highlight: false,
                  cta: "Apply For Elite Strategy"
                }
              ].map((pkg, idx) => (
                <div 
                  key={idx} 
                  className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all ${
                    pkg.highlight 
                      ? 'bg-white border-2 border-[#B28A46] shadow-[0_30px_70px_-15px_rgba(28,45,39,0.08)] scale-105 z-10' 
                      : 'bg-white border border-[#E5ECE7] shadow-sm'
                  }`}
                >
                  {pkg.highlight && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#B28A46] text-[#FAF9F5] font-mono text-[9px] font-bold tracking-widest px-4 py-1.5 rounded-full uppercase border border-[#FAF9F5]/30">
                      RECOMMENDED COHORT
                    </span>
                  )}
                  
                  <div className="space-y-7">
                    <div>
                      <span className="text-[10px] text-[#B28A46] font-mono font-bold tracking-wider block mb-2 uppercase">{pkg.audience}</span>
                      <h3 className="text-2xl font-serif text-[#1C2D27]">{pkg.title}</h3>
                    </div>

                    <div className="flex items-baseline space-x-1 border-b border-[#E5ECE7] pb-6">
                      <span className="text-4xl font-light text-[#1C2D27] font-serif">{pkg.price}</span>
                      <span className="text-xs text-[#4F685D] font-mono">/ {pkg.term}</span>
                    </div>

                    <ul className="space-y-4">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start space-x-3 text-sm text-[#4F685D] font-light">
                          <svg className="w-5 h-5 text-[#B28A46] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={() => {
                      setActiveTab('enroll');
                    }}
                    className={`w-full mt-10 py-3.5 rounded-xl font-bold transition-all text-center text-sm active:scale-95 ${
                      pkg.highlight 
                        ? 'bg-[#1C2D27] hover:bg-[#15221D] text-[#FAF9F5] shadow-lg shadow-[#1C2D27]/25 border border-[#B28A46]/30' 
                        : 'bg-[#FAF9F5] hover:bg-[#E5ECE7]/40 border border-[#E5ECE7] text-[#1C2D27]'
                    }`}
                  >
                    {pkg.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-[11px] font-mono font-bold text-[#B28A46] uppercase tracking-widest block">VIP Active Portal Preview</span>
              <h1 className="text-3xl sm:text-4xl font-serif text-[#1C2D27]">The Active Student Portal</h1>
              <p className="text-[#4F685D] text-sm font-light">
                An executive-tier digital dashboard utilized by our active students to complete deliverables, download private materials, and message counselors.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Luxury Sidebar */}
              <div className="lg:col-span-3 space-y-4">
                <div className="bg-white border border-[#E5ECE7] rounded-3xl p-5 space-y-3.5 shadow-sm">
                  <div className="flex items-center space-x-3.5 pb-4 border-b border-[#E5ECE7] mb-2">
                    <div className="h-10 w-10 rounded-xl bg-[#1C2D27] border border-[#B28A46]/30 flex items-center justify-center text-[#FAF9F5] text-sm font-bold font-mono">
                      AS
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1C2D27]">Amit Sharma</p>
                      <p className="text-[10px] text-[#B28A46] uppercase font-mono tracking-wider font-bold">Premium Cohort</p>
                    </div>
                  </div>
                  {[
                    { label: 'Primary Trajectory Roadmap', active: true },
                    { label: 'Ivy Advisor Consultation Inbox', active: false },
                    { label: 'Strategic Playbook Library', active: false },
                    { label: 'Project Portfolio Submissions', active: false }
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      className={`w-full text-left px-3.5 py-3 rounded-xl text-xs font-semibold transition-all ${
                        item.active 
                          ? 'bg-[#1C2D27] text-[#FAF9F5] border border-[#B28A46]/30' 
                          : 'text-[#4F685D] hover:text-[#1C2D27] hover:bg-[#FAF9F5]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                
                {/* Masterclass Notice */}
                <div className="bg-white border border-[#E5ECE7] rounded-3xl p-5 text-center space-y-4 shadow-sm">
                  <p className="text-[10px] text-[#B28A46] font-mono uppercase tracking-widest font-bold">Priority Live Consult</p>
                  <p className="text-sm font-serif text-[#1C2D27] leading-snug">Structuring Tier-1 Global Applications in 2026</p>
                  <p className="text-[11px] text-[#4F685D] font-light">June 18, 5:00 PM IST</p>
                  <button className="w-full py-2.5 bg-[#FAF9F5] hover:bg-[#E5ECE7]/40 text-[#1C2D27] border border-[#E5ECE7] rounded-xl text-xs font-bold transition-all">
                    Secure Masterclass Pass
                  </button>
                </div>
              </div>

              {/* Main Client Hub Console */}
              <div className="lg:col-span-9 bg-white border border-[#E5ECE7] rounded-3xl p-6 sm:p-9 space-y-8 shadow-sm">
                
                {/* Active Hub Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#E5ECE7] pb-6">
                  <div>
                    <h2 className="text-xl font-serif text-[#1C2D27]">Matched Track: Technology & Computational Pioneer</h2>
                    <p className="text-xs text-[#4F685D] mt-1 font-light">Lead Executive Counselor: Dr. Rajesh K. (Ex-Google Infrastructure Lead)</p>
                  </div>
                  <span className="bg-[#E5ECE7] text-[#1C2D27] border border-[#1C2D27]/10 text-xs font-mono font-bold px-3.5 py-1.5 rounded-full">
                    Syllabus Phase I of IV
                  </span>
                </div>

                {/* Milestone Deliverable List */}
                <div className="space-y-4">
                  <h3 className="text-[10px] font-mono font-bold text-[#B28A46] uppercase tracking-widest">Priority Milestones Checklist</h3>
                  
                  <div className="space-y-3">
                    {[
                      { title: "Complete bespoke psychometric trajectory analysis", done: true, tag: "Diagnostic" },
                      { title: "Attend private 1-on-1 strategic portfolio framing consultation", done: true, tag: "Executive Sync" },
                      { title: "Submit project abstract draft highlighting quantitative systems engineering", done: false, tag: "Portfolio Prep" },
                      { title: "Finalize shortlists for 2026/27 global tech-department admissions", done: false, tag: "Ivy Track" }
                    ].map((milestone, idx) => (
                      <div 
                        key={idx}
                        className={`p-4 rounded-2xl border flex items-center justify-between gap-4 transition-all ${
                          milestone.done 
                            ? 'bg-[#FAF9F5]/50 border-[#E5ECE7] opacity-65' 
                            : 'bg-white border-[#E5ECE7] hover:border-[#B28A46]/60 shadow-sm'
                        }`}
                      >
                        <div className="flex items-start space-x-3.5">
                          <div className={`mt-0.5 h-5 w-5 rounded border flex items-center justify-center transition-all ${
                            milestone.done 
                              ? 'bg-[#1C2D27] border-[#1C2D27] text-[#FAF9F5]' 
                              : 'border-[#E5ECE7] hover:border-[#1C2D27] cursor-pointer'
                          }`}>
                            {milestone.done && (
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <p className={`text-sm font-semibold ${milestone.done ? 'text-[#4F685D] line-through' : 'text-[#1C2D27]'}`}>
                              {milestone.title}
                            </p>
                          </div>
                        </div>
                        <span className="text-[9px] font-mono font-bold bg-[#FAF9F5] border border-[#E5ECE7] text-[#4F685D] px-2.5 py-1 rounded">
                          {milestone.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Editorial Resource Library Download Center */}
                <div className="space-y-4">
                  <h3 className="text-[10px] font-mono font-bold text-[#B28A46] uppercase tracking-widest">Premium Playbooks In Your Advisor Library</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 bg-[#FAF9F5] rounded-2xl border border-[#E5ECE7] hover:border-[#B28A46]/60 transition-all space-y-3.5 shadow-sm">
                      <span className="text-[9px] font-mono text-[#B28A46] uppercase font-bold tracking-widest">READY TO DOWNLOAD</span>
                      <h4 className="text-base font-serif text-[#1C2D27]">The Strategic Blueprint for Global Computer Science Placements</h4>
                      <p className="text-xs text-[#4F685D] font-light">Deep breakdown of high-impact portfolio layouts, personal statements, and computational project structures.</p>
                      <button className="text-xs text-[#1C2D27] hover:text-[#B28A46] font-bold flex items-center space-x-1.5 font-mono">
                        <span>DOWNLOAD PLAYBOOK PDF</span>
                        <span>→</span>
                      </button>
                    </div>
                    <div className="p-5 bg-[#FAF9F5] rounded-2xl border border-[#E5ECE7] hover:border-[#B28A46]/60 transition-all space-y-3.5 shadow-sm">
                      <span className="text-[9px] font-mono text-[#B28A46] uppercase font-bold tracking-widest">READY TO DOWNLOAD</span>
                      <h4 className="text-base font-serif text-[#1C2D27]">CV Blueprint & Resume Narrative Restructuring Manual</h4>
                      <p className="text-xs text-slate-500 font-light">Actionable templates engineered to highlight advanced leadership attributes, project frameworks, and team impact metrics.</p>
                      <button className="text-xs text-[#1C2D27] hover:text-[#B28A46] font-bold flex items-center space-x-1.5 font-mono">
                        <span>DOWNLOAD PLAYBOOK PDF</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {}
        {activeTab === 'enroll' && (
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-[11px] font-mono font-bold text-[#B28A46] uppercase tracking-widest block">Intake Enrollment Desk</span>
              <h1 className="text-3xl sm:text-4xl font-serif text-[#1C2D27]">Secure Priority Registration</h1>
              <p className="text-[#4F685D] text-sm max-w-xl mx-auto font-light">
                Fill out the secure registration details below. All responses write instantly to our verified Google Sheets advisory queue.
              </p>
            </div>

            {/* Split layout for form & info */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Premium Instructions */}
              <div className="lg:col-span-4 bg-white border border-[#E5ECE7] rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-8 shadow-sm">
                <div className="space-y-6">
                  <h3 className="text-lg font-serif text-[#1C2D27] flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-[#B28A46] animate-pulse"></span>
                    <span>Admissions Protocol</span>
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      { step: "1", title: "Complete Google Form Profile", desc: "Share your target trajectory, academic history, and background details in full." },
                      { step: "2", title: "Verify Prioritized Sheets Placement", desc: "Our administrative desk automatically logs and prioritizes your counselor queue." },
                      { step: "3", title: "Confirm Trajectory Sync", desc: "Our team will immediately contact you to schedule your private 1-on-1 counselor onboarding session." }
                    ].map((step, idx) => (
                      <div key={idx} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-[#E5ECE7] border border-[#1C2D27]/10 text-[#1C2D27] font-mono text-xs font-bold flex items-center justify-center">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-[#1C2D27]">{step.title}</h4>
                          <p className="text-xs text-[#4F685D] mt-1 leading-relaxed font-light">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Secure Launch Portal */}
                <div className="p-4 bg-[#FAF9F5] border border-[#E5ECE7] rounded-2xl text-center space-y-4">
                  <p className="text-xs text-[#4F685D] leading-relaxed font-light">
                    If the embedded form is slow on your mobile device, launch the secure form natively:
                  </p>
                  <a 
                    href={CONFIG.googleFormLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center space-x-2 px-4 py-3 bg-[#1C2D27] hover:bg-[#15221D] text-[#FAF9F5] font-bold text-xs rounded-xl shadow-lg shadow-[#1C2D27]/20 border border-[#B28A46]/30 transition-all active:scale-95"
                  >
                    <span>Launch Google Form Portal</span>
                    <svg className="w-4 h-4 text-[#B28A46]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Column: Embedded Iframe styled inside a Premium Browser Mock */}
              <div className="lg:col-span-8 bg-white border border-[#E5ECE7] rounded-3xl overflow-hidden flex flex-col shadow-xl">
                
                {/* Simulated Portal Top bar */}
                <div className="bg-[#FAF9F5] px-6 py-4 border-b border-[#E5ECE7] flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="h-3 w-3 rounded-full bg-rose-500/25"></span>
                    <span className="h-3 w-3 rounded-full bg-amber-500/25"></span>
                    <span className="h-3 w-3 rounded-full bg-emerald-500/25"></span>
                  </div>
                  <span className="text-xs font-mono text-[#4F685D]">forms.gle/jjBwPDYDEVQ2Aku79</span>
                  <div className="w-8"></div>
                </div>

                {/* Google Form Embed Frame - Carefully sized for high-fidelity rendering */}
                <div className="flex-1 bg-[#FAF9F5] relative flex flex-col items-center justify-center">
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSevk5ve9FjwSndMLAk0AxH8QVnFEYo_PucGqYHLEdTJ-qSg_w/viewform?embedded=true"
                    width="100%" 
                    height="1000" 
                    className="w-full h-[1000px] border-none"
                    title="Ever Upward Google Form Intake"
                  >
                    Loading…
                  </iframe>
                  
                  {/* Overlay Helper */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md border border-[#E5ECE7] p-4 rounded-2xl shadow-lg flex items-center space-x-3 text-xs text-[#4F685D]">
                    <span>Need to access full-screen view?</span>
                    <a 
                      href={CONFIG.googleFormLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#1C2D27] hover:text-[#B28A46] font-bold underline"
                    >
                      Launch Now →
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </main>

      {/* Trust Badges Bar */}
      <section className="border-y border-[#E5ECE7] bg-white py-12 my-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <p className="text-center text-[10px] font-mono text-[#B28A46] uppercase tracking-widest mb-8 font-bold">Our Advisors And Placement Alumni Hail From Premium Global Institutions</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="text-[#1C2D27] font-serif font-light text-lg tracking-wider">IIT KHARAGPUR</span>
            <span className="text-[#1C2D27] font-serif font-light text-lg tracking-wider">BITS PILANI</span>
            <span className="text-[#1C2D27] font-serif font-light text-lg tracking-wider">STANFORD MENTORS</span>
            <span className="text-[#1C2D27] font-serif font-light text-lg tracking-wider">ISB COHORTS</span>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 py-16 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-serif text-[#1C2D27]">Frequently Asked Questions</h2>
          <p className="text-[#4F685D] text-sm font-light">Everything you need to know about starting your journey with Ever Upward.</p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Who is this program designed for?",
              a: "Our programs support students from Class 9 upwards, including college students and early-career switchers looking for strategic direction in high-growth fields."
            },
            {
              q: "How are mentors selected?",
              a: "Every mentor is thoroughly vetted and currently works or has held major leadership roles in premium companies (Google, McKinsey, Goldman Sachs) or top worldwide institutions."
            },
            {
              q: "Can I connect my Google Forms link?",
              a: "Absolutely! The codebase includes a customizable configuration object at the very top. When you receive your custom Google Forms link, paste it in, and the application will gracefully align to redirect or link students directly to your Google Sheet integration."
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white border border-[#E5ECE7] rounded-3xl p-6 sm:p-8 space-y-2 shadow-sm">
              <h4 className="text-base font-serif font-semibold text-[#1C2D27]">{faq.q}</h4>
              <p className="text-sm text-[#4F685D] leading-relaxed font-light">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {}
      {/* Contact & Footer */}
      <footer className="border-t border-[#E5ECE7] bg-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-lg bg-[#1C2D27] flex items-center justify-center shadow border border-[#B28A46]/20">
                <svg className="w-5 h-5 text-[#FAF9F5]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-[#1C2D27] uppercase font-mono">EVER UPWARD</span>
            </div>
            <p className="text-xs text-[#4F685D] leading-relaxed font-light">
              Designing premium education pathways and early professional opportunities. We help students achieve career clarity and excel in college admissions.
            </p>
            <div className="flex space-x-3 pt-2">
              <a 
                href={CONFIG.instagramLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 bg-[#FAF9F5] border border-[#E5ECE7] rounded-xl text-[#4F685D] hover:text-[#B28A46] hover:border-[#B28A46]/30 transition-all text-xs flex items-center space-x-2 shadow-sm font-semibold"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <span className="font-mono">@everupward.co.in</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold text-[#1C2D27] uppercase tracking-widest">Connect With Us</h4>
            <ul className="space-y-3 text-xs text-[#4F685D]">
              <li className="flex items-center space-x-2">
                <span className="font-bold text-[#1C2D27]">Email:</span>
                <a href={`mailto:${CONFIG.supportEmail}`} className="hover:text-[#B28A46] underline">{CONFIG.supportEmail}</a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="font-bold text-[#1C2D27]">WhatsApp / Call:</span>
                <a href={`tel:${CONFIG.contactPhone}`} className="hover:text-[#B28A46]">{CONFIG.contactPhone}</a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="font-bold text-[#1C2D27]">Domain:</span>
                <span className="font-mono text-[#4F685D]">{CONFIG.domainName}</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold text-[#1C2D27] uppercase tracking-widest">Quick Actions</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button onClick={() => setActiveTab('quiz')} className="text-left text-[#4F685D] hover:text-[#1C2D27] transition-all py-1">→ Advisor Quiz</button>
              <button onClick={() => setActiveTab('programs')} className="text-left text-[#4F685D] hover:text-[#1C2D27] transition-all py-1">→ Cohorts</button>
              <button onClick={() => setActiveTab('enroll')} className="text-left text-[#4F685D] hover:text-[#1C2D27] transition-all py-1">→ Enroll Online</button>
              <button onClick={() => setActiveTab('dashboard')} className="text-left text-[#4F685D] hover:text-[#1C2D27] transition-all py-1">→ Student Hub</button>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 mt-12 pt-8 border-t border-[#E5ECE7] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#4F685D]">
          <p>© 2026 Ever Upward (everupward.co.in). All rights reserved.</p>
          <div className="flex space-x-4">
            <span className="cursor-pointer hover:text-[#1C2D27]">Privacy Policy</span>
            <span>•</span>
            <span className="cursor-pointer hover:text-[#1C2D27]">Terms of Service</span>
          </div>
        </div>
      </footer>

      {/* Interactive Global Toast Notification */}
      {toast.show && (
        <div className={`fixed bottom-5 right-5 z-50 p-4 rounded-xl shadow-2xl border flex items-center space-x-3 animate-slideIn ${
          toast.type === 'success' 
            ? 'bg-white border-[#1C2D27] text-[#1C2D27] shadow-[#1C2D27]/5' 
            : 'bg-white border-rose-500/30 text-rose-600 shadow-rose-500/5'
        }`}>
          <div className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold ${
            toast.type === 'success' ? 'bg-[#E5ECE7]' : 'bg-rose-500/10'
          }`}>
            {toast.type === 'success' ? '✓' : '!'}
          </div>
          <span className="text-xs font-semibold text-[#1C2D27]">{toast.message}</span>
        </div>
      )}

    </div>
  );
}