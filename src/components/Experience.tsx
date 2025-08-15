'use client'

export default function Experience() {
  // Calculate experience from March 1, 2021 to current date
  const getExperience = () => {
    const startDate = new Date('2021-03-01')
    const currentDate = new Date()
    
    // Calculate total days
    const totalDays = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    
    // Calculate years and remaining days
    const years = Math.floor(totalDays / 365.25) // Using 365.25 to account for leap years
    const remainingDays = totalDays - (years * 365.25)
    
    // If remaining days are within ±30 days of a full year, show exact years
    // Otherwise show n+ years
    if (Math.abs(remainingDays) <= 30) {
      return `${years} years`
    } else {
      return `${years}+ years`
    }
  }

  const experiences = [
    {
      id: 1,
      company: "HALEON",
      position: "Machine Learning Engineer (MLOps)",
      duration: "April 2024 - Present",
      location: "Bengaluru, India",
      description: <>Productionizing Data Science Services, Infrastructure, and Pipelines on <strong>Azure</strong> and <strong>Databricks</strong> for scalable and reliable deployment.</>,
      achievements: [
        <><span className="font-bold text-blue-600">Asset Vision</span>: Designed, implemented a robust CI/CD pipeline with <strong>GitHub Actions</strong> to build and publish Docker images to GitHub Container Registry (<strong>GHCR</strong>) and Azure Container Registry (<strong>ACR</strong>), enabling automated deployment to <strong>Azure Web App</strong> and microservices on <strong>Kubernetes</strong> cluster for scalable, secure and reliable application management across environments. Applied same approach to streamline deployments in other <strong>RAG</strong> based project.</>,
        <><span className="font-bold text-blue-600">MLOps Template for Databricks</span>: Improved and implemented a comprehensive MLOps template for <strong>Databricks</strong> leveraging <strong>GitHub Actions</strong> to automate CI/CD pipelines, including code linting, testing, environment setup, and seamless deployment of <strong>Spark</strong> jobs, such as model training, validation, and deployment, resulting in significantly enhanced workflow efficiency and reduced deployment times.</>,
        <><span className="font-bold text-blue-600">Prometheus</span>: Implemented end-to-end MLOps framework using <strong>Databricks Bundles</strong>, <strong>Unity Catalog</strong>, and <strong>GitHub Actions</strong>. Built robust CI/CD workflows with linting, testing, bundle validation, pre and post <strong>semantic versioning</strong>, and automated Databricks job orchestration across Dev/UAT/Prod. Enabled dynamic, market and brand specific task generation at <strong>runtime</strong>, versioned model and data persistence in Unity Catalog, and reproducible deployments via explicit <strong>semantic release tags</strong>, with outputs seamlessly refreshed in Power BI for stakeholders.</>,
        <><span className="font-bold text-blue-600">Federated Help Center Search</span>: Architected a federated search solution across 15+ brand help center URLs, integrating web crawlers with <strong>Azure Blob Storage</strong> and <strong>Azure AI Search</strong>. Automated data pipeline scraping, ingestion, indexing, and deployment - using <strong>GitHub Actions</strong> for real-time updates. Providing intelligent <strong>search</strong>, <strong>autocomplete</strong>, and <strong>suggestion</strong> APIs for seamless integration into <strong>user-facing</strong> platforms. Built a POC for <strong>generative</strong> search using <strong>Azure OpenAI</strong>, based on results from Azure AI Search APIs.</>,
        <><span className="font-bold text-blue-600">Procurement Contract Analysis</span>: Led ML-Ops for a RAG-based (<strong>Agentic-RAG</strong>) system by productionizing modular workflows with <strong>Databricks Asset Bundles</strong>, integrating <strong>Azure Document Intelligence</strong>, Unity Catalog, and model serving endpoints along with automated deployment of <strong>Databricks App</strong>. Built CI/CD pipelines with GitHub Actions for automated, rollback-ready workflows, deployments, and <strong>GitOps</strong>-based orchestration.</>
      ],
      technologies: ["Azure", "Databricks", "GitHub Actions", "Docker", "Kubernetes", "Unity Catalog", "Azure AI Search", "Azure OpenAI", "Spark", "Python"]
    },
    {
      id: 2,
      company: "CARS24",
      position: "Machine Learning Engineer (MLOps)",
      duration: "Sept 2021 - April 2024",
      location: "Gurgaon, India",
      description: <>Productionizing DS/BI/Data-engg/Infras/Pipelines on <a href="https://drive.google.com/file/d/1ys4_Llp7ZkcE6OAZltXG0TYTDloTeyrk/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800 underline">GCP</a> (GKE, Kserve, Triton Inference Server, PostgreSQL, Airflow and VertexAI).</>,
      achievements: [
        <>Robust <strong>CI/CD</strong> pipelines using <strong>Cloud Build</strong> for seamless and automated deployment of microservices and batch services on <strong>GKE</strong>, <strong>Cloud Functions</strong>, and <strong>Cloud Run</strong>, significantly reducing deployment errors, manual effort, and turnaround times across environments. Collaborated with DS team to optimise code and model inference for higher throughput.</>,
        <>Architected, deployed and <strong>upgraded</strong> <a href="https://drive.google.com/file/d/1EiB-sycgO4hvr8fHgADF9dxfzn7_stRd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800 underline">Inference store</a> (<strong>EdgeDB</strong> on Google Kubernetes Engine with provisioned <strong>PostgreSQL</strong> instance as backend) with <strong>FastAPI</strong> endpoints deployed in GKE. API employed across various DS Services for efficient caching and retrieval of inferences in real time (latency around <strong>5ms</strong>), as well as in batch processing jobs with traffic coming from Queue (<strong>PubSub</strong>) or an Orchestrator (<strong>Airflow</strong>). Integrated <strong>CI/CD pipelines</strong> for automated deployments in GCP (<a href="https://drive.google.com/file/d/1N74h6xg6Mt_vOa5Wg5WjDznmxcH0gO5o/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800 underline">Upgrade Flow</a>).</>,
        <>Efficiently deployed <strong>Feast</strong> <a href="https://drive.google.com/file/d/1kRH6hHc4K-P7_nUQc4gfLsYowGT7T8Bb/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800 underline">feature-server</a> on Google Kubernetes Engine, leveraging an automated materialization pipeline for real-time data updates in <strong>Redis</strong> (Online Store) and <strong>BigQuery</strong> (Offline Store) via Cloud Functions triggered by a diverse range of team data uploads in a GCS bucket. API effectively addresses the challenge of accessing up-to-date features from CSV files and currently employed in 10+ DS services, delivering features with minimal latency (<strong>&lt;10ms</strong>). <strong>CI/CD</strong> enabled for robust rollouts.</>,
        <>Built <a href="https://drive.google.com/file/d/1vI9r8uVN2BiVGF7693YAazSOz1yyX0YX/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800 underline">data flow pipeline</a> to optimize the timely data sync between Snowflake and Google Sheets using <strong>Airflow</strong>, <strong>Pub-Sub</strong>, <strong>EdgeDB</strong> and <strong>GKE</strong>. Syncing data for approx 2500 Sheets with roughly 15000 Jobs/day. (<a href="https://medium.com/cars24-data-science-blog/upgrading-data-flow-pipeline-cars24-1b6b8aea48e" target="_blank" rel="noopener noreferrer" className="font-semibold text-green-600 hover:text-green-800 underline">blog</a>) (<a href="https://www.linkedin.com/posts/moderndatastack_optimizing-data-flow-cars24-activity-7026209461774016513-vJSR/?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-600 hover:text-purple-800 underline">citation</a> by Modern Data Stack, <a href="https://www.dataengineeringweekly.com/i/96964228/cars-upgrading-data-flow-pipeline-at-cars" target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-600 hover:text-purple-800 underline">citation</a> by Data Engineering Weekly).</>,
        <>Deployed, administered, upgraded a robust <strong>Airflow</strong> infrastructure on Google Kubernetes Engine, overseeing <strong>70+</strong> diverse git synchronised DAGs running approx <strong>1000+</strong> times daily, covering a total of <strong>3800+</strong> tasks executions to support various DS-BI teams. Efficiently managed the execution of tasks, encompassing Cloud Function triggering, job scheduling, PubSub messaging, EdgeDB integration for jobs status update, and Snowflake-to-Google Sheets data synchronization and seamless integration with diverse GCP services. Implemented <strong>RBAC</strong> to enhance team visibility, established automated log cleanup with ensuring a streamlined, well-maintained system.</>,
        <>Spearheaded <a href="https://drive.google.com/file/d/1XvlTULCTfEpB50KFcBauyYWsQqSKzlrg/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800 underline">migration</a> of NBFC DS infrastructure from <strong>AWS</strong> to <strong>GCP</strong>, breaking down monolith into scalable sub-monoliths and GKE-based microservices. Decoupled DB operations, slashing response times from <strong>3 seconds</strong> to <strong>503ms</strong> (99th percentile), eliminated overall timeouts, previously at <strong>8-9%</strong>. Implemented streamlined data flow via Pub/Sub and Cloud Functions, enabling efficient EdgeDB updates and hourly Snowflake synchronization. CI/CD pipelines orchestrated for seamless deployment of microservices on GKE and respective cloud functions.</>,
        <>Developed a pip-installable, reusable Python wheel package for seamless integration with <strong>Triton Inference Server</strong>, supporting high-performance model inference by handling both <strong>HTTP</strong> and <strong>GRPC</strong> requests in <strong>synchronous</strong> and <strong>asynchronous</strong> modes, with built-in logging, error handling, and configuration flexibility.</>,
        <>Designed, deployed high-performance APIs <strong>Request-Response Store</strong> using <strong>FastAPI</strong>, featuring <strong>client authentication</strong>, <strong>rate limiting</strong> and <strong>low 5ms latency</strong>. Orchestrated storage of request-response in <strong>EdgeDB</strong>, synchronized to <strong>Snowflake</strong> based on team-defined frequencies, and leveraged by 10+ DS services.</>,
        <>Designed and implemented a cloud-based workflow for end-to-end processing of customer interactions data. The workflow encompasses data ingestion from Snowflake, audio download, transcription generation, information extraction, and automated customer summary generation. This system is orchestrated through <strong>Airflow</strong> and leverages Google Cloud Functions, Cloud Storage, <strong>Kserve InferenceService</strong>, <strong>Triton</strong>, <strong>MongoDB</strong> and <strong>EdgeDB</strong>.</>,
        <>Experimenting with deploying <strong>Doris</strong>, <strong>StarRocks</strong>, and associated open-source tools on <strong>GKE</strong> to construct a scalable and high-performance data platform, incorporating <strong>S3</strong>-compatible object storage via <strong>MINIO/GCS</strong>, implementing access control and data retention policies, and ensuring effective <strong>Kubernetes</strong> cluster monitoring and alerting through <strong>Grafana&apos;s</strong> dashboards utilizing <strong>Prometheus</strong> as a primary time-series data source.</>,
        <>Experimented <a href="https://drive.google.com/file/d/19KvVtSsnsxLBpRJoE9-SFJGd9gzmTkkN/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800 underline">Minio and Milvus</a> integration to extract audio embeddings from Minio, enabling efficient search for similar content, Redis for metadata storage.</>,
        <>Commended and highly appreciated by the COO and VP (DS and BI) for exemplary performance and remarkable contributions.</>
      ],
      technologies: ["GCP", "GKE", "Kserve", "Triton Inference Server", "PostgreSQL", "Airflow", "VertexAI", "EdgeDB", "FastAPI", "Feast", "Redis", "BigQuery", "Cloud Build", "Pub/Sub", "Snowflake", "MongoDB", "Doris", "StarRocks", "MINIO", "Milvus", "Grafana", "Prometheus"],
      blogs: [
        {
          title: "Optimizing Data Flow @ CARS24",
          url: "https://medium.com/cars24-data-science-blog/optimizing-data-flow-cars24-4c0a17b797d1"
        },
        {
          title: "ML in Production @ CARS24 (Part 1)",
          url: "https://medium.com/cars24-data-science-blog/ml-in-production-cars24-part-1-e712f54e20a2"
        },
        {
          title: "Upgrading Data Flow Pipeline @ CARS24",
          url: "https://medium.com/cars24-data-science-blog/upgrading-data-flow-pipeline-cars24-1b6b8aea48e"
        },
        {
          title: "ML in Production @ CARS24 (Part 2)",
          url: "https://medium.com/cars24-data-science-blog/ml-in-production-cars24-part-2-6a717340d8e6"
        }
      ]
    },
    {
      id: 3,
      company: "Deep Sight AI Labs",
      position: "Computer Vision Software Engineer",
      duration: "June 2021 - Sept 2021",
      location: "Remote",
      description: <>Developed solutions for <strong>object detection</strong>, <strong>object tracking</strong>, and <strong>video surveillance</strong> utilizing <strong>Deep Learning</strong> techniques.</>,
      achievements: [
        <>Implemented a reference direction-based <strong>entry-exit system</strong> and <strong>Object Counting Feature</strong> using <strong>DeepSort</strong>, showcased in video below 👇</>,
        <>Conducted <strong>TensorFlow Lite</strong> model conversion of <strong>DeepSort</strong> and executed its deployment on <strong>Raspberry Pi</strong> hardware.</>
      ],
      technologies: ["Computer Vision", "Deep Learning", "DeepSort", "TensorFlow Lite", "Raspberry Pi", "Object Detection", "Object Tracking", "Video Surveillance"],
      video: {
        title: "Directions & Counting of moving Vehicles with velocity vector using Deep SORT",
        url: "https://www.youtube.com/watch?v=l9d9lOKmxEs&t=1s",
        thumbnail: "https://img.youtube.com/vi/l9d9lOKmxEs/hqdefault.jpg"
      }
    },
    {
      id: 4,
      company: "DocBot+",
      position: "Artificial Intelligence Engineer Intern",
      duration: "March 2021 - May 2021",
      location: "Remote",
      description: <>Developed intelligent healthcare solutions focusing on <strong>disease diagnosis</strong> and <strong>symptom analysis</strong> using <strong>machine learning</strong> algorithms.</>,
      achievements: [
        <>Developed algorithm for <strong>many-to-many mapping</strong> of symptoms to diseases, enabling <strong>disease diagnosis</strong> based on symptom sets.</>,
        <>Created mathematical formulation to facilitate <strong>symptom recommendation</strong>, improving user experience and healthcare decision-making.</>,
        <>Generated random datasets to rigorously test and optimize <strong>ML algorithms</strong> for <strong>recommendation systems</strong>.</>
      ],
      technologies: ["Machine Learning", "Data Analysis", "Algorithm Development", "Healthcare AI", "Python", "Recommendation Systems"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600">
            {getExperience()} of building scalable ML systems and platforms
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-blue-200"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              
              {/* Content */}
              <div className="ml-20">
                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {exp.position}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600">
                        <span className="font-semibold text-blue-600">{exp.company}</span>
                        <span className="hidden sm:block">•</span>
                        <span>{exp.duration}</span>
                        <span className="hidden sm:block">•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-gray-700 mb-6 leading-relaxed">
                    {typeof exp.description === 'string' ? exp.description : exp.description}
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <i className="fas fa-check-circle text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                          <div className="text-gray-700">
                            {typeof achievement === 'string' ? achievement : achievement}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Video Showcase Section */}
                  {exp.video && (
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Video
                      </h4>
                      <div className="relative">
                        <a
                          href={exp.video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                          <img
                            src={exp.video.thumbnail}
                            alt={exp.video.title}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              // Fallback to medium quality thumbnail if high quality fails
                              const target = e.target as HTMLImageElement;
                              if (target.src.includes('hqdefault')) {
                                target.src = target.src.replace('hqdefault', 'mqdefault');
                              } else if (target.src.includes('mqdefault')) {
                                target.src = target.src.replace('mqdefault', '0');
                              }
                            }}
                          />
                          {/* Play button overlay */}
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                            <div className="bg-red-600 rounded-full p-4 group-hover:bg-red-700 transition-colors duration-300 shadow-lg">
                              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                              </svg>
                            </div>
                          </div>
                          {/* Video title overlay */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                            <h5 className="text-white font-semibold text-lg">{exp.video.title}</h5>
                            <p className="text-gray-300 text-sm">Click to watch on YouTube</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Blogs Section */}
                  {exp.blogs && (
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Blogs Written & Contributed
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {exp.blogs.map((blog: { url: string; title: string }, idx: number) => (
                          <a
                            key={idx}
                            href={blog.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors group"
                          >
                            <i className="fas fa-blog text-green-600 mr-3"></i>
                            <span className="text-green-800 font-medium group-hover:text-green-900">
                              {blog.title}
                            </span>
                            <i className="fas fa-external-link-alt text-green-500 ml-auto text-sm"></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">
                {getExperience()}
              </h3>
              <p className="text-gray-600">Total Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">4</h3>
              <p className="text-gray-600">Companies Worked</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">10+</h3>
              <p className="text-gray-600">Team Members Led</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
