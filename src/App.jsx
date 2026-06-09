import Login from './Component/Login'
import Profile from './Component/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      <div className="min-h-screen bg-gray-800 px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-indigo-600 tracking-tight mb-5">
          Login Form
        </h1>
        <Profile />
        <Login />
      </div>
    </UserContextProvider>
  )
}

export default App
