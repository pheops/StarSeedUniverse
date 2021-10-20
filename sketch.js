


let img;





function GalleryFeed(){
   // Get a reference to the storage service, which is used to create references in your storage bucket
  var storage = firebase.storage();

  // Create a storage reference from our storage service
  var storageRef = storage.ref();

  storageRef
    .listAll()
    .then(function (result) {
      result.items.forEach(function (imageRef) {
        displayImage(imageRef);
        
      });
    })
    .catch(function (error) {
      // Handle any errors
    });
/////////////////////
  function displayImage(imageRef) {
    imageRef
      .getDownloadURL()
      .then(function (url) {
        //console.log(url)///get yer urls
     
      //////make a gallery from urls!!!!!!!!!
        createImg(url,'');
  
      })
    
    
      .catch(function (error) {
        // Handle any errors
      });
  }
 ////////////////////////// 

  
}



 

function setup() {
  const firebaseConfig = {
    apiKey: "AIzaSyBzEdz5so2JjlKk9Os_1-OYdfXDOS2VXVQ",
    authDomain: "sts9artgen.firebaseapp.com",
    projectId: "sts9artgen",
    storageBucket: "sts9artgen.appspot.com",
    messagingSenderId: "212920308716",
    appId: "1:212920308716:web:8f8e39fe6f4e75b78266c9",
    measurementId: "G-T0KZN7ZX3M",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 GalleryFeed();


}

function draw() {
  
}

function mousePressed() {

}


