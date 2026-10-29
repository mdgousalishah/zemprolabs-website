import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // In production, log silently or send to observability endpoint
    // Prevent leaking internal stack traces to the user console
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#2C3E50] text-white flex items-center justify-center p-4 selection:bg-[#ECF0F1] selection:text-[#2C3E50]">
          <div className="w-full max-w-lg rounded-3xl bg-[#070D1A] border border-white/10 p-8 sm:p-10 shadow-2xl text-center space-y-6">
            <div className="flex justify-center">
              <BrandLogo variant="full" size="md" />
            </div>

            <div className="w-14 h-14 rounded-2xl bg-[#ECF0F1]/10 border border-[#ECF0F1]/30 text-[#ECF0F1] flex items-center justify-center mx-auto">
              <AlertCircle className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono text-[#ECF0F1] tracking-widest uppercase">
                // APPLICATION RESILIENCE LAYER
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Something didn’t load as expected
              </h1>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-md mx-auto">
                Our application caught an unexpected state. Your data is safe. Please reload the interface or return to the main homepage.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={this.handleReload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-bold bg-[#ECF0F1] text-[#2C3E50] hover:bg-[#BDC3C7] transition-all shadow-[0_0_20px_rgba(236,240,241,0.3)]"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Application</span>
              </button>

              <button
                type="button"
                onClick={this.handleGoHome}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-semibold bg-white/5 border border-white/15 text-white hover:bg-white/10 transition-all"
              >
                <Home className="w-4 h-4" />
                <span>Return to Home</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
