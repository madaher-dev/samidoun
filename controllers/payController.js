const axios = require('axios');
const Session = require('../models/sessionModel');

exports.getSession = async (req, res, next) => {
  const config = {
    auth: {
      username: 'merchant.TEST222206018001',
      password: 'ac7f9a3332f580be9fefc51b684ac61b',
    },

    headers: {
      'Content-Type': 'application/json',
    },
  };
  //console.log(req.body);
  try {
    const amount = req.body.order.amount;
    const session = await Session.create({ amount });
    req.body.order.id = session.id;

    const sessionResponse = await axios.post(
      `https://epayment.areeba.com/api/rest/version/55/merchant/TEST222206018001/session`,
      req.body,
      config
    );
    sessionResponse.data.orderID = session.id;
    await Session.findByIdAndUpdate(session.id, {
      sessionID: sessionResponse.data.session.id,
      status: 'success',
    });
    res.status(200).json({
      status: 'success',
      data: sessionResponse.data,
    });
  } catch (error) {
    console.log(error);
  }
};
