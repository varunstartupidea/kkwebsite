export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function getBasePath(): string {
  if (typeof window !== 'undefined') {
    return process.env.NODE_ENV === 'production' ? '/KK_website' : '';
  }
  return process.env.NODE_ENV === 'production' ? '/KK_website' : '';
}
