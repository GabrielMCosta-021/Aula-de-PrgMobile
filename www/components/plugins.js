// This is a JavaScript file

  $(document).on("click","#alerta",function(){
  navigator.notification.alert("Minha mensagem",null ,"Aviso ","Aceito");
});

  $(document).on("click","#confirma",function(){
     function confirma(buttonIndex){
    if(buttonIndex == 1){
      navigator.notification.alert("Escolheu o Botão A");
    }else{
       navigator.notification.alert("Escolheu o Botão B");
    }

    } 
  navigator.notification.confirm("Escolha A ou B",confirma,"Escolha:",['A','B']);
});

$(document).on("click","#beep",function(){
  navigator.notification.beep(2);
});

$(document).on("click","#vibrar",function(){
 navigator.vibrate(3000);
  });

function MostraMapa(lat, long){
 L.mapquest.key = '11p7RjG2SDKhT5AdX4ulnUC0Tr40l3B9';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 16
        });

        L.marker([lat, long], {
          icon: L.mapquest.icons.marker(),
          draggable: false
        }).bindPopup('Denver, CO').addTo(map);

        map.addControl(L.mapquest.control());

     L.circle([lat, long], { radius: 200 }).addTo(map);          
}

$(document).on("click","#local",function(){
   var onSuccess = function(position) {
      MostraMapa(position.coords.latitude, position.coords.longitude)
   };
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
   navigator.geolocation.getCurrentPosition(onSuccess, onError);
});