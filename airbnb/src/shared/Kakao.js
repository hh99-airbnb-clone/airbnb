const REST_API_KEY = 'b6c4cf850cee0ecfe07d6cb202fa1c57';
const REDIRECT_URI = 'http://localhost:3000//user/kakao/callback';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
