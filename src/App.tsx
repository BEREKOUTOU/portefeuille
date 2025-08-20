import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Layout from "@/components/layout/Layout";
import SplashCursor from "@/components/layout/SplashCursor";

// Lazy load all page components
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Projects = lazy(() => import("@/pages/Projects"));
const Skills = lazy(() => import("@/pages/Skills"));
const Contact = lazy(() => import("@/pages/Contact"));
const CV = lazy(() => import("@/pages/CV"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading component for suspense
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          <TooltipProvider>
            <Toaster />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route
                  index
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <Home />
                    </Suspense>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <About />
                    </Suspense>
                  }
                />
                <Route
                  path="/projects"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <Projects />
                    </Suspense>
                  }
                />
                <Route
                  path="/skills"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <Skills />
                    </Suspense>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <Contact />
                    </Suspense>
                  }
                />
                <Route
                  path="/cv"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <CV />
                    </Suspense>
                  }
                />
                <Route
                  path="/*"
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <NotFound />
                    </Suspense>
                  }
                />
              </Route>
            </Routes>
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
    <SplashCursor />
  </>
);

export default App;
