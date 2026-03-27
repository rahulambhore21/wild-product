import React from 'react';
import { Leaf, ShieldCheck, Lock, PhoneCall, Zap, HeartPulse, MessageCircle } from 'lucide-react';
import heroImg from '../assets/267aadc9670f30ef0f1dd141d69d99164c2da01e.png';

const App = () => {
    return (
        <div className="bg-[#050505] min-h-screen text-gray-300 font-sans selection:bg-amber-600/30 selection:text-amber-200 overflow-x-hidden">
            {/* Subtle Noise Texture for Premium Feel */}
            <div 
                className="fixed inset-0 opacity-[0.03] pointer-events-none z-50 mix-blend-screen" 
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
            />

            {/* Desktop ambient glows (hidden on mobile to keep it clean) */}
            <div className="hidden md:block fixed inset-0 pointer-events-none z-0">
                 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-700/5 blur-[120px] rounded-full mix-blend-screen" />
                 <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-orange-700/5 blur-[100px] rounded-full mix-blend-screen" />
            </div>

            {/* Main Layout Constraint: Mobile is max-w-lg, Desktop expands to max-w-6xl */}
            <main className="relative z-10 mx-auto w-full max-w-lg md:max-w-6xl pb-24 md:pb-12 flex flex-col bg-[#050505] md:bg-transparent">
                <Hero />
                <ProblemSolution />
                <Benefits />
                <FinalCTA />
            </main>

            <StickyMobileBar />
        </div>
    );
};

const Hero = () => (
    <section className="px-5 pt-6 md:pt-20 pb-10 md:pb-16 flex flex-col md:flex-row items-center text-center md:text-left relative md:gap-12 lg:gap-20">
        
        {/* Product Image: First on Mobile, Right on Desktop */}
        <div className="order-1 md:order-2 relative w-full max-w-[280px] md:max-w-[420px] lg:max-w-[500px] mx-auto mb-6 md:mb-0 flex-1">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-amber-600/10 blur-2xl rounded-full pointer-events-none" />
            <img 
                src={heroImg} 
                alt="Wild Capsule and Power Oil" 
                className="relative z-10 w-full h-auto drop-shadow-2xl object-contain md:-translate-x-4 lg:-translate-x-8"
            />
        </div>

        {/* Text Content: Second on Mobile, Left on Desktop */}
        <div className="order-2 md:order-1 flex flex-col items-center md:items-start flex-1 w-full">
            <div className="hidden md:inline-block px-3 py-1 mb-6 rounded-sm bg-amber-950/30 border border-amber-900/50 text-amber-500 text-xs font-medium tracking-wider uppercase">
                Premium Ayurvedic Wellness
            </div>

            <h1 className="text-[28px] sm:text-[34px] md:text-[46px] lg:text-[56px] font-bold text-white mb-3 md:mb-6 leading-[1.2]" style={{ fontFamily: "'Cinzel', serif" }}>
                Relationship me dooriyan?<br className="hidden md:block"/>
                <span className="text-amber-500 md:mt-2 md:block">Confidence wapas laiye.</span>
            </h1>
            
            <p className="text-[15px] md:text-[18px] text-neutral-300 mb-8 md:mb-10 max-w-[320px] md:max-w-lg leading-relaxed">
                Natural aur safe Ayurvedic support jo aapka purana confidence lautaye. 
                <span className="hidden md:inline"> Bina kisi side-effect ke, 100% privacy ke saath.</span>
            </p>
            
            <button className="w-full md:w-auto md:px-14 h-14 md:h-16 bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-500 hover:to-orange-400 text-white font-bold rounded-xl md:rounded-lg text-[17px] md:text-[19px] shadow-[0_4px_20px_rgba(217,119,6,0.25)] transition-transform active:scale-[0.98] flex items-center justify-center">
                Order Now
            </button>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 mt-5 md:mt-8 text-[13px] md:text-[14px] text-neutral-400 font-medium w-full">
                <span className="flex items-center gap-1.5"><Leaf className="w-4 h-4 md:w-4.5 md:h-4.5 text-green-500/80"/> 100% Ayurvedic</span>
                <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 md:w-4.5 md:h-4.5 text-amber-500/80"/> Private Delivery</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 md:w-4.5 md:h-4.5 text-blue-400/80"/> Safe</span>
            </div>
        </div>
    </section>
);

const ProblemSolution = () => (
    <section className="px-5 py-10 md:py-20 bg-[#0a0a0a] md:bg-transparent border-y border-neutral-900 md:border-none text-center relative z-10">
        <div className="md:max-w-4xl md:mx-auto md:bg-[#0a0a0a] md:border md:border-neutral-800/60 md:rounded-2xl md:p-14 md:shadow-2xl">
            <p className="text-[22px] md:text-[32px] lg:text-[36px] text-neutral-200 font-medium leading-snug mb-5 md:mb-8" style={{ fontFamily: "'Cinzel', serif" }}>
                "Har problem dikhti nahi hoti…<br/>
                <span className="text-neutral-400 mt-2 md:mt-4 block text-[18px] md:text-[24px] lg:text-[28px]">Confidence ki kami rishton me dooriyan la deti hai."</span>
            </p>
            
            <div className="w-12 md:w-24 h-[1px] bg-amber-800/50 mx-auto mb-5 md:mb-8" />
            
            <p className="text-[15px] md:text-[18px] lg:text-[20px] text-amber-500/90 font-medium max-w-[300px] md:max-w-[600px] mx-auto leading-relaxed">
                Wild Capsule & Power Oil apka natural Ayurvedic solution stamina badhane ke liye.
            </p>
        </div>
    </section>
);

const Benefits = () => (
    <section className="px-5 py-10 md:py-20">
        <h2 className="text-[26px] md:text-[40px] font-bold text-white text-center mb-8 md:mb-14" style={{ fontFamily: "'Cinzel', serif" }}>
            Kyun Chunein <span className="text-amber-500">Wild</span>?
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
            {/* Benefit 1 */}
            <div className="bg-[#0a0a0a] p-5 md:p-8 rounded-xl md:rounded-2xl border border-neutral-800/60 flex flex-col items-center text-center gap-3 md:gap-4 md:hover:border-amber-900/50 transition-colors">
                <Zap className="w-7 h-7 md:w-10 md:h-10 text-amber-500/90" />
                <span className="text-[15px] md:text-[20px] font-bold text-neutral-200" style={{ fontFamily: "'Cinzel', serif" }}>Boost<br className="md:hidden"/> Confidence</span>
                <p className="hidden md:block text-[14px] text-neutral-400">Natural energy aur self-assurance.</p>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-[#0a0a0a] p-5 md:p-8 rounded-xl md:rounded-2xl border border-neutral-800/60 flex flex-col items-center text-center gap-3 md:gap-4 md:hover:border-amber-900/50 transition-colors">
                <HeartPulse className="w-7 h-7 md:w-10 md:h-10 text-rose-500/90" />
                <span className="text-[15px] md:text-[20px] font-bold text-neutral-200" style={{ fontFamily: "'Cinzel', serif" }}>Improve<br className="md:hidden"/> Stamina</span>
                <p className="hidden md:block text-[14px] text-neutral-400">Din bhar ka support aur endurance.</p>
            </div>
            
            {/* Benefit 3 */}
            <div className="bg-[#0a0a0a] p-5 md:p-8 rounded-xl md:rounded-2xl border border-neutral-800/60 flex flex-col items-center text-center gap-3 md:gap-4 md:hover:border-amber-900/50 transition-colors">
                <Leaf className="w-7 h-7 md:w-10 md:h-10 text-green-500/90" />
                <span className="text-[15px] md:text-[20px] font-bold text-neutral-200" style={{ fontFamily: "'Cinzel', serif" }}>Ayurvedic<br className="md:hidden"/> & Safe</span>
                <p className="hidden md:block text-[14px] text-neutral-400">Sirf natural herbs. No chemicals.</p>
            </div>
            
            {/* Benefit 4 */}
            <div className="bg-[#0a0a0a] p-5 md:p-8 rounded-xl md:rounded-2xl border border-neutral-800/60 flex flex-col items-center text-center gap-3 md:gap-4 md:hover:border-amber-900/50 transition-colors">
                <Lock className="w-7 h-7 md:w-10 md:h-10 text-blue-400/90" />
                <span className="text-[15px] md:text-[20px] font-bold text-neutral-200" style={{ fontFamily: "'Cinzel', serif" }}>Private<br className="md:hidden"/> Delivery</span>
                <p className="hidden md:block text-[14px] text-neutral-400">Bina branding ka secure package.</p>
            </div>
        </div>
    </section>
);

const FinalCTA = () => (
    <section className="px-5 py-10 md:py-24 mb-8 md:mb-16 text-center bg-[#0a0a0a] md:bg-transparent border-y md:border-none border-neutral-900">
        <div className="md:max-w-4xl md:mx-auto md:bg-[#0a0a0a] md:border md:border-neutral-800/60 md:rounded-[2rem] md:p-16 md:shadow-2xl md:relative overflow-hidden">
            
            {/* Desktop Inner Glow (Hidden on Mobile) */}
            <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent pointer-events-none" />

            <h2 className="relative z-10 text-[26px] md:text-[42px] lg:text-[48px] font-bold text-white mb-6 md:mb-10 leading-tight" style={{ fontFamily: "'Cinzel', serif" }}>
                Fir se <span className="text-amber-500">confident</span> feel karne ke liye tayyar hain?
            </h2>
            
            <p className="hidden md:block relative z-10 text-lg text-neutral-400 mb-10 max-w-xl mx-auto">
                Take the first step towards a better you. Safe, discreet aur 100% private.
            </p>

            <div className="relative z-10 flex flex-col md:flex-row gap-3 md:gap-5 w-full md:justify-center">
                <button className="w-full md:w-[260px] h-14 md:h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl md:rounded-lg flex items-center justify-center gap-2 text-[17px] md:text-[18px] active:scale-[0.98] transition-transform">
                    <MessageCircle className="w-6 h-6 md:w-5 md:h-5" /> WhatsApp Us
                </button>
                <button className="w-full md:w-[260px] h-14 md:h-16 bg-neutral-800 hover:bg-neutral-700 text-white font-bold rounded-xl md:rounded-lg flex items-center justify-center gap-2 text-[17px] md:text-[18px] border border-neutral-700 active:scale-[0.98] transition-transform">
                    <PhoneCall className="w-5 h-5" /> Call: 81785 11023
                </button>
            </div>
            
            <div className="hidden md:flex relative z-10 items-center justify-center gap-2 text-sm text-neutral-500 mt-8 font-medium">
                <Lock className="w-4 h-4 text-neutral-400" /> 100% Secure & Confidential
            </div>
        </div>
    </section>
);

const StickyMobileBar = () => (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#050505] border-t border-neutral-800/80 p-3 flex gap-3 pb-safe sm:pb-3 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] mx-auto w-full max-w-lg">
        <a href="tel:+918178511023" className="flex-1 h-12 bg-neutral-800 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-transform active:scale-[0.96] text-[15px] border border-neutral-700">
            <PhoneCall className="w-4 h-4" /> Call Now
        </a>
        <a href="https://wa.me/918178511023" target="_blank" rel="noreferrer" className="flex-1 h-12 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-transform active:scale-[0.96] text-[15px] shadow-[0_4px_12px_rgba(217,119,6,0.3)]">
            <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
    </div>
);

export default App;