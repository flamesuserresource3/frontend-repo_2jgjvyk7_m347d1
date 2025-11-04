import { ShieldCheck, Network, FileCog, HardDriveDownload, Lock, KeyRound, RefreshCcw, Globe, TerminalSquare } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Kill Switch", desc: "Blocks traffic outside the tunnel on drop using OS firewall rules." },
  { icon: Network, title: "WireGuard & OpenVPN", desc: "Import .conf/.ovpn, manage multiple profiles with rich metadata." },
  { icon: Globe, title: "DNS Leak Protection", desc: "Routes DNS via the tunnel with custom resolvers and Pi-hole support." },
  { icon: KeyRound, title: "Secure Storage", desc: "Encrypts secrets with OS keystores (Android Keystore, Keychain, etc.)." },
  { icon: FileCog, title: "Config Generator", desc: "Generate keys, preshared keys, and QR export for WireGuard." },
  { icon: RefreshCcw, title: "Auto Reconnect", desc: "Recovers on network changes or tunnel failure." },
  { icon: TerminalSquare, title: "CLI & Admin Mode", desc: "Powerful CLI and advanced toggles for routes, DNS, and logs." },
  { icon: HardDriveDownload, title: "Installers & CI", desc: "One-click builds for Android and desktop with GitHub Actions." },
  { icon: Lock, title: "Certificate Pinning", desc: "Optional control-plane pinning for secure management APIs." },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Security-first features</h2>
        <p className="text-gray-600 mt-2 mb-8">Production-grade VPN manager for teams and power users.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-sm transition-shadow">
              <Icon className="h-6 w-6 text-indigo-600" />
              <h3 className="mt-3 font-medium text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
