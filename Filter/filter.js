$(function(){
	var products = jQuery.parseJSON('[{"name":"1","url":"1.jpg","color":"Yellow","brand":"BRAND A","sold_out":"1"},{"name":"2","url":"2.jpg","color":"Red","brand":"BRAND B","sold_out":"0"},{"name":"3","url":"3.jpg","color":"Green","brand":"BRAND D","sold_out":"0"},{"name":"4","url":"4.jpg","color":"Red","brand":"BRAND A","sold_out":"1"},{"name":"5","url":"5.jpg","color":"Blue","brand":"BRAND B","sold_out":"0"},{"name":"6","url":"6.jpg","color":"Green","brand":"BRAND C","sold_out":"0"},{"name":"7","url":"7.jpg","color":"Red","brand":"BRAND C","sold_out":"1"},{"name":"8","url":"8.jpg","color":"Blue","brand":"BRAND D","sold_out":"0"},{"name":"9","url":"9.jpg","color":"Yellow","brand":"BRAND A","sold_out":"0"},{"name":"10","url":"10.jpg","color":"Yellow","brand":"BRAND B","sold_out":"1"},{"name":"11","url":"11.jpg","color":"Green","brand":"BRAND D","sold_out":"0"},{"name":"12","url":"12.jpg","color":"Yellow","brand":"BRAND D","sold_out":"0"},{"name":"13","url":"13.jpg","color":"Blue","brand":"BRAND A","sold_out":"0"},{"name":"14","url":"14.jpg","color":"Blue","brand":"BRAND D","sold_out":"0"},{"name":"15","url":"15.jpg","color":"Green","brand":"BRAND B","sold_out":"0"},{"name":"16","url":"16.jpg","color":"Yellow","brand":"BRAND B","sold_out":"1"},{"name":"17","url":"17.jpg","color":"Green","brand":"BRAND A","sold_out":"1"},{"name":"18","url":"18.jpg","color":"Blue","brand":"BRAND D","sold_out":"1"},{"name":"19","url":"19.jpg","color":"Green","brand":"BRAND C","sold_out":"0"},{"name":"20","url":"20.jpg","color":"Yellow","brand":"BRAND A","sold_out":"0"}]');
	
	//alert("cnn">"bmm");
	
	var initState = function()
	{
		$('input').attr('checked', false);
	
		var q;
		for(i=0;i<products.length;i++)
		{
			q = products[i].url;
			$('<img/>').attr('src', '/home/nitin-gupta/Desktop/product_data/images/'+q).appendTo('.display').show();
		}
	}
	
	
	var brandName = function()
	{
	
		var brandList = [];
		var count1=0;
		brandList.push(products[0].brand);
		
		for(i=1;i<products.length;i++)
		{
			for(j=0;j<brandList.length;j++)
			{
				if(!(products[i].brand===brandList[j]))
				{
					count1++;
					if(count1===brandList.length)
					{
						brandList.push(products[i].brand);
						count1=0;
					}
				}
			}
			count1=0;
		}
		
		for(i=0;i<brandList.length;i++)
		{		
			$('div.brand label')[i].innerHTML = brandList[i];
			$($('div.brand input')[i]).attr('value', brandList[i]);
		}
		
		return brandList;
	}
	
	var brandColor = function()
	{
		var clrNames = [];
		var count=0;
		clrNames.push(products[0].color);
		
		for(i=1;i<products.length;i++)
		{
			for(j=0;j<clrNames.length;j++)
			{
				if(!(products[i].color===clrNames[j]))
				{
					count++;
					if(count===clrNames.length)
					{
						clrNames.push(products[i].color);
						count=0;
					}
				}
			}
			count=0;
		}
	
		for(i=0;i<clrNames.length;i++)
		{		
			$('div.color label')[i].innerHTML = clrNames[i];
			$($('div.color input')[i]).attr('value', clrNames[i]);
		}
		
		return clrNames;
	}
	
	
	
	
	initState();
	brandName();
	brandColor();
	
	
	
	$('#sort').change(function(){
		var sortBy = $('#sort option:selected').attr('value');
		
		var sorted = [];
		
		if(sortBy==='name')
		{
			var brands = brandName();
			$('img').remove();
			for(i=0;i<brands.length;i++)
			{
				for(j=0;j<brands.length;j++)
				{
					if(brands[i]<brands[j])
					{
						temp = brands[i];
						brands[i] = brands[j];
						brands[j] = temp;
					}
				}
			}
		
			for(i=0;i<brands.length;i++)
			{
				for(j=0;j<products.length;j++)
				{
					if(products[j].brand===brands[i])
					{
						sorted.push(products[j]);
					}
				}
			}
			
			products = sorted;
			initState();
		}
		
		else if(sortBy==='color')
		{
			$('img').remove();
			var colors = brandColor();
			for(i=0;i<colors.length;i++)
			{
				for(j=0;j<colors.length;j++)
				{
					if(colors[i]<colors[j])
					{
						temp = colors[i];
						colors[i] = colors[j];
						colors[j] = temp;
					}
				}
			}
		
			for(i=0;i<colors.length;i++)
			{
				for(j=0;j<products.length;j++)
				{
					if(products[j].color===colors[i])
					{
						sorted.push(products[j]);
					}
				}
			}
			
			products = sorted;
			initState();
		}
		
	});
	
	
	
	
	
	$('#toggle').change(function(){
	
		var availSold = $('#toggle option:selected').attr('value');
		
		
		
		
		var count = 0;
		var brand=[];
		var brandNot=[];
		var clr=[];
		var clrNot=[];
		var flag = 0;
		
		
		$('div.brand input:checked').each(function(){
			brand.push($(this).attr('value'));
			flag = 1;
		});
		
		$('div.brand input:not(:checked)').each(function(){
			brandNot.push($(this).attr('value'));
		});
		
		$('div.color input:checked').each(function(){
			clr.push($(this).attr('value'));
			flag = 1;
		});
		
		$('div.color input:not(:checked)').each(function(){
			clrNot.push($(this).attr('value'));
		});

		if(flag)
		{	
			if(!(brand.length && clr.length))
			{
				if(brand.length)
				{
					for(i=0;i<products.length;i++)
					{
						for(j=0;j<brand.length;j++)
						{
							if((products[i].brand===brand[j]))
							{
								if(availSold==='avail')
								{
									//alert(availSold);
									if(products[i].sold_out==='0')
									{
										$($('img')[i]).show();
									}
									
									else
									{
										$($('img')[i]).hide();
									}
								}
								else if(availSold==='sold')
								{
									if(products[i].sold_out==='1')
									{
										$($('img')[i]).show();
									}
									
									else
									{
										$($('img')[i]).hide();
									}
								}
							
								else
								{
									$($('img')[i]).show();
								}
								count=0;
							}
						
							else
							{
								count++;
								if(count===brand.length)
								{
									$($('img')[i]).hide();
									count=0;
								}
							}
						
						}
					}
				}
			
				else
				{
					for(i=0;i<products.length;i++)
					{
						for(j=0;j<clr.length;j++)
						{
							if((products[i].color===clr[j]))
							{
								if(availSold==='avail')
								{
									if(products[i].sold_out==='0')
									{
										$($('img')[i]).show();
									}
									
									else
									{
										$($('img')[i]).hide();
									}
								}
								else if(availSold==='sold')
								{
									if(products[i].sold_out==='1')
									{
										$($('img')[i]).show();
									}
									
									else
									{
										$($('img')[i]).hide();
									}
								}
							
								else
								{
									$($('img')[i]).show();
								}
								count=0;
							}
					
							else
							{
								count++;
								if(count===clr.length)
								{
									$($('img')[i]).hide();
									count=0;
								}
							}
					
						}
					}
				}
			}
		
			else
			{
		
				for(i=0;i<brand.length;i++)
				{
					for(j=0;j<clr.length;j++)
					{
						for(k=0;k<products.length;k++)
						{
							if(brand[i]===products[k].brand && clr[j]===products[k].color)
							{
								if(availSold==='avail')
								{
									if(products[k].sold_out==='0')
									{
										$($('img')[k]).show();
									}
									
									else
									{
										$($('img')[k]).hide();
									}
								}
								else if(availSold==='sold')
								{
									if(products[k].sold_out==='1')
									{
										$($('img')[k]).show();
									}
									
									else
									{
										$($('img')[k]).hide();
									}
								}
							
								else
								{
									$($('img')[k]).show();
								}
							}
						}
					}
				}
		
				for(i=0;i<brand.length;i++)
				{
					for(j=0;j<clrNot.length;j++)
					{
						for(k=0;k<products.length;k++)
						{
							if(brand[i]===products[k].brand && clrNot[j]===products[k].color)
							{
								$($('img')[k]).hide();
							}
						}
					}
				}
			
			
				for(i=0;i<brandNot.length;i++)
				{
					for(j=0;j<clr.length;j++)
					{
						for(k=0;k<products.length;k++)
						{
							if(brandNot[i]===products[k].brand && clr[j]===products[k].color)
							{
								$($('img')[k]).hide();
							}
						}
					}
				}
			}
		}
		
		
		else
		{
			//alert('g');
			if(availSold==='avail')
			{
				for(i=0;i<products.length;i++)
				{
					if(products[i].sold_out==='0')
					{
						$($('img')[i]).show();
					}
				
					else
					{
						$($('img')[i]).hide();
					}
				}
			}
	
			else if(availSold==='sold')
			{
				for(i=0;i<products.length;i++)
				{
					if(products[i].sold_out==='1')
					{
						$($('img')[i]).show();
					}
				
					else
					{
						$($('img')[i]).hide();
					}
				}
			}
		
			else
			{
				for(i=0;i<products.length;i++)
				{
					$($('img')[i]).show();
				}
			}
		}
	});
	
	
		
	
	$('input').click(function(){
	
		var count = 0;
		var brand=[];
		var brandNot=[];
		var clr=[];
		var clrNot=[];
		var flag = 0;
		
		
		$('div.brand input:checked').each(function(){
			brand.push($(this).attr('value'));
			flag = 1;
		});
		
		$('div.brand input:not(:checked)').each(function(){
			brandNot.push($(this).attr('value'));
		});
		
		$('div.color input:checked').each(function(){
			clr.push($(this).attr('value'));
			flag = 1;
		});
		
		$('div.color input:not(:checked)').each(function(){
			clrNot.push($(this).attr('value'));
		});
		
		var availSold = $("#toggle option:selected").attr("value");
		
		
		if(!flag)
		{
			for(i=0;i<products.length;i++)
			{
				if(availSold==='avail')
				{
					if(products[i].sold_out==='0')
					{
						$($('img')[i]).show();
					}
					
					else
					{
						$($('img')[i]).hide();
					}
				}
				else if(availSold==='sold')
				{
					if(products[i].sold_out==='1')
					{
						$($('img')[i]).show();
					}
					
					else
					{
						$($('img')[i]).hide();
					}
				}
				
				else
				{
					$($('img')[i]).show();
				}
			}
		}

		
		
		if(!(brand.length && clr.length))
		{
			if(brand.length)
			{
				for(i=0;i<products.length;i++)
				{
					for(j=0;j<brand.length;j++)
					{
						if((products[i].brand===brand[j]))
						{
							if(availSold==='avail')
							{
								if(products[i].sold_out==='0')
								{
									$($('img')[i]).show();
								}
								
								else
								{
									$($('img')[i]).hide();
								}
							}
							else if(availSold==='sold')
							{
								if(products[i].sold_out==='1')
								{
									$($('img')[i]).show();
								}
								
								else
								{
									$($('img')[i]).hide();
								}
							}
							
							else
							{
								$($('img')[i]).show();
							}
							count=0;
						}
						
						else
						{
							count++;
							if(count===brand.length)
							{
								$($('img')[i]).hide();
								count=0;
							}
						}
						
					}
				}
			}
			
			else
			{
				for(i=0;i<products.length;i++)
				{
					for(j=0;j<clr.length;j++)
					{
						if((products[i].color===clr[j]))
						{
							if(availSold==='avail')
							{
								if(products[i].sold_out==='0')
								{
									$($('img')[i]).show();
								}
								
								else
								{
									$($('img')[i]).hide();
								}
							}
							else if(availSold==='sold')
							{
								if(products[i].sold_out==='1')
								{
									$($('img')[i]).show();
								}
								
								else
								{
									$($('img')[i]).hide();
								}
							}
							
							else
							{
								$($('img')[i]).show();
							}
							count=0;
						}
					
						else
						{
							count++;
							if(count===clr.length)
							{
								$($('img')[i]).hide();
								count=0;
							}
						}
					
					}
				}
			}
		}
		
		else
		{
		
			for(i=0;i<brand.length;i++)
			{
				for(j=0;j<clr.length;j++)
				{
					for(k=0;k<products.length;k++)
					{
						if(brand[i]===products[k].brand && clr[j]===products[k].color)
						{
							if(availSold==='avail')
							{
								if(products[k].sold_out==='0')
								{
									$($('img')[k]).show();
								}
								
								else
								{
									$($('img')[i]).hide();
								}
							}
							else if(availSold==='sold')
							{
								if(products[k].sold_out==='1')
								{
									$($('img')[k]).show();
								}
								
								else
								{
									$($('img')[i]).hide();
								}
							}
							
							else
							{
								$($('img')[k]).show();
							}
						}
					}
				}
			}
		
			for(i=0;i<brand.length;i++)
			{
				for(j=0;j<clrNot.length;j++)
				{
					for(k=0;k<products.length;k++)
					{
						if(brand[i]===products[k].brand && clrNot[j]===products[k].color)
						{
							$($('img')[k]).hide();
						}
					}
				}
			}
			
			
			for(i=0;i<brandNot.length;i++)
			{
				for(j=0;j<clr.length;j++)
				{
					for(k=0;k<products.length;k++)
					{
						if(brandNot[i]===products[k].brand && clr[j]===products[k].color)
						{
							$($('img')[k]).hide();
						}
					}
				}
			}
		}	
	});
});
