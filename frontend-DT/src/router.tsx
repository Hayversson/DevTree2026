import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AuthLayout from './layouts/AuthLayout';
import LoginView from './views/loginView';
import RegisterView from './views/RegisterView';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/auth/login" replace />} />
                <Route path="/auth" element={<AuthLayout />}>
                    <Route path="login" element={<LoginView />} />
                    <Route path="register" element={<RegisterView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}