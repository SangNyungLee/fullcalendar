const {calendar} = require('../models');

exports.main = (req,res)=>{
    res.render('fullcalendar');
}
exports.calendar = async (req,res)=>{
    await req.body.forEach((res) => {
        if (res.url == undefined) {
          calendar.create({
            title: res.title,
            start: res.start,
            end: res.end,
            backgroundColor: res.backgroundColor,
          });
        }
      });
}
exports.eventData = async (req, res) => {
    const modelData = await calendar.findAll();
    res.send(modelData);
  };