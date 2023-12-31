'use client';
import Link from "next/link";
import Spinner from "@/components/common/Spinner";
import useRegister from "@/hooks/use-register";


export default function Page() {
    const {first_name,
        last_name,
        email, password,
        re_password,
        isLoading,
        onChange,
        onSubmit} = useRegister()

    return (
        <main>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Image"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Register for your account
                </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={onSubmit}>
                    <div>
                    <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
                        First Name
                    </label>
                    <div className="mt-2">
                        <input
                        id="first_name"
                        name="first_name"
                        type="text"
                        value={first_name}  
                        onChange={onChange}            
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                        </div>
                        <div>
                    <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
                       Last Name
                    </label>
                    <div className="mt-2">
                        <input
                        id="last_name"
                        name="last_name"
                        type="text"
                        value={last_name}  
                        onChange={onChange}                
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={onChange}    
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={onChange}    
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="re_password" className="block text-sm font-medium leading-6 text-gray-900">
                        Confirm Password
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                        id="re_password"
                        name="re_password"
                        type="password"
                        onChange={onChange}    
                        value={re_password}        
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>
                        
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                        </a>
                    </div>
                        
                    <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        disabled={isLoading}
                    >
                        {isLoading? <Spinner sm/> :'Sign Up'}       
                    </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Already have an account?{' '}
                    <Link href="/auth/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    Login Now
                    </Link>
                </p>
                </div>
            </div>
        </main>
    )
}