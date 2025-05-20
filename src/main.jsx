import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './AuthProvider/AuthProvider'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes'

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
)
