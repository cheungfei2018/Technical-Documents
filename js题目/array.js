document.write("<h1>数组作业题答案</h1>");

//在55,34,78,24,19,63,68,30这八个数中；找出最大值、最小值、所有第奇数个的数的和
var arr = [55,34,78,24,19,63,68,30];
var max = arr[0];
var min = arr[0];
var sum = 0;
for(var i=0;i<arr.length;i++){
	if(arr[i]>max){
		max = arr[i];
	}
	if(arr[i]<min){
		min = arr[i];
	}
	if(i%2 == 0){
		sum +=arr[i];
	}
}

document.write("数组中最大值为："+max+"<br>最小值为："+min+"<br>所有奇数个的和为："+sum+"<br>");



//歌手打分，10个评委，除去一个最高分和最低分，然后求平均值



//求数组的升序和降序
var arr = [55,34,78,24,19,63,68,30];



//求一个n*n矩阵对角线元素之和

var arr1 = [
			[1,2,3,4,5],
			[1,2,3,4,5],
			[1,2,3,4,5],
			[1,2,3,4,5],
			[1,2,3,4,5]
			];
var sum = 0;
for(var i=0;i<arr1.length;i++)	
{
	for(var j=0;j<arr1.length;j++){
		if(i==j || i+j==(arr1.length-1)){
			sum +=arr1[i][j];
		}
	}
}
document.write("<br>4*4矩阵对角线之和为："+sum+"<br>");
	
	
	
//将一个数组逆序输出。
	
var arr = [55,34,78,24,19,63,68,30,12,1];
document.write("<br>数组逆序前为："+arr+"<br>");
for(var i=0;i<(arr.length/2);i++){
	var temp = arr[i];
	arr[i] = arr[arr.length-i-1];
	arr[arr.length-i-1] = temp;
	document.write("<br>数组逆序后为："+arr+"<br>");
}

document.write("<br>数组逆序后为："+arr+"<br>");
	
	

//定义一个数组，将最大的与第一个元素交换，最小的与最后一个元素交换，输出数组。
	
var arr = [55,34,78,24,19,63,68,30,12,38];


document.write("<br>打印杨辉三角<br>");

//打印n行杨辉三角
var n =10;

//定义一个空数组
var arr = [];

//创建n行二维数组
for(var i=0;i<n;i++){
	arr[i] = new Array();
}

//往每一行的二维数组中添加n个数
for(var j = 0;j<n;j++){
	arr[j][0] = 1;	//第一列全是1
	arr[j][j] = 1;	//每行最后一个为1
	for(var k = 1;k<j;k++){
		arr[j][k] = arr[j-1][k-1]+arr[j-1][k];
	}
}
//打印杨辉三角
for(var i=0;i<arr.length;i++){
	for(var j=0;j<arr[i].length;j++){
		document.write(arr[i][j]+"&nbsp;");
	}
	document.write("<br>");
}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


