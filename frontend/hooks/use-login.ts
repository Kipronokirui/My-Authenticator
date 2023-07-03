import React, { useState, ChangeEvent, FormEvent } from "react";
import { useAppDispatch } from '@/redux/hooks';
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify' 
import { useLoginMutation } from "@/redux/features/authApiSlice";
import { setAuth } from '@/redux/features/authSlice';

export default function useLogin() {
    const router = useRouter()
    const dispatch = useAppDispatch();
    const [login, {isLoading, isSuccess, isError}] = useLoginMutation();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const { email, password } = formData;
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]:value})
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        login({ email, password})
            .unwrap()
            .then(() => {
                dispatch(setAuth());
                toast.success('Login Succesful');
                router.push('/dashboard')
            })
            .catch(() => {
                toast.error('The credentials provided do not match!')
            })
    }
    return {
        email,
        password,
        isLoading,
        onChange,
        onSubmit
    }
}