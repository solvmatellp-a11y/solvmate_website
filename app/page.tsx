/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X, Eye, EyeOff } from 'lucide-react';
import HomePage from './homePageContent';
import AboutPage from './aboutPageContent';
import ServicePage from './servicesPageContent';
import ContactPage from './contactPageContent';
import ProductPage from './productPageConten';

export default function SolvMate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [users, setUsers] = useState<any[]>([]);;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<any>(null);
  const [authMessage, setAuthMessage] = useState('');

  // Load users from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUsers = localStorage.getItem('solvmate_users');
      const storedLoggedInUser = localStorage.getItem('solvmate_logged_in_user');
      
      if (storedUsers) {
        setUsers(JSON.parse(storedUsers));
      }
      if (storedLoggedInUser) {
        setIsLoggedIn(true);
        setLoggedInUser(JSON.parse(storedLoggedInUser));
      }
    }
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 1000 && !showAuthModal && currentPage === 'home') {
  //       setShowAuthModal(true);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [showAuthModal, currentPage]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    if (isSignIn) {
      const user = users.find(u => u.email === formData.email && u.password === formData.password);
      if (user) {
        setIsLoggedIn(true);
        setLoggedInUser(user);
        if (typeof window !== 'undefined') {
          localStorage.setItem('solvmate_logged_in_user', JSON.stringify(user));
        }
        setAuthMessage('Sign in successful!');
        setShowAuthModal(false);
        setFormData({ email: '', password: '', name: '' });
        setTimeout(() => setAuthMessage(''), 3000);
      } else {
        setAuthMessage('Invalid email or password');
        setTimeout(() => setAuthMessage(''), 3000);
      }
    } else {
      if (!formData.name || !formData.email || !formData.password) {
        setAuthMessage('Please fill all fields');
        setTimeout(() => setAuthMessage(''), 3000);
        return;
      }
      
      const existingUser = users.find(u => u.email === formData.email);
      if (existingUser) {
        setAuthMessage('Email already registered');
        setTimeout(() => setAuthMessage(''), 3000);
        return;
      }
      
      const newUser = { id: Date.now(), name: formData.name, email: formData.email, password: formData.password };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const updatedUsers: any = [...users, newUser];
      setUsers(updatedUsers);
      if (typeof window !== 'undefined') {
        localStorage.setItem('solvmate_users', JSON.stringify(updatedUsers));
      }
      setAuthMessage('Registration successful! Please sign in');
      setIsSignIn(true);
      setFormData({ email: formData.email, password: formData.password, name: '' });
      setTimeout(() => setAuthMessage(''), 3000);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUser(null);
    setFormData({ email: '', password: '', name: '' });
    if (typeof window !== 'undefined') {
      localStorage.removeItem('solvmate_logged_in_user');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-900 overflow-hidden" style={{backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #f0f4f8 50%, #e8f1f8 100%)'}}>
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob bg-blue-900"></div>
        <div className="absolute top-40 right-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2s bg-blue-800"></div>
        <div className="absolute bottom-1/2 left-1/3 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4s bg-blue-900"></div>
      </div>

      <nav className="fixed w-full top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-blue-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-md bg-gradient-to-br from-blue-900 to-blue-800">
              <span className="text-white font-bold text-lg">SM</span>
            </div>
            <span className="font-bold text-xl text-blue-900">SolvMate</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => {setCurrentPage('home'); setMobileMenuOpen(false); setShowAuthModal(false);}} className="text-gray-700 font-medium hover:text-blue-600 transition">Home</button>
            <button onClick={() => {setCurrentPage('about'); setMobileMenuOpen(false); setShowAuthModal(false);}} className="text-gray-700 font-medium hover:text-blue-600 transition">About</button>
            <button onClick={() => {setCurrentPage('services'); setMobileMenuOpen(false); setShowAuthModal(false);}} className="text-gray-700 font-medium hover:text-blue-600 transition">Services</button>
            <button onClick={() => {setCurrentPage('Products'); setMobileMenuOpen(false); setShowAuthModal(false);}} className="text-gray-700 font-medium hover:text-blue-600 transition">Products</button>
            <button onClick={() => {setCurrentPage('contact'); setMobileMenuOpen(false); setShowAuthModal(false);}} className="text-gray-700 font-medium hover:text-blue-600 transition">Contact</button>
            
            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-gray-900">Welcome, {loggedInUser.name}!</span>
                <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition text-sm">
                  Logout
                </button>
              </div>
            ) : (
              <button onClick={() => setShowAuthModal(true)} className="px-4 py-2 bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-lg font-semibold hover:from-blue-800 hover:to-blue-700 transition text-sm">
                Sign In
              </button>
            )}
          </div>

          <button 
            className="md:hidden text-blue-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden backdrop-blur-xl bg-white/70 border-t border-blue-200/50 p-4 space-y-4">
            <button onClick={() => {setCurrentPage('home'); setMobileMenuOpen(false); setShowAuthModal(false);}} className="block w-full text-left text-gray-700 font-medium hover:text-blue-600 transition">Home</button>
            <button onClick={() => {setCurrentPage('about'); setMobileMenuOpen(false); setShowAuthModal(false);}} className="block w-full text-left text-gray-700 font-medium hover:text-blue-600 transition">About</button>
            <button onClick={() => {setCurrentPage('services'); setMobileMenuOpen(false); setShowAuthModal(false);}} className="block w-full text-left text-gray-700 font-medium hover:text-blue-600 transition">Services</button>
            <button onClick={() => {setCurrentPage('Products'); setMobileMenuOpen(false); setShowAuthModal(false);}} className="block w-full text-left text-gray-700 font-medium hover:text-blue-600 transition">Products</button>
            <button onClick={() => {setCurrentPage('contact'); setMobileMenuOpen(false); setShowAuthModal(false);}} className="block w-full text-left text-gray-700 font-medium hover:text-blue-600 transition">Contact</button>
            
            {isLoggedIn ? (
              <div className="pt-4 border-t border-blue-200">
                <p className="text-sm font-semibold text-gray-900 mb-3">Welcome, {loggedInUser.name}!</p>
                <button onClick={handleLogout} className="w-full px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition text-sm">
                  Logout
                </button>
              </div>
            ) : (
              <button onClick={() => {setShowAuthModal(true); setMobileMenuOpen(false);}} className="w-full px-4 py-2 bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-lg font-semibold hover:from-blue-800 hover:to-blue-700 transition text-sm">
                Sign In
              </button>
            )}
          </div>
        )}
      </nav>

      {currentPage === 'home' && (
       <HomePage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'about' && (
        <AboutPage />
      )}

      {currentPage === 'services' && (
        <ServicePage />
      )}

      {currentPage === 'contact' && (
        <ContactPage />
      )}

      {currentPage === 'Products' && (
        <ProductPage />
      )} 


      <footer className="border-t border-blue-200 py-12 px-6 backdrop-blur-xl bg-white/60">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>&copy; 2024 SolvMate. All rights reserved.</p>
        </div>
      </footer>

      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-lg"
            onClick={() => setShowAuthModal(false)}
          ></div>

          <div className="relative backdrop-blur-2xl bg-white/30 border-2 border-white/40 rounded-3xl p-8 max-w-md w-full shadow-2xl animate-scale-in hover:bg-white/40 transition">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-6 right-6 text-blue-900 hover:text-blue-700 transition"
            >
              <X size={24} />
            </button>

            <div className="text-center space-y-2 mb-8">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto shadow-lg bg-gradient-to-br from-blue-900 to-blue-800">
                <span className="text-white font-bold text-xl">SM</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">SolvMate</h2>
              <p className="text-sm text-gray-700">Grow with clarity</p>
            </div>

            {authMessage && (
              <div className="mb-4 p-3 rounded-lg text-center text-sm font-medium" style={{backgroundColor: authMessage.includes('successful') ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)', color: authMessage.includes('successful') ? '#166534' : '#991b1b'}}>
                {authMessage}
              </div>
            )}

            <div className="flex gap-3 mb-8 bg-white/20 p-1.5 rounded-full backdrop-blur-xl">
              <button
                onClick={() => {setIsSignIn(true); setAuthMessage(''); setFormData({ email: '', password: '', name: '' });}}
                className={`flex-1 py-2.5 px-4 rounded-full font-semibold transition ${
                  isSignIn
                    ? 'bg-white/60 text-blue-900 shadow-lg'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => {setIsSignIn(false); setAuthMessage(''); setFormData({ email: '', password: '', name: '' });}}
                className={`flex-1 py-2.5 px-4 rounded-full font-semibold transition ${
                  !isSignIn
                    ? 'bg-white/60 text-blue-900 shadow-lg'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Register
              </button>
            </div>

            <div className="space-y-4">
              {!isSignIn && (
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 backdrop-blur-xl bg-white/40 border-2 border-white/50 rounded-2xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-white/80 focus:bg-white/60 transition"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 backdrop-blur-xl bg-white/40 border-2 border-white/50 rounded-2xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-white/80 focus:bg-white/60 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full px-4 py-3 backdrop-blur-xl bg-white/40 border-2 border-white/50 rounded-2xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-white/80 focus:bg-white/60 transition pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-600 hover:text-gray-900 transition"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {isSignIn && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-gray-900 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-white/50 bg-white/30 accent-blue-900" />
                    Remember me
                  </label>
                  <a href="#" className="text-blue-900 hover:text-blue-800 transition font-medium">Forgot password?</a>
                </div>
              )}

              <button
                onClick={handleSubmit}
                className="w-full py-3 backdrop-blur-xl border-2 border-white/20 rounded-2xl font-semibold text-white hover:border-white/40 transition shadow-lg mt-6 bg-gradient-to-br from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700" 
              >
                {isSignIn ? 'Sign In' : 'Create Account'}
              </button>

              <p className="text-center text-sm text-gray-900">
                {isSignIn ? "Don't have an account? " : 'Already have an account? '}
                <button
                  type="button"
                  onClick={() => {setIsSignIn(!isSignIn); setAuthMessage('');}}
                  className="text-blue-900 hover:text-blue-800 transition font-semibold"
                >
                  {isSignIn ? 'Register' : 'Sign In'}
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2s {
          animation-delay: 2s;
        }
        .animation-delay-4s {
          animation-delay: 4s;
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
