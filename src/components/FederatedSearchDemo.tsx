import React, { useState, useEffect } from 'react';

const searchQueries = ['medic', 'ship', 'refund', 'pass', 'order'];

const autocompleteData = {
  'medic': ['medicare', 'medicaid', 'medicine', 'medical'],
  'med': ['medicare', 'medicaid', 'medicine', 'medical'],
  'me': ['medicare', 'medicaid', 'medicine', 'medical'],
  'ship': ['shipping', 'shipment', 'shipped'],
  'shi': ['shipping', 'shipment', 'shipped'],
  'sh': ['shipping', 'shipment', 'shipped'],
  'refund': ['refunds', 'refunded', 'refunding'],
  'refu': ['refund', 'refunds', 'refunded'],
  'ref': ['refund', 'refunds', 'refunded'],
  'pass': ['password', 'passwords', 'passport'],
  'pas': ['password', 'passwords', 'passport'],
  'pa': ['password', 'passwords', 'passport'],
  'order': ['orders', 'ordering', 'ordered'],
  'ord': ['order', 'orders', 'ordering'],
  'or': ['order', 'orders', 'ordering']
};

const suggestionData = {
  'medic': [
    { title: 'medical insurance help', href: 'https://help.example.com/medical-insurance' },
    { title: 'medicare enrollment guide', href: 'https://help.example.com/medicare-enrollment' },
    { title: 'medicaid eligibility check', href: 'https://help.example.com/medicaid-eligibility' }
  ],
  'med': [
    { title: 'medical insurance help', href: 'https://help.example.com/medical-insurance' },
    { title: 'medicare enrollment guide', href: 'https://help.example.com/medicare-enrollment' },
    { title: 'medicaid eligibility check', href: 'https://help.example.com/medicaid-eligibility' }
  ],
  'me': [
    { title: 'medical insurance help', href: 'https://help.example.com/medical-insurance' },
    { title: 'medicare enrollment guide', href: 'https://help.example.com/medicare-enrollment' },
    { title: 'medicaid eligibility check', href: 'https://help.example.com/medicaid-eligibility' }
  ],
  'ship': [
    { title: 'shipping policy and rates', href: 'https://help.example.com/shipping-policy' },
    { title: 'shipment tracking guide', href: 'https://help.example.com/shipment-tracking' },
    { title: 'shipping to international locations', href: 'https://help.example.com/international-shipping' }
  ],
  'shi': [
    { title: 'shipping policy and rates', href: 'https://help.example.com/shipping-policy' },
    { title: 'shipment tracking guide', href: 'https://help.example.com/shipment-tracking' },
    { title: 'shipping to international locations', href: 'https://help.example.com/international-shipping' }
  ],
  'sh': [
    { title: 'shipping policy and rates', href: 'https://help.example.com/shipping-policy' },
    { title: 'shipment tracking guide', href: 'https://help.example.com/shipment-tracking' },
    { title: 'shipping to international locations', href: 'https://help.example.com/international-shipping' }
  ],
  'refund': [
    { title: 'refund policy overview', href: 'https://help.example.com/refund-policy' },
    { title: 'how to request refunds', href: 'https://help.example.com/request-refunds' },
    { title: 'refund status checker', href: 'https://help.example.com/refund-status' }
  ],
  'refu': [
    { title: 'refund policy overview', href: 'https://help.example.com/refund-policy' },
    { title: 'how to request refunds', href: 'https://help.example.com/request-refunds' },
    { title: 'refund status checker', href: 'https://help.example.com/refund-status' }
  ],
  'ref': [
    { title: 'refund policy overview', href: 'https://help.example.com/refund-policy' },
    { title: 'how to request refunds', href: 'https://help.example.com/request-refunds' },
    { title: 'refund status checker', href: 'https://help.example.com/refund-status' }
  ],
  'pass': [
    { title: 'password reset instructions', href: 'https://help.example.com/password-reset' },
    { title: 'password security tips', href: 'https://help.example.com/password-security' },
    { title: 'passport renewal process', href: 'https://help.example.com/passport-renewal' }
  ],
  'pas': [
    { title: 'password reset instructions', href: 'https://help.example.com/password-reset' },
    { title: 'password security tips', href: 'https://help.example.com/password-security' },
    { title: 'passport renewal process', href: 'https://help.example.com/passport-renewal' }
  ],
  'pa': [
    { title: 'password reset instructions', href: 'https://help.example.com/password-reset' },
    { title: 'password security tips', href: 'https://help.example.com/password-security' },
    { title: 'passport renewal process', href: 'https://help.example.com/passport-renewal' }
  ],
  'order': [
    { title: 'order tracking and status', href: 'https://help.example.com/order-tracking' },
    { title: 'order history and receipts', href: 'https://help.example.com/order-history' },
    { title: 'order cancellation guide', href: 'https://help.example.com/order-cancellation' }
  ],
  'ord': [
    { title: 'order tracking and status', href: 'https://help.example.com/order-tracking' },
    { title: 'order history and receipts', href: 'https://help.example.com/order-history' },
    { title: 'order cancellation guide', href: 'https://help.example.com/order-cancellation' }
  ],
  'or': [
    { title: 'order tracking and status', href: 'https://help.example.com/order-tracking' },
    { title: 'order history and receipts', href: 'https://help.example.com/order-history' },
    { title: 'order cancellation guide', href: 'https://help.example.com/order-cancellation' }
  ]
};

const searchResults = {
  'medic': [
    {
      title: 'Medicare Plans & Coverage Options',
      description: 'Complete guide to Medicare plans, enrollment periods, and coverage options for healthcare benefits.',
      url: 'https://help.example.com/medicare-plans'
    },
    {
      title: 'Medicaid Eligibility & Application Process',
      description: 'Learn about Medicaid eligibility requirements and how to apply for healthcare assistance programs.',
      url: 'https://help.example.com/medicaid-eligibility'
    },
    {
      title: 'Medical Insurance Claims & Reimbursement',
      description: 'How to file medical insurance claims and track reimbursement status for your healthcare expenses.',
      url: 'https://help.example.com/medical-claims'
    }
  ],
  'ship': [
    {
      title: 'Shipping Rates & Delivery Options',
      description: 'View shipping costs, delivery timeframes, and available shipping methods for your orders.',
      url: 'https://help.example.com/shipping-rates'
    },
    {
      title: 'Shipment Tracking & Status Updates',
      description: 'Track your packages in real-time and receive notifications about delivery status and estimated arrival.',
      url: 'https://help.example.com/track-shipment'
    },
    {
      title: 'International Shipping & Customs',
      description: 'Information about international shipping policies, customs duties, and delivery restrictions by country.',
      url: 'https://help.example.com/international-shipping'
    }
  ],
  'refund': [
    {
      title: 'Refund Policy - Returns & Exchanges',
      description: 'Our complete refund policy including return timeframes, condition requirements, and refund processing times.',
      url: 'https://help.example.com/refund-policy'
    },
    {
      title: 'How to Request a Refund - Step by Step Guide',
      description: 'Easy step-by-step instructions on how to request a refund for your purchase through our online portal.',
      url: 'https://help.example.com/request-refund'
    },
    {
      title: 'Refund Status Checker - Track Your Return',
      description: 'Check the status of your refund request and see when you can expect to receive your money back.',
      url: 'https://help.example.com/refund-status'
    }
  ],
  'pass': [
    {
      title: 'Password Reset & Account Recovery',
      description: 'Step-by-step instructions to reset your password and recover access to your account securely.',
      url: 'https://help.example.com/password-reset'
    },
    {
      title: 'Password Security Best Practices',
      description: 'Learn how to create strong passwords and enable two-factor authentication for better account security.',
      url: 'https://help.example.com/password-security'
    },
    {
      title: 'Passport Services & Documentation',
      description: 'Information about passport applications, renewals, and required documentation for travel.',
      url: 'https://help.example.com/passport-services'
    }
  ],
  'order': [
    {
      title: 'Track Your Order - Real-time Status Updates',
      description: 'Check your order status, tracking information, and estimated delivery date using your order number.',
      url: 'https://help.example.com/track-order'
    },
    {
      title: 'Order History & Previous Purchases',
      description: 'View your complete order history, reorder previous items, and download invoices from your account.',
      url: 'https://help.example.com/order-history'
    },
    {
      title: 'Cancel or Modify Your Order',
      description: 'Learn how to cancel or make changes to your order before it ships. Time-sensitive modifications allowed.',
      url: 'https://help.example.com/modify-order'
    }
  ]
};

function GoogleLikeSearchDemo() {
  const [currentQuery, setCurrentQuery] = useState('');
  const [searchPhase, setSearchPhase] = useState<'typing' | 'autocomplete' | 'suggestions' | 'results'>('typing');
  const [queryIndex, setQueryIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    const query = searchQueries[queryIndex];
    
    // Typing animation
    if (searchPhase === 'typing' && typingIndex < query.length) {
      const timer = setTimeout(() => {
        const partial = query.substring(0, typingIndex + 1);
        setCurrentQuery(partial);
        setTypingIndex(typingIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
    
    // Phase transitions
    if (searchPhase === 'typing' && typingIndex >= query.length) {
      const timer = setTimeout(() => setSearchPhase('autocomplete'), 800);
      return () => clearTimeout(timer);
    }
    
    if (searchPhase === 'autocomplete') {
      const timer = setTimeout(() => setSearchPhase('suggestions'), 2500);
      return () => clearTimeout(timer);
    }
    
    if (searchPhase === 'suggestions') {
      const timer = setTimeout(() => setSearchPhase('results'), 2500);
      return () => clearTimeout(timer);
    }
    
    if (searchPhase === 'results') {
      const timer = setTimeout(() => {
        setQueryIndex((prev) => (prev + 1) % searchQueries.length);
        setTypingIndex(0);
        setCurrentQuery('');
        setSearchPhase('typing');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [searchPhase, typingIndex, queryIndex]);

  const handleAutocompleteClick = (word: string) => {
    setCurrentQuery(word);
    setSearchPhase('results');
  };

  const handleSuggestionClick = (suggestion: { title: string; href: string }) => {
    // Open the link in a new tab to simulate navigation to help center
    window.open(suggestion.href, '_blank');
    // Also update the search query for demo purposes
    setCurrentQuery(suggestion.title);
    setSearchPhase('results');
  };

  const getAutocompleteWords = () => {
    return autocompleteData[currentQuery as keyof typeof autocompleteData] || [];
  };

  const getSuggestions = () => {
    return suggestionData[currentQuery as keyof typeof suggestionData] || [];
  };

  const getSearchResults = () => {
    const fullQuery = searchQueries[queryIndex];
    return searchResults[fullQuery as keyof typeof searchResults] || [];
  };

  return (
    <div className="bg-gray-300 rounded-xl p-4 w-full">
      {/* Search Box */}
      <div className="relative mb-4">
        <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-3 shadow-sm hover:shadow-md transition-shadow">
          <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <div className="flex-1 text-gray-700">
            <span>{currentQuery}</span>
            {searchPhase === 'autocomplete' && getAutocompleteWords().length > 0 && (
              <span className="text-gray-400">{getAutocompleteWords()[0].substring(currentQuery.length)}</span>
            )}
            {searchPhase === 'typing' && (
              <span className="animate-pulse text-gray-400 ml-1">|</span>
            )}
          </div>
          {searchPhase === 'results' && (
            <svg className="w-4 h-4 text-blue-600 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </div>

      {/* Combined Autocomplete and Suggestions Dropdown */}
      {(searchPhase === 'autocomplete' || searchPhase === 'suggestions') && 
       (getAutocompleteWords().length > 0 || getSuggestions().length > 0) && (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg mb-4 animate-fadeIn">
          
          {/* Autocomplete Section */}
          {getAutocompleteWords().length > 0 && (
            <div>
              <div className="px-4 py-2 text-xs text-gray-500 border-b bg-gray-50">Autocomplete - Terms from Search Index</div>
              {getAutocompleteWords().slice(0, 2).map((word, idx) => (
                <div key={idx} className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm text-gray-700 animate-slideDown border-b border-gray-100" style={{animationDelay: `${idx * 100}ms`}} onClick={() => handleAutocompleteClick(word)}>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    <span className="font-medium text-blue-600">{currentQuery}</span>
                    <span className="text-gray-700">{word.substring(currentQuery.length)}</span>
                    <span className="text-xs text-gray-400 ml-auto">from index</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Suggestions Section */}
          {getSuggestions().length > 0 && (
            <div>
              <div className="px-4 py-2 text-xs text-gray-500 border-b bg-gray-50">Suggestions</div>
              {getSuggestions().slice(0, 3).map((suggestion, idx) => (
                <a key={idx} href={suggestion.href} target="_blank" rel="noopener noreferrer" className="block px-4 py-3 hover:bg-gray-50 cursor-pointer animate-slideUp border-b border-gray-100 last:border-b-0 no-underline" style={{animationDelay: `${idx * 100}ms`}} onClick={() => handleSuggestionClick(suggestion)}>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">{suggestion.title}</span>
                    <svg className="w-3 h-3 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Search Results */}
      {searchPhase === 'results' && getSearchResults().length > 0 && (
        <div className="space-y-4 animate-fadeIn">
          <div className="text-xs text-gray-500 mb-3">About 1,234,567 results (0.45 seconds)</div>
          {getSearchResults().map((result, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow cursor-pointer animate-slideUp" style={{animationDelay: `${idx * 150}ms`}}>
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-blue-600 font-medium text-lg hover:underline line-clamp-2">{result.title}</h4>
                <svg className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <div className="text-xs text-green-700 mb-2 truncate">{result.url}</div>
              <p className="text-gray-600 text-sm leading-relaxed">{result.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function FederatedSearchDemo() {
  return (
    <div className="mt-6">
      <h4 className="text-xl font-bold text-blue-700 mb-4">Federated Search API Demo</h4>
      <p className="text-gray-600 text-sm mb-4">
        Interactive demo of <strong>Autocomplete</strong>, <strong>Suggestions</strong>, and <strong>Search APIs </strong> 
        Integrated across <strong>15+ help centers</strong> providing results from <strong>brand websites</strong>
      </p>
      <GoogleLikeSearchDemo />
    </div>
  );
}
