import React, { Component } from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons';
import _ from 'lodash';
import { styles } from './styles';

class login extends Component {
    constructor(props) {
        super(props)
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    login() {
        const data = document.querySelectorAll('.input input');
        let error = [];
        let count = 0;
        _.forEach(data, (val) => {
            let result = {
                'id': val.getAttribute('id'),
                'value': val.value
            }
            error.push(result);
        });
        _.forEach(error, (val) => {
            if (!val.value) {
                alert('Enter ' + val.id);
            } else {
                ++count;
            }
        });
        if (count === data.length) {
            console.log('login');
        }
    }

    register() {
        let pathName = window.location.pathname;
        pathName = '';
        this.props.history.push({
            pathname: `${pathName}Register`
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.padding} style={{ width: 500, position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField className="input" id="username" label="Username" type="email" fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField className="input" id="password" label="Password" type="password" fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            <FormControlLabel control={
                                <Checkbox
                                    color="primary"
                                />
                            } label="Remember me" />
                        </Grid>
                        <Grid item>
                            <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={this.login}>Login</Button>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none", marginLeft: 15 }} onClick={this.register}>Register</Button>
                    </Grid>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(login);