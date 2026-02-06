import Link from "next/link";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ArrowRight, Code2, Lock, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-50">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/20 via-neutral-950 to-neutral-950" />

      {/* Header */}
      <header className="relative border-b border-neutral-800/50 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Code2 className="h-6 w-6 text-violet-400" />
            <span className="font-mono text-sm font-medium tracking-tight">
              clerk-plapi-3
            </span>
          </div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button
                variant="outline"
                size="sm"
                className="border-neutral-700 bg-transparent text-neutral-200 hover:bg-neutral-800 hover:text-neutral-50"
              >
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <Badge
              variant="outline"
              className="mb-6 border-violet-700/50 bg-violet-950/30 text-violet-300"
            >
              <Lock className="mr-1 h-3 w-3" />
              Platform API Demo
            </Badge>

            <h1 className="mb-6 text-6xl font-bold leading-tight tracking-tight md:text-7xl">
              Provisioned in{" "}
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Seconds
              </span>
            </h1>

            <p className="mb-12 max-w-2xl text-xl leading-relaxed text-neutral-400">
              A production-ready demo showcasing Clerk's Platform API. Complete
              authentication infrastructure deployed via PLAPI in under 30
              seconds.
            </p>

            <SignedOut>
              <Link href="/sign-in">
                <Button
                  size="lg"
                  className="group bg-violet-600 text-white hover:bg-violet-700"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </SignedOut>

            <SignedIn>
              <div className="rounded-lg border border-emerald-700/50 bg-emerald-950/30 p-4">
                <p className="text-sm text-emerald-300">
                  <strong>Authenticated</strong> - You're signed in via Clerk
                  Platform API provisioning
                </p>
              </div>
            </SignedIn>
          </div>
        </div>

        {/* Provisioning Flow */}
        <div className="container mx-auto px-6 pb-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">
              Provisioning Flow
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-violet-950/50">
                  <span className="font-mono text-xl font-bold text-violet-400">
                    01
                  </span>
                </div>
                <h3 className="mb-2 font-mono text-lg font-semibold text-neutral-100">
                  Create App
                </h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  Initialize Clerk instance via Platform API with application
                  name and configuration
                </p>
                <div className="mt-4 rounded border border-neutral-800 bg-neutral-950/50 p-2">
                  <code className="text-xs text-neutral-500">
                    POST /v1/apps
                  </code>
                </div>
              </Card>

              <Card className="border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-violet-950/50">
                  <span className="font-mono text-xl font-bold text-violet-400">
                    02
                  </span>
                </div>
                <h3 className="mb-2 font-mono text-lg font-semibold text-neutral-100">
                  Configure Auth
                </h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  Set up authentication methods, domain settings, and security
                  policies
                </p>
                <div className="mt-4 rounded border border-neutral-800 bg-neutral-950/50 p-2">
                  <code className="text-xs text-neutral-500">
                    PATCH /v1/apps/:id
                  </code>
                </div>
              </Card>

              <Card className="border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-violet-950/50">
                  <span className="font-mono text-xl font-bold text-violet-400">
                    03
                  </span>
                </div>
                <h3 className="mb-2 font-mono text-lg font-semibold text-neutral-100">
                  Deploy
                </h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  Production deployment with custom domain and environment
                  variables configured
                </p>
                <div className="mt-4 rounded border border-neutral-800 bg-neutral-950/50 p-2">
                  <code className="text-xs text-neutral-500">
                    vercel --prod
                  </code>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="container mx-auto px-6 pb-24">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex items-start gap-4">
                <Zap className="h-6 w-6 text-violet-400" />
                <div>
                  <h3 className="mb-2 font-semibold text-neutral-100">
                    Lightning Fast
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-400">
                    Complete authentication infrastructure provisioned in under
                    30 seconds via automated Platform API calls
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Lock className="h-6 w-6 text-violet-400" />
                <div>
                  <h3 className="mb-2 font-semibold text-neutral-100">
                    Production Ready
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-400">
                    Enterprise-grade security with custom domain, HTTPS, and
                    complete user management out of the box
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-neutral-800/50">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <span className="text-sm text-neutral-500">Built with</span>
              <a
                href="https://crafterstation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
              >
                Crafter Station
              </a>
            </div>
            <div className="flex gap-6">
              <a
                href="https://clerk.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-500 transition-colors hover:text-neutral-300"
              >
                Docs
              </a>
              <a
                href="https://github.com/crafter-station"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-500 transition-colors hover:text-neutral-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
