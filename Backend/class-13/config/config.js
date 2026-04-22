const mongoose = require('mongoose');



/// DB connection

mongoose.connect(`mongodb+srv://batch16:batch162026@cluster0.zlat2hl.mongodb.net/?appName=Cluster0`)
  .then(() => console.log('DB is connected'))
  .catch((err) => console.log(`ERROR in DB connection : ${err}`));