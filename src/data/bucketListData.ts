export interface BucketListItem {
  id: number
  title: string
  description: string
  category: 'travel' | 'career' | 'personal' | 'adventure' | 'learning'
  difficulty: 1 | 2 | 3 | 4 | 5
  completed?: boolean
}

export const bucketListData: BucketListItem[] = [
  // ✅ Completed Items
  {
    id: 1,
    title: "🏔️ Basic Mountaineering Course from NIMAS",
    description: "✅ Successfully completed the Basic Mountaineering Course at the National Institute of Mountaineering and Adventure Sports (NIMAS) 🧗‍♂️❄️, gaining skills in rock climbing, snowcraft, and survival in extreme terrains.",
    category: "adventure",
    difficulty: 4,
    completed: true
  },
  {
    id: 2,
    title: "📵 15-20 Days Digital Detox",
    description: "🌿 Spent 15-20 days completely away from smartphones 📱, laptops 💻, and social media 📪, reconnecting with nature 🌳, real conversations 🗣️, and mindful living 🧘‍♂️.",
    category: "personal",
    difficulty: 4,
    completed: true
  },

  // 🚀 Todo Items - Adventure
  {
    id: 3,
    title: "🧗‍♂️ Advanced Mountaineering Course",
    description: "🏔️ Undertake the Advanced Mountaineering Course to master technical climbing 🧗, high-altitude survival ⛺, and expedition leadership 🗺️, preparing for extreme expeditions.",
    category: "adventure",
    difficulty: 5,
    completed: false
  },
  {
    id: 4,
    title: "🥾 Everest Base Camp Trek",
    description: "🌏 Embark on the iconic trek to Everest Base Camp 🏔️ in Nepal 🇳🇵, experiencing breathtaking Himalayan views 🌄, Sherpa culture 🙏, and the thrill of being close to the world's highest peak ⛰️.",
    category: "adventure",
    difficulty: 4,
    completed: false
  },

  // 🏡 Todo Items - Personal & Learning
  {
    id: 5,
    title: "🏍️ Buy a Good Bike",
    description: "🛣️ Purchase a high-quality motorbike 🏍️ suitable for adventure rides 🏕️ and long-distance touring 🚗, combining passion for travel 🌍 with fitness 💪 and lifestyle improvement.",
    category: "personal",
    difficulty: 2,
    completed: false
  },
  {
    id: 6,
    title: "🎓 PhD in Machine Learning",
    description: "💡 Pursue and complete a doctoral degree 🎓 in Machine Learning/Artificial Intelligence 🤖, contributing original research 📚 and innovations 💻 in AI applications and ethics.",
    category: "learning",
    difficulty: 5,
    completed: false
  },
  {
    id: 7,
    title: "📖 Read Books on Common Sense & Human Behaviour",
    description: "🧠 Dive deep into psychology 🧠, sociology 📊, and behavioral science 📕 to better understand human thought processes 💭, decision-making ⚖️, and emotional intelligence ❤️.",
    category: "learning",
    difficulty: 3,
    completed: false
  }
]