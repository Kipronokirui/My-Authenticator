import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify' 
import { useResetPasswordMutation } from "@/redux/features/authApiSlice";
export default function useResetPassword() {
    const router = useRouter()
    const [resetPassword, {isLoading, isSuccess, isError}] = useResetPasswordMutation();
    const [formData, setFormData] = useState({
        email: '',
    });
    const { email} = formData;
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]:value})
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        resetPassword( email )
            .unwrap()
            .then(() => {
                toast.success('Request succesful. Please check your email');
            })
            .catch(() => {
                toast.error('An error occured!')
            })
    }
    return {
        email,
        isLoading,
        onChange,
        onSubmit
    }
}