import { createRoot } from 'react-dom/client'
import AuthProvider from './AuthProvider/AuthProvider'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes'

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
)
