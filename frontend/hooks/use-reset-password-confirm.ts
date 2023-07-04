import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter, useParams } from "next/navigation";
import { toast } from 'react-toastify' 
import { useResetPasswordConfirmMutation } from "@/redux/features/authApiSlice"

export default function useResetPasswordConfirm() {
    const router = useRouter()
    const {uid, token} = useParams()
    const [resetPasswordConfirm, {isLoading, isSuccess, isError}] = useResetPasswordConfirmMutation({uid, token});
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: '',
    });
    const { new_password, re_new_password} = formData;
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]:value})
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        resetPasswordConfirm({uid, token, new_password, re_new_password} )
            .unwrap()
            .then(() => {
                toast.success('Password succesfully changed');
                router.push('/auth/login')
            })
            .catch(() => {
                toast.error('An error occured!')
            })
    }
    return {
        new_password,
        re_new_password,
        isLoading,
        onChange,
        onSubmit
    }
}