import { Link } from 'react-router-dom'

export default function LoginView() {
    return (
        <>
            <h1 className='text-4xl text-white font-bold'>Sign in</h1>
            <nav className='mt-10'>
                <Link
                    className="text-center text-white font-bold"
                    to="/auth/register">Don't have an account? Register here</Link>
            </nav>
        </>
    )
}
