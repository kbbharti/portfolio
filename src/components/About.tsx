import Image from 'next/image'
import { getAssetPath } from '../utils/assets'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-200">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a Marketing & Communications Specialist with 6+ years of experience driving product adoption, strengthening employer brands, and leading large-scale internal and external communication strategies. I combine storytelling, data, and cross-functional collaboration to launch high-impact programs, shape brand perception, and enable teams to deliver measurable business outcomes. My work spans GTM strategy, program & product marketing, employer branding, PR, and analytics bringing a holistic approach to how products communicate, grow, and build trust with users.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center lg:col-span-2">
            <div className="grid grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-lg shadow-lg">
                  <Image 
                    src={getAssetPath("/Power_BI_Logo.svg.png")} 
                    alt="Power BI" 
                    width={48} 
                    height={48}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm font-medium">Power BI</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-lg shadow-lg">
                  <Image 
                    src={getAssetPath("/Microsoft_Office_Excel.svg")} 
                    alt="Excel" 
                    width={48} 
                    height={48}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm font-medium">Excel</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-lg shadow-lg">
                  <Image 
                    src={getAssetPath("/tableau.svg")} 
                    alt="Tableau" 
                    width={48} 
                    height={48}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm font-medium">Tableau</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-lg shadow-lg">
                  <Image 
                    src={getAssetPath("/sql.png")} 
                    alt="SQL" 
                    width={48} 
                    height={48}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm font-medium">SQL</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-lg shadow-lg">
                  <Image 
                    src={getAssetPath("/HubSpot_Logo.svg")} 
                    alt="HubSpot" 
                    width={48} 
                    height={48}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm font-medium">HubSpot</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-lg shadow-lg">
                  <Image 
                    src={getAssetPath("/Logo_Google_Analytics.svg")} 
                    alt="Google Analytics" 
                    width={48} 
                    height={48}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm font-medium">Analytics</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-lg shadow-lg">
                  <Image 
                    src={getAssetPath("/Microsoft_Office_PowerPoint.svg")} 
                    alt="PowerPoint" 
                    width={48} 
                    height={48}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm font-medium">PowerPoint</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-lg shadow-lg">
                  <Image 
                    src={getAssetPath("/jasper.svg")} 
                    alt="Jasper AI" 
                    width={48} 
                    height={48}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm font-medium">Jasper AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
