

$(document).ready(function(){

  flag=  window.localStorage.getItem('flag');
  
    displayCart();
  
  
  
  
  $('body').delegate('#checkout-btn','click',function(e){
    if(flag==1){
      e.preventDefault();
    ls.removeItem('order');
    var email = 'a@b.com';
    var subject = '';//msg title
    var body_message = 'new order arrived!';
    var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + body_message;
    window.open(mailto_link);
     
    }else{
      alert("log in first :) .");
    }
    
  });/*del*/



});/*ready*/