// let topic = document.createElement('h1')
        // topic.innerHTML="USER'S PROFILE";
        // let topicContent = document.body;
        // topicContent .appendChild(topic);
        // // topicContent.insertBefore(topic,img)
        // // document.body.insertBefore(topic,img)
        // topic.style.textAlign=('center');
        // topic.style.color=('white');
        // topic.style.fontSize=('40px');


        fetch("https://randomuser.me/api/").then(function(data){
            return  data.json()
           }).then(response =>{
             let result = response.results[0];
              let serverPicture = result.picture.large;
                let  pic = document.querySelector('#userpic');
                  pic.src = serverPicture;
      
              let name = result = response.results[0].name;
              let fullName = name.title +""+ name.first + name.last;
              document.querySelector('#name').innerHTML=`<b>FULLNAME: </b>`+fullName;
      
              let sex = result = response.results[0];
              let seX = sex.gender;
              document.querySelector('#gender').innerHTML=`<b>GENDER: </b>`+seX;
      
              let dob = result = response.results[0].dob;
              let birthhistory = dob.date + dob.age;
              document.querySelector('#dob').innerHTML=`<b>DOB: </b>`+birthhistory;
      
              let mail = result = response.results[0];
              let mailMe = mail.email;
              document.querySelector('#email').innerHTML= `<b>EMAIL: </b>`+mailMe;
      
              let locate = result = response.results[0].location;
              let myLocation= locate.street.number+ locate.street.name;
              document.querySelector('#location').innerHTML=`<b>LOCATION: </b>` + myLocation;
      
            //   let cities = response.results[0];
            //   let myCity = cities.city;
            //   document.querySelector('#city').innerHTML=`<b>CITY: </b>`+myCity;
            // console.log(city)
              
      
            //   let origin = response.results[0].state;
            //   let mystate = origin.state;
            //   document.querySelector('#state').innerHTML= `<b>STATE: </b>`+mystate;
      
            //   let countries = result = response.results[0];
            //   let myCountry = countries.country;
            //   document.querySelector('#country').innerHTML= `<b>COUNTRY: </b>`+myCountry;
      
            //   let post = result = response.results[0];
            //   let postalcode = post.postcode;
            //   document.querySelector('#postcode').innerHTML= `<b>POSTCODE: </b>`+ postalcode;
      
            //   let longlang = result = response.results[0].coordinates;
            //   let distance = longlang.coordinates.latitude + longlang.coordinates.longitude;
            //   document.querySelector('#cordinates').innerHTML=`<b>COORDINATES: </b>`+ distance;

              let nationality = result = response.results[0].nat;
            //   let myNationality = nationality.nat;
              document.querySelector('#nat').innerHTML= `<b>NATIONALITY: </b>`+ nationality;


              let phone = result = response.results[0].phone;
              document.querySelector('#phone').innerHTML= `<b>PHONE: </b>`+ phone;

              let cellular= result = response.results[0].cell;
              document.querySelector('#cell').innerHTML= `<b>CELL: </b>`+ cellular;

              let id = result = response.results[0].id;
              let details = `<br> Name:  id.name <br> Value:` + id.value;
              document.querySelector('#id').innerHTML= `<b>ID: </b>` +details;



      
          
              
          }).catch(err =>{
              console.log(err)
           })
          