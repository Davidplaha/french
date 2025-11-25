import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Terminal, Shield } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className="relative overflow-hidden bg-cyber-black">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(0,255,157,0.1),transparent_50%)]"></div>
                <div className="absolute top-20 right-20 w-72 h-72 bg-cyber-purple/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
                <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-mono">
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                                    EMBAUCHER UN
                                </span>
                                <span className="block text-cyber-green animate-pulse">
                                    HACKER ÉTHIQUE
                                </span>
                            </h1>
                            <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0">
                                Protégez votre entreprise avant qu'il ne soit trop tard. Nos experts certifiés simulent des attaques réelles pour identifier et corriger vos failles de sécurité.
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-cyber-black bg-cyber-green hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(0,255,157,0.5)] hover:shadow-[0_0_25px_rgba(0,255,157,0.8)]">
                                    <Terminal className="w-5 h-5 mr-2" />
                                    Demander un Audit
                                </Link>
                                <Link to="/services" className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-base font-medium rounded-md text-white hover:bg-white/10 transition-all">
                                    <Shield className="w-5 h-5 mr-2" />
                                    Nos Services
                                </Link>
                            </div>

                            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-gray-500 text-sm font-mono">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    100% Légal
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    Certifié ANSSI
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    Confidentiel
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="relative"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-green to-cyber-purple rounded-lg blur opacity-30"></div>
                            <div className="relative bg-cyber-black border border-white/10 rounded-lg p-6 max-w-md w-full font-mono text-sm shadow-2xl">
                                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="ml-2 text-gray-500">root@whitehat:~#</span>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-green-400">$ ./security-scan.sh --target=votre-site.com</p>
                                    <p className="text-gray-400">[+] Initializing scan...</p>
                                    <p className="text-gray-400">[+] Checking for vulnerabilities...</p>
                                    <p className="text-yellow-400">[!] 3 Critical vulnerabilities found</p>
                                    <p className="text-red-400">[!] SQL Injection detected</p>
                                    <p className="text-red-400">[!] XSS Vulnerability detected</p>
                                    <p className="text-green-400">[+] Generating patch report...</p>
                                    <p className="text-white animate-pulse">_</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
