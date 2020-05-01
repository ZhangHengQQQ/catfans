		function checkIdcard (id) {
			if (/\d{17}[\dxX]/.test(id)) {
				// 372501000012251234
				var year = id.substr(6, 4);
				var month = id.substr(10,2);
				var day = id.substr(12,2);
				var birthdate = year + "-" + month + '-' + day;
				console.log(birthdate);
				document.forms[0].birthdate.value = birthdate;
				
				var gender = id.substr(16, 1);
				if (gender % 2 == 0) {
					gender = '女';
				} else{
					gender = '男';
				}
				document.forms[0].gender.value = gender;
			} else{
				alert('身份证号不正确');
			}
		}
		
		function doSubmit () {
			var regForm = document.forms[0];
			// 依次对各个域进行验证，如果有不符合条件的，不提交
			if (regForm.username.value.length == 0) {
				// 用户名为空，不能提交
				return false; // 禁止了提交按钮的默认行为（提交表单）
			}
			// 如果都符合条件，就提交表单
			alert('将要提交表单');
			regForm.submit();
			return true;
		}