function wcs_close_quick_modal(){jQuery(".wcs-modal *").filter(":input:not([type=submit]):not([type=hidden])").each((function(){jQuery(this).val("")})),jQuery(".message").text(""),jQuery(".message").removeClass("success error"),jQuery(".wcs-modal").removeClass("is-open")}function wcs_assign_entry(a,e,o){jQuery("select#"+a).empty().trigger("chosen:updated"),jQuery.each(o,(function(e,o){jQuery("select#"+a).append('<option value="'+o.ID+'">'+o.name+"</option>")})),jQuery("select#"+a).val(e).trigger("chosen:updated")}jQuery(document).ready((function(a){a('<a href="#" class="quick-add task-organization"><img src="'+wp_crm_system_quick_add_modal.plus_icon.path+'" width="16" title="'+wp_crm_system_quick_add_modal.plus_icon.desc.organization+'"/></a>').insertAfter(".attach-to-organization .form-field label .dashicons"),a('<a href="#" class="quick-add task-contact"><img src="'+wp_crm_system_quick_add_modal.plus_icon.path+'" width="16" title="'+wp_crm_system_quick_add_modal.plus_icon.desc.contact+'"/></a>').insertAfter(".attach-to-contact .form-field label .dashicons"),a('<a href="#" class="quick-add task-project"><img src="'+wp_crm_system_quick_add_modal.plus_icon.path+'" width="16" title="'+wp_crm_system_quick_add_modal.plus_icon.desc.project+'"/></a>').insertAfter(".attach-to-project .form-field label .dashicons"),a('<a href="#" class="quick-add task-campaign"><img src="'+wp_crm_system_quick_add_modal.plus_icon.path+'" width="16" title="'+wp_crm_system_quick_add_modal.plus_icon.desc.campaign+'"/></a>').insertAfter(".attach-to-campaign .form-field label .dashicons"),a(document).on("click",".quick-add.task-organization",(function(e){e.preventDefault(),a(".wcs-modal.wcs-organization").addClass("is-open")})),a(document).on("click",".quick-add.task-contact",(function(e){e.preventDefault(),a(".wcs-modal.wcs-contact").addClass("is-open")})),a(document).on("click",".quick-add.task-project",(function(e){e.preventDefault(),a(".wcs-modal.wcs-project").addClass("is-open")})),a(document).on("click",".quick-add.task-campaign",(function(e){e.preventDefault(),a(".wcs-modal.wcs-campaign").addClass("is-open")})),a(document).on("click",".close",(function(a){a.preventDefault(),wcs_close_quick_modal()})),a(document).on("click",".wcs-modal-submit.organization",(function(e){e.preventDefault(),a.ajax({url:wp_crm_system_quick_add_modal.ajax_url,type:"post",dataType:"json",data:{action:"wcs_ajax_add_post",nonce:wp_crm_system_quick_add_modal.nonce,formdata:a("#wcs-form-organization").serialize()},success:function(e){200===e.code?(a("#wcs-modal-organization .modal-content .modal-body .message").removeClass("error").addClass("success"),a("#wcs-modal-organization .modal-content .modal-body .message").text(e.message),wcs_assign_entry(a("[id$=attach-to-organization-input]").attr("id"),e.id,e.organizations),setTimeout((function(){wcs_close_quick_modal()}),2e3)):(a("#wcs-modal-organization .modal-content .modal-body .message").removeClass("success").addClass("error"),a("#wcs-modal-organization .modal-content .modal-body .message").text(e.message))},error:function(e,o,s){a("#wcs-modal-organization .modal-content .modal-body .message").removeClass("success").addClass("error"),200!==e.code&&a("#wcs-modal-organization .modal-content .modal-body .message").text(e.message),setTimeout((function(){wcs_close_quick_modal()}),2e3)}})})),a(document).on("click",".wcs-modal-submit.contact",(function(e){e.preventDefault(),a.ajax({url:wp_crm_system_quick_add_modal.ajax_url,type:"post",dataType:"json",data:{action:"wcs_ajax_add_post",nonce:wp_crm_system_quick_add_modal.nonce,formdata:a("#wcs-form-contact").serialize()},success:function(e){200===e.code?(a("#wcs-modal-contact .modal-content .modal-body .message").removeClass("error").addClass("success"),a("#wcs-modal-contact .modal-content .modal-body .message").text(e.message),wcs_assign_entry(a("[id$=attach-to-contact-input]").attr("id"),e.id,e.contact),setTimeout((function(){wcs_close_quick_modal()}),2e3)):(a("#wcs-modal-contact .modal-content .modal-body .message").removeClass("success").addClass("error"),a("#wcs-modal-contact .modal-content .modal-body .message").text(e.message))},error:function(e,o,s){a("#wcs-modal-contact .modal-content .modal-body .message").removeClass("success").addClass("error"),200!==e.code&&a("#wcs-modal-contact .modal-content .modal-body .message").text(e.message),setTimeout((function(){wcs_close_quick_modal()}),2e3)}})})),a(document).on("click",".wcs-modal-submit.project",(function(e){e.preventDefault(),a.ajax({url:wp_crm_system_quick_add_modal.ajax_url,type:"post",dataType:"json",data:{action:"wcs_ajax_add_post",nonce:wp_crm_system_quick_add_modal.nonce,formdata:a("#wcs-form-project").serialize(),description:tinymce.get("description").getContent()},success:function(e){200===e.code?(a("#wcs-modal-project .modal-content .modal-body .message").removeClass("error").addClass("success"),a("#wcs-modal-project .modal-content .modal-body .message").text(e.message),wcs_assign_entry(a("[id$=attach-to-project-input]").attr("id"),e.id,e.project),setTimeout((function(){wcs_close_quick_modal()}),2e3),tinymce.get("description").setContent(""),e.link&&(a(".day-number-wrapper-"+e.day).find("ul").length>0?a(".day-number-wrapper-"+e.day+" ul").append(e.link):a(".day-number-wrapper-"+e.day).append("<ul>"+e.link+"</ul>"))):(a("#wcs-modal-project .modal-content .modal-body .message").removeClass("success").addClass("error"),a("#wcs-modal-project .modal-content .modal-body .message").text(e.message))},error:function(e,o,s){a("#wcs-modal-project .modal-content .modal-body .message").removeClass("success").addClass("error"),200!==e.code&&a("#wcs-modal-project .modal-content .modal-body .message").text(e.message),setTimeout((function(){wcs_close_quick_modal()}),2e3)}})})),a(document).on("click",".wcs-modal-submit.campaign",(function(e){e.preventDefault(),a.ajax({url:wp_crm_system_quick_add_modal.ajax_url,type:"post",dataType:"json",data:{action:"wcs_ajax_add_post",nonce:wp_crm_system_quick_add_modal.nonce,formdata:a("#wcs-form-campaign").serialize(),description:tinymce.get("wcs_quick_add_campaign_description").getContent()},success:function(e){200===e.code?(a("#wcs-modal-campaign .modal-content .modal-body .message").removeClass("error").addClass("success"),a("#wcs-modal-campaign .modal-content .modal-body .message").text(e.message),wcs_assign_entry(a("[id$=attach-to-campaign-input]").attr("id"),e.id,e.campaign),setTimeout((function(){wcs_close_quick_modal()}),2e3),tinymce.get("wcs_quick_add_campaign_description").setContent(""),e.link&&(a(".day-number-wrapper-"+e.start_day).find("ul").length>0?a(".day-number-wrapper-"+e.start_day+" ul").append(e.link):a(".day-number-wrapper-"+e.start_day).append("<ul>"+e.link+"</ul>"),a(".day-number-wrapper-"+e.end_day).find("ul").length>0?a(".day-number-wrapper-"+e.end_day+" ul").append(e.link):a(".day-number-wrapper-"+e.end_day).append("<ul>"+e.link+"</ul>"))):(a("#wcs-modal-campaign .modal-content .modal-body .message").removeClass("success").addClass("error"),a("#wcs-modal-campaign .modal-content .modal-body .message").text(e.message))},error:function(e,o,s){a("#wcs-modal-campaign .modal-content .modal-body .message").removeClass("success").addClass("error"),200!==e.code&&a("#wcs-modal-campaign .modal-content .modal-body .message").text(e.message),setTimeout((function(){wcs_close_quick_modal()}),2e3)}})})),a(document).on("click",".wcs-modal-submit.task",(function(e){e.preventDefault(),a.ajax({url:wp_crm_system_quick_add_modal.ajax_url,type:"post",dataType:"json",data:{action:"wcs_ajax_add_post",nonce:wp_crm_system_quick_add_modal.nonce,formdata:a("#wcs-form-task").serialize(),description:tinymce.get("wcs_quick_add_task_description").getContent()},success:function(e){200===e.code?(a("#wcs-modal-task .modal-content .modal-body .message").removeClass("error").addClass("success"),a("#wcs-modal-task .modal-content .modal-body .message").text(e.message),setTimeout((function(){wcs_close_quick_modal()}),2e3),tinymce.get("wcs_quick_add_task_description").setContent(""),e.link&&(a(".day-number-wrapper-"+e.start_day).find("ul").length>0?a(".day-number-wrapper-"+e.start_day+" ul").append(e.link):a(".day-number-wrapper-"+e.start_day).append("<ul>"+e.link+"</ul>"),a(".day-number-wrapper-"+e.end_day).find("ul").length>0?a(".day-number-wrapper-"+e.end_day+" ul").append(e.link):a(".day-number-wrapper-"+e.end_day).append("<ul>"+e.link+"</ul>"))):(a("#wcs-modal-task .modal-content .modal-body .message").removeClass("success").addClass("error"),a("#wcs-modal-task .modal-content .modal-body .message").text(e.message))},error:function(e,o,s){a("#wcs-modal-task .modal-content .modal-body .message").removeClass("success").addClass("error"),200!==e.code&&a("#wcs-modal-task .modal-content .modal-body .message").text(e.message),setTimeout((function(){wcs_close_quick_modal()}),2e3)}})})),a(document).on("click",".wcs-modal-submit.opportunity",(function(e){e.preventDefault();var o=a(this).data("day");a.ajax({url:wp_crm_system_quick_add_modal.ajax_url,type:"post",dataType:"json",data:{action:"wcs_ajax_add_post",nonce:wp_crm_system_quick_add_modal.nonce,formdata:a("#wcs-form-opportunity").serialize(),description:tinymce.get("wcs_quick_add_opportunity_description").getContent(),day:o},success:function(e){200===e.code?(a("#wcs-modal-opportunity .modal-content .modal-body .message").removeClass("error").addClass("success"),a("#wcs-modal-opportunity .modal-content .modal-body .message").text(e.message),setTimeout((function(){wcs_close_quick_modal()}),2e3),tinymce.get("wcs_quick_add_opportunity_description").setContent(""),e.link&&(a(".day-number-wrapper-"+e.day).find("ul").length>0?a(".day-number-wrapper-"+e.day+" ul").append(e.link):a(".day-number-wrapper-"+e.day).append("<ul>"+e.link+"</ul>"))):(a("#wcs-modal-opportunity .modal-content .modal-body .message").removeClass("success").addClass("error"),a("#wcs-modal-opportunity .modal-content .modal-body .message").text(e.message))},error:function(e,o,s){a("#wcs-modal-opportunity .modal-content .modal-body .message").removeClass("success").addClass("error"),200!==e.code&&a("#wcs-modal-opportunity .modal-content .modal-body .message").text(e.message),setTimeout((function(){wcs_close_quick_modal()}),2e3)}})}))}));