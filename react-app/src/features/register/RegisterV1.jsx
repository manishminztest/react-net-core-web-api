import { Box, Container, Grid, Paper } from '@mui/material';
import React, { memo, useState } from 'react'
import RequiredTextField from '../../components/customTextFields/RequiredTextField';
import SubmitButton from '../../components/customButtons/SubmitButton';
import ResetButton from '../../components/customButtons/ResetButton';
import H4Typography from '../../components/customTypography/H4Typography';
import validator from 'validator';
import { configService } from '../../services/configService';
import Swal from 'sweetalert2';

const RegisterV1 = () => {
    //#region code
    const initialFormData = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
    }
    const [formData, setFormData] = useState(initialFormData);
    const [validationErrors, setValidationErrors] = useState({});

    const handleChange = (e) => {
        try {
            const { name, value } = e.target;

            setFormData((prev) => ({
                ...prev,
                [name]: value
            }));

            if (validationErrors[name]) {
                setValidationErrors((prev) => ({
                    ...prev,
                    [name]: ''
                }));
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    const validate = async () => {
        try {
            let errors = {};
            if (validator.isEmpty(formData.firstName)) {
                errors.firstName = "Required.";
            }
            else if (!validator.isAlpha(formData.firstName)) {
                errors.firstName = "Invalid format.";
            }
            if (validator.isEmpty(formData.lastName)) {
                errors.lastName = "Required.";
            }
            else if (!validator.isAlpha(formData.lastName)) {
                errors.lastName = "Invalid format.";
            }
            if (validator.isEmpty(formData.email)) {
                errors.email = "Required.";
            }
            else if (!validator.isEmail(formData.email)) {
                errors.email = "Invalid format.";
            }
            if (validator.isEmpty(formData.phoneNumber)) {
                errors.phoneNumber = "Required.";
            }
            else if (!validator.isLength(formData.phoneNumber, { min: 10 })) {
                errors.phoneNumber = "At least 10 numbers.";
            }
            if (validator.isEmpty(formData.password)) {
                errors.password = "Required.";
            }
            else if (!validator.isLength(formData.password, { min: 8, max: undefined })) {
                errors.password = "At least 8 characters.";
            }
            else if (!validator.isStrongPassword(formData.password, { minLength: 8, minUppercase: 1, minLowercase: 1, minNumbers: 1, minSymbols: 1 })) {
                errors.password = "At least 1 upper, 1 lower, 1 number, 1 symbol.";
            }
            if (validator.isEmpty(formData.confirmPassword)) {
                errors.confirmPassword = "Required."
            }
            else if (!validator.equals(formData.confirmPassword, formData.password)) {
                errors.confirmPassword = "Password doesn't match."
            }
            setValidationErrors(errors);
            return Object.values(errors).every(error => error === "");
        }
        catch (e) {
            console.log(e);
        }
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const isValid = await validate();
            if (isValid === false) {
                return false;
            }
            const res = await configService.register(formData);
            if(res.status === 201){
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: res.message
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    const handleReset = () => {
        try {
            setFormData(initialFormData);
            setValidationErrors({});
        }
        catch (e) {
            console.log(e);
        }
    }

    //#endregion

    return (
        <>
            <Container>
                <H4Typography title={'SIGN IN'} />
                <Paper elevation={24} sx={{ m: 5, p: 5 }}>
                    <form onSubmit={handleSubmit} onReset={handleReset}>
                        <Grid container alignItems={'center'} spacing={1}>
                            <Grid item xs={12} md={6}>
                                <RequiredTextField
                                    type={'text'}
                                    label={'First Name'}
                                    name='firstName'
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    valid={validationErrors.firstName}
                                    message={validationErrors.firstName}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <RequiredTextField
                                    type={'text'}
                                    label={'Last Name'}
                                    name='lastName'
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    valid={validationErrors.lastName}
                                    message={validationErrors.lastName}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <RequiredTextField
                                    type={'text'}
                                    label={'Email'}
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    valid={validationErrors.email}
                                    message={validationErrors.email}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <RequiredTextField
                                    type={'number'}
                                    label={'Phone Number'}
                                    name='phoneNumber'
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    valid={validationErrors.phoneNumber}
                                    message={validationErrors.phoneNumber}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <RequiredTextField
                                    type={'password'}
                                    label={'Password'}
                                    name='password'
                                    value={formData.password}
                                    onChange={handleChange}
                                    valid={validationErrors.password}
                                    message={validationErrors.password}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <RequiredTextField
                                    type={'password'}
                                    label={'Confirm Password'}
                                    name='confirmPassword'
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    valid={validationErrors.confirmPassword}
                                    message={validationErrors.confirmPassword}
                                />
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <SubmitButton />
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <ResetButton />
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </>
    )
}

export default memo(RegisterV1);
