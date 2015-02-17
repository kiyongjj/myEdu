$(document).ready(function(){

//	$("*").css("border", "1px solid #ff0000");

	$("button[name=view]").click(function(){

		$("table[name=listTable] tbody tr").remove();

		_.each(data, function(obj){
			var count = 0;

			var $tr = $("<tr>"
			+ "<input type='hidden' name='_id' value='" + obj._id + "'/>"
			+ "<td>" + obj.name + "</td>"
			+ "<td>" + obj.addr + "</td>"
			+ "<td>" + obj.tel + "</td>"
			+ "<td><a href='" + obj.homepage + "' target='_blank'>" + obj.homepage + "</a></td>"
			+ "<td><button class='btn btn-xs btn-default active' name='delete'><i class='glyphicon glyphicon-trash'></i></td>"
			+ "</tr>");

			$tr.appendTo("table[name=listTable] tbody");
		});

	});

	$("table[name=listTable] tbody").on('click', 'button', function(){			// 휴지통 버튼 클릭 시 삭제

		var selected_id = $("table[name=listTable] tbody tr").find('input[name=_id]').val();

		data = _.reject(data, function(obj){
			return obj._id == selected_id;
		});

		$("button[name=view]").trigger('click');
	});

/*	$("table[name=listTable] tbody").on('click', 'tr', function(){			// 데이터 클릭 시 삭제(homepage link로 사용 불가)

		var selected_id = $(this).find('input[name=_id]').val();
		data = _.reject(data, function(obj){
			return obj._id == selected_id;
		});
		$("button[name=view]").trigger('click');
	});
*/
	$("button[name=save]").click(function(){

		var rtn = {};

		rtn["_id"] = $("input[name=_id]").val();
		rtn["name"] = $("input[name=name]").val();
		rtn["addr"] = $("input[name=addr]").val();
		rtn["tel"] = $("input[name=tel]").val();
		rtn["homepage"] = $("input[name=homepage]").val();

//		_.each($(".form-control"), function(obj){

//			var ctrl = $(obj);

//			rtn[ctrl.attr("name")] = ctrl.val();

//		});

//		var rtn = {
//			_id : $("input[name=_id]").val()
//			,name : $("input[name=name]").val()
//			,age : $("input[name=age]").val()
//			,tel : $("input[name=tel]").val()
//			,email : $("input[name=email]").val()
//		};

		data.push(rtn);

		$("button[name=view]").trigger('click');

	});
});