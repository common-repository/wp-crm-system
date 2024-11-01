function validateEmail(e){return/^([\w-\.]+@([\w-]+\.)+[\w-]{2,63})?$/.test(e)}function validatePhone(e){return/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/.test(e)}function validateURL(e){return/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(e)}jQuery(document).ready((function(e){e("#publish").click((function(){var a=e("#_wpcrm_contact-first-name"),s=e("#_wpcrm_contact-last-name"),l=e("#_wpcrm_contact-email").val(),m=e("#_wpcrm_contact-phone").val(),i=e("#_wpcrm_contact-mobile-phone").val(),t=e("#_wpcrm_contact-website").val(),r=0;if(a.val().length<1?(0==e("#required-name-message").length&&(e(".contact-first-name").after('<label id="required-name-message">* '+wp_crm_system_contact.i18n.error_message.first_name+"</label>"),e("#required-name-message").css("color","red")),r=1):e("#required-name-message").remove(),s.val().length<1?(0==e("#required-last-name-message").length&&(e(".contact-last-name").after('<label id="required-last-name-message">* '+wp_crm_system_contact.i18n.error_message.last_name+"</label>"),e("#required-last-name-message").css("color","red")),r=1):e("#required-last-name-message").remove(),l.length<0||!validateEmail(l)?(0==e("#invalid-email-message").length&&(e("#_wpcrm_contact-email").after('<label id="invalid-email-message">* '+wp_crm_system_contact.i18n.error_message.email_valid+"</label>"),e("#invalid-email-message").css("color","red")),r=1):e("#invalid-email-message").remove(),""==l?(0==e("#missing-email-message").length&&(e("#_wpcrm_contact-email").after('<label id="missing-email-message">* '+wp_crm_system_contact.i18n.error_message.email+"</label>"),e("#missing-email-message").css("color","red")),r=1):e("#missing-email-message").remove(),!validatePhone(m)&&m.length>0?(0==e("#invalid-phone-message").length&&(e("#_wpcrm_contact-phone").after('<label id="invalid-phone-message">* '+wp_crm_system_contact.i18n.error_message.phone+"</label>"),e("#invalid-phone-message").css("color","red")),r=1):e("#invalid-phone-message").remove(),!validatePhone(i)&&i.length>0?(0==e("#invalid-mobile-message").length&&(e("#_wpcrm_contact-mobile-phone").after('<label id="invalid-mobile-message">* '+wp_crm_system_contact.i18n.error_message.mobile+"</label>"),e("#invalid-mobile-message").css("color","red")),r=1):e("#invalid-mobile-message").remove(),!validateURL(t)&&t.length>0?(0==e("#invalid-url-message").length&&(e("#_wpcrm_contact-website").after('<label id="invalid-url-message">* '+wp_crm_system_contact.i18n.error_message.url+"</label>"),e("#invalid-url-message").css("color","red")),r=1):e("#invalid-url-message").remove(),1===r)return!1}))}));