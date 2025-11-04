import Spline from "@splinetool/react-spline";
import { Rocket, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-700 text-xs font-medium">
              <Shield className="h-4 w-4" />
              Security-first VPN manager
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
              Aegis VPN Manager
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              A team-ready client for WireGuard and OpenVPN with strong defaults,
              encrypted secrets, kill switch, and a clean, modern UI.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
              >
                <Rocket className="h-4 w-4" /> Explore features
              </a>
              <a
                href="#plan"
                className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
              >
                View plan
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              No telemetry. Keys and credentials are protected with OS keystores.
            </p>
          </div>

          <div className="relative h-[320px] sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
            {/* 3D Scene */}
            <div className="absolute inset-0">
              <Spline
                scene="https://prod.spline.design/6E5J3Wm0lTz3b1p2/scene.splinecode"
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            {/* Gradient overlays - must not block interactions */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 to-transparent" />
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
