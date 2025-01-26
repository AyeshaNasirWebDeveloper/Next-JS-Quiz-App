"use client"
import { useState } from "react";

export default function Page() {
  const [currentLevel, setCurrentLevel] = useState("Beginner");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      level: "Beginner",
      question: "1. What is Next.js?",
      options: [
        " A) A JavaScript framework",
        "B) A JavaScript library",
        "C) A React-based framework",
        "D) A CSS framework",
      ],
      answer: 2,
    },
    {
      level: "Beginner",
      question: "2. Which of the following is a key feature of Next.js?",
      options: [
        "A) Client-side rendering only",
        "B) Server-side rendering (SSR)",
        "C) Static site generation (SSG)",
        "D) Both B and C",
      ],
      answer: 3,
    },
    {
      level: "Beginner",
      question: "3. How do you create a new Next.js app?",
      options: [
        "A) npx create-next-app",
        "B) npm init next-app",
        "C) create-next-app",
        "D) npx create-react-app",
      ],
      answer: 0,
    },
    {
      level: "Beginner",
      question:
        "4. Which of the following is the default export of a Next.js page?",
      options: [
        "A) A React component",
        "B) A function",
        "C) An object",
        "D) A class",
      ],
      answer: 0,
    },
    {
      level: "Beginner",
      question: "5. In Next.js, where do you create pages?",
      options: [
        "A) In the /src directory",
        "B) In the /pages directory",
        "C) In the /components directory",
        "D) In the /public directory",
      ],
      answer: 1,
    },
    {
      level: "Beginner",
      question: "6. What is getStaticProps used for in Next.js?",
      options: [
        "A) Fetching data on the client-side",
        "B) Fetching data at build time for static generation",
        "C) Handling user input",
        "D) Rendering dynamic pages",
      ],
      answer: 1,
    },
    {
      level: "Beginner",
      question: "7. What is getServerSideProps used for in Next.js?",
      options: [
        "A) Fetching data at build time",
        "B) Fetching data on the server for every request",
        "C) Handling page transitions",
        "D) Displaying static content",
      ],
      answer: 1,
    },
    {
      level: "Beginner",
      question: "8. What is the purpose of next/head in Next.js?",
      options: [
        "A) Adding metadata and other head tags to the page",
        "B) Handling routes",
        "C) Managing state",
        "D) Rendering content on the server",
      ],
      answer: 0,
    },
    {
      level: "Beginner",
      question: "9. How can you create a dynamic route in Next.js?",
      options: [
        "A) By using the .js extension for a file",
        "B) By using the [param] syntax in the filename",
        "C) By using the @param syntax",
        "D) By using the useParams hook",
      ],
      answer: 1,
    },
    {
      level: "Beginner",
      question: "10. Which method is used for pre-rendering in Next.js?",
      options: [
        "A) getInitialProps",
        "B) getStaticProps",
        "C) getServerSideProps",
        "D) Both B and C",
      ],
      answer: 3,
    },
    {
      level: "Beginner",
      question: "11. What is the default rendering method in Next.js?",
      options: [
        "A) Static Site Generation (SSG)",
        "B) Server-Side Rendering (SSR)",
        "C) Client-Side Rendering (CSR)",
        "D) Incremental Static Regeneration (ISR)",
      ],
      answer: 0,
    },
    {
      level: "Beginner",
      question: "12. In Next.js, how can you dynamically import a component?",
      options: [
        "A) import('component-name')",
        "B) next.import('component-name')",
        "C) next/dynamic",
        "D) dynamic.import('component-name')",
      ],
      answer: 2,
    },
    {
      level: "Beginner",
      question:
        "13. Which of the following is NOT a routing method in Next.js?",
      options: [
        "A) File-based routing",
        "B) Programmatic routing",
        "C) Hash-based routing",
        "D) Static routing",
      ],
      answer: 2,
    },
    {
      level: "Beginner",
      question: "14. What is getInitialProps used for in Next.js?",
      options: [
        "A) Fetching data on the server side at the start of the page load",
        "B) Fetching data on the client side after the page has loaded",
        "C) Rendering static content",
        "D) Rendering the page dynamically",
      ],
      answer: 0,
    },
    {
      level: "Beginner",
      question:
        "15. Which command is used to run a Next.js application in development mode?",
      options: [
        "A) npm start",
        "B) npm run dev",
        "C) next run dev",
        "D) next start",
      ],
      answer: 1,
    },
    {
      level: "Beginner",
      question: "16. What is the purpose of the pages/_app.js file in Next.js?",
      options: [
        "A) To initialize global styles and state",
        "B) To define the main layout of the application",
        "C) To add routing logic",
        "D) To fetch data",
      ],
      answer: 0,
    },
    {
      level: "Beginner",
      question: "17. What is the next.config.js file used for in Next.js?",
      options: [
        "A) To configure routing",
        "B) To define global styles",
        "C) To customize Next.js build and server settings",
        "D) To handle data fetching",
      ],
      answer: 2,
    },
    {
      level: "Beginner",
      question: "18. Which type of CSS can be used in Next.js?",
      options: [
        "A) Plain CSS",
        "B) CSS modules",
        "C) Styled-components",
        "D) All of the above",
      ],
      answer: 3,
    },
    {
      level: "Beginner",
      question: "19. What does SSR stand for in Next.js?",
      options: [
        "A) Static Site Rendering",
        "B) Server-Side Rendering",
        "C) Server-Side React",
        "D) None of the above",
      ],
      answer: 1,
    },
    {
      level: "Beginner",
      question: "20. In Next.js, where are static assets like images placed?",
      options: [
        "A) /assets directory",
        "B) /public directory",
        "C) /static directory",
        "D) /img directory",
      ],
      answer: 1,
    },
    {
      level: "Beginner",
      question: "21. How do you link between pages in Next.js?",
      options: [
        "A) Using the a HTML tag",
        "B) Using the Link component from next/link",
        "C) Using navigate() method",
        "D) Using useRouter() hook",
      ],
      answer: 1,
    },
    {
      level: "Beginner",
      question: "22. What does the useRouter hook do in Next.js?",
      options: [
        "A) Allows navigation between pages",
        "B) Fetches data from an API",
        "C) Defines a global state",
        "D) Performs server-side rendering",
      ],
      answer: 0,
    },
    {
      level: "Beginner",
      question: "23. What does next export do in Next.js?",
      options: [
        "A) Builds and serves the app in production",
        "B) Converts the app into a static HTML export",
        "C) Enables server-side rendering",
        "D) Exports components to an external file",
      ],
      answer: 1,
    },
    {
      level: "Beginner",
      question: "24. What is Incremental Static Regeneration (ISR) in Next.js?",
      options: [
        "A) It regenerates pages on every request",
        "B) It allows pages to be updated after deployment without rebuilding the whole site",
        "C) It generates pages at build time only",
        "D) It supports client-side rendering",
      ],
      answer: 1,
    },
    {
      level: "Beginner",
      question: "25. What does the next/image component provide in Next.js?",
      options: [
        "A) Optimized image loading",
        "B) Lazy loading of images",
        "C) Automatic image resizing",
        "D) All of the above",
      ],
      answer: 3,
    },
    {
      level: "Beginner",
      question: "26. How do you add global CSS in Next.js?",
      options: [
        "A) Import CSS file inside pages/_app.js",
        "B) Import CSS file in pages/index.js",
        "C) Use styled-components for global styles",
        "D) It is not possible to add global CSS",
      ],
      answer: 0,
    },
    {
      level: "Beginner",
      question: "27. How do you define environment variables in Next.js?",
      options: [
        "A) Using process.env",
        "B) In the next.config.js file",
        "C) In .env files",
        "D) Both A and C",
      ],
      answer: 3,
    },
    {
      level: "Beginner",
      question:
        "28. What is the default port number for Next.js development server?",
      options: ["A) 3000", "B) 8000", "C) 5000", "D) 8080"],
      answer: 0,
    },
    {
      level: "Beginner",
      question: "29. How can you perform client-side navigation in Next.js?",
      options: [
        "A) By using the Link component from next/link",
        "B) By using the useNavigate hook",
        "C) By using the navigate function",
        "D) By using the next.navigate method",
      ],
      answer: 0,
    },
    {
      level: "Beginner",
      question: "30. How do you use API routes in Next.js?",
      options: [
        "A) In the /pages/api directory",
        "B) In the /routes/api directory",
        "C) In the /public directory",
        "D) In the /src/api directory",
      ],
      answer: 0,
    },
    {
      level: "Beginner",
      question:
        "31. Which of the following is NOT supported in Next.js API routes?",
      options: [
        "A) JSON responses",
        "B) File uploads",
        "C) Serverless functions",
        "D) SQL database connections",
      ],
      answer: 3,
    },
    {
      level: "Beginner",
      question:
        "32. What is the purpose of the getStaticPaths function in Next.js?",
      options: [
        "A) To fetch data at runtime",
        "B) To generate dynamic routes for static generation",
        "C) To provide the initial props for the page",
        "D) To fetch data server-side",
      ],
      answer: 1,
    },
    {
      level: "Beginner",
      question:
        "33. In Next.js, how do you access query parameters in a dynamic route?",
      options: [
        "A) Using useQuery hook",
        "B) Using useParams hook",
        "C) Using useRouter hook",
        "D) Using next/router module",
      ],
      answer: 2,
    },
    {
      level: "Beginner",
      question:
        "34. What type of caching strategy does Next.js use for static assets?",
      options: [
        "A) No caching",
        "B) In-memory caching",
        "C) Cache-Control headers",
        "D) Service workers",
      ],
      answer: 2,
    },
    {
      level: "Beginner",
      question:
        "35. What is the correct way to deploy a Next.js app on Vercel?",
      options: [
        "A) npm run build and then push to GitHub",
        "B) Push the project to GitHub and connect it to Vercel",
        "C) Use the vercel deploy command",
        "D) All of the above",
      ],
      answer: 3,
    },
    {
      level: "Beginner",
      question:
        "36. Which file is used to define custom error pages in Next.js?",
      options: [
        "A) pages/404.js",
        "B) pages/error.js",
        "C) pages/500.js",
        "D) Both A and C",
      ],
      answer: 3,
    },
    {
      level: "Beginner",
      question: "37. How does Next.js handle assets like fonts and images?",
      options: [
        "A) It automatically optimizes and serves them",
        "B) They must be manually optimized",
        "C) They are not supported",
        "D) By using a CDN",
      ],
      answer: 0,
    },
    {
      level: "Beginner",
      question:
        "38. Which method can be used to fetch data for static pages at build time?",
      options: [
        "A) getInitialProps",
        "B) getServerSideProps",
        "C) getStaticProps",
        "D) useEffect",
      ],
      answer: 2,
    },
    {
      level: "Beginner",
      question: "39. What does getStaticProps return in Next.js?",
      options: [
        "A) A React component",
        "B) An object with props and revalidate keys",
        "C) A string containing HTML content",
        "D) An array of page paths",
      ],
      answer: 1,
    },
    {
      level: "Beginner",
      question:
        "40. Which of the following methods are used for optimizing performance in Next.js?",
      options: [
        "A) Image optimization",
        "B) Lazy loading",
        "C) Server-side caching",
        "D) All of the above",
      ],
      answer: 3,
    },
    {
      level: "Beginner",
      question:
        "41. What is the default output folder for a production build in Next.js?",
      options: ["A) /public", "B) /out", "C) /build", "D) /dist"],
      answer: 1,
    },
    {
      level: "Beginner",
      question: "42. How do you add custom metadata to your pages in Next.js?",
      options: [
        "A) Using the next/meta module",
        "B) Using the Head component from next/head",
        "C) Adding metadata manually in pages/_document.js",
        "D) It’s not possible to add custom metadata",
      ],
      answer: 1,
    },
    {
      level: "Beginner",
      question: "43. What does next export do in Next.js?",
      options: [
        "A) Converts your app into a static website",
        "B) Pre-renders static pages",
        "C) Creates a production build",
        "D) Deploys the app on a server",
      ],
      answer: 0,
    },
    {
      level: "Beginner",
      question: "44. How do you define a custom Document in Next.js?",
      options: [
        "A) By creating a file in pages/custom_document.js",
        "B) By modifying pages/_document.js",
        "C) By using a custom App component",
        "D) By using next/document.js",
      ],
      answer: 1,
    },
    {
      level: "Beginner",
      question:
        "45. What is the recommended way to fetch data in Next.js for pages that require server-side data?",
      options: [
        "A) Using useEffect",
        "B) Using getStaticProps",
        "C) Using getServerSideProps",
        "D) Using useState",
      ],
      answer: 1,
    },
    {
      level: "Beginner",
      question:
        "46. How can you make a Next.js app available for internationalization (i18n)?",
      options: [
        "A) Using next/i18n",
        "B) Using third-party libraries like react-i18next",
        "C) Using the pages/locale.js file",
        "D) Next.js does not support internationalization",
      ],
      answer: 1,
    },
    {
      level: "Beginner",
      question:
        "47. What is the useEffect hook used for in a Next.js application?",
      options: [
        "A) To fetch data at the time of component mount",
        "B) To render static pages",
        "C) To handle server-side rendering",
        "D) To manage state",
      ],
      answer: 1,
    },
    {
      level: "Beginner",
      question: "48. In Next.js, what does next/dynamic enable?",
      options: [
        "A) Lazy loading of components",
        "B) Server-side rendering of components",
        "C) Static site generation",
        "D) None of the above",
      ],
      answer: 3,
    },
    {
      level: "Beginner",
      question: "49. What is the function of getServerSideProps in Next.js?",
      options: [
        "A) Fetches data at build time",
        "B) Fetches data on each request from the server",
        "C) Fetches data from the client",
        "D) Fetches data only once",
      ],
      answer: 1,
    },
    {
      level: "Beginner",
      question: "50. In Next.js, what is a Page Component?",
      options: [
        "A) A component that is used only for styling",
        "B) A component that is responsible for routing and rendering pages",
        "C) A container component used for managing state",
        "D) A function for generating dynamic routes",
      ],
      answer: 0,
    },
    {
      level: "Intermediate",
      question: "Which file is executed first when starting a Next.js app?",
      options: [
        "A) index.js",
        "B) pages/_app.js",
        "C) pages/_document.js",
        "D) pages/_error.js",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question: "2. What is the role of pages/_document.js in Next.js?",
      options: [
        "A) Handles client-side rendering",
        "B) Customizes the HTML and Body tags",
        "C) Fetches data at runtime",
        "D) Defines global styles",
      ],
      answer: 1,
    },

    {
      level: "Intermediate",
      question: "3. How do you set up custom headers in Next.js?",
      options: [
        "A) Using getInitialProps",
        "B) By editing next.config.js with a headers property",
        "C) Using getServerSideProps",
        "D) By modifying pages/_app.js",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question: "4. What is the default behavior of API routes in Next.js?",
      options: [
        "A) They are SSR by default",
        "B) They support both GET and POST methods",
        "C) They return HTML content",
        "D) They are static by default",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question: "5. Which lifecycle method does getStaticProps run in?",
      options: [
        "A) During runtime for every request",
        "B) At build time",
        "C) After the client-side rendering",
        "D) On every route change",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question:
        "6. What function would you use to revalidate specific paths during ISR?",
      options: [
        "A) revalidatePath",
        "B) fetch",
        "C) getStaticProps",
        "D) res.revalidate()",
      ],
      answer: 3,
    },
    {
      level: "Intermediate",
      question:
        "7. How can you dynamically generate static paths for a page in Next.js?",
      options: [
        "A) Using getServerSideProps",
        "B) Using getStaticPaths",
        "C) Using getInitialProps",
        "D) Using useRouter",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question: "8. What does the fallback: true option in getStaticPaths do?",
      options: [
        "A) Serves a 404 page for unmatched paths",
        "B) Enables ISR for unmatched paths",
        "C) Generates pages at runtime for unmatched paths",
        "D) Prefetches all paths during build time",
      ],
      answer: 2,
    },
    {
      level: "Intermediate",
      question: "9. What does the useRouter hook provide in Next.js?",
      options: [
        "A) Data fetching capabilities",
        "B) Access to query parameters and route navigation",
        "C) Styling and animations",
        "D) Client-side rendering",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question: "10. Which feature is NOT available in Next.js?",
      options: [
        "A) Middleware for API routes",
        "B) Built-in TypeScript support",
        "C) Built-in internationalization",
        "D) Support for Redux out-of-the-box",
      ],
      answer: 3,
    },
    {
      level: "Intermediate",
      question: "11. How do you create a middleware in Next.js?",
      options: [
        "A) Create a middleware.js file in the root directory",
        "B) Add a function inside next.config.js",
        "C) Add a middleware.ts file in the /pages directory",
        "D) Create a middleware.js file in the root or /pages directory",
      ],
      answer: 0,
    },
    {
      level: "Intermediate",
      question: "12. What does the next/script component do?",
      options: [
        "A) Adds client-side scripts with lazy loading",
        "B) Executes scripts server-side",
        "C) Handles inline JavaScript in pages",
        "D) Replaces all external scripts with Next.js components",
      ],
      answer: 0,
    },
    {
      level: "Intermediate",
      question: "13. How do you handle 404 pages in Next.js?",
      options: [
        "A) Create a pages/_error.js file",
        "B) Create a pages/404.js file",
        "C) Add a 404 route to next.config.js",
        "D) Handle it inside pages/_app.js",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question: "14. What does the trailingSlash option in next.config.js do?",
      options: [
        "A) Appends .html to URLs",
        "B) Adds a trailing slash to all routes",
        "C) Removes trailing slashes from all routes",
        "D) Allows routing without file extensions",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question:
        "15. Which command is used to build a Next.js project for production?",
      options: [
        "A) npm run build",
        "B) next build",
        "C) next production",
        "D) npm start",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question: "16. What is the default export of a Next.js API route?",
      options: [
        "A) An object",
        "B) A function",
        "C) A JSON file",
        "D) A React component",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question:
        "17. In Next.js, what happens when export const config = { unstable_runtimeJS: false } is set?",
      options: [
        "A) Disables JavaScript for the page",
        "B) Enables client-side hydration",
        "C) Increases server-side rendering performance",
        "D) Enables ISR",
      ],
      answer: 0,
    },
    {
      level: "Intermediate",
      question: "18. What is basePath used for in next.config.js?",
      options: [
        "A) To define a custom base URL for API routes",
        "B) To specify a base path for all routes in the application",
        "C) To configure middleware paths",
        "D) To set up deployment-specific configurations",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question: "19. How do you prefetch links in Next.js?",
      options: [
        "A) Set the prefetch property to true in <Link>",
        "B) Add a prefetch() function inside the page component",
        "C) Next.js automatically prefetches links in <Link> by default",
        "D) Use getStaticProps to prefetch links",
      ],
      answer: 2,
    },
    {
      level: "Intermediate",
      question:
        "20. What is the correct way to disable automatic link prefetching?",
      options: [
        "A) Use <Link prefetch=false />",
        "B) Use next.config.js to disable prefetching globally",
        "C) Set prefetch={false} in the <Link> component",
        "D) Use a custom hook to disable prefetching",
      ],
      answer: 2,
    },
    {
      level: "Intermediate",
      question:
        "21. Which Next.js function is used for client-side navigation?",
      options: [
        "A) useHistory",
        "B) useRouter",
        "C) navigateTo",
        "D) nextNavigation",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question: "22. What does the getServerSideProps function return?",
      options: [
        "A) A React component",
        "B) A JSON object containing props",
        "C) An array of data",
        "D) A pre-rendered HTML file",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question:
        "23. Which HTTP methods are supported in API routes by default?",
      options: [
        "A) Only GET",
        "B) Only POST",
        "C) All standard HTTP methods",
        "D) GET and POST only",
      ],
      answer: 2,
    },
    {
      level: "Intermediate",
      question:
        "24. In Next.js, how do you redirect from one route to another?",
      options: [
        "A) Using <Link>",
        "B) Using the redirect property in getServerSideProps or getStaticProps",
        "C) Using window.location.href",
        "D) Using router.push",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question:
        "25. What does the async rewrites function in next.config.js achieve?",
      options: [
        "A) Rewrites paths on the server-side",
        "B) Redirects paths permanently",
        "C) Handles dynamic imports",
        "D) Prefetches links for better performance",
      ],
      answer: 0,
    },
    {
      level: "Intermediate",
      question: "26. How does Next.js handle CSS modules?",
      options: [
        "A) Automatically applies styles globally",
        "B) Allows scoped CSS by default",
        "C) Merges CSS with global styles",
        "D) Only supports inline styles",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question:
        "27. What is required to enable TypeScript in a Next.js project?",
      options: [
        "A) Install the @types/next package",
        "B) Add a tsconfig.json file",
        "C) Install TypeScript and create a tsconfig.json",
        "D) Use .tsx files instead of .jsx",
      ],
      answer: 2,
    },
    {
      level: "Intermediate",
      question:
        "28. Which is the correct way to create a catch-all route in Next.js?",
      options: [
        "A) pages/[...slug].js",
        "B) pages/[slug].js",
        "C) pages/catch-all.js",
        "D) pages/[slug]/index.js",
      ],
      answer: 0,
    },
    {
      level: "Intermediate",
      question: "29. How do you implement environment variables in Next.js?",
      options: [
        "A) Add them directly to next.config.js",
        "B) Use a .env.local file and access via process.env",
        "C) Use the dotenv package and require",
        "D) Declare variables in the _app.js file",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question: "30. What does getInitialProps do in Next.js?",
      options: [
        "A) Fetches data on the client-side only",
        "B) Fetches data for both server-side and client-side",
        "C) Fetches data during build time only",
        "D) Runs after page rendering",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question: "31. How do you enable global styles in Next.js?",
      options: [
        "A) Import styles in pages/_app.js",
        "B) Use a <style> tag in every page",
        "C) Define styles in pages/_document.js",
        "D) Create a global CSS module",
      ],
      answer: 0,
    },
    {
      level: "Intermediate",
      question: "32. What does the next build command do?",
      options: [
        "A) Runs the Next.js app in development mode",
        "B) Generates an optimized production build",
        "C) Creates a local deployment",
        "D) Starts the application with hot reloading",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question: "33. Which of these is NOT a feature of ISR?",
      options: [
        "A) Allows revalidation of specific pages",
        "B) Provides static pages for faster loading",
        "C) Requires a full rebuild to update content",
        "D) Can fetch updated content on-demand",
      ],
      answer: 2,
    },
    {
      level: "Intermediate",
      question: "34. How do you enable lazy loading for images in Next.js?",
      options: [
        "A) Add lazyLoad={true} to <Image>",
        "B) Lazy loading is enabled by default in <Image>",
        "C) Add loading=lazy to <Image>",
        "D) Use a custom hook",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question: "35. What does unstable_revalidate() do in ISR?",
      options: [
        "A) Deletes old cache and invalidates pages",
        "B) Updates static pages without a full rebuild",
        "C) Adds static pages to the fallback",
        "D) Fetches new routes dynamically",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question:
        "36. What does the fallback: blocking configuration in getStaticPaths mean?",
      options: [
        "A) The fallback page will display a loading spinner",
        "B) New paths are generated on the server and block until complete",
        "C) New paths are immediately available without blocking",
        "D) Paths are only built during the initial build process",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question:
        "37. Which of these features is exclusive to API routes in Next.js?",
      options: [
        "A) Static data fetching",
        "B) Built-in middleware for request handling",
        "C) Automatic route prefetching",
        "D) Revalidation with ISR",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question: "38. In Next.js, how do you create nested dynamic routes?",
      options: [
        "A) Use pages/[...slug]/index.js",
        "B) Use pages/[parent]/[child].js",
        "C) Use pages/[parent]/[...child].js",
        "D) Use pages/parent/[child].js",
      ],
      answer: 3,
    },
    {
      level: "Intermediate",
      question: "39. What is the default caching mechanism used in Next.js?",
      options: [
        "A) Client-side caching",
        "B) File-based server cache",
        "C) Edge caching with CDN",
        "D) In-memory server cache",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question:
        "40. What happens when you use useEffect inside a Next.js server-side rendered component?",
      options: [
        "A) useEffect runs during the server-side rendering process",
        "B) useEffect only runs on the client after hydration",
        "C) useEffect is ignored in server-side rendering",
        "D) It causes a hydration error",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question:
        "41. How can you enable React Strict Mode in a Next.js project?",
      options: [
        "A) Use a React.StrictMode wrapper in _app.js",
        "B) Add strictMode: true in next.config.js",
        "C) It is enabled by default in Next.js",
        "D) Add <StrictMode> to every page",
      ],
      answer: 2,
    },
    {
      level: "Intermediate",
      question: "42. What does the amp property in the page configuration do?",
      options: [
        "A) Enables Accelerated Mobile Pages for better SEO",
        "B) Adds server-side rendering to the page",
        "C) Removes the need for JavaScript entirely",
        "D) Optimizes API routes for faster performance",
      ],
      answer: 0,
    },
    {
      level: "Intermediate",
      question:
        "43. Which of these Next.js features requires additional configuration to work with a CDN?",
      options: [
        "A) getStaticProps",
        "B) next/image optimization",
        "C) getServerSideProps",
        "D) Dynamic routing",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question: "44. How do you handle custom headers in Next.js?",
      options: [
        "A) Add headers directly in next.config.js",
        "B) Use the getServerSideProps function",
        "C) Use the headers() function in next.config.js",
        "D) Set headers in the pages/_document.js file",
      ],
      answer: 2,
    },
    {
      level: "Intermediate",
      question:
        "45. What is the purpose of the _middleware.js file in Next.js?",
      options: [
        "A) To create custom API route handlers",
        "B) To modify request/response before hitting the route",
        "C) To manage static site generation",
        "D) To handle file-based routing",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question:
        "46. What is required to enable custom Babel configuration in a Next.js project?",
      options: [
        "A) Create a babelrc.config.js file",
        "B) Install Babel plugins and create a .babelrc file",
        "C) Update next.config.js with Babel settings",
        "D) Use next build --babel",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question: "47. In Next.js, what is the useSWR hook commonly used for?",
      options: [
        "A) Static data fetching",
        "B) Client-side data fetching and revalidation",
        "C) Server-side rendering optimization",
        "D) Navigation between pages",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question: "48. How does Next.js support API middleware chaining?",
      options: [
        "A) Use multiple API routes",
        "B) Combine middleware functions in a single route handler",
        "C) Use _middleware.js for chaining",
        "D) Set middleware in next.config.js",
      ],
      answer: 2,
    },
    {
      level: "Intermediate",
      question:
        "49. What happens when you define a custom Error component in pages/_error.js?",
      options: [
        "A) It overrides the default error page for only 404 errors",
        "B) It overrides all default error pages, including 404 and 500 errors",
        "C) It displays only on 500 errors",
        "D) It disables error handling in API routes",
      ],
      answer: 1,
    },
    {
      level: "Intermediate",
      question: "50. What is the role of next lint?",
      options: [
        "A) To clean unused imports",
        "B) To run the ESLint tool with Next.js-specific rules",
        "C) To compile JavaScript files",
        "D) To optimize production builds",
      ],
      answer: 1,
    },
    {
      level: "Advanced",
      question:
        "What is the primary purpose of `getServerSideProps` in Next.js?",
      options: [
        "To generate static pages at build time",
        "To fetch data at request time on the server",
        "To manage client-side state",
        "To create API endpoints",
      ],
      answer: 1,
    },
    {
      level: "Advanced",
      question:
        "Which file is mandatory to define custom server configurations in a Next.js app?",
      options: [
        "server.js",
        "next.config.js",
        "custom-server.js",
        "api-config.js",
      ],
      answer: 1,
    },
    {
      level: "Advanced",
      question:
        "What is the default behavior of `next/image` when used for an image?",
      options: [
        "Performs lazy loading by default",
        "Eagerly loads all images",
        "Applies grayscale filters",
        "Caches images client-side only",
      ],
      answer: 0,
    },
    {
      level: "Advanced",
      question: "What is the significance of the `next/link` component?",
      options: [
        "It provides server-side routing for APIs",
        "It prefetches the linked page for faster navigation",
        "It creates dynamic routes automatically",
        "It is used only for external links",
      ],
      answer: 1,
    },
    {
      level: "Advanced",
      question: "In Next.js, what is the purpose of dynamic imports?",
      options: [
        "To reduce the initial load time by code-splitting",
        "To allow server-side rendering",
        "To pre-render all components",
        "To bundle all components into a single file",
      ],
      answer: 0,
    },
    {
      level: "Advanced",
      question:
        "Which property ensures that a `getStaticProps` page updates data at regular intervals?",
      options: ["isrTime", "revalidate", "updateInterval", "refreshTime"],
      answer: 1,
    },
    {
      level: "Advanced",
      question:
        "How can you define environment variables for a Next.js application?",
      options: [
        "Through the `.next.config.js` file",
        "Using `.env.local` file",
        "Only in the root `package.json` file",
        "By editing the `next-env.d.ts` file",
      ],
      answer: 1,
    },
    {
      level: "Advanced",
      question:
        "Which of the following is NOT a valid lifecycle method in Next.js?",
      options: [
        "getInitialProps",
        "getStaticPaths",
        "getServerProps",
        "getStaticProps",
      ],
      answer: 2,
    },
    {
      level: "Advanced",
      question:
        "What is the recommended method to create API routes in a Next.js project?",
      options: [
        "Using `pages/api` directory",
        "Using `next.config.js`",
        "Creating an `api` folder in the root",
        "Adding a `server.js` file",
      ],
      answer: 0,
    },
    {
      level: "Advanced",
      question: "What does `next/head` allow you to do?",
      options: [
        "Manipulate the `<head>` section of a page",
        "Override server-side rendering",
        "Manage environment variables",
        "Control routing between pages",
      ],
      answer: 0,
    },
    {
      level: "Advanced",
      question:
        "Which method is used to define the paths to be pre-rendered for dynamic routes?",
      options: [
        "getStaticPaths",
        "getDynamicPaths",
        "getServerPaths",
        "getInitialPaths",
      ],
      answer: 0,
    },
    {
      level: "Advanced",
      question: "How does Next.js handle CSS imports?",
      options: [
        "You must manually inject styles into `<style>` tags",
        "CSS files can be imported directly into components",
        "CSS files are only supported in `_app.js`",
        "Next.js does not support CSS",
      ],
      answer: 1,
    },
    {
      level: "Advanced",
      question: "What does the `getInitialProps` lifecycle method do?",
      options: [
        "Fetches initial data for server-side rendering",
        "Defines client-side routing",
        "Pre-fetches images and videos",
        "Generates dynamic static paths",
      ],
      answer: 0,
    },
    {
      level: "Advanced",
      question:
        "Which Next.js feature enables static HTML generation for high performance?",
      options: [
        "Server-Side Rendering (SSR)",
        "Static Site Generation (SSG)",
        "Incremental Static Regeneration (ISR)",
        "Client-Side Rendering (CSR)",
      ],
      answer: 1,
    },
    {
      level: "Advanced",
      question: "What is a valid use case for `getStaticProps`?",
      options: [
        "Generating dynamic API routes",
        "Rendering pages with user-specific data",
        "Pre-fetching data for static generation",
        "Executing database writes",
      ],
      answer: 2,
    },
    {
      level: "Advanced",
      question:
        "What does Incremental Static Regeneration (ISR) allow you to do?",
      options: [
        "Update static pages without rebuilding the app",
        "Regenerate dynamic pages on the server",
        "Fetch client-side data during SSR",
        "Disable static page caching",
      ],
      answer: 0,
    },
    {
      level: "Advanced",
      question: "What role does `_app.js` play in a Next.js application?",
      options: [
        "It manages global state for server-side rendering",
        "It wraps all components for custom page initialization",
        "It defines routes for the application",
        "It handles error boundaries for pages",
      ],
      answer: 1,
    },
    {
      level: "Advanced",
      question: "Which of the following is true about API routes in Next.js?",
      options: [
        "They can only be written in TypeScript",
        "They automatically handle CORS",
        "They run as serverless functions",
        "They are limited to GET requests only",
      ],
      answer: 2,
    },
    {
      level: "Advanced",
      question:
        "Which plugin enables the usage of styled components in Next.js?",
      options: [
        "babel-plugin-styled-components",
        "next-plugin-styled",
        "next-styles",
        "styled-component-plugin",
      ],
      answer: 0,
    },
    {
      level: "Advanced",
      question:
        "What is the correct way to add a custom webpack configuration in Next.js?",
      options: [
        "By adding a `webpack.js` file in the `pages` directory",
        "By modifying the `webpack` property in `next.config.js`",
        "By creating a `webpack-config.js` file in the root directory",
        "By using the `webpack-cli` command",
      ],
      answer: 1,
    },
    {
      level: "Advanced",
      question: "How does Next.js support TypeScript by default?",
      options: [
        "By requiring a manual setup with a TypeScript plugin",
        "By automatically recognizing `.ts` and `.tsx` files",
        "By defaulting to TypeScript in all projects",
        "By bundling TypeScript with Webpack",
      ],
      answer: 1,
    },
    {
      level: "Advanced",
      question: "What is the purpose of the `next build` command?",
      options: [
        "To run the app in development mode",
        "To optimize the application for production",
        "To create static HTML files for all pages",
        "To start the application on a custom server",
      ],
      answer: 1,
    },
    {
      level: "Advanced",
      question: "In Next.js, how do you handle custom 404 pages?",
      options: [
        "Create a `_error.js` file in the `pages` directory",
        "Create a `404.js` file in the `pages` directory",
        "Use the `default404` property in `next.config.js`",
        "Override the `next/error` module",
      ],
      answer: 1,
    },
    {
      level: "Advanced",
      question: "What is the primary benefit of `getStaticPaths` in Next.js?",
      options: [
        "It fetches client-side data for all static pages",
        "It defines dynamic paths for pre-rendering",
        "It handles server-side routing",
        "It provides a fallback for server-rendered pages",
      ],
      answer: 1,
    },
    {
      level: "Advanced",
      question:
        "Which HTTP method is NOT allowed in Next.js API routes by default?",
      options: ["GET", "POST", "HEAD", "PATCH"],
      answer: 3,
    },
    {
      level: "Advanced",
      question: "How can you enable a custom error page in Next.js?",
      options: [
        "By modifying the default `_error.js` file",
        "By creating an `error.js` file in `pages`",
        "By using `next/error` as a wrapper",
        "By defining a `customError` property in `next.config.js`",
      ],
      answer: 0,
    },
    {
      level: "Advanced",
      question: "What does `next/script` provide in Next.js?",
      options: [
        "Optimized script loading with lazy loading options",
        "Server-side execution of scripts",
        "Dynamic JavaScript bundling",
        "Custom route definitions for scripts",
      ],
      answer: 0,
    },
    {
      level: "Advanced",
      question: "How can you use a middleware in Next.js?",
      options: [
        "By creating a `middleware.js` file in the root",
        "By adding a `middleware` folder in the `pages` directory",
        "By exporting middleware functions from `pages/_middleware.js`",
        "By modifying `next.config.js`",
      ],
      answer: 2,
    },
    {
      level: "Advanced",
      question: "What is the role of the `public` directory in Next.js?",
      options: [
        "To store public assets accessible by the browser",
        "To store server-only configuration files",
        "To manage static paths for dynamic routes",
        "To bundle all files into a single public file",
      ],
      answer: 0,
    },
    {
      level: "Advanced",
      question: "Which of the following is true about `getServerSideProps`?",
      options: [
        "It is used for client-side rendering only",
        "It runs only during the build process",
        "It fetches data at request time on the server",
        "It cannot be used with dynamic routes",
      ],
      answer: 2,
    },
    {
      level: "Advanced",
      question: "What does the `fallback` property in `getStaticPaths` do?",
      options: [
        "It specifies what to render for unlisted paths",
        "It determines the cache expiration time",
        "It enables a global fallback route",
        "It generates static pages for undefined paths",
      ],
      answer: 0,
    },
    {
      level: "Advanced",
      question: "Which of the following features is unique to Next.js?",
      options: [
        "Code splitting",
        "Dynamic imports",
        "Server-side rendering and static site generation",
        "Lazy loading",
      ],
      answer: 2,
    },
    {
      level: "Advanced",
      question: "How does Next.js handle dynamic routes?",
      options: [
        "By using query strings in the URL",
        "By using square brackets in filenames",
        "By defining a `routes` array in `next.config.js`",
        "By adding a `routes.json` file to the project",
      ],
      answer: 1,
    },
    {
      level: "Advanced",
      question: "What is the purpose of `getLayout` in a Next.js application?",
      options: [
        "To define a default layout for all pages",
        "To allow per-page custom layouts",
        "To manage server-side caching",
        "To enable dynamic imports for components",
      ],
      answer: 1,
    },
    {
      level: "Advanced",
      question: "What is `next/image` optimized for?",
      options: [
        "Handling only .png files",
        "Providing lazy loading and responsive images",
        "Rendering server-side images exclusively",
        "Allowing inline CSS for images",
      ],
      answer: 1,
    },
    {
      level: "Advanced",
      question: "What does `rewrites` in `next.config.js` do?",
      options: [
        "Creates server-side routes dynamically",
        "Maps one URL path to another without changing the URL",
        "Creates dynamic links between pages",
        "Overrides API routes with static paths",
      ],
      answer: 1,
    },
    {
      level: "Advanced",
      question: "What does `getInitialProps` do in a Next.js application?",
      options: [
        "Fetches data during build time for static pages",
        "Fetches data for server-side rendering only",
        "Provides initial props for both client and server",
        "Handles API requests within the application",
      ],
      answer: 2,
    },
    {
      level: "Advanced",
      question:
        "Which lifecycle event is specific to Next.js for data fetching?",
      options: [
        "`componentDidMount`",
        "`getServerSideProps`",
        "`getDataOnLoad`",
        "`useFetch`",
      ],
      answer: 1,
    },
    {
      level: "Advanced",
      question: "How does Next.js optimize CSS?",
      options: [
        "By lazy-loading CSS files",
        "By importing CSS using Webpack",
        "By automatically extracting critical CSS",
        "By bundling all CSS into a single file",
      ],
      answer: 2,
    },
    {
      level: "Advanced",
      question:
        "What is the primary difference between `Link` and `a` tags in Next.js?",
      options: [
        "`Link` works only for external links",
        "`a` provides SEO benefits, while `Link` does not",
        "`Link` enables client-side transitions, while `a` does not",
        "`a` is used in dynamic routing exclusively",
      ],
      answer: 2,
    },
    {
      level: "Advanced",
      question: "What is a primary use case for `middleware` in Next.js?",
      options: [
        "To intercept requests for custom routing logic",
        "To manage server-side caching",
        "To handle form validation",
        "To generate static paths dynamically",
      ],
      answer: 0,
    },
    {
      level: "Advanced",
      question: "What does the `unstable_revalidate` property do in Next.js?",
      options: [
        "Sets cache expiration for API routes",
        "Triggers incremental static regeneration (ISR)",
        "Invalidates server-side props",
        "Optimizes client-side hydration",
      ],
      answer: 1,
    },
    {
      level: "Advanced",
      question:
        "Which of the following methods allows client-side navigation in Next.js?",
      options: ["`useNavigate`", "`navigateTo`", "`useRouter`", "`goTo`"],
      answer: 2,
    },
    {
      level: "Advanced",
      question:
        "What happens when `fallback` is set to `true` in `getStaticPaths`?",
      options: [
        "Unlisted pages return a 404 error",
        "Unlisted pages are rendered on the client after the first request",
        "All pages are pre-rendered during the build",
        "Dynamic routes are disabled",
      ],
      answer: 1,
    },
    {
      level: "Advanced",
      question: "What is the purpose of the `useEffect` hook in Next.js?",
      options: [
        "To manage server-side data fetching",
        "To handle side effects on the client",
        "To execute functions during the build phase",
        "To handle form submissions",
      ],
      answer: 1,
    },
    {
      level: "Advanced",
      question: "How does Next.js handle environment variables?",
      options: [
        "Using a `.env` file accessible only on the server",
        "Embedding variables directly in `next.config.js`",
        "Using a global `env` object available on both client and server",
        "By requiring manual setup for variable injection",
      ],
      answer: 0,
    },
  ];

  const filteredQuestions = questions.filter(
    (q) => q.level === currentLevel
  );

  const handleAnswer = (selectedIndex) => {
    setSelectedAnswer(selectedIndex);

    // Add score if the answer is correct
    if (filteredQuestions[currentQuestionIndex].answer === selectedIndex) {
      setScore(score + 1);
    }

    // Move to the next question after 1 second
    setTimeout(() => {
      if (currentQuestionIndex < filteredQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setIsCompleted(true);
      }
      setSelectedAnswer(null); // Reset the selected answer
    }, 1000);
  };

  const handleReset = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setIsCompleted(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="p-4 max-w-sm lg:max-w-4xl mx-auto">
      <h1 className="text-2xl lg:text-3xl font-bold mb-6 text-center">
        Next.js MCQ Preparation
      </h1>

      {/* Level selection buttons */}
      <div className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-8">
        {["Beginner", "Intermediate", "Advanced"].map((level) => (
          <button
            key={level}
            onClick={() => {
              setCurrentLevel(level);
              handleReset();
            }}
            className={`px-4 py-2 lg:px-6 lg:py-3 rounded-lg border text-sm lg:text-lg font-semibold w-full sm:w-auto ${
              currentLevel === level
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Quiz Section */}
      {!isCompleted ? (
        <div className="bg-white p-6 lg:p-8 shadow rounded-lg">
          <p className="mb-4 lg:mb-6 text-base lg:text-xl font-medium">
            <span className="font-bold">Question:</span>{" "}
            {filteredQuestions[currentQuestionIndex]?.question}
          </p>
          <div className="flex flex-col gap-2 lg:gap-3">
            {filteredQuestions[currentQuestionIndex]?.options.map(
              (option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full px-4 py-2 lg:px-6 lg:py-3 border rounded-lg text-left ${
                    selectedAnswer !== null &&
                    index === filteredQuestions[currentQuestionIndex].answer
                      ? "bg-green-500 text-white"
                      : selectedAnswer !== null && index === selectedAnswer
                      ? "bg-red-500 text-white"
                      : "hover:bg-blue-50"
                  }`}
                >
                  {option}
                </button>
              )
            )}
          </div>
          <div className="mt-4 lg:mt-6 text-base lg:text-xl font-semibold">
            <span className="font-bold">Score:</span> {score}
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 lg:p-8 shadow rounded-lg text-center">
          <p className="mb-4 lg:mb-6 text-lg lg:text-2xl font-semibold">
            {`You scored ${score} out of ${filteredQuestions.length}`}
          </p>
          <button
            onClick={handleReset}
            className="px-6 py-2 lg:px-8 lg:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm lg:text-lg"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
