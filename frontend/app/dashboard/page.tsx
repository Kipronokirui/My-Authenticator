'use client';
import { useRetreiveUserQuery } from "@/redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import Spinner from "@/components/common/Spinner";
import {toast} from 'react-toastify'

export default function Page() {
    const router = useRouter();
    const { data: user, isLoading, isError } = useRetreiveUserQuery();

    if (isLoading) {
        return (
            <div className='justify-center mx-auto my-4'>
                <Spinner lg />
            </div>
        )
    }
    if (isError) {
        router.push('/auth/login')
        toast.error('Please login to access this page')
    }
    return (
        <main>
            <h1>Dashboard</h1>
            <div>
                <p>First Name: {user?.first_name}</p>
                <p>Last Name: {user?.last_name}</p>
                <p>Email: {user?.email}</p>
            </div>
        </main>
    )
}