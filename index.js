const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const axios = require("axios").default;
const cheerio = require("cheerio");
const cron = require("node-cron");
const {BreakingNew} =require("./models");
mongoose.connect(MONGO_URI, { useNewUrlParser: true,useUnifiedTopology: true  });



cron.schedule("*/2 * * * * *",async()=>{
    const breakingnews =[];
    const html = await axios.get("https://cnnespanol.cnn.com/");
    const $ = cheerio.load(html.data);
    const titles = $(".news__title");

    titles.each((index, element) => {
        
        
        breakingnew =  {
            title:$(element).text().toString().replace(new RegExp("\n", "g"), "").replace(new RegExp("\t", "g"), ""),
            link: $(element).children().attr("href").toString()
        };
        breakingnews.push(breakingnew);
       
  
    });
    BreakingNew.create(breakingnews);
    
}

);


