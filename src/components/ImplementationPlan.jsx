export default function ImplementationPlan() {
  return (
    <section id="plan" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Prioritized implementation plan</h2>
        <ol className="mt-6 space-y-4 list-decimal list-inside text-gray-800">
          <li>
            Backend foundations & security: configs, key handling, schema, certificate pinning; write tests for parsing and keygen.
          </li>
          <li>
            Android client MVP: import/export WireGuard, connect/disconnect via VPNService, keystore storage, kill-switch routing.
          </li>
          <li>
            Desktop app (Electron + Rust): daemon to manage WireGuard/OpenVPN, UI for profiles, firewall kill-switch, DNS routing.
          </li>
          <li>
            CLI (Go/Rust): manage profiles, connect/disconnect, status; integrate with system services.
          </li>
          <li>
            Polishing: admin mode, logs, server groups/favorites, auto-update setup, docs, and CI pipelines.
          </li>
        </ol>
        <p className="mt-6 text-sm text-gray-600">
          Documentation includes deployment guides, privacy policy, security checklist with OS-specific firewall rules, and CI build recipes.
        </p>
      </div>
    </section>
  );
}
