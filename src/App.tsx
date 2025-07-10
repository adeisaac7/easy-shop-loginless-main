import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { useEffect } from 'react';
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { isSignInWithEmailLink, signInWithEmailLink } from "./AuthService";

const queryClient = new QueryClient();

const App = () => {

  useEffect(() => {
    if (isSignInWithEmailLink(window.location.href)) {
      let email = localStorage.getItem('emailForSignIn');
      if (!email) {
        // Handle case where email is not in local storage.
        // You might want to prompt the user for their email again.
        console.error("Email for sign-in not found in local storage.");
        return;
      }
      signInWithEmailLink(email, window.location.href)
        .then(() => {
          localStorage.removeItem('emailForSignIn');
          // Redirect to a protected page or dashboard
          // window.location.replace('/dashboard');
        })
        .catch((error) => console.error("Error signing in with email link:", error));
   }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
    <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
