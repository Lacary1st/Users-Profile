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

            // profile pic
             let result = response.results[0];
              let serverPicture = result.picture.large;
                let  pic = document.querySelector('#userpic');
                  pic.src = serverPicture;
              
                  // name
              let name = result = response.results[0].name;
              let fullName = name.title + name.first + name.last;
              document.querySelector('#name').innerHTML=`<b>FULLNAME: </b>`+fullName;
              

              // gender
              let sex = result = response.results[0];
              let seX = sex.gender;
              document.querySelector('#gender').innerHTML=`<b>GENDER: </b>`+seX;


              // dob
              let dob = result = response.results[0].dob;
              let birthhistory =`<br>Date:` +dob.date+ `<br>Age:` +dob.age;
              document.querySelector('#dob').innerHTML=`<b>DOB: </b>`+birthhistory;

              // email
              let mail = result = response.results[0];
              let mailMe = mail.email;
              document.querySelector('#email').innerHTML= `<b>EMAIL: </b>`+mailMe;

              // location
              let locate = result = response.results[0].location;
              let myLocation=`<br>Street:`+ `<br>number:`+locate.street.number+ `<br>Name:`+ locate.street.name + `<br>City:` +locate.city + `<br>State:`+locate.state +`<br>Country:` + locate.country+ `<br>Postcode:` + locate.postcode +`<br>Timezone:<br>`+`Offset:`+locate.timezone.offset +`<br>Description:`+locate.timezone.description;
              document.querySelector('#location').innerHTML=`<b>LOCATION: </b>` + myLocation;
      
            
                // nat
              let nationality = result = response.results[0].nat;
              document.querySelector('#nat').innerHTML= `<b>NATIONALITY: </b>`+ nationality;


              // phone
              let phone = result = response.results[0].phone;
              document.querySelector('#phone').innerHTML= `<b>PHONE: </b>`+ phone;

              // cell
              let cellular= result = response.results[0].cell;
              document.querySelector('#cell').innerHTML= `<b>CELL: </b>`+ cellular;

              // id
              let id = result = response.results[0].id;
              let details = `<br> Name:`+  id.name + `<br> Value:` + id.value;
              document.querySelector('#id').innerHTML= `<b>ID: </b>` +details;

                // info
              let information = result = response.info;
              let fullInfo = `<br> Seed:` + information.seed + `<br> Results: ` + information.results + `<br> Page: ` + information.page + `<br> Version: ` + information.version;
              document.querySelector('#info').innerHTML= `<b>INFO:</B> ` +fullInfo;

              // // login
      
              let log = result = response.results[0].login;
              let logindetails= ` Login:<br>` + log.uuid+ `<br> Username: ` + log.username + `<br> Password: ` + log.password + `<br> Salt: ` + log.salt `<br> Md5: ` + log.md5 + `<br> Shal: ` + log.shal+ `<br> Sha256: ` + log.sha256;
              document.querySelector('#login').innerHTML=`<b>LOGIN:</B> ` + logindetails;
              
              
          }).catch(err =>{
              console.log(err)
           })
          