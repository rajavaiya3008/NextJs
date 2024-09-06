'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useFormState } from "react-dom";
import { z } from 'zod'

export const LoginFormSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z
      .string()
      .min(8, { message: 'Be at least 8 characters long' })
      .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
      .regex(/[0-9]/, { message: 'Contain at least one number.' })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'Contain at least one special character.',
      })
      .trim(),
  })

const Login = () => {

    const router = useRouter()
    const [state,action] = useFormState(login,null)
    // console.log('state', state)

    function login (state,formData) {
        const loginData = Object.fromEntries(formData.entries())
        // console.log('loginData', loginData)
        const validateFields = LoginFormSchema.safeParse(loginData)
        // console.log('validateFields', validateFields)
    
        if (!validateFields.success) {
            return {
              errors: validateFields.error.flatten().fieldErrors,
            }
          }
    
        //   console.log('data is correct',validateFields.data)
          localStorage.setItem('user',JSON.stringify(validateFields.data))
          router.push('/products')
    }

  return (
    <form action={action}>
                <div className="mb-4">
                    <label className="block font-semibold text-gray-700 mb-2" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" type="email" name='email' placeholder="Enter your email address" />
                </div>
                {state?.errors?.email && <p className='text-black'>{state.errors.email}</p>}
                <div className="mb-4">
                    <label className="block font-semibold text-gray-700 mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" name='password' placeholder="Enter your password" />
                    {/* <a className="text-gray-600 hover:text-gray-800" href="#">Forgot your password?</a> */}
                </div>
                {state?.errors?.password && (
                    <div className='text-black'>
                    <p>Password must:</p>
                    <ul>
                        {state.errors.password.map((error) => (
                        <li key={error}>- {error}</li>
                        ))}
                    </ul>
                    </div>
                )}
                <div className="mb-6 mx-auto">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Login
                    </button>
                </div>
            </form>
  )
}

export default Login