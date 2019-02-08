export default function getBaseUrl () {
  const inDevelopment = window.location.hostname === 'localhost';
  return inDevelopment ? 'http://5c59e5abaf3ff700140de433.mockapi.io/kidos/v1/' : '/';
}
