"use client";
import React, { useState } from 'react';
import { Shield, BarChart3, Settings, CheckCircle, Cookie, Save, Info } from 'lucide-react';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';

export default function CookiePreferencesPage() {
  const [preferences, setPreferences] = useState({
    essential: true, // Always enabled
    analytics: false,
    functional: false
  });

  const [saved, setSaved] = useState(false);

  const handleToggle = (type) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
    setSaved(false);
  };

  const handleSavePreferences = () => {
    // Here you would typically save to localStorage or send to backend
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setSaved(true);
    
    // Show success message temporarily
    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  const cookieOptions = [
    {
      id: 'essential',
      icon: Shield,
      title: 'Essential Cookies',
      badge: 'REQUIRED',
      description: 'These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100/50',
      enabled: preferences.essential,
      required: true
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Analytics Cookies',
      badge: null,
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.',
      gradient: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100/50',
      enabled: preferences.analytics,
      required: false
    },
    {
      id: 'functional',
      icon: Settings,
      title: 'Functional Cookies',
      badge: null,
      description: 'These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.',
      gradient: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100/50',
      enabled: preferences.functional,
      required: false
    }
  ];

  return (
    <div className="min-h-screen bg-white mt-10">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3730a3] text-white py-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 bg-orange-500/20 px-6 py-3 rounded-full mb-6 border border-orange-500/30 animate-fade-in-down">
            <Cookie className="w-5 h-5 text-orange-300" />
            <span className="text-orange-300 font-semibold text-sm">Your Privacy Controls</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-4 animate-fade-in-up">
            Cookie Preferences
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto animate-fade-in">
            Manage your privacy settings for CyberAI Technologies Ltd. You can choose which cookies you want to allow. Your essential preferences are saved automatically.
          </p>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Cookie className="absolute w-10 h-10 text-blue-300/20 animate-float" style={{top: '20%', left: '10%', animationDelay: '0s'}} />
          <Shield className="absolute w-12 h-12 text-orange-400/20 animate-float" style={{top: '60%', right: '15%', animationDelay: '1s'}} />
          <Settings className="absolute w-8 h-8 text-blue-400/20 animate-float" style={{bottom: '25%', left: '15%', animationDelay: '2s'}} />
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Success Message */}
        {saved && (
          <div className="mb-8 bg-green-50 border-2 border-green-200 rounded-2xl p-6 flex items-center gap-4 animate-fade-in-down shadow-lg">
            <div className="bg-green-500 p-2 rounded-full">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-green-900 text-lg">Preferences Saved Successfully!</h3>
              <p className="text-green-700">Your cookie preferences have been updated.</p>
            </div>
          </div>
        )}

        {/* Cookie Options */}
        <div className="space-y-6 mb-8">
          {cookieOptions.map((option, i) => (
            <div 
              key={option.id}
              className="group bg-white rounded-3xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
              style={{animationDelay: `${i * 0.1}s`}}
            >
              <div className={`bg-gradient-to-r ${option.bgColor} p-8`}>
                <div className="flex items-start justify-between gap-6">
                  {/* Left Side - Icon and Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`bg-gradient-to-br ${option.gradient} w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <option.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-2xl font-bold text-blue-900">{option.title}</h3>
                          {option.badge && (
                            <span className="bg-blue-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                              {option.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      {option.description}
                    </p>

                    {option.required && (
                      <div className="mt-4 flex items-center gap-2 text-sm text-blue-600">
                        <Info className="w-4 h-4" />
                        <span className="font-medium">These cookies are required for the website to function properly</span>
                      </div>
                    )}
                  </div>

                  {/* Right Side - Toggle Switch */}
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => handleToggle(option.id)}
                      disabled={option.required}
                      className={`relative inline-flex h-12 w-24 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                        option.enabled 
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 focus:ring-blue-200' 
                          : 'bg-gray-300 focus:ring-gray-200'
                      } ${option.required ? 'cursor-not-allowed opacity-75' : 'cursor-pointer hover:scale-105'}`}
                    >
                      <span
                        className={`inline-block h-10 w-10 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
                          option.enabled ? 'translate-x-12' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleSavePreferences}
            className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3"
          >
            <Save className="w-5 h-5" />
            Save Preferences
          </button>

          <button
            onClick={() => {
              setPreferences({
                essential: true,
                analytics: false,
                functional: false
              });
              setSaved(false);
            }}
            className="text-gray-600 hover:text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all border-2 border-gray-300 hover:border-blue-500 hover:shadow-lg"
          >
            Reset to Defaults
          </button>
        </div>

        {/* Information Box */}
        <div className="mt-12 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-8 border-2 border-blue-200">
          <div className="flex items-start gap-4">
            <div className="bg-blue-500 p-3 rounded-xl shadow-lg flex-shrink-0">
              <Info className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">About Your Choices</h3>
              <div className="space-y-2 text-gray-700">
                <p className="leading-relaxed">
                  <strong className="text-blue-900">Essential cookies</strong> are always active as they are necessary for the website to function. You can disable analytics and functional cookies at any time.
                </p>
                <p className="leading-relaxed">
                  Your preferences will be saved and remembered on this device. If you use multiple devices or browsers, you'll need to set your preferences on each one.
                </p>
                <p className="leading-relaxed">
                  For more information about how we use cookies, please read our{' '}
                  <a href="/cookie-notice" className="text-blue-600 hover:text-orange-500 font-semibold underline transition-colors">
                    Cookie Notice
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-black mb-2">
              {Object.values(preferences).filter(Boolean).length}/3
            </div>
            <div className="text-blue-100 font-medium">Cookies Enabled</div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-black mb-2">
              {preferences.essential ? '✓' : '○'}
            </div>
            <div className="text-orange-100 font-medium">Essential Active</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-black mb-2">
              {(preferences.analytics && preferences.functional) ? 'All' : preferences.analytics || preferences.functional ? 'Partial' : 'None'}
            </div>
            <div className="text-purple-100 font-medium">Optional Cookies</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}