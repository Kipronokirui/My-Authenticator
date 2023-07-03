import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify' 
import { useRegisterMutation } from "@/redux/features/authApiSlice";

export default function useRegister() {
    const router = useRouter()
    const [register, {isLoading, isSuccess, isError}] = useRegisterMutation();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: '',
    });
    const { first_name, last_name, email, password, re_password } = formData;
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]:value})
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        register({ first_name, last_name, email, password, re_password })
            .unwrap()
            .then(() => {
                toast.success('Registration succesful. Please check email for activation link');
                router.push('/auth/login')
            })
            .catch(() => {
                toast.error('An error occured!')
            })
    }
    return {
        first_name,
        last_name,
        email, password,
        re_password,
        isLoading,
        onChange,
        onSubmit
    }
}