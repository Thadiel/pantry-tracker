"use client"

import { useActionState } from "react"
import { useFormState,useFormStatus } from "react-dom"
import {register} from "../actions/userController"

export default function RegisterForm() {
    const [formState,formAction] = useActionState(register,{})

    return(
        <form action ={formAction} className="flex flex-col max-w-sm mx-auto mb-10">
            {formState.errors?.email && (
                <div className="bg-yellow-400 p-2 ">
                    {formState.errors?.email}
                </div>
            )}
            <input name="email" type="text" className="text-gray-500 mb-5  border-gray-300 border-solid border-4 px-2 py-3" placeholder="Email"/>
            
            {formState.errors?.password && (
                <div className="p-2 bg-yellow-400  ">{formState.errors?.password}</div>
            )}
            <input name="password" type="password" className="text-gray-500 mb-5  border-gray-300 border-solid border-4 px-2 py-3" placeholder="Password"/>
            <button className="">Create Account</button>
        </form>
    )
}