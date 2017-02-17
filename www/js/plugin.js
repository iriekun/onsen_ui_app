//take photo
function getPhoto () {            
        navigator.camera.getPhotoicture(onSuccess, onFail, 
          { quality: 50, destinationType: Camera.DestinationType.FILE_URI });

        function onSuccess (imageURI) {document.getElementById('image').src = imageURI;}
      }

      function onFail (message) {
          alert('An error Occured: ' + message);
      }
