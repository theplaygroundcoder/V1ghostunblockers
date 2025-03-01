// api/active-users.js

let activeUsers = 0;

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ activeUsers });
  } else if (req.method === 'POST') {
    activeUsers++;
    return res.status(200).json({ activeUsers });
  }
}
