import React, { useState } from 'react';
import { Leaf, ShieldCheck, Lock, PhoneCall, Zap, HeartPulse, MessageCircle, CheckCircle, Loader2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import heroImg from '../assets/267aadc9670f30ef0f1dd141d69d99164c2da01e.png';
import heroImg2 from '../assets/2.jpeg';

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
                <ContactForm />
                <FinalCTA />
            </main>

            <StickyMobileBar />
        </div>
    );
};

const Hero = () => (
    <section className="px-5 pt-6 md:pt-20 pb-10 md:pb-16 flex flex-col md:flex-row items-center text-center md:text-left relative md:gap-12 lg:gap-20">
        
        {/* Product Images: First on Mobile, Right on Desktop */}
        <div className="order-1 md:order-2 relative w-full max-w-[280px] md:max-w-[420px] lg:max-w-[500px] mx-auto mb-6 md:mb-0 flex-1">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-amber-600/10 blur-2xl rounded-full pointer-events-none" />
            <div className="relative z-10 flex gap-3 md:gap-4 items-center justify-center">
                <img 
                    src={heroImg} 
                    alt="Wild Capsule and Power Oil" 
                    className="w-[48%] h-auto drop-shadow-2xl object-contain"
                />
                <img 
                    src={heroImg2} 
                    alt="Wild Capsule and Power Oil" 
                    className="w-[48%] h-auto drop-shadow-2xl object-contain"
                />
            </div>
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
            
            <button
                onClick={() => window.open('https://wa.me/919643338004?text=Hi%20I%20am%20interested%20in%20Wild%20Capsule%20and%20Power%20Oil', '_blank')}
                className="w-full md:w-auto md:px-14 h-14 md:h-16 bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-500 hover:to-orange-400 text-white font-bold rounded-xl md:rounded-lg text-[17px] md:text-[19px] shadow-[0_4px_20px_rgba(217,119,6,0.25)] transition-transform active:scale-[0.98] flex items-center justify-center cursor-pointer">
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

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        city: '',
        contactMethod: 'whatsapp'
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            // Add lead to Firestore
            await addDoc(collection(db, 'leads'), {
                ...formData,
                timestamp: serverTimestamp(),
            });

            setShowThankYou(true);
            // Reset form
            setFormData({
                name: '',
                phone: '',
                city: '',
                contactMethod: 'whatsapp'
            });
        } catch (err: any) {
            setError('Failed to submit. Please try again.');
            console.error('Form submission error:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const closeThankYou = () => {
        setShowThankYou(false);
    };

    return (
        <>
            <section className="px-5 py-10 md:py-20">
                <div className="max-w-md mx-auto">
                    {/* Form Card */}
                    <div className="bg-[#0a0a0a] rounded-2xl md:rounded-3xl p-6 md:p-10 border border-neutral-800/60 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
                        
                        {/* Section Heading */}
                        <div className="text-center mb-8 md:mb-10">
                            <h2 className="text-[26px] md:text-[36px] font-bold text-white mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
                                Get Private Consultation
                            </h2>
                            <p className="text-[14px] md:text-[15px] text-neutral-400 flex items-center justify-center gap-2">
                                <Lock className="w-4 h-4 text-amber-500/80" />
                                Your details are 100% confidential
                            </p>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="mb-5 p-4 bg-red-900/20 border border-red-700/50 rounded-xl text-red-400 text-[14px] text-center">
                                {error}
                            </div>
                        )}

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            
                            {/* Name Input */}
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                    disabled={isSubmitting}
                                    className="w-full h-[52px] md:h-[56px] bg-[#050505] border border-neutral-700 rounded-xl px-5 text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-600/30 transition-all text-[15px] md:text-[16px] disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>

                            {/* Phone Input */}
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your mobile number"
                                    required
                                    pattern="[0-9]{10}"
                                    disabled={isSubmitting}
                                    className="w-full h-[52px] md:h-[56px] bg-[#050505] border border-neutral-700 rounded-xl px-5 text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-600/30 transition-all text-[15px] md:text-[16px] disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>

                            {/* City Input (Optional) */}
                            <div>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="Your city"
                                    disabled={isSubmitting}
                                    className="w-full h-[52px] md:h-[56px] bg-[#050505] border border-neutral-700 rounded-xl px-5 text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-600/30 transition-all text-[15px] md:text-[16px] disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>

                            {/* Preferred Contact Method */}
                            <div>
                                <p className="text-neutral-300 text-[14px] md:text-[15px] mb-3 font-medium">Preferred Contact</p>
                                <div className="flex gap-3">
                                    <label className="flex-1 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="contactMethod"
                                            value="call"
                                            checked={formData.contactMethod === 'call'}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                            className="peer sr-only"
                                        />
                                        <div className="h-[48px] bg-[#050505] border border-neutral-700 rounded-xl flex items-center justify-center gap-2 text-neutral-400 peer-checked:border-amber-600 peer-checked:bg-amber-600/10 peer-checked:text-amber-500 transition-all text-[15px] font-medium peer-disabled:opacity-50 peer-disabled:cursor-not-allowed">
                                            <PhoneCall className="w-4 h-4" />
                                            Call
                                        </div>
                                    </label>
                                    <label className="flex-1 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="contactMethod"
                                            value="whatsapp"
                                            checked={formData.contactMethod === 'whatsapp'}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                            className="peer sr-only"
                                        />
                                        <div className="h-[48px] bg-[#050505] border border-neutral-700 rounded-xl flex items-center justify-center gap-2 text-neutral-400 peer-checked:border-amber-600 peer-checked:bg-amber-600/10 peer-checked:text-amber-500 transition-all text-[15px] font-medium peer-disabled:opacity-50 peer-disabled:cursor-not-allowed">
                                            <MessageCircle className="w-4 h-4" />
                                            WhatsApp
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-[56px] md:h-[60px] bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-500 hover:to-orange-400 text-white font-bold rounded-xl text-[17px] md:text-[18px] shadow-[0_6px_24px_rgba(217,119,6,0.3)] transition-all active:scale-[0.98] mt-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    'Request Call Now'
                                )}
                            </button>

                            {/* Trust Line */}
                            <div className="text-center pt-2">
                                <p className="text-[12px] md:text-[13px] text-neutral-500 flex items-center justify-center gap-2 flex-wrap">
                                    <span className="flex items-center gap-1">
                                        <Lock className="w-3 h-3 text-neutral-400" />
                                        100% Private
                                    </span>
                                    <span>•</span>
                                    <span>No spam</span>
                                    <span>•</span>
                                    <span>Discreet support</span>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Thank You Modal */}
            {showThankYou && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-5 bg-black/80 backdrop-blur-sm">
                    <div className="bg-[#0a0a0a] border border-neutral-800/60 rounded-2xl md:rounded-3xl p-8 md:p-12 max-w-md w-full shadow-[0_20px_60px_rgba(0,0,0,0.6)] animate-in fade-in zoom-in duration-300">
                        
                        {/* Success Icon */}
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-600/20 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-green-500" />
                            </div>
                        </div>

                        {/* Thank You Message */}
                        <h3 className="text-[24px] md:text-[32px] font-bold text-white text-center mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
                            Request Received!
                        </h3>
                        
                        <p className="text-[15px] md:text-[16px] text-neutral-300 text-center mb-3 leading-relaxed">
                            Thank you for reaching out. Our team will contact you shortly for a private consultation.
                        </p>

                        <p className="text-[13px] md:text-[14px] text-neutral-400 text-center mb-8">
                            <Lock className="w-4 h-4 text-amber-500/80 inline mr-1" />
                            Your information is completely confidential
                        </p>

                        {/* Close Button */}
                        <button
                            onClick={closeThankYou}
                            className="w-full h-[52px] md:h-[56px] bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-500 hover:to-orange-400 text-white font-bold rounded-xl text-[16px] md:text-[17px] shadow-[0_6px_24px_rgba(217,119,6,0.3)] transition-all active:scale-[0.98]"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

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
                <button
                    onClick={() => window.open('https://wa.me/919643338004?text=Hi%20I%20am%20interested%20in%20Wild%20Capsule%20and%20Power%20Oil', '_blank')}
                    className="w-full md:w-[260px] h-14 md:h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl md:rounded-lg flex items-center justify-center gap-2 text-[17px] md:text-[18px] active:scale-[0.98] transition-transform cursor-pointer">
                    <MessageCircle className="w-6 h-6 md:w-5 md:h-5" /> WhatsApp Us
                </button>
                <button
                    onClick={() => window.location.href = 'tel:+919643338004'}
                    className="w-full md:w-[260px] h-14 md:h-16 bg-neutral-800 hover:bg-neutral-700 text-white font-bold rounded-xl md:rounded-lg flex items-center justify-center gap-2 text-[17px] md:text-[18px] border border-neutral-700 active:scale-[0.98] transition-transform cursor-pointer">
                    <PhoneCall className="w-5 h-5" /> Call: +91 96433 38004
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
        <a href="tel:+919643338004" className="flex-1 h-12 bg-neutral-800 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-transform active:scale-[0.96] text-[15px] border border-neutral-700">
            <PhoneCall className="w-4 h-4" /> Call Now
        </a>
        <a href="https://wa.me/919643338004" target="_blank" rel="noreferrer" className="flex-1 h-12 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-transform active:scale-[0.96] text-[15px] shadow-[0_4px_12px_rgba(217,119,6,0.3)]">
            <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
    </div>
);

export default App;