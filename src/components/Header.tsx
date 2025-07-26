import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const Header: React.FC = () => {
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/logo2.png" 
              alt="Health Book Logo" 
              className="w-12 h-12"
            />
            <div>
              <h1 className="text-2xl font-bold text-[#1A4199]">HEALTH BOOK</h1>
              <p className="text-sm text-gray-600">لوحة التحكم الطبية</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {user && (
              <>
                <div className="text-right">
                  <p className="text-sm text-gray-600">مرحباً</p>
                  <p className="font-medium text-[#1A4199]">{user.email}</p>
                </div>
                <button
                  onClick={handleSignOut}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  تسجيل الخروج
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header