/// <reference types="vite/client" />

// This tells TypeScript that any import ending in .css is a module 
// and should be treated as a dictionary of strings (or a similar module type).
declare module '*.css' {
  // Use a type that represents a module or object, satisfying the linter.
  const content: Record<string, string>; 
  export default content;
}