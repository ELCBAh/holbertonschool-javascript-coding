const express = require('express');
const app = express();

app.listen(1245);
app.use('/', require('./routes/index'));
app.use('/students', require('./routes/index'));
app.use('/students/:major', require('./routes/index'));

export default app;
