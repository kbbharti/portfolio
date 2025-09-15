import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="space-y-6 lg:col-span-3">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a Corporate Communications & Marketing Specialist with 5+ years of experience shaping internal and external communications, PR, employer branding, product marketing, program marketing, and performance-led campaigns across diverse industries. My journey spans Amazon, Computacenter, Shoppers Stop, and collaborations with global brands where I have shaped executive messaging and leadership narratives that influence stakeholders, designed multi-channel campaigns that drove adoption, retention, and measurable growth, and built employer branding initiatives that strengthened engagement and talent attraction.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Today, I am channeling this foundation into a strategic path—blending my expertise in communications with data-driven insights, product positioning, user experience, and strategic planning. My goal is to bridge marketing execution with business strategy, driving long-term impact at scale.
            </p>
          </div>
          
          <div className="flex justify-center lg:col-span-2">
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gray-700 rounded-lg shadow-lg p-3">
                  <Image 
                    src="/Power_BI_Logo.svg.png" 
                    alt="Power BI" 
                    width={48} 
                    height={48}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-300 text-sm font-medium">Power BI</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gray-700 rounded-lg shadow-lg p-3">
                  <Image 
                    src="/Microsoft_Office_Excel.svg" 
                    alt="Excel" 
                    width={48} 
                    height={48}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-300 text-sm font-medium">Excel</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gray-700 rounded-lg shadow-lg p-3">
                  <Image 
                    src="/tableau.svg" 
                    alt="Tableau" 
                    width={48} 
                    height={48}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-300 text-sm font-medium">Tableau</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gray-700 rounded-lg shadow-lg p-3">
                  <Image 
                    src="/HubSpot_Logo.svg" 
                    alt="HubSpot" 
                    width={48} 
                    height={48}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-300 text-sm font-medium">HubSpot</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gray-700 rounded-lg shadow-lg p-3">
                  <Image 
                    src="/Logo_Google_Analytics.svg" 
                    alt="Google Analytics" 
                    width={48} 
                    height={48}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-300 text-sm font-medium">Analytics</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gray-700 rounded-lg shadow-lg p-3">
                  <Image 
                    src="/Microsoft_Office_PowerPoint.svg" 
                    alt="PowerPoint" 
                    width={48} 
                    height={48}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-300 text-sm font-medium">PowerPoint</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
