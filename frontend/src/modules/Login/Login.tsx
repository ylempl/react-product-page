import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form
} from 'formik';
import {
    Box,
    Button,
    Container,
    Grid,
    Link,
    TextField,
    Typography,
    makeStyles
} from '@material-ui/core';
import FacebookIcon from '../../assets/icons/Facebook';
import GoogleIcon from '../../assets/icons/Google';
import Page from '../../components/Page/Page';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    }
}));

const validationSchema = yup.object().shape({
    email: yup.string().required('Required'),
    password: yup.string().required('Required')
});

interface FormValues {
    email: string,
    password: string
}

const LoginView = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const initialValues: FormValues = {
        email: 'mateusz.romanowski@tikkurila.com',
        password: '123'
    };

    return (
        <Page
            className={classes.root}
            title="Login"
        >
            <Box
                display="flex"
                flexDirection="column"
                height="100%"
                justifyContent="center"
            >
                <Container maxWidth="sm">
                    <Box mb={3}>
                        <Typography
                            color="textPrimary"
                            variant="h2"
                        >
                            Sign in
                        </Typography>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="body2"
                        >
                            Sign in on the internal platform
                        </Typography>
                    </Box>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            xs={12}
                            md={6}
                        >
                            <Button
                                color="secondary"
                                fullWidth
                                startIcon={<FacebookIcon />}
                                size="large"
                                variant="contained"
                            >
                                Login with Facebook
                            </Button>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                        >
                            <Button
                                fullWidth
                                startIcon={<GoogleIcon />}
                                size="large"
                                variant="contained"
                            >
                                Login with Google
                            </Button>
                        </Grid>
                    </Grid>
                    <Box
                        mt={3}
                        mb={1}
                    >
                        <Typography
                            align="center"
                            color="textSecondary"
                            variant="body1"
                        >
                            or login with email address
                        </Typography>
                    </Box>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(
                            values: FormValues,
                            formikHelpers: FormikHelpers<FormValues>
                        ) => {
                            console.warn('Formik values', values);
                            formikHelpers.setSubmitting(false);
                            navigate('/app/dashboard', { replace: true });
                        }}
                    >
                        {(formikProps: FormikProps<FormValues>) => (
                            <Form noValidate autoComplete="off">

                                <TextField
                                    error={Boolean(formikProps.touched.email && formikProps.errors.email)}
                                    fullWidth
                                    helperText={formikProps.touched.email && formikProps.errors.email}
                                    label="Email Address"
                                    margin="normal"
                                    name="email"
                                    onBlur={formikProps.handleBlur}
                                    onChange={formikProps.handleChange}
                                    type="email"
                                    value={formikProps.values.email}
                                    variant="outlined"
                                />
                                <TextField
                                    error={Boolean(formikProps.touched.password && formikProps.errors.password)}
                                    fullWidth
                                    helperText={formikProps.touched.password && formikProps.errors.password}
                                    label="Password"
                                    margin="normal"
                                    name="password"
                                    onBlur={formikProps.handleBlur}
                                    onChange={formikProps.handleChange}
                                    type="password"
                                    value={formikProps.values.password}
                                    variant="outlined"
                                />
                                <Box my={2}>
                                    <Button
                                        color="primary"
                                        disabled={formikProps.isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                    >
                                        Sign in now
                                    </Button>
                                </Box>
                                <Typography
                                    color="textSecondary"
                                    variant="body1"
                                >
                                    Don&apos;t have an account?
                                    {' '}
                                    <Link
                                        component={RouterLink}
                                        to="/register"
                                        variant="h6"
                                    >
                                        Sign up
                                    </Link>
                                </Typography>
                            </Form>
                        )}
                    </Formik>
                </Container>
            </Box>
        </Page>
    );
};

export default LoginView;
