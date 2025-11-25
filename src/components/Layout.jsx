import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Menu, X } from 'lucide-react';
import LegalDisclaimer from './LegalDisclaimer';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-cyber-black text-white font-sans selection:bg-cyber-green selection:text-cyber-black">
            <header className="fixed top-0 w-full z-50 bg-cyber-black/90 backdrop-blur-sm border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-8 h-8 text-cyber-green" />
                            <Link to="/" className="font-mono text-xl font-bold tracking-tighter">
                                WHITE<span className="text-cyber-green">HAT</span>.FR
                            </Link>
                        </div>

                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <Link to="/" className="hover:text-cyber-green transition-colors px-3 py-2 rounded-md text-sm font-medium">Accueil</Link>
                                <Link to="/services" className="hover:text-cyber-green transition-colors px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                                <Link to="/about" className="hover:text-cyber-green transition-colors px-3 py-2 rounded-md text-sm font-medium">À Propos</Link>
                                <Link to="/contact" className="bg-cyber-green text-cyber-black hover:bg-white transition-colors px-4 py-2 rounded-md text-sm font-bold">Devis Sécurisé</Link>
                            </div>
                        </div>

                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-cyber-black border-b border-white/10">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link to="/" className="block hover:text-cyber-green px-3 py-2 rounded-md text-base font-medium">Accueil</Link>
                            <Link to="/services" className="block hover:text-cyber-green px-3 py-2 rounded-md text-base font-medium">Services</Link>
                            <Link to="/about" className="block hover:text-cyber-green px-3 py-2 rounded-md text-base font-medium">À Propos</Link>
                            <Link to="/contact" className="block text-cyber-green font-bold px-3 py-2 rounded-md text-base">Devis Sécurisé</Link>
                        </div>
                    </div>
                )}
            </header>

            <main className="flex-grow pt-16">
                {children}
            </main>

            <LegalDisclaimer />

            <footer className="bg-cyber-black border-t border-white/5 py-8">
                <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} WhiteHat France. Tous droits réservés.</p>
                    <p className="mt-2">Sécurité Offensive & Défensive Certifiée.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
