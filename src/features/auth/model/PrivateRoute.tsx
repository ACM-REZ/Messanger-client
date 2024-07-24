import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthGuard from './AuthGuard'

const PrivateRoute: React.FC = () => {
  return (
    <AuthGuard>
      <Outlet />
    </AuthGuard>
  )
}

export default PrivateRoute
