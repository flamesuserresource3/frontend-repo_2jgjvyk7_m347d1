import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import ImplementationPlan from "./components/ImplementationPlan";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-blue-50 text-gray-900">
      <Header />

      <main className="flex-1">
        <Hero />
        <FeatureGrid />
        <ImplementationPlan />
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>Security-first. Neutral and lawful usage only.</p>
          <div className="flex gap-4">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#plan" className="hover:text-gray-900">Plan</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
