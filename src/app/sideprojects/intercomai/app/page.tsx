'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Header } from '@/lib/intercomai/components/Header'
import { Hero } from '@/lib/intercomai/components/Hero'
import { InputForm } from '@/lib/intercomai/components/InputForm'
import { ResultView } from '@/lib/intercomai/components/ResultView'
import { TemplatesView } from '@/lib/intercomai/components/TemplatesView'
import { HistoryView } from '@/lib/intercomai/components/HistoryView'
import { generateCommunication, checkCompliance } from '@/lib/intercomai/services/demoService'
import { Tone, Format, Language, GenerationSettings, GenerationState, ComplianceState, AppView, HistoryItem, Template, GeneratedContent } from '@/lib/intercomai/types'
import { AlertCircle } from 'lucide-react'

export default function IntercomAIApp() {
  const [currentView, setCurrentView] = useState<AppView>('generator')
  const [rawText, setRawText] = useState('')
  const [settings, setSettings] = useState<GenerationSettings>({
    tone: Tone.PROFESSIONAL,
    format: Format.EMAIL,
    targetAudience: 'All Employees',
    language: Language.ENGLISH
  })
  
  const [genState, setGenState] = useState<GenerationState>({
    status: 'idle'
  })

  const [complianceState, setComplianceState] = useState<ComplianceState>({
    status: 'idle'
  })

  const [history, setHistory] = useState<HistoryItem[]>([])
  const toolRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage?.getItem) {
      const savedHistory = window.localStorage.getItem('intcomm_history')
      if (savedHistory) {
        try {
          setHistory(JSON.parse(savedHistory))
        } catch (e) {
          console.error("Failed to parse history", e)
        }
      }
    }
  }, [])

  const scrollToTool = () => {
    setCurrentView('generator')
    setTimeout(() => {
      toolRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const saveToHistory = (content: GeneratedContent, usedSettings: GenerationSettings, usedText: string) => {
    const newItem: HistoryItem = {
      id: Date.now().toString(),
      timestamp: Date.now(),
      rawText: usedText,
      settings: usedSettings,
      result: content
    }
    
    const updatedHistory = [newItem, ...history]
    setHistory(updatedHistory)
    localStorage.setItem('intcomm_history', JSON.stringify(updatedHistory))
  }

  const handleClearHistory = () => {
    setHistory([])
    try {
      localStorage.removeItem('intcomm_history')
    } catch (e) {
      console.error("Failed to clear local storage", e)
    }
  }

  const handleLoadHistory = (item: HistoryItem) => {
    setRawText(item.rawText)
    setSettings(item.settings)
    setGenState({
      status: 'success',
      data: item.result
    })
    setComplianceState({ status: 'idle' })
    setCurrentView('generator')
    scrollToTool()
  }

  const handleSelectTemplate = (template: Template) => {
    setRawText(template.rawText)
    setSettings(template.settings)
    setGenState({ status: 'idle' })
    setComplianceState({ status: 'idle' })
    setCurrentView('generator')
    scrollToTool()
  }

  const handleGenerate = async () => {
    setGenState({ status: 'generating' })
    setComplianceState({ status: 'idle' })
    
    try {
      const result = await generateCommunication(rawText, settings)
      setGenState({
        status: 'success',
        data: result
      })
      saveToHistory(result, settings, rawText)
    } catch (error) {
      setGenState({
        status: 'error',
        error: error instanceof Error ? error.message : "An unexpected error occurred"
      })
    }
  }

  const handleRunCompliance = async () => {
    if (!genState.data) return

    setComplianceState({ status: 'checking' })
    try {
      const result = await checkCompliance(genState.data.content, settings.tone)
      setComplianceState({
        status: 'success',
        data: result
      })
    } catch (error) {
       console.error(error)
       setComplianceState({ 
         status: 'error',
         error: error instanceof Error ? error.message : "Failed to run compliance check."
       })
    }
  }

  const handleReset = () => {
    setGenState({ status: 'idle' })
    setComplianceState({ status: 'idle' })
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-24">
      {/* Demo Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium">
            ✨ Demo Mode: This application uses simulated AI responses for demonstration purposes
          </p>
        </div>
      </div>
      
      {/* Back to Portfolio Link */}
      <div className="bg-white border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/sideprojects/intercomai"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            <i className="fas fa-arrow-left"></i>
            Back to Project Details
          </Link>
        </div>
      </div>

      <Header currentView={currentView} onNavigate={setCurrentView} />
      
      {currentView === 'generator' && genState.status === 'idle' && !rawText && (
        <Hero onStart={scrollToTool} />
      )}

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8" ref={toolRef}>
        
        {currentView === 'templates' && (
          <TemplatesView onSelect={handleSelectTemplate} />
        )}

        {currentView === 'history' && (
          <HistoryView 
            history={history} 
            onLoad={handleLoadHistory} 
            onClear={handleClearHistory} 
          />
        )}

        {currentView === 'generator' && (
          <>
            {genState.status === 'error' && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3 text-red-700 shadow-sm animate-in slide-in-from-top-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">Generation Failed</h4>
                  <p className="text-sm opacity-90">{genState.error}</p>
                </div>
                <button 
                  onClick={() => setGenState({ ...genState, status: 'idle' })} 
                  className="px-3 py-1.5 bg-white border border-red-200 rounded-md text-sm font-semibold hover:bg-red-50 transition-colors"
                >
                  Dismiss
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[600px]">
              <div className={`transition-all duration-500 ${genState.status === 'success' ? 'hidden lg:block lg:opacity-50 hover:opacity-100' : 'block'}`}>
                 <InputForm 
                   rawText={rawText}
                   setRawText={setRawText}
                   settings={settings}
                   setSettings={setSettings}
                   onSubmit={handleGenerate}
                   isGenerating={genState.status === 'generating'}
                 />
              </div>

              <div className="h-full">
                {genState.status === 'success' && genState.data ? (
                  <ResultView 
                    data={genState.data} 
                    onReset={handleReset}
                    onCheckCompliance={handleRunCompliance}
                    complianceState={complianceState}
                  />
                ) : (
                  <div className={`h-full border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center p-8 text-center bg-slate-50/50 ${genState.status === 'generating' ? 'animate-pulse' : ''} ${genState.status === 'success' ? 'hidden' : 'flex'}`}>
                    {genState.status === 'generating' ? (
                       <div className="max-w-sm w-full space-y-4">
                         <div className="flex justify-center mb-4">
                            <div className="relative w-16 h-16">
                              <div className="absolute top-0 left-0 w-full h-full border-4 border-slate-200 rounded-full"></div>
                              <div className="absolute top-0 left-0 w-full h-full border-4 border-indigo-500 rounded-full border-t-transparent animate-spin"></div>
                            </div>
                         </div>
                         <h3 className="text-lg font-semibold text-slate-700">Analyzing your notes...</h3>
                         <div className="h-2 bg-slate-200 rounded w-3/4 mx-auto"></div>
                         <div className="h-2 bg-slate-200 rounded w-1/2 mx-auto"></div>
                       </div>
                    ) : (
                      <div className="max-w-sm">
                        <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">✨</span>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-700 mb-2">Magic Output Window</h3>
                        <p className="text-slate-500 text-sm">
                          Your polished email, subject lines, and summary will appear here once you hit generate.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </main>
      
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 py-4 z-40">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} IntcommAI. AI-Powered Internal Communications Assistant.</p>
        </div>
      </footer>
    </div>
  )
}
