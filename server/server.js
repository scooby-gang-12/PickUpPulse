const mongoose = require('mongoose')

const app = require('./app')

// Database Connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to DB 🤟'))
  .catch((err) => console.log(err))

// Server Connect
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})