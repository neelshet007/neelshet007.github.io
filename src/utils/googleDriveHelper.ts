/**
 * Helper utility to parse and transform Google Drive file links into direct downloadable/viewable raw image URLs.
 * 
 * Google Drive blocks direct hotlinking from `uc?export=view` in unauthenticated web applications due to CORS & cookies.
 * We use `lh3.googleusercontent.com/d/FILE_ID` which allows public raw image rendering seamlessly.
 */
export function formatGoogleDriveImageUrl(url: string): string {
  if (!url) return "";

  // 1. Standard Google Drive /file/d/FILE_ID/view pattern
  const fileDMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileDMatch && fileDMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${fileDMatch[1]}`;
  }

  // 2. Google Drive ?id=FILE_ID pattern
  const idParamMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idParamMatch && idParamMatch[1] && url.includes("drive.google.com")) {
    return `https://lh3.googleusercontent.com/d/${idParamMatch[1]}`;
  }

  // 3. Already raw or non-Google Drive direct URL
  return url;
}
