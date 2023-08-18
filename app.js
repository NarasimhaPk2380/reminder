const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require('mongoose');
const utils = require("./utils");
require('dotenv').config();


const app = express();
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'demo')));



const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = require('twilio')(accountSid, authToken);

mongoose.connect('mongodb+srv://durga:durga123@twilio.vlwstma.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'));

require('./user');

const User = mongoose.model('User');

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'demo/index.html'))
})

app.get("/users", async (req, res) => {
  try {
    const users = await User?.find({});
    res.json({
      users,
      success: true
    })
  } catch (e) {
    res.json({
      msg: e?.message,
      success: false
    });
  }
});

app.post("/users", async (req, res) => {
  try {
    const newUser = new User({ ...req.body, daysLeft: 3 });
    const user = await newUser.save();
    res.json({
      user,
      success: true
    })
  } catch (e) {
    res.json({
      msg: e?.message,
      success: false
    });
  }
});

app.put("/users/:userId", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req?.params?.userId, req.body)
    res.json({
      user,
      success: true
    })
  } catch (e) {
    res.json({
      msg: e?.message,
      success: false
    });
  }
});

app.delete("/users/:userId", async (req, res) => {
  try {
    await User.findByIdAndDelete(req?.params?.userId);
    res.json({
      success: true
    })
  } catch (e) {
    res.json({
      msg: e?.message,
      success: false
    });
  }

});



app.post("/sendMessages", async (req, res) => {
  try {
    const { usersList } = req.body;
    for (const user of usersList) {
      if (!user?.daysLeft) {
        continue;
      }
      const { sid } = await client.messages.create({ body: utils.message(user), from: process.env.fromPhone, to: `+91${user?.phoneNumber}` })
      if (sid) {
        await User.findByIdAndUpdate(user.userId, { daysLeft: user?.daysLeft - 1 ?? 0 })
      }
    }
    res.json({
      success: true
    });
  } catch (e) {
    return res.json({
      msg: e?.message || 'Failed to send messages',
      success: false
    })
  }
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


