//import $ from 'jquery';
import jQuery from 'jquery'


function ToggleBar(){
    jQuery(".top-togglebar").click(function(){
        //  alert('hi');
        jQuery("body").toggleClass("top-bar-expand");
      }); 
     /*  jQuery(function () {
        jQuery('[data-toggle="tooltip"]').tooltip()
         }); */
  
         jQuery(".right-togglebar").click(function(){
            jQuery(".toggle-right-content").addClass("toggle-right-content-show");
         
         });
         jQuery(".close-button").click(function(){
            jQuery(".toggle-right-content").removeClass("toggle-right-content-show");
         });
         jQuery(".close-button-menu").click(function(){
            jQuery("body").removeClass("top-bar-expand");
         });
  
  /* checkbox selector*/
       jQuery('.message-list-ul>li').click(function () {
                jQuery('input:not(:checked)').parent().parent().parent().removeClass("unread");
                jQuery('input:checked').parent().parent().parent().addClass("unread");
            });
        jQuery('input:checked').parent().parent().parent().addClass("unread");
  
       /*  function myFunction() {
          alert("Hello! I am an alert box!");
        }
   function myFunctiondelete() {
          alert("Delete Event");
        }
   */
        jQuery('#customSwitch1').on('change', function(){
  
          var toggle_val = jQuery(this).is(":checked");
         // console.log(toggle_val);
          if(toggle_val === true ){
            jQuery('#performance-tab-one').css('display','none');
            jQuery('#performance-tab-two').css('display','block');
            jQuery('#qualitative-heading').css('display','block');          
            jQuery('#performance-heading').css('display','none');
          } else if(toggle_val === false ){
            jQuery('#performance-tab-one').css('display','block');
            jQuery('#performance-tab-two').css('display','none');
            jQuery('#qualitative-heading').css('display','none');
            jQuery('#performance-heading').css('display','block'); 
            
  
          }
        });
}




export default ToggleBar;