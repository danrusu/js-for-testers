module.exports = {
  getToDoAuth,
};

function getToDoAuth() {
  const { TODO_USERNAME: username, TODO_PASSWORD: password } = process.env;
  if (!username || !password) {
    throw new Error('Need credentials for TODO APP in .env');
  }
  const base64Encoded = Buffer.from(`${username}:${password}`).toString(
    'base64',
  );
  return `Basic ${base64Encoded}`;
}
