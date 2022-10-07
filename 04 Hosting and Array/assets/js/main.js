var nums=[45,75,84,42,62,95,35,4,8,47,41,45];

console.log(nums.length);
console.log(nums[2]);

var nums1 =nums[6];
console.log(nums1);

var countnums = nums.length;
console.log(countnums);

var nums2 = nums.length - 1;
console.log(nums2);
//console.log(nums[11]);//
var lastNumber =nums[nums2];
console.log(lastNumber);

for (var i = 1; i<=10; i=i+1){
	console.log(i);
};

for (var i=1; i<=50; i=i+2){ //odd number print//
	console.log(i);
};

for (var i=2; i<=25; i=i+2){ // even number print//
	console.log(i);
};

var skills = ["HTML5", "CSS3", "javaScript", "Typescript", "Angular", "Node.js", "MongoDB" ];

console.log(skills.length);

for (var i=0; i<skills.length ; i=i+1){
	console.log('I Love this skill ' + skills[i]);
};

var marks = [45,78,95,65,66,78,45];
console.log(marks);

for (var n=0; n<marks.length; n=n+1){
	console.log('student gots '+ marks[n] + ' marks');
};

var skills2 = ['photoshop', 'SASS', 'Bootstrape3', 'Bootestrape4',
'ES6']

for (var i=0; i<skills2.length; i=i+1){
	console.log('I likes '+ skills2[i] + ' very much');
};