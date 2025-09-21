import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const BuyCredit = () => {
  const { addCredits, userCredits } = useContext(AppContext);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const creditPackages = [
    {
      id: 'starter',
      name: 'Starter Pack',
      credits: 50,
      price: 5,
      popular: false,
      description: 'Perfect for trying out the service'
    },
    {
      id: 'popular',
      name: 'Popular Pack',
      credits: 150,
      price: 12,
      popular: true,
      description: 'Most popular choice for regular users'
    },
    {
      id: 'pro',
      name: 'Pro Pack',
      credits: 500,
      price: 35,
      popular: false,
      description: 'Best value for power users'
    },
    {
      id: 'unlimited',
      name: 'Unlimited',
      credits: 1000,
      price: 60,
      popular: false,
      description: 'Maximum value for heavy users'
    }
  ];

  const handlePurchase = async (plan) => {
    setIsProcessing(true);
    setSelectedPlan(plan);

    // Simulate payment processing
    setTimeout(() => {
      addCredits(plan.credits);
      setIsProcessing(false);
      setSelectedPlan(null);

      // Show success message
      alert(`Successfully purchased ${plan.credits} credits!`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img src={assets.logo} alt="Imagify" className="h-8 w-auto" />
              <span className="text-xl font-bold text-gray-900">Imagify</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Current Credits: <span className="font-semibold text-blue-600">{userCredits}</span>
              </div>
              <Link
                to="/"
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Buy Credits</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get more credits to continue generating amazing AI images. Choose the package that best fits your needs.
          </p>
        </div>

        {/* Current Balance */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-1">Current Balance</h3>
              <p className="text-3xl font-bold text-blue-600">{userCredits} Credits</p>
            </div>
          </div>
        </div>

        {/* Credit Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {creditPackages.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-xl shadow-lg p-6 border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? 'border-blue-500 transform scale-105'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">{plan.credits}</span>
                  <span className="text-gray-600 ml-1">Credits</span>
                </div>

                <div className="mb-6">
                  <span className="text-2xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600 ml-1">USD</span>
                </div>

                <button
                  onClick={() => handlePurchase(plan)}
                  disabled={isProcessing && selectedPlan?.id === plan.id}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } ${
                    isProcessing && selectedPlan?.id === plan.id
                      ? 'cursor-not-allowed opacity-75'
                      : 'hover:shadow-md'
                  }`}
                >
                  {isProcessing && selectedPlan?.id === plan.id ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="loading-dots">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    'Purchase Now'
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose Imagify Credits?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Access</h3>
              <p className="text-gray-600">Credits are added to your account immediately after purchase</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Expiration</h3>
              <p className="text-gray-600">Your credits never expire and roll over indefinitely</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Payment</h3>
              <p className="text-gray-600">All transactions are processed securely with SSL encryption</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do credits work?</h3>
              <p className="text-gray-600">Each image generation costs 1 credit. Credits are deducted automatically when you generate an image successfully.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I get a refund?</h3>
              <p className="text-gray-600">Credits are non-refundable once purchased, but they never expire so you can use them anytime.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and other popular payment methods through our secure payment processor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCredit;
