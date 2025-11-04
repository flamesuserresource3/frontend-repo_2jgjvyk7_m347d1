export default function RepoStructure() {
  const tree = `
repo/
├─ android/                # Kotlin + Jetpack Compose app
│  ├─ app/
│  └─ docs/
├─ desktop/
│  ├─ app/                 # Electron + React
│  ├─ core/                # Rust/Go backend daemon
│  └─ installers/          # Windows/macOS/Linux packaging
├─ cli/                    # Go or Rust command-line client
├─ docs/                   # Deployment guide, security, privacy, user manual
├─ examples/               # Sample WireGuard/OpenVPN configs
├─ .github/workflows/      # CI for Android, desktop, CLI
└─ README.md
`;

  return (
    <section className="py-16 bg-white" id="repo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Repository layout</h2>
        <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4 overflow-x-auto">
          <pre className="text-sm text-gray-800 leading-6 whitespace-pre">{tree}</pre>
        </div>
      </div>
    </section>
  );
}
