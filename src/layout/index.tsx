import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
      <p>teste</p>
      <Outlet />
      <p>teste</p>
    </div>
  )
}
