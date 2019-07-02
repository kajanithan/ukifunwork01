SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});
$(document).ready(function() {  SC.stream('/tracks/557443611',function(sound){
  $('#start1').click(function(e) {
             e.preventDefault();
             sound.start();
           });
 }); $('#stop1').click(function(e) {
           e.preventDefault();
           sound.stop();
         });


 });
 $(document).ready(function() {  SC.stream('/tracks/315381087',function(sound){
   $('#start2').click(function(e) {
              e.preventDefault();
              sound.start();
            });
  }); $('#stop2').click(function(e) {
            e.preventDefault();
            sound.stop();
          });
 $(document).ready(function() {  SC.stream('/tracks/109884800',function(sound){
   $('#start3').click(function(e) {
            e.preventDefault();
            sound.start();
          });
    }); $('#stop3').click(function(e) {
          e.preventDefault();
          sound.stop();
        });
  $(document).ready(function() {  SC.stream('/tracks/530976372',function(sound){
      $('#start4').click(function(e) {
            e.preventDefault();
            sound.start();
                 });
        }); $('#stop4').click(function(e) {
            e.preventDefault();
            sound.stop();
          });
 });
