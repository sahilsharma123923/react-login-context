import React, { useState, useContext } from 'react'
import Usercontext from '../Context/Usercontext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const { user, setUser } = useContext(Usercontext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!username.trim() || !password.trim()) {
            setError('Please fill in both fields.')
            return
        }
        setError('')
        setUser({ username, password })
    }

    if (user) return null

    return (
        <div className="relative bg-white border border-indigo-100 rounded-2xl p-8 w-full max-w-sm mx-auto shadow-lg overflow-hidden">

          
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-emerald-400 to-orange-400 rounded-t-2xl" />

            {/* Heading */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                Welcome back
            </h2>
            <p className="text-sm text-gray-700 mb-6">
                Sign in to your account to continue
            </p>

            <form onSubmit={handleSubmit} noValidate>

                {/* Username field */}
                <div className="mb-4">
                    <label htmlFor="username" className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-1.5">
                        Username
                    </label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">👤</span>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => { setUsername(e.target.value); setError('') }}
                            placeholder="e.g. john_doe"
                            autoComplete="username"
                            className="w-full pl-9 pr-4 py-2.5 text-sm bg-indigo-50/60 border border-indigo-100 rounded-xl text-gray-900 placeholder-gray-300 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                        />
                    </div>
                </div>

                {/* Password field */}
                <div className="mb-4">
                    <label htmlFor="password" className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-1.5">
                        Password
                    </label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔒</span>
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); setError('') }}
                            placeholder="••••••••"
                            autoComplete="current-password"
                            className="w-full pl-9 pr-10 py-2.5 text-sm bg-indigo-50/60 border border-indigo-100 rounded-xl text-gray-900 placeholder-gray-300 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label="Toggle password visibility"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors text-base"
                        >
                            {showPassword ? '🙈' : '👁'}
                        </button>
                    </div>
                </div>

                {/* Error message */}
                {error && (
                    <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-2.5 rounded-xl mb-4">
                        ⚠️ {error}
                    </div>
                )}

                {/* Submit button */}
                <button
                    type="submit"
                    className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-sm font-semibold rounded-xl transition-all duration-150"
                >
                    Sign in →
                </button>
            </form>
        </div>
    )
}

export default Login
