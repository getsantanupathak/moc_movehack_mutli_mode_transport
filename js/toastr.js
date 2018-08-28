/*
Template Name: Monster Admin
Author: Themedesigner
Email: niravjoshi87@gmail.com
File: js
*/
$(function() {
    "use strict";
      $(".tst1").click(function(){
           $.toast({
            heading: 'Welcome to Monster admin',
            text: 'Use the predefined ones, or specify a custom position object.',
            position: 'top-right',
            loaderBg:'#ff6849',
            icon: 'info',
            hideAfter: 3000, 
            stack: 6
          });

     });

      $(".tst2").click(function(){
           $.toast({
            heading: 'Welcome to Monster admin',
            text: 'Use the predefined ones, or specify a custom position object.',
            position: 'top-right',
            loaderBg:'#ff6849',
            icon: 'warning',
            hideAfter: 3500, 
            stack: 6
          });

     });
      $(".tst3").click(function(){
           $.toast({
            heading: 'Welcome to Monster admin',
            text: 'Use the predefined ones, or specify a custom position object.',
            position: 'top-right',
            loaderBg:'#ff6849',
            icon: 'success',
            hideAfter: 3500, 
            stack: 6
          });

     });

      $(".tst4").click(function(){
           $.toast({
            heading: 'Welcome to Monster admin',
            text: 'Use the predefined ones, or specify a custom position object.',
            position: 'top-right',
            loaderBg:'#ff6849',
            icon: 'error',
            hideAfter: 3500
            
          });

     });
     $(".location_detected").click(function(){
           $.toast({
            heading: 'Welcome to Prayan',
            text: 'Real-time location detected. Changing map to current location.',
            position: 'top-right',
            loaderBg:'#ff6849',
            icon: 'success',
            hideAfter: 3000
            
          });

     });
     $(".changing_city").click(function(){
           $.toast({
            heading: 'Prayan: Changing City',
            text: 'Updating map with city.',
            position: 'top-right',
            loaderBg:'#ff6849',
            icon: 'success',
            hideAfter: 7000
            
          });

     });
});
          
