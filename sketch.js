var r=255 , g = 50, b=0;
var icon,iconImg;
var corona = 1;
// var y=2020, montho=1||2||3||4;

function preload(){
  s1 = loadImage("1.png")
  sunny = loadImage("Sunny.png")
    iconImg = loadImage("http://openweathermap.org/img/wn/10d@2x.png")
}
function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
var col = color(25, 23, 200, 1);

  input1 = createInput(`Delhi`).attribute(`placeholder`,`Enter Your Location`);
  input1.position(width/4,height/1.09);
  input1.style(`font-size`,`17px`)
    input1.style(`border`,`100px`)
    input1.style(`background-color`,"#87CEEB")

  input2 = createInput(`India`).attribute(`placeholder`,`Enter Your Location`);
  input2.position(width/2.64,-555);
  input2.style(`font-size`,`20px`)

     button1 = createButton(`🔍`)
  button1.position(width/1.756,-555)
  button1.mousePressed(change);
  button1.style(`font-size`,`20px`)
        button1.style(`background-color`,`#87CEEB`)
        button1.style(`border`,`0px`)

 button = createButton(`🔍`)
    button.position(width/1.75,height/1.1)
      button.mousePressed(weatherAsk);
     button.style(`font-size`,`21px`)
        button.style(`background-color`,col)
        button.style(`border`,`0px`)

    
 button3 = createButton(`Covid19 Updates`)
  button3.position(width/1.756,-555)
  button3.mousePressed(changer);
  button3.style(`font-size`,`20px`)
        button3.style(`background-color`,`#87CEEB`)
        button3.style(`border`,`0px`)
 
    button4 = createButton(`Weather Updates`)
  button4.position(width/1.756,-555)
  button4.mousePressed(retriver);
  button4.style(`font-size`,`20px`)
        button4.style(`background-color`,`#87CEEB`)
        button4.style(`border`,`0px`)


  covidUrl = link+nation;
  loadJSON(covidUrl, gotCorona);


  }
  function weatherAsk(){
     city = input1.value();
    var url = api+city+apiKey+units;
    loadJSON(url, gotData);
    a = 3;
      button.position(20,-555)
            input1.position(20,-555)

  }
function retriver(){
    corona = 1
}
function changer(){
    corona = 2;
}

  function gotData(data){
  coming = data
  }
  
  function gotCorona(info){
    report = info
  }
  function change(){
    input1.position(width/2,10);
    button.position(width/1.1,8)
      corona = 1;
//      button1.position(width/1.1,-555)


  }
  function doing(){
    nation = input2.value();
    covidUrl = link+nation;
  loadJSON(covidUrl, gotCorona);
  button2.position(width/1.756,-555)
  input2.position(width/2.59,-5555);
  button1.position(width/1.4,height/1.5)
    
  }

  function draw(){
    background(s1)
//     console.log(montho);
       

       if(keyDown("Space")){
        weatherAsk();
      }

         if(coming){
//              console.log(coming)
         
         z = 2;
         humidity = coming.list[0].main.humidity;
         temp = coming.list[0].main.temp;

         windSpeed = coming.list[0].wind.speed;
         windD = coming.list[0].wind.deg;

        name = coming.city.name;
        feel = coming.list[0].main.feels_like;
         preassure = coming.list[0].main.pressure;
        country = coming.city.country;
                 population= coming.city.population;

        lat =coming.city.coord.lat;
        lon =coming.city.coord.lon;

       
            des = coming.list[0].weather[0].main;
            icon = coming.list[0].weather[0].icon;
            
             //Day 1
                      temp1 = coming.list[5].main.temp;
des1 = coming.list[5].weather[0].main
// console.log(date)
             
              //Day 2
                      temp2 = coming.list[13].main.temp;
des2 = coming.list[13].weather[0].main

              //Day 3
                      temp3 = coming.list[21].main.temp;
des3 = coming.list[21].weather[0].main

              //Day4
                      temp4 = coming.list[29].main.temp;
des4 = coming.list[29].weather[0].main

              //Day 5
                      temp5 = coming.list[37].main.temp;
des5 = coming.list[37].weather[0].main

             
            hr = hour();
            mn =minute();
            sc = day();
// sc = 25;

//              dy = day();
//             month = month();
//year = year();
         a=2;
image(iconImg,200,200)
       }
       if(hr===13){
         hr =1
       }
       if(hr===14){
         hr =2
       }
       if(hr===15){
         hr =3
       }
       if(hr===16){
         hr =4
       }
       if(hr===17){
         hr =5
       }
       if(hr===18){
         hr =6
       }
       if(hr===19){
         hr =7
       }
       if(hr===20){
         hr =8
       }
       if(hr===21){
         hr =9
       }
       if(hr===22){
         hr =10
       }
       if(hr===23){
         hr =11
       }
       if(hr===24){
         hr =12
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
      if(a===2){
      if(report){
            button3.position(3,6)
          console.log("got th edt")
      }          
      }

drawSprites();
   if(a===1){
    let need = input1.value();
     textStyle("bold")
       fill("Red")
       textSize(20)
     text(need,width/2,height/6)
   }
  
     if(a===2){
       background(sunny)
                
   button1.position(width/1.1,8)

       if(temp<20){
        //  background(c1)
       }
         if(temp>20){
          //  background(h1)
         }           
           fill("white")
           
            textSize(40)
            textStyle("normal")
//                        text(" °",width/3.5,height/4.5)
            textSize(20)
//  fill("white")
textStyle("bold")
 text("Latitude",width/19,height/1.24)


  text(" Longitude ",11,height/1.155)
    text("Population ",width/25,height/1.08)
    fill("black")
    text(Math.round(population),width/21,height/1.04)
 text(Math.round(lat),width/10,height/1.192)
 text(Math.round(lon),width/10,height/1.11)

 fill("black")
 textStyle("normal")
//             text(,width/12,height/2.05)
                      textSize(30)
//          console.log(description)
//                       console.log(country)
           textFont(`Alegreya Sans`)
if(corona===1){
           text(name+" "+country ,width/2.18,height/5)
            text(des, width/2.18 , height/3.8)
           textSize(100);
           textStyle("normal")
////          for(var i =0; i++ ; i=temp){
//              console.log(i)
//          }
textStyle("normal")
           text(Math.round(temp)+"°",width/11,height/3.8)
}button3
textFont("Mangal")
            textSize(40)
//           textStyle("bold")
           fill("#fffffff")
                      text(humidity+"%",width/10,height/1.52)

            textSize(30)
            text(Math.round(windSpeed)+`K/PH`,width/2.5,height/1.53)
textSize(18)
text(des1,width/3.25,height/1.07)
text(des2,width/2.25,height/1.07)
text(des3,width/1.7,height/1.07)
text(des4,width/1.35,height/1.07)
text(des5,width/1.16,height/1.07)
textSize(30)
// date1 = sc+1;
// date2 = sc+2;
// date3 = sc+3;
// date4 = sc+4;
// date5 = sc+5;

date1 = 31
date2 = 01
date3 = 02
date4 = 03
date5 = 04

// if(date1==="32"){
//   date1 = 1;
// }
// if(date2==="32"){
//   date2 = 99;
// }
// if(date3==="32"){
//   date3 = 1;
// }
// if(date4==="32"){
//   date4 = 1;
// }
// if(date5==="32"){
//   date5 = 1;
//}

// if(date1==="33"){
//   date1 = 2;
// }
// if(date2==="33"){
//   date2 = 2;
// }
// if(date3==="33"){
//   date3 = 2;
// }
// if(date4==="33"){
//   date4 = 2;
// }
// if(date5==="33"){
//   date5 = 2;
// }

// text(date1,width/3.15, height/1.22)
// text(date2,width/2.15,height/1.22)
// text(date3,width/1.63,height/1.22)
// text(date4,width/1.33,height/1.22)
// text(date5,width/1.13,height/1.22)

text(date1,width/3.15, height/1.22)
text("0"+date2,width/2.15,height/1.22)
text("0"+date3,width/1.63,height/1.22)
text("0"+date4,width/1.33,height/1.22)
text("0"+date5,width/1.13,height/1.22)
textStyle("normal")
textSize(22)

fill("black")
         if(corona===1){
            text(Math.round(feel)+`°`,width/2.4,height/2.95)
            text("Time: "+hr+":"+mn,width/1.85,height/2.95)
             button4.position(3,-555)
//                         input1.position(20,-555)

         }
fill("white")
                              text(+preassure+"hPa",width/1.4,height/1.53)
                              textSize(32)
text(Math.round(temp1)+"°",width/3.15,height/1.115)
text(Math.round(temp2)+"°",width/2.15,height/1.115)
text(Math.round(temp3)+"°",width/1.65,height/1.115)
text(Math.round(temp4)+"°",width/1.35,height/1.115)
text(Math.round(temp5)+"°",width/1.14,height/1.115)
         console.log(corona)
if(corona===2){
 noStroke();
                button4.position(3,6)
  button1.position(width/1.756,-555)

 fill("#FDEDE4")
    rect(0,0,width,height/2.7)
    textSize(30)
    fill("Black")
    textStyle("bold")
    text("Covid 19",width/2.7,height/11)
    textSize(25)
        text("Total Cases ",width/2.8,height/7)
        noFill();
        stroke("red")
        textSize(50)
text(cases,width/3.3,height/4.6)
 fill("Black")
  noStroke();
  textSize(25)
  textStyle("normal")
text("Recoverd: "+recover, width/25, height/3)
text("Active:    "+ active, width/25, height/3.6)
text("Critical:    "+ critical, width/25, height/2.6)
text("Country: "+country1,width/1.8, height/3.6)
text("Total Tests ",width/1.75, height/3)
text(totalT,width/1.7, height/2.6)
}
//         country1 = report.country;
//cases = report.cases;
//recover = report.recovered;
//deaths = report.deaths;
//active = report.active;
//critical = report.critical;
//totalT = report.totalTests;

//             input1.position(width/1.65,height/30)
// input1.style(`font-size`,`10px`)

//             button.position(width/1.28,height/30)
//             button.style(`font-size`,`11px`)
    }
      if(a ===3){
     input1.position(width / 4, -555);
       button.position(width / 1.5, -555)
       textStyle("bold");
     if(frameCount%4===0){
       r =random(0,255);
       g= random(0,255);
     b =random(0,255)
     }

       //           console.log("r: "+r)
       //            console.log("g: "+g)
       //            console.log("b: "+b)
       rectMode(CENTER)
       fill(rgb(r, g, b, 80))
       rect(window.innerWidth / 2, window.innerHeight / 2, width, height)

       textSize(40);
       fill("fffffff")
       text(`loading...`, width / 2.5, height / 2)

       textSize(20);
  }
  }
