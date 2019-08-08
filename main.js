SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});
$(document).ready(function() {  SC.stream('/tracks/557443611',function(sound){
  $('#start1').click(function(e) {
             e.preventDefault();
             sound.start();
           });
  $('#stop1').click(function(e) {
           e.preventDefault();
           sound.stop();
         });

    });

$(document).ready(function() {  SC.stream('/tracks/315381087',function(sound){
  $('#start2').click(function(e) {
              e.preventDefault();
              sound.start();
            });
   $('#stop2').click(function(e) {
            e.preventDefault();
            sound.stop();
          });

  });

 $(document).ready(function() {  SC.stream('/tracks/109884800',function(sound){
   $('#start3').click(function(e) {
            e.preventDefault();
            sound.start();
          });
     $('#stop3').click(function(e) {
          e.preventDefault();
          sound.stop();
        });

   });

  $(document).ready(function() {  SC.stream('/tracks/530976372',function(sound){
      $('#start4').click(function(e) {
            e.preventDefault();
            sound.start();
                 });
         $('#stop4').click(function(e) {
            e.preventDefault();
            sound.stop();
          });
   });
   $(document).ready(function() {  SC.stream('/tracks/89702917',function(sound){
       $('#start5').click(function(e) {
             e.preventDefault();
             sound.start();
                  });
          $('#stop5').click(function(e) {
             e.preventDefault();
             sound.stop();
           });
    });
    $(document).ready(function() {  SC.stream('/tracks/488970675',function(sound){
        $('#start6').click(function(e) {
              e.preventDefault();
              sound.start();
                   });
           $('#stop6').click(function(e) {
              e.preventDefault();
              sound.stop();
            });
     });
     $(document).ready(function() {  SC.stream('/tracks/45386331',function(sound){
         $('#start7').click(function(e) {
               e.preventDefault();
               sound.start();
                    });
            $('#stop7').click(function(e) {
               e.preventDefault();
               sound.stop();
             });
      });
      $(document).ready(function() {  SC.stream('/tracks/529335735',function(sound){
          $('#start8').click(function(e) {
                e.preventDefault();
                sound.start();
                     });
             $('#stop8').click(function(e) {
                e.preventDefault();
                sound.stop();
              });
       });
       $(document).ready(function() {  SC.stream('/tracks/400024665',function(sound){
           $('#start9').click(function(e) {
                 e.preventDefault();
                 sound.start();
                      });
              $('#stop9').click(function(e) {
                 e.preventDefault();
                 sound.stop();
               });
        });
        $(document).ready(function() {  SC.stream('/tracks/318224589',function(sound){
            $('#start10').click(function(e) {
                  e.preventDefault();
                  sound.start();
                       });
               $('#stop10').click(function(e) {
                  e.preventDefault();
                  sound.stop();
                });
         });
});
});
