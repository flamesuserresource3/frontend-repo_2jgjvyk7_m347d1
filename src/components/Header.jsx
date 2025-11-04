import { Shield, Settings, GitBranch, Smartphone } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-indigo-500 to-blue-500 grid place-items-center">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-gray-900">Aegis VPN Manager</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#plan" className="hover:text-gray-900 flex items-center gap-1"><GitBranch className="h-4 w-4"/>Plan</a>
          <a href="#features" className="hover:text-gray-900 flex items-center gap-1"><Settings className="h-4 w-4"/>Features</a>
          <a href="#mobile" className="hover:text-gray-900 flex items-center gap-1"><Smartphone className="h-4 w-4"/>Android</a>
        </nav>
      </div>
    </header>
  );
}
