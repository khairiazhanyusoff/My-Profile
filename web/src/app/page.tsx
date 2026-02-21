export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800 antialiased">
      <header className="bg-white shadow">
        <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight">Muhammad Khairi Azhan</h1>
          <p className="mt-2 text-gray-600">AI Automation &amp; Data Engineer cum Full Stack Developer at Intel Corporation</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <section className="mt-8">
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/khairiazhanyusoff/" className="inline-block">
              <img src="https://img.shields.io/badge/LinkedIn-khairiazhanyusoff-blue?logo=linkedin" alt="LinkedIn" />
            </a>
            <a href="https://github.com/kaiyusoff" className="inline-block">
              <img src="https://img.shields.io/badge/GitHub-kaiyusoff-dark?logo=github" alt="GitHub" />
            </a>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-4">
            <strong>Senior GenAI Full Stack Developer &amp; Product Lead Engineer @ Intel Corporation</strong>
          </p>
          <ul className="list-disc list-inside mt-4 space-y-1">
            <li>🏢 Based in Kulim Campus, Malaysia</li>
            <li>🎓 Degree in Electronic Engineering (Systems) | UiTM Shah Alam</li>
            <li>🌐 Building scalable cloud and AI solutions for global teams</li>
            <li>🏆 Leading product development for 9+ Intel products &amp; major engineering dashboards</li>
            <li>💡 Passionate about automation, RAG AI, and empowering teams</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Technologies &amp; Tools</h2>
          <p className="mt-4">
            <strong>Languages:</strong> Python, SQL, TypeScript, Next.js, C++, C#, Java, Flutter, Swift, GoLang, .NET, React, Angular, Vue.js
          </p>
          <p className="mt-2">
            <strong>Frameworks:</strong> FastAPI, Pandas, Numpy, Flask, Playwright, Selenium, Streamlit, LangChain
          </p>
          <p className="mt-2">
            <strong>Cloud &amp; DevOps:</strong> Kubernetes, Docker, Rancher, Harbor, Nginx, IIS, PostgreSQL
          </p>
          <p className="mt-2">
            <strong>Microsoft Power Platform:</strong> PowerApps, Power Automate, Power BI, SharePoint
          </p>
          <p className="mt-2">
            <strong>Other:</strong> GitHub, Excel Macro, SQLPathfinder, n8n, Langflow
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Work Experience</h2>
          <div className="mt-4 space-y-6">
            <div>
              <p><strong>Intel Corporation (Kulim Campus)</strong></p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>Full Stack Developer</strong> (May 2024 – Present) – Developed “HVE Command Center with AI” (Next.js, TailwindCSS, Python FastAPI) – adopted across 7 campuses, improved engagement by 68%.</li>
                <li><strong>Senior Software Engineer (Microsoft Power Platform Dev)</strong> (Jan 2022 – Apr 2023) – Built dashboard apps for skill matrix, onboarding, and product cookbook benefitting 500+ engineers.</li>
                <li><strong>Product Lead Engineer</strong> (Apr 2021 – Oct 2024) – Led continuous improvement for 9 Intel products, collaborating across teams and geographies.</li>
                <li><strong>Product Development Engineer</strong> (Feb 2020 – Apr 2021) – Managed NPI to PRQ stages for Valley Families, supported legacy product test programs.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Education</h2>
          <ul className="list-disc list-inside mt-4 space-y-1">
            <li><strong>Bachelor Degree in Electronic Engineering (System)</strong> – UiTM Shah Alam, CGPA: 3.46 | Dean’s List: 3rd, 5th, 6th semesters</li>
            <li><strong>Diploma in Electrical Engineering (Automation &amp; Instrumentation)</strong> – UiTM Dungun, CGPA: 3.33 | Dean’s List: 1st, 3rd, 4th semesters</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Certifications</h2>
          <ul className="list-disc list-inside mt-4 space-y-1">
            <li>Generative AI with Cloud | Security White Belt | Advanced GitHub Copilot</li>
            <li>Kubernetes &amp; Docker | ISA for System Admin | PowerApps Canvas App Advanced</li>
            <li>Information Security &amp; Privacy Awareness | Ethics &amp; Legal Compliance</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Side Projects &amp; Volunteering</h2>
          <ul className="list-disc list-inside mt-4 space-y-1">
            <li><strong>HVE Skill Matrix:</strong> Interactive skill analytics platform for engineering teams</li>
            <li><strong>HVE Product Cookbook:</strong> Repository for product info and recipes</li>
            <li><strong>HVE Onboarding Portal:</strong> Central hub for new hires and learning resources</li>
            <li><strong>GPTW Lead for Volunteering Matching Program:</strong> Organizing CSR, STEM, and charity events for Intel Malaysia</li>
            <li><strong>VPE4U Lead:</strong> Social programs and challenges across 5 Intel sites</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Let's Connect</h2>
          <p className="mt-4">Email: <a href="mailto:khairiazhanyusoff@gmail.com" className="text-blue-600 hover:underline">khairiazhanyusoff@gmail.com</a></p>
          <p className="mt-2">Location: Kuala Krai, Kelantan, Malaysia</p>
        </section>

        <blockquote className="mt-12 italic text-gray-600">
          “Empowering teams with AI, automation, and collaborative engineering. Always learning, always sharing.”
        </blockquote>
      </main>

      <footer className="bg-white border-t mt-16">
        <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-sm text-center text-gray-500">
          © 2026 Muhammad Khairi Azhan. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
