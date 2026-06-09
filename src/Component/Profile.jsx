import React, { useContext } from 'react'
import Usercontext from '../Context/Usercontext'

function Profile() {
    const { user, setUser } = useContext(Usercontext)

    if (!user) return (
        <div className="flex items-center justify-center gap-2 max-w-sm mx-auto mb-4 px-4 py-3 bg-white border border-indigo-100 rounded-xl text-sm text-gray-400">
            🔐 Please login to see your profile.
        </div>
    )

    return (
        <div className="flex items-center justify-between max-w-sm mx-auto mb-4 px-4 py-3 bg-emerald-50 border border-emerald-200 rounded-xl">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {user.username.charAt(0).toUpperCase()}
                </div>
                <div>
                    <p className="text-xs uppercase tracking-widest text-emerald-500 font-medium">
                        Welcome back
                    </p>
                    <p className="text-sm font-semibold text-emerald-900">
                        {user.username} 👋
                    </p>
                </div>
            </div>
            <button
                onClick={() => setUser(null)}
                className="text-xs text-emerald-600 hover:text-red-500 font-medium transition-colors"
            >
                Logout
            </button>
        </div>
    )
}

export default Profile
