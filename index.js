const dotenv = require('dotenv');
const app = require('./src/config/setupServer');

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log('Server running on port 3000 ⚠');
  console.log('Go to: http://localhost:3000');
});
