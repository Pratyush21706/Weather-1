var bg,weather,a = 1,z=1,temp,c1,h1,input1,button,location,wind,humidity;
var div1,report,covidUrl;
var link = `https://coronavirus-19-api.herokuapp.com/countries/`
var nation = `india`
var api = `https://api.openweathermap.org/data/2.5/weather?q=`
var apiKey =`&appid=ca869b8d4f1a1a9fa1b200e5cef8d33a`;
var units = `&units=metric`

function preload(){
  s1 = loadImage("1.png")
}
function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  input1 = createInput(`Delhi`).attribute(`placeholder`,`Enter Your Location`);
  input1.position(width/3,height/1.1);
  input1.style(`font-size`,`30px`)

  input2 = createInput(`India`).attribute(`placeholder`,`Enter Your Location`);
  input2.position(width/2.64,-5555);
  input2.style(`font-size`,`27px`)

  button = createButton(`🔎`)
  button.position(width/1.8,height/1.1)
  button.mousePressed(weatherAsk);
  button.style(`font-size`,`20px`)

  button1 = createButton(`Change Country`)
  button1.position(width/1.756,-555)
  button1.mousePressed(change);
  button1.style(`font-size`,`10px`)

  button2 = createButton(`🌏Go`)
  button2.position(width/1.756,-555)
  button2.mousePressed(doing);
  button2.style(`font-size`,`15px`)

  covidUrl = link+nation;
  loadJSON(covidUrl, gotCorona);


  }
  function weatherAsk(){
     city = input1.value();
    var url = api+city+apiKey+units;
    loadJSON(url, gotData);
    a = 3;
  }

  function gotData(data){
  weather = data
  }
  
  function gotCorona(info){
    report = info
  }
  function change(){
    input2.position(width/2.61,height/2.5);
    button2.position(width/1.7,height/2.5)

  }
  function doing(){
    nation = input2.value();
    covidUrl = link+nation;
  loadJSON(covidUrl, gotCorona);
  button2.position(width/1.756,-555)
  input2.position(width/2.59,-5555);
  }

  function draw(){
    background(s1)
       if(keyDown("Enter")){
        weatherAsk();
      }

         if(weather){
          z = 2;
          humidity = weather.main.humidity;
          temp = weather.main.temp;

          windSpeed = weather.wind.speed;
          windD = weather.wind.deg;

          name = weather.name;

          lat = weather.coord.lat;
          lon = weather.coord.lon;

          feel = weather.main.feels_like;
          preassure = weather.main.pressure;
          sea = weather.main.feels_like;
          country = weather.sys.country;
          a=2;
          console.log(nation)

        }
        if(report){
          country1 = report.country;
cases = report.cases;
recover = report.recovered;
deaths = report.deaths;
active = report.active;
critical = report.critical;
totalT = report.totalTests;
        }

drawSprites();
    

   
      if(a===2){
        background("#37383b")
  button1.position(width/1.756,height/3.5)

        if(temp<20){
         //  background(c1)
        }
          if(temp>20){
           //  background(h1)
          }
          fill("#663399")
            rectMode(CENTER);
            rect(width/2,height/9,width,height/4)
            noStroke();
            rectMode(CORNER)
            fill("#ff3b5c")
            rect(width/25,height/3.5,width/3.8,height/1.5)
            fill("#ffffff")
            rect(width/2.6,height/3.5,width/4,height)
            fill("#0D98Ba")
            rect(width/1.4,height/3.5,width/4,height/4)
            fill("#ffb825")
            rect(width/1.4,height/1.7,width/4,height/2.8)
            fill("white");
            textSize(30)
            text("Country: "+country,width/10,height/2);
            text("Humidity: "+humidity+"%",width/10,height/1.7)
            text("Preassure: "+preassure,width/10,height/1.48)
            text("Feels Like: "+Math.round(feel)+"°C",width/10,height/1.3)
            //covid 19
            fill("black")
            text("Total Cases",width/2.25,height/2)
            text("Recoverd:  "+recover,width/2.5,height/1.49);
            text("Deaths:      "+deaths,width/2.5,height/1.35)
            text("Critical:       "+critical,width/2.5,height/1.13)
            text("Active:        "+active,width/2.5,height/1.23)

            text("Tests:          "+totalT,width/2.5,height/1.05)


            fill("#ffffff")
            textSize(40);
            textStyle("bold")
            text("Coordinates",width/1.31,height/2.85)
            text("Wind",width/1.25,height/1.5)
            text("Highlights",width/10,height/2.8)
            fill("#ff3b5c")
            text("Covid-19",width/2.3,height/2.6)
            fill("#ffffff")
            

            textStyle(NORMAL)
            textSize(26)
            text("°C",width/1.78,height/5.58)
            text("Latitude:",width/1.27,height/2.35)
            text("Longitude:",width/1.27,height/2)
            text("Wind Speed:",width/1.34,height/1.3)
            text("Wind Direction:",width/1.34,height/1.2)
            fill("black")
            text("("+country1+")",width/2.15,height/2.3)
            fill("#ffffff")
            
            textSize(50)
            text(name,width/2,height/11)
            textSize(55);
            textFont(`Agency FB`)
            text(Math.round(temp),width/1.9,height/5)
            stroke("#ff3b5c");
            noFill();
            text(Math.round(cases),width/2.2,height/1.7)
            fill("#ffffff")
noStroke();
            textSize(30)
            text(Math.round(lat),width/1.12,height/2.35)
            text(Math.round(lon),width/1.12,height/2)
            text(Math.round(windSpeed)+` Kmph`,width/1.14,height/1.3)
            text(Math.round(windD)+`°`,width/1.1,height/1.2)
            input1.position(width/1.38,height/30)
            button.position(width/1.04,height/30)
     }
       if(a ===3){
     textStyle("bold");
    fill("white");
  textSize(40);
text(`loading...`,width/2,height/1.5)
fill("pink")
textSize(20);
   }
}
 
