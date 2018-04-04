
let checkLogin = (email,password,...allUsers)=>{
	let isUserFound=false
	let passwordCorrect = false
	let name
	for (let user of allUsers){
		if(user.email==email){
			if(user.password==password){
				
				isUserFound=true
				passwordCorrect=true
				name= user.fullName
				break
			}
			else{
				isUserFound=true
				passwordCorrect=false
				break
			}
		}else{
			isUserFound=false
		}
	}
	if(isUserFound==true && passwordCorrect==true){
		console.log(`Hello ${name}, you are logged in`)
	}
	else if(isUserFound==true&& passwordCorrect== false){
		console.log('Incorrect Password')
	}else{
		console.log('invalid user')
	}
}

let firstUser = {
					"fullName": "Rajendra Varma",
					"email": "abcd@gmail.com",
					"password":"efgh"
}
let secondUser ={
					"fullName":"Rahul",
					"email":"hijk@gmail.com",
					"password":"lmno"
}
checkLogin("hijk@gmail.com","lmno",firstUser,secondUser)