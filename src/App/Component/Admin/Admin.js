import React, { Component } from 'react';
import { Paper, withStyles, Grid, TextField, Button, Typography, Box } from '@material-ui/core';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Delete, Edit, Face, AlternateEmail } from '@material-ui/icons';
import _ from 'lodash';
import { styles } from '../styles';
import schema from './schema';
import validate from 'validate.js';

class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            delete: false,
            Manager: ['items1', 'items2', 'items3'],
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
        Manager.push(data);
        this.setState({ Manager, add: false });
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
                        {/* <Button variant="outlined" color="primary" style={{ textTransform: "none", marginLeft: 15 }} onClick={this.clear}>Clear</Button> */}
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
        const Manager = [];
        this.state.Manager.forEach((val, i) => {
            if (val !== this.selectTile) {
                Manager.push(val);
            }
        });
        this.setState({ Manager, delete: false });
    }

    makeManagerList() {
        let data = [];
        this.state.Manager.forEach((val, i) => {
            data.push(
                <Box key={val + ' ' + i} p={1} style={{ margin: 10, minWidth: 150, textAlign: 'center' }} bgcolor="background.paper">
                    <Grid container alignItems="flex-end" style={{ width: '100%', justifiedContent: "center" }}>
                        <Grid item style={{ width: '68%', wordBreak: 'break-word' }} onClick={this.select} id='items'>
                            {val}
                        </Grid>
                        <Grid item>
                            <Edit onClick={this.select} type={val} id="edit" />
                            <Delete onClick={this.select} type={val} id="delete" />
                        </Grid>
                    </Grid>
                </Box>
            );
        });
        return data;
    }

    save() {
        const changeValue = document.querySelectorAll('input')[0].value;
        document.querySelectorAll('input')[0].value = '';
        const Manager = [];
        this.state.Manager.forEach((val, i) => {
            if (val === this.selectTile) {
                Manager.push(changeValue);
            } else {
                Manager.push(val);
            }
        });
        this.setState({ Manager, edit: false, disable: true });
    }

    cancel(e) {
        const type = e.currentTarget.getAttribute('id');
        this.setState({ [type]: false, disable: true });
    }

    select(e) {
        e.preventDefault();
        if (e.currentTarget.getAttribute('id') === 'edit') {
            this.edit(e);
        } else if (e.currentTarget.getAttribute('id') === 'delete') {
            this.delete(e);
        } else {
            let pathName = window.location.pathname;
            pathName = '';
            this.props.history.push({
                pathname: `${pathName}Flow`,
                select: e.currentTarget.innerHTML
            });
        }
    }

    delete(e) {
        this.setState({ delete: true });
        this.selectTile = e.currentTarget.getAttribute('type');
    }

    edit(e) {
        this.setState({ edit: true });
        this.selectTile = e.currentTarget.getAttribute('type');
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className={classes.AdminTop}>
                    <Grid container spacing={8} alignItems="center" className={classes.AdminTitle}>
                        Admin Portal
                </Grid>
                </div>
                <div>
                    <Grid container spacing={8} alignItems="center" className={classes.AdminTitle} style={{ height: 50 }}>
                        List of Manager
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }} className={classes.buttonStyle} id='Add' onClick={this.add}>Add New Manager</Button>
                    </Grid>
                </div>
                <div>
                    <Box
                        display="flex"
                        flexWrap="wrap"
                        p={1}
                        m={1}
                        css={{ minWidth: 300 }}
                    >
                        {this.state.Manager.length ?
                            this.makeManagerList()
                            : <div>No Manager Present</div>}
                    </Box>
                </div>
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
            </React.Fragment>
        );
    };
}

export default withStyles(styles)(Admin);