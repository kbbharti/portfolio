/**
 * Utility function to get the correct asset path for GitHub Pages deployment
 * This handles the basePath configuration for production builds
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production with basePath, prepend the basePath
  if (process.env.NODE_ENV === 'production') {
    return `/portfolio/${cleanPath}`;
  }
  
  // In development, use the original path
  return `/${cleanPath}`;
}
