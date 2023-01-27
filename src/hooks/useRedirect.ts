import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { isExternalUrl } from 'utils/utlUtils';

export interface UseRedirectTypes {
  redirect: (url: string, redirectUrl: string) => void;
  checkRedirection: () => void;
}

export default (): UseRedirectTypes => {
  const navigate = useNavigate();
  const redirectionKey = 'redirect';

  /**
   * validates url and checks if it's an external url or XSS attack
   * @param url
   */
  const validateRedirectUrl = (url: string): string => {
    if (url.match('http|javascript')) return ROUTES.HOME;
    return url;
  };

  const setRedirectUrl = (url: string): void => {
    const validatedRedirectBackUrl = validateRedirectUrl(url);

    localStorage.setItem(redirectionKey, validatedRedirectBackUrl);
  };

  const redirect = (url: string, redirectUrl: string): void => {
    setRedirectUrl(redirectUrl);

    if (isExternalUrl(url)) window.location.href = url;
    else navigate(url);
  };

  const checkRedirection = (): void => {
    const redirectUrl = localStorage.getItem(redirectionKey);

    if (redirectUrl) {
      localStorage.removeItem(redirectionKey);
      navigate(redirectUrl);
    }
  };

  return {
    redirect,
    checkRedirection,
  };
};
