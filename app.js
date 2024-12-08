new Vue({
	el:"#niamul",
	data:{
		studentData:{
			fname:'',
			lname:'',
			email:'',
			password:''
		},
		students:[]
	},
	methods:{
		addStudent(){
			if(
				this.studentData.fname.trim() !== '' && 
				this.studentData.lname.trim() !== '' && 
				this.studentData.email.trim() !== '' && 
				this.studentData.password.trim() !== ''
			){
				this.students.push({...this.studentData});
				this.clearForm();
			}else{
				alert('Please Input All Fields');
			}
		},
		removeData(index){
			this.students.splice(index,1);
		},
		clearForm(){
			this.studentData = {
				fname:'',
				lname:'',
				email:'',
				password:''
			};
		}
	}
});
