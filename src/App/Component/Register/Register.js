import React, { Component } from 'react';
import { Paper, withStyles, Grid, TextField, Button, Typography } from '@material-ui/core';
import { Face, Fingerprint, AlternateEmail } from '@material-ui/icons';
import _ from 'lodash';
import { styles } from '../styles';
import schema from './schema';
import validate from 'validate.js';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            values: {
                username: '',
                email: '',
                password: '',
                rematch: ''
            },
            touched: {
                username: false,
                email: false,
                password: false,
                rematch: false
            },
            errors: {
                username: null,
                email: null,
                password: null,
                rematch: null
            },
            isValid: false,
            data: ''
        };

        _.bindAll(this, [
            'submit',
            'clear',
            'validateForm',
            'handleFieldChange'
        ]);
    }

    clear() {
        console.log('clear');
    }

    validateForm() {
        _.defer(() => {
            const { values } = this.state;
            const newState = { ...this.state };
            const errors = validate(values, schema);
            newState.errors = errors || {};
            newState.isValid = errors ? false : true;

            this.setState(newState);
        });
    }

    handleFieldChange(field, value) {
        const newState = { ...this.state };

        newState.submitError = null;
        newState.touched[field] = true;
        newState.values[field] = value;

        this.setState(newState, this.validateForm());
    };

    submit() {
        let count = 0;
        console.log(this.state.data);
        this.state.data.forEach((val, i) => {
            console.log(val.username === this.state.values.username, val.username);
            if (val.username === this.state.values.username) {
                count++;
            }
        });
        if (!count) {
            if (this.state.values.rematch === this.state.values.password) {
                const body = { username: this.state.values.username, password: this.state.values.password, _id: makeid(20) };
                console.log(body);
                axios.post(`http://localhost:3000/api/register`, {
                    body
                })
                    .then((res) => {
                        console.log(res);
                        let pathName = window.location.pathname;
                        pathName = '';
                        this.props.history.push({
                            pathname: `${pathName}Admin`,
                            _id: res.data
                        });
                    });
            } else {
                const newState = { ...this.state };
                newState.errors['rematch'] = ["Password Not Matching"];
                this.setState(newState);
            }
        } else {
            alert('User already available');
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/api/login`)
            .then((res) => {
                console.log(res.data);
                this.setState({ data: res.data });
            });
    }
    render() {
        const { classes } = this.props;
        const { values, isValid, touched, errors } = this.state;
        const showUsernameError = touched.username && errors.username;
        const showEmailError = touched.email && errors.email;
        const showPasswordError = touched.password && errors.password;
        const showRePasswordError = touched.rematch && errors.rematch;

        return (
            <Paper className={classes.padding} style={{ width: 500, position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField className="input" id="username" label="Username" type="text" fullWidth autoFocus required
                                onChange={event =>
                                    this.handleFieldChange('username', event.target.value)
                                }
                            />
                            {showUsernameError && (
                                <Typography
                                    className={classes.fieldError}
                                    variant="body2"
                                >
                                    {errors.username[0]}
                                </Typography>
                            )}
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <AlternateEmail />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField className="input" id="email" label="Email" type="email" fullWidth required
                                onChange={event =>
                                    this.handleFieldChange('email', event.target.value)
                                }
                            />
                            {showEmailError && (
                                <Typography
                                    className={classes.fieldError}
                                    variant="body2"
                                >
                                    {errors.email[0]}
                                </Typography>
                            )}
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField className="input" id="password" label="Password" type="password" fullWidth required
                                onChange={event =>
                                    this.handleFieldChange('password', event.target.value)
                                }
                            />
                            {showPasswordError && (
                                <Typography
                                    className={classes.fieldError}
                                    variant="body2"
                                >
                                    {errors.password[0]}
                                </Typography>
                            )}
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField className="input" id="password" label="Re-Enter Password" type="password" fullWidth required
                                onChange={event =>
                                    this.handleFieldChange('rematch', event.target.value)
                                }
                            />
                            {showRePasswordError && (
                                <Typography
                                    className={classes.fieldError}
                                    variant="body2"
                                >
                                    {errors.rematch[0]}
                                </Typography>
                            )}
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={this.submit} disabled={!isValid}>Submit</Button>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none", marginLeft: 15 }} onClick={this.clear}>Clear</Button>
                    </Grid>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(Register);