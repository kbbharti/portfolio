'use client'

export default function Contact() {
  const handleDraftMessage = (subject: string = '') => {
    const email = 'Khushbubharti.05@gmail.com'
    const defaultSubject = subject || 'Portfolio Inquiry'
    
    const body = encodeURIComponent(`Hi Khushbu 👋,

I hope this message finds you well. I recently came across your work and was truly impressed by your expertise in Corporate Communications 📢, Marketing Strategy 📈, and innovative storytelling 💡.  

I&apos;d love to connect with you regarding ${subject || 'a potential collaboration / opportunity'} and explore how we might work together to create impactful, results-driven communication solutions 🚀.  

Looking forward to hearing from you 🙌.

Best regards,  
[Your Name]  
[Your Contact Details]  
`)
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(defaultSubject)}&body=${body}`
    window.open(gmailUrl, '_blank')
  }
  
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16">
          Get In Touch
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Ready to elevate your brand&apos;s story? I&apos;m passionate about collaborating on innovative marketing campaigns, 
              building compelling communications strategies, and solving complex brand challenges. Let&apos;s create impactful narratives together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 p-8 rounded-xl shadow-xl border border-gray-600">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <i className="fas fa-address-card text-blue-400 mr-3"></i>
                Contact Information
              </h3>
              <div className="mb-8 space-y-4">
                <div className="flex items-center p-4 bg-gray-800 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-envelope text-blue-400"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Email</p>
                    <span className="text-gray-200 font-semibold text-sm">Khushbubharti.05@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-800 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt text-green-400"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Location</p>
                    <span className="text-gray-200 font-semibold">Bengaluru, India</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                  <i className="fas fa-share-alt text-purple-400 mr-2"></i>
                  Let&apos;s Connect
                </h4>
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-3">
                  <a href="https://www.linkedin.com/in/khushbu-bharti-1a4161200" target="_blank" rel="noopener noreferrer" className="group bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-600 hover:border-blue-400">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-600 transition-colors">
                        <i className="fab fa-linkedin text-blue-400 text-lg group-hover:text-white"></i>
                      </div>
                      <span className="text-xs font-semibold text-gray-200 group-hover:text-blue-400">LinkedIn</span>
                    </div>
                  </a>
                  <a href="tel:+917727827134" className="group bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-600 hover:border-green-400">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mb-2 group-hover:bg-green-600 transition-colors">
                        <i className="fas fa-phone text-green-400 text-lg group-hover:text-white"></i>
                      </div>
                      <span className="text-xs font-semibold text-gray-200 group-hover:text-green-400">Phone</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 p-8 rounded-xl shadow-xl border border-gray-600">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <i className="fas fa-paper-plane text-purple-400 mr-3"></i>
                Start a Conversation
              </h3>
              
              <div className="mb-6">
                <p className="text-gray-300 leading-relaxed">
                  Choose your preferred discussion topic and I&apos;ll help you craft the perfect message. 
                  Each option opens Gmail with a professionally structured email template.
                </p>
              </div>
              
              <div className="space-y-3">
                <button 
                  onClick={() => handleDraftMessage('Marketing Strategy Collaboration')}
                  className="group w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-between shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                      <i className="fas fa-chart-line text-white text-sm"></i>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-sm">Marketing Strategy</p>
                      <p className="text-xs text-green-100">Discuss campaigns & brand growth</p>
                    </div>
                  </div>
                  <i className="fas fa-arrow-right text-white group-hover:translate-x-1 transition-transform"></i>
                </button>
                
                <button 
                  onClick={() => handleDraftMessage('Communications Consultation')}
                  className="group w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-violet-700 transition-all duration-300 flex items-center justify-between shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                      <i className="fas fa-bullhorn text-white text-sm"></i>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-sm">Communications</p>
                      <p className="text-xs text-purple-100">PR & corporate messaging</p>
                    </div>
                  </div>
                  <i className="fas fa-arrow-right text-white group-hover:translate-x-1 transition-transform"></i>
                </button>
                
                <button 
                  onClick={() => handleDraftMessage('General Inquiry')}
                  className="group w-full bg-gradient-to-r from-gray-600 to-slate-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-gray-700 hover:to-slate-700 transition-all duration-300 flex items-center justify-between shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                      <i className="fas fa-envelope text-white text-sm"></i>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-sm">General Inquiry</p>
                      <p className="text-xs text-gray-100">Any questions or custom needs</p>
                    </div>
                  </div>
                  <i className="fas fa-arrow-right text-white group-hover:translate-x-1 transition-transform"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="mt-20 border-t border-gray-600 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 Khushbu Bharti - Corporate Communications & Marketing Specialist. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  )
}
