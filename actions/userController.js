"use server"

export const register = async function(prevState,formData){
    const errors = {}

    const ourUser = {
        email: formData.get("email"),
        password: formData.get("password")
    }

    if (typeof ourUser.email != "string") ourUser.email = ""
    if (typeof ourUser.password != "string") ourUser.password = ""

    ourUser.email = ourUser.email.trim()
    ourUser.password = ourUser.password.trim()

    if (ourUser.email.length < 3) errors.email = "Email must be at least 3 characters"
    if (ourUser.email.length > 50) errors.email = "Email must be less than 50 characters"
    if (ourUser.password.length < 8) errors.password = "Password must be at least 8 characters"
    if (ourUser.password.length > 100) errors.password = "Password must be less than 100 characters"
    if (ourUser.email == "") errors.email = "Email cannot be empty"
    if (ourUser.password == "") errors.password = "Password cannot be empty"

    if (errors.email || errors.password) {
        return {
            errors: errors,
            success: false
        }
    }

    return{
        success:true
    }
}