import React, { Component } from 'react';
import { Paper, withStyles, Grid, TextField, Button, Typography, Box, CircularProgress } from '@material-ui/core';
import { Delete, Edit, Face, AlternateEmail } from '@material-ui/icons';
import _ from 'lodash';
import { styles } from '../styles';
import schema from './schema';
import validate from 'validate.js';
import axios from 'axios';

class Admin extends Component {
    constructor(props) {
        super(props)
        this.AdminId = this.props.history.location._id;
        this.state = {
            edit: false,
            delete: false,
            Manager: '',
            disable: true,
            add: false,
            values: {
                username: '',
                email: ''
            },
            touched: {
                username: false,
                email: false
            },
            errors: {
                username: null,
                email: null
            },
            isValid: false,
            isLoading: true
        }
        this.selectTile = '';
        _.bindAll(this, [
            'select',
            'edit',
            'delete',
            'save',
            'cancel',
            'makeManagerList',
            'ok',
            'changeHandler',
            'add',
            'validateForm',
            'handleFieldChange',
            'register',
            'submit'
        ]);
    }

    submit() {
        const data = document.querySelectorAll('input#username')[0].value;
        const { Manager } = this.state;
        const value = {
            managerName: data,
            AdminId: this.AdminId,
            data: {}
        };
        Manager.push(value);
        axios.post(`http://localhost:3000/api/addManager`, {
            body: value
        })
            .then((res) => {
                Manager[Manager.length - 1]._id = res.data;
                this.setState({ Manager, add: false, isValid: false });
                document.querySelectorAll('input').forEach((val, i) => {
                    val.value = '';
                });
            });
    }

    add() {
        this.setState({ add: true });
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

    register(classes) {
        const { isValid, touched, errors } = this.state;
        const showUsernameError = touched.username && errors.username;
        const showEmailError = touched.email && errors.email;
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
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={this.submit} disabled={!isValid}>Submit</Button>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none", marginLeft: 15 }} onClick={this.cancel} id="add">Cancel</Button>
                    </Grid>
                </div>
            </Paper>
        );
    }

    changeHandler(e) {
        if (e.target.value) {
            this.setState({ disable: false });
        }
    }

    ok() {
        const { Manager } = this.state;
        const list = [];
        Manager.forEach((val, i) => {
            if (val._id === this.selectTile) {
                axios.post(`http://localhost:3000/api/deleteManager`, {
                    _id: this.selectTile
                });
            } else {
                list.push(val);
            }
        });
        this.setState({ Manager: list, delete: false });
    }

    makeManagerList() {
        let data = [];
        this.state.Manager.forEach((val, i) => {
            data.push(
                <Box key={val._id + ' ' + i} p={1} style={{ margin: 10, minWidth: 150, textAlign: 'center' }} bgcolor="background.paper">
                    <Grid container alignItems="flex-end" style={{ width: '100%', justifiedContent: "center" }}>
                        <Grid item style={{ width: '68%', wordBreak: 'break-word' }} type={val._id} onClick={this.select} id='items'>
                            {val.managerName}
                        </Grid>
                        <Grid item>
                            <Edit onClick={this.select} type={val._id} id="edit" />
                            <Delete onClick={this.select} type={val._id} id="delete" />
                        </Grid>
                    </Grid>
                </Box>
            );
        });
        return data;
    }

    save() {
        const changeValue = document.querySelectorAll('input')[0].value;
        const { Manager } = this.state;
        document.querySelectorAll('input')[0].value = '';
        Manager.forEach((val, i) => {
            if (val._id === this.selectTile) {
                val.managerName = changeValue;
                val._id = this.selectTile;
                axios.post(`http://localhost:3000/api/updateManager`, {
                    _id: this.selectTile,
                    data: val
                });
            }
        });
        this.setState({ Manager, edit: false, disable: true });
    }

    cancel(e) {
        const type = e.currentTarget.getAttribute('id');
        this.setState({ [type]: false, disable: true });
        document.querySelectorAll('input').forEach((val) => {
            val.value = '';
        });
    }

    select(e) {
        e.preventDefault();
        this.selectTile = e.currentTarget.getAttribute('type');

        if (e.currentTarget.getAttribute('id') === 'edit') {
            this.edit(e);
        } else if (e.currentTarget.getAttribute('id') === 'delete') {
            this.delete(e);
        } else {
            let pathName = window.location.pathname;
            pathName = '';
            const value = _.find(this.state.Manager, (val) => {
                return val._id === this.selectTile;
            })
            this.props.history.push({
                pathname: `${pathName}Flow`,
                select: this.selectTile,
                value
            });
        }
    }

    delete(e) {
        this.setState({ delete: true });
    }

    edit(e) {
        this.setState({ edit: true });
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/api/getManager`)
            .then((res) => {
                const Manager = _.filter(res.data, (val, i) => {
                    return val.AdminId === this.AdminId
                })
                this.setState({ Manager, isLoading: false });
            });
    }

    render() {
        const { classes } = this.props;
        return (
            !this.state.isLoading ?
                <React.Fragment>
                    <div className={classes.AdminTop}>
                        <Grid container spacing={8} alignItems="center" className={classes.AdminTitle}>
                            Admin Portal
                </Grid>
                    </div>
                    <div className={classes.AdminAdd}>
                        <Grid container spacing={8} alignItems="center" className={classes.AdminTitle} style={{ height: '100%' }}>
                            List of Manager
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }} className={classes.buttonStyle} id='Add' onClick={this.add}>Add New Manager</Button>
                        </Grid>
                    </div>
                    <Box
                        display="flex"
                        flexWrap="wrap"
                        p={1}
                        m={1}
                        css={{ minWidth: 300, position: 'relative', top: 119, maxHeight: '80%', overflow: 'auto' }}
                    >
                        {this.state.Manager.length ?
                            this.makeManagerList()
                            : <div>No Manager Present</div>}
                    </Box>
                    <div className={classes.layout} style={{ display: this.state.edit ? 'block' : 'none' }}>
                        <div className={classes.EditName}>
                            Enter New Manager Name
                        <input className={classes.EditNameInput} placeholder='Enter Name' onChange={this.changeHandler} />
                            <div className={classes.buttonLayout}>
                                <Button variant="outlined" color="primary" style={{ textTransform: "none" }} disabled={this.state.disable} className={classes.buttonStyle} onClick={this.save}>SAVE</Button>
                                <Button variant="outlined" color="primary" style={{ textTransform: "none" }} className={classes.buttonStyle} id='edit' onClick={this.cancel}>CANCEL</Button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.layout} style={{ display: this.state.delete ? 'block' : 'none' }}>
                        <div className={classes.EditName}>
                            ARE YOU SURE TO DELETE
                        <div className={classes.buttonLayout}>
                                <Button variant="outlined" color="primary" style={{ textTransform: "none" }} className={classes.buttonStyle} onClick={this.ok}>OK</Button>
                                <Button variant="outlined" color="primary" style={{ textTransform: "none" }} className={classes.buttonStyle} id='delete' onClick={this.cancel}>CANCEL</Button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.layout} style={{ display: this.state.add ? 'block' : 'none' }}>
                        {this.register(classes)}
                    </div>
                </React.Fragment> : <div className={classes.progressWrapper}>
                    <CircularProgress />
                </div>
        );
    };
}

export default withStyles(styles)(Admin);