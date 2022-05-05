import jQuery from 'jquery'
function Toggle()
{
    jQuery('#customSwitch1').on('change', function(){

        var toggle_val = jQuery(this).is(":checked");
        console.log(toggle_val);
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

export default Toggle;