
$(function(){
	
	//챗봇생성
	$(document).ready(function () {
	   // for문 처럼 반복한다. index는 0부터 자동 증가
	    $('.page-manager-list-add .detail-topic-list .list-contents td input').each(
	        function (index) {
	            $(this).attr({      
	                'id': "TopicCheck_" + index
	            });
	            $(this).parent().find('label').attr({
	                'for': "TopicCheck_" + index
	            });
	        }

	    );
	    $('.page-manager-list-add .detail-module-list .list-contents td input').each(
	        function (index) {
	            $(this).attr({      
	                'id': "ModuleCheck_" + index
	            });
	            $(this).parent().find('label').attr({
	                'for': "ModuleCheck_" + index
	            });
	        }
	    );
	});

	$('#TopicCheckall').click(function(){
		if($('#TopicCheckall').prop("checked")){
			//클릭이 되었으면
			$(".detail-topic-list input[name=TopicCheck]").prop("checked",true);
		}else{
			//클릭이 안 되었으면
			$(".detail-topic-list input[name=TopicCheck]").prop("checked",false);
		}
	});
	$('#ModuleCheckall').click(function(){
		if($('#ModuleCheckall').prop("checked")){
			//클릭이 되었으면
			$(".detail-module-list input[name=ModuleCheck]").prop("checked",true);
		}else{
			//클릭이 안 되었으면
			$(".detail-module-list input[name=ModuleCheck]").prop("checked",false);
		}
	});




	//숨기기펼치기 토글
	$('.hidebtn').click(function(){
		$('.manager-list').hide();
		$('#nodePage').width('100%');
	});
	$('.showbtn').click(function(){
		$('.manager-list').show();
		$('#nodePage').width('calc(100% - 360px)');
	});




});
