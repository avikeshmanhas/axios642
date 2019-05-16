const axios = require('axios');
const fs = require('fs');

// fb :https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1789077261148209&height=50&width=50&ext=1539518904&hash=AeRnI3GotMAH4FUS
//https://media.licdn.com/dms/image/C4E03AQHoKPuedE89ug/profile-displayphoto-shrink_100_100/0?e=1542240000&v=beta&t=nksWdElaup6PNbwadAkbRAcno56UVactPGEnrea-uw0

//axios({
//method:'get',
//url:'https://media.licdn.com/dms/image/C4E03AQHoKPuedE89ug/profile-displayphoto-shrink_100_100/0?e=1542240000&v=beta&t=nksWdElaup6PNbwadAkbRAcno56UVactPGEnrea-uw0',
//responseType:'arraybuffer'   
//})

// axios.post('https://2020adminstage.circussocial.com/radar/v1/user/register', {
// 	email: 'rohiwewxce0@gmail.com',
//   password: '12345Unaas',
//   name: 'Rohini1',
//   regType: '20twenty'
// })

// axios({
//     method: 'post',
//     url: 'https://2020adminstage.circussocial.com/radar/v1/user/register',
//     data: {
//       email: 'ananya.sundar@circussocial.com',
//         password: '486f82c48be6e550',
//         name: 'The Hour Glass',
//       regType: '20twenty'
//     }  
//   })

axios({
  method: "POST",
  url: 'https://gnip-api.gnip.com/historical/powertrack/accounts/CircusSocial/publishers/twitter/jobs.json',
  headers: {
    'Content-Type': 'application/json'
  },
  auth: {
    username: 'ram.bhamidi@circussocial.com',
    password: 'Circ7v3HzK@16W'
  },
  data: {
    "publisher": "twitter",
    "dataFormat": "activity_streams",
    "fromDate": "201901010000",
    "toDate": "201901310000",
    "title": "GNIPDataJP58",
    "rules": [
      {
        "tag": "Biotrial", "value": "(bio_location:ジャパン OR bio_location:Tokyo OR bio_location:東京 OR bio_location:Yokohama OR bio_location:横浜市 OR bio_location:Osaka OR bio_location:大阪市 OR bio_location:Nagoya OR bio_location:名古屋市 OR bio_location:Sapporo OR bio_location:札幌市 OR bio_location:Kobe OR bio_location:神戸市 OR bio_location:Kyoto OR bio_location:京都市 OR bio_location:Fukuoka OR bio_location:福岡市 OR bio_location:Kawasaki OR bio_location:川崎市 OR bio_location:Kamakura OR bio_location:鎌倉 OR bio_location:Hiroshima OR place_country:JP OR profile_country:jp)"

      }
    ]
  }
})

  .then(response => {
    //var res = JSON.stringify(response.data.message);
    //var data = JSON.parse(res);
    //console.log('Response data access-token == ',data.access-token);
    // console.log('data parse : ',response.data.message);
    // console.log('data parse access-token == ',response.data.message['access-token']);
    // console.log('Response data uid == ',response.data.message.uid)
    console.log('Response data == ', response.data)
  })
  .catch(error => {
    console.log('Error data == ', error.response.data)
  });

// axios({
//   method: 'post',
//   url: 'https://2020adminstage.circussocial.com/radar/v1/user/register',
//   data: {
//     email: 'rohinikumari2010@gmail.com',
//     password: '12345Unaas',
//     name: 'Rohini',
//     regType: '20twenty'
//   }  
// })

  // .then(function(response) {

	// //console.log(response.headers)
  //       console.log('Response of data :: ',response)
  // });




