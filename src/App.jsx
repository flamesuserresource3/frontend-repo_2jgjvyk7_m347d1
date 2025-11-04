import Header from "./components/Header";
import FeatureGrid from "./components/FeatureGrid";
import ImplementationPlan from "./components/ImplementationPlan";
import RepoStructure from "./components/RepoStructure";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-blue-50 text-gray-900">
      <Header />

      <main className="flex-1">
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
                  Aegis VPN Manager
                </h1>
                <p className="mt-4 text-lg text-gray-700">
                  A secure, team-ready VPN client and manager supporting WireGuard and OpenVPN with
                  powerful controls, strong defaults, and a polished UI.
                </p>
                <div className="mt-6 flex gap-3">
                  <a href="#features" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700">
                    Explore features
                  </a>
                  <a href="#plan" className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900 hover:bg-gray-50">
                    View plan
                  </a>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  No telemetry by default. Secrets are encrypted at rest using OS keystores.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-indigo-500/10 to-blue-500/10 grid place-items-center text-center">
                    <div>
                      <p className="text-sm uppercase tracking-wider text-gray-600">Preview</p>
                      <h3 className="mt-1 text-xl font-medium text-gray-900">Android + Desktop + CLI</h3>
                      <p className="mt-2 text-gray-600 text-sm">
                        Import profiles, connect with one click, enforce kill switch, and protect DNS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeatureGrid />
        <ImplementationPlan />
        <RepoStructure />
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>Security-first. Neutral and lawful usage only.</p>
          <div className="flex gap-4">
            <a href="#repo" className="hover:text-gray-900">Repo layout</a>
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#plan" className="hover:text-gray-900">Plan</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
