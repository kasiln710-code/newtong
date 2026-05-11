import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale: 'zh',
  localePrefix: 'always'
});

export const config = {
  matcher: [
    '/',
    '/(zh|en|ko|es|ar)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};
