function generateEmail(name,message){

	var emailMessage = ` Hi ${name} \n
				This is the message for you, \n
				${message},\n
				@edwsior 2018.`
	return emailMessage
}

console.log(generateEmail("varma","welcome to edwisor.com"))