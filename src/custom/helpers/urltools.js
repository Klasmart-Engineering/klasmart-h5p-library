import jwt_decode from 'jwt-decode';

export default class URLTools {

  /**
   * Retrieve decoded JWT from URL fragments.
   * @param {object} [params] Parameters.
   * @param {string} [params.url] Specific URL, fallback to window URL.
   * @param {string} [params.key='token'] Fragment key with token.
   * @param {boolean} [params.decoded=false] If true, will decode JWT.
   * @return {object|null} Decoded JWT or null.
   */
  static getToken(params = {}) {
    let url;

    if (typeof params.url === 'string' && params.url !== '') {
      url = new URL(params.url);
    }
    else {
      url = new URL(window.location.toString());
      if (!url) {
        try {
          url = new URL(window.parent.location.toString());
        }
        catch (event) {
          return null; // No URL to parse.
        }
      }
    }

    if (!url) {
      return null; // No URL.
    }

    if (typeof params.token !== 'string' || params.token === '') {
      params.token = 'token';
    }

    params.decoded = params.decoded || false;

    const fragments = url.searchParams;
    const token = fragments ? fragments.get(params.token) : null

    if (!params.decoded) {
      return token; // Still encoded token
    }

    if (!token) {
      return null; // No token availale.
    }

    let decoded = null;
    try {
      decoded = jwt_decode(token);
    }
    catch (error) {
      return null; // Decoding error
    }

    return decoded;
  }
}
