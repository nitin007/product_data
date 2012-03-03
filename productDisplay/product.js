$(function(){
	var obj = jQuery.parseJSON('[{"name":"1","url":"1.jpg","color":"Yellow","brand":"BRAND A","sold_out":"1"},{"name":"2","url":"2.jpg","color":"Red","brand":"BRAND B","sold_out":"0"},{"name":"3","url":"3.jpg","color":"Green","brand":"BRAND D","sold_out":"0"},{"name":"4","url":"4.jpg","color":"Red","brand":"BRAND A","sold_out":"1"},{"name":"5","url":"5.jpg","color":"Blue","brand":"BRAND B","sold_out":"0"},{"name":"6","url":"6.jpg","color":"Green","brand":"BRAND C","sold_out":"0"},{"name":"7","url":"7.jpg","color":"Red","brand":"BRAND C","sold_out":"1"},{"name":"8","url":"8.jpg","color":"Blue","brand":"BRAND D","sold_out":"0"},{"name":"9","url":"9.jpg","color":"Yellow","brand":"BRAND A","sold_out":"0"},{"name":"10","url":"10.jpg","color":"Yellow","brand":"BRAND B","sold_out":"1"},{"name":"11","url":"11.jpg","color":"Green","brand":"BRAND D","sold_out":"0"},{"name":"12","url":"12.jpg","color":"Yellow","brand":"BRAND D","sold_out":"0"},{"name":"13","url":"13.jpg","color":"Blue","brand":"BRAND A","sold_out":"0"},{"name":"14","url":"14.jpg","color":"Blue","brand":"BRAND D","sold_out":"0"},{"name":"15","url":"15.jpg","color":"Green","brand":"BRAND B","sold_out":"0"},{"name":"16","url":"16.jpg","color":"Yellow","brand":"BRAND B","sold_out":"1"},{"name":"17","url":"17.jpg","color":"Green","brand":"BRAND A","sold_out":"1"},{"name":"18","url":"18.jpg","color":"Blue","brand":"BRAND D","sold_out":"1"},{"name":"19","url":"19.jpg","color":"Green","brand":"BRAND C","sold_out":"0"},{"name":"20","url":"20.jpg","color":"Yellow","brand":"BRAND A","sold_out":"0"}]');
	
	$('input').attr('checked', false);
		
	var test = $('.brand').children();
	var q;
	var arr1=[];
	var arr2=[];
	var count = 0;
	var temp1 = [];
	var temp2 = [];
	for(i=0;i<obj.length;i++)
	{
		q = obj[i].url;
		//$('<div></div>').attr('id', obj[i].name);
		//alert(obj[i].name);
		$('<img/>').attr('src', '/home/nitin-gupta/Desktop/product_data/images/'+q).appendTo(".display").show();;
//		$('#'+obj[i].name).appendTo(".display").show();
	}

	
	$('input').click(function(){
		
		$('div.brand input:checked').each(function(){
			arr1.push($(this).attr('value'));
		});
		
		
		$('div.color input:checked').each(function(){
			arr2.push($(this).attr('value'));
		});
		
		
		if(!(arr1.length && arr2.length))
		{
			if(arr1.length)
			{
				for(l=0;l<obj.length;l++)
				{
					for(j=0;j<arr1.length;j++)
					{
						if((obj[l].brand===arr1[j]))
						{
							//count++;
							//if(count===arr1.length)
							//{	
								$($('img')[l]).show();
								temp1.push(l);
								count=0;
							//}
						}
						
					}
				}
				l=0;
				for(j=0;j<obj.length;j++)
				{
					if(!(j===temp1[l]))
					{
						//alert('f');
						$($('img')[j]).hide();
						l++;
					}
				}
				temp1 = [];
			}
			
			else
			{
				for(l=0;l<obj.length;l++)
				{
					for(j=0;j<arr2.length;j++)
					{
						if((obj[l].color===arr2[j]))
						{
							count++;
						}
						if(count==arr2.length)
						{
							q = obj[l].url;
							$($('img')[l]).show();
							temp1.push(l);
							count=0;
						}
					}
				}
				m=0;
				for(j=0;j<obj.length;j++)
				{
					if(!(j===temp1[m]))
					{
						$($('img')[j].hide());
						m++;
					}
				}
				temp1=[];
			}
		}
		
		else
		{
							//alert('d');
			for(j=0;j<arr1.length;j++)
			{
				for(k=0;k<arr2.length;k++)
				{
					for(l=0;l<obj.length;l++)
					{
						if(arr1[j]==obj[l].brand && arr2[k]==obj[l].color)
						{
							q = obj[l].url;
							$($('img')[l]).show();
							temp1.push(l);
						}
					}
				}
			}
			m= 0;
			for(j=0;j<obj.length;j++)
			{
				if(!(j===temp1[m]))
				{
					$($('img')[j].hide());
					m++;
				}
			}
		}
		
	});
});
	
	
	
	
	
	
	/*var flag, i=0;
	$('input').click(function(){
		var count=0;
		var q, flagA=flagB=flagC=0;
		flag=0;

		var brand=clr=avail= [];
		$('input:checked').each(function(){
			flag= 1;
			brand.push($(this).attr('value'));
			var that = this;
			$('img').each(function(){
				count=0;
				if($(that).attr('value')===obj[i].brand)
				{
 					q = obj[i].url;
					$(this).attr('src', '/home/nitin-gupta/Desktop/product_data/images/'+q).show();
				}
				
				
				else
				{
					for(j=0;j<brand.length;j++)
					{
						if(!(obj[i].brand===brand[j]))
						{
							count++;
						}
						if(count==brand.length)
						{
							q = obj[i].url;
							$(this).attr('src', '/home/nitin-gupta/Desktop/product_data/images/'+q).hide();
							count=0;
						}
					}
				}
				i++;
			});
			i=0;
			
		});
		
		if(!flag)
		{
			$('img').each(function(){
				q = obj[i].url;
				$(this).attr('src', '/home/nitin-gupta/Desktop/product_data/images/'+q).hide();
			});
		}
	});
});*/

















	/*$('input').attr('checked', false);
	var classStr = '', classStr2 = '';
	var flag = true, flag2 = true;
	$('input').click(function(){
		var that = this;
		var arr1 = [];
		var arr2 = [];
		var count = 0;
		var temp = $(this).closest($('div')).attr('class');
		
		if($(this).is(':checked'))
		{	
			
			if(flag && !classStr)
			{
				classStr += $(this).closest($('div')).attr('class');
				flag = 0;
			}
			else
			{
				classStr += " "+$(this).closest($('div')).attr('class');
			}
			arr2 = classStr.split(" ");
			$('img').each(function(){
				arr1 = $(this).attr('class').split(" ");
				for(i=0;i<arr2.length;i++)
				{
					label1 : 
					for(j=0;j<arr1.length;j++)
					{
						if(arr2[i]==arr1[j])
						{
							count++;
							if(count==arr2.length)
							{
								flag2 = true;
							}
							break label1;
						}
						else
						{
							flag2 = false;
						}
					}
				}
				if(flag2)
				{
					$(this).show();
					count = 0;
				}
				else
				{
					$(this).hide();
					count = 0;
				}
			});
		}
		else
		{
			var index = classStr.indexOf(temp);
			if(!index)
			{
				classStr = classStr.substr(temp.length+1);
			}
			else
			{
				classStr = classStr.substring(0,index-1)+classStr.substring(index+temp.length);
			}
			
			
			if(!classStr)
			{
				flag = 1;
			}
			
			$('img').each(function(){
			
				arr1 = $(this).attr('class').split(" ");
				arr2 = classStr.split(" ");
				for(i=0;i<arr2.length;i++)
				{
					label1 : 
					for(j=0;j<arr1.length;j++)
					{
						if(arr2[i]==arr1[j])
						{
							count++;
							if(count==arr2.length)
							{
								flag2 = true;
							}
							break label1;
						}
						else
						{
							flag2 = false;
						}
					}
				}
				if(flag2)
				{
					$(this).show();
					count = 0;
				}
				else
				{
					$(this).hide();
					count = 0;
				}
			});
		}
	});*/
//});
