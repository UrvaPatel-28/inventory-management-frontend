import React from 'react'

const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <form action="">
                <div className="w-96 p-8 bg-gray-100 rounded shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Login</h2>
                   
                    <input
                        name="email"
                        className="w-full p-2 mb-4 border rounded"
                        type="email"
                        placeholder="Enter Email"
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 mb-4 border rounded"
                        required
                    />

                  
                    <button
                        type="submit"
                        className="w-full bg-on-primary-dark text-primary-container-light p-2 rounded hover:bg-green-600"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login
