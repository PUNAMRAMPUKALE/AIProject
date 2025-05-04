import { createRouteMatcher, clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Clerk middleware to guard protected routes
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/resume(.*)",
  "/interview(.*)",
  "/ai-cover-letter(.*)",
  "/onboarding(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();

// Redirect unauthenticated users if they access protected routes
  if (!userId && isProtectedRoute(req)) {
    return redirectToSignIn();
  }
// Allow request to proceed
  return NextResponse.next();
});


// Configure middleware matcher to skip static/internal files and include APIs
export const config = {
  matcher: [
    // Match all routes except static files and internal paths
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always include API and tRPC routes
    '/(api|trpc)(.*)',
  ],
};
