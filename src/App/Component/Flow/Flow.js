import React, { Component } from 'react';
import _ from 'lodash';
import { styles } from '../styles';
import { withStyles, Grid, TextField, Button, CircularProgress } from '@material-ui/core';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from 'axios';

class Flow extends Component {
    constructor(props) {
        super(props)
        this.data = this.props.history.location.value;
        this.state = {
            flow: false,
            task: false,
            layerOut: false,
            disable: true,
            data: this.data.data,
            isLoading: false
        };
        const grid = 10;
        this.getItemStyle = (isDragging, draggableStyle) => ({
            // some basic styles to make the items look a bit nicer
            userSelect: 'none',
            padding: `${grid}px ${grid}px`,
            margin: `${grid}px ${grid}px`,
            color: 'black',
            border: '1px solid rgba(192,192,192,1)',
            boxShadow: '0px 0px 5px #DFE3E8',
            // change background colour if dragging
            background: isDragging ? 'lightgreen' : 'white',

            // styles we need to apply on draggables
            ...draggableStyle
        });
        this.color = ['#3cba54', '#db3236', '#4885ed', '#f4c20d'];
        this.getListStyle = (isDraggingOver, i) => ({
            background: isDraggingOver ? 'lightblue' : 'white',
            minWidth: 200,
            wordBreak: 'break-word',
            height: '100%',
            padding: 8,
            border: '1px solid rgba(0,0,0,0.26)'
        });
        // a little function to help us with reordering the result
        this.reorder = (list, startIndex, endIndex) => {
            const result = Array.from(list);
            const [removed] = result.splice(startIndex, 1);
            result.splice(endIndex, 0, removed);
            return result;
        };

        /**
         * Moves an item from one list to another list.
         */
        this.move = (source, destination, droppableSource, droppableDestination) => {
            const sourceClone = Array.from(source);
            const destClone = Array.from(destination);
            const [removed] = sourceClone.splice(droppableSource.index, 1);

            destClone.splice(droppableDestination.index, 0, removed);

            const result = [];
            result[droppableSource.droppableId] = sourceClone;
            result[droppableDestination.droppableId] = destClone;

            return result;
        };
        _.bindAll(this, [
            'onDragEnd',
            'getList',
            'dropTop',
            'dropData',
            'addFlow',
            'addTask',
            'makeFlow',
            'makeTask',
            'cancel',
            'changeHandler',
            'save'
        ]);
    }

    save(e) {
        const type = e.currentTarget.getAttribute('id');
        const input = document.querySelector('input').value;
        const data = this.state.data;
        if (type === 'flow') {
            data[input] = [];
        } else {
            const select = document.querySelector('select').value;
            data[select].push(input);
        }
        this.setState({ [type]: false, isLoading: true })
        axios.post(`http://localhost:3000/api/updateManagerData`, {
            data,
            _id: this.data._id
        }).then((res) => {
            this.setState({ data, isLoading: false });
        });
    }

    cancel(e) {
        const type = e.currentTarget.getAttribute('id');
        this.setState({ [type]: false });
    }

    changeHandler(e) {
        const length = e.target.value;
        if (length) {
            this.setState({ disable: false });
        } else {
            this.setState({ disable: true });
        }
    }

    makeFlow(classes) {
        return (
            <div className={classes.layout}>
                <div className={classes.EditName}>
                    Enter New Task Flow Name
                <input className={classes.EditNameInput} placeholder='Enter Task Flow Name' onChange={this.changeHandler} />
                    <div className={classes.buttonLayout}>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }} disabled={this.state.disable} id='flow' className={classes.buttonStyle} onClick={this.save}>SAVE</Button>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }} className={classes.buttonStyle} id='flow' onClick={this.cancel}>CANCEL</Button>
                    </div>
                </div>
            </div>
        );
    }

    makeTask(classes) {
        return (
            <div className={classes.layout}>
                <div className={classes.EditName}>
                    Enter New Task
                <input className={classes.EditNameInput} placeholder='Enter Task Name' onChange={this.changeHandler} />
                    {/* <input className={classes.EditNameInput} placeholder='Enter Task Flow Name' onChange={this.changeHandler} /> */}
                    <div className={classes.fields}>
                        <TextField
                            label="Select Task Flow"
                            margin="dense"
                            onChange={this.changeHandler}
                            select
                            SelectProps={{ native: true, style: { height: 40, width: 247, background: 'white', fontSize: 14 } }}
                            InputLabelProps={{ shrink: true, style: { padding: '8px 0px' } }}
                            variant="outlined">
                            {Object.keys(this.state.data).map((option, i) => (
                                <option
                                    key={option + i}
                                    value={option}
                                    style={{ margin: 10, fontSize: 16 }}
                                >
                                    {option}
                                </option>
                            ))}
                        </TextField>
                    </div>
                    <div className={classes.buttonLayout}>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }} id='task' disabled={this.state.disable} className={classes.buttonStyle} onClick={this.save}>SAVE</Button>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }} className={classes.buttonStyle} id='task' onClick={this.cancel}>CANCEL</Button>
                    </div>
                </div>
            </div>
        );
    }

    addFlow() {
        this.setState({ flow: true });
    }

    addTask() {
        this.setState({ task: true });
    }

    dropTop() {
        return (
            <div
                className="pipelineTop"
                style={{
                    display: 'flex',
                    zIndex: 2,
                    position: 'relative',
                }}
            >
                {Object.keys(this.state.data).map((val, i) => {
                    return (
                        <div
                            keys={val + i}
                            style={{
                                minWidth: 200,
                                backgroundColor: 'rgb(72, 133, 237)',
                                padding: 8,
                                wordBreak: 'break-word',
                                border: '1px solid rgba(192,192,192,1)',
                                color: 'white'
                            }}
                        >
                            <div
                                style={{
                                    position: 'relative',
                                    top: '50%',
                                    transform: 'translateY(-50%)'
                                }}
                            >
                                {val}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    dropData() {
        return (
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                }}
            >

                <DragDropContext onDragEnd={this.onDragEnd}>
                    {Object.keys(this.state.data).map((value, i) => {
                        return (<Droppable

                            droppableId={value}
                            key={value + i}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    style={this.getListStyle(snapshot.isDraggingOver)}>
                                    {this.state.data[value].map((item, index) => (
                                        <Draggable
                                            key={item + '_' + value + '_' + index}
                                            draggableId={item + '_' + value + '_' + index}
                                            index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={this.getItemStyle(
                                                        snapshot.isDragging,
                                                        provided.draggableProps.style
                                                    )}>
                                                    {item}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>)
                    })}
                </DragDropContext>
            </div>
        );
    }

    getList(id) {
        return this.state.data[id.split('_')[0]];
    }

    // classifiedDrop() {
    //     const { data } = this.data;
    //     const uniqueData = [...new Set(data.map(x => x.taskHead))];
    //     uniqueData.forEach((val) => {
    //         this.state[val] = [];
    //     });
    //     uniqueData.forEach((val) => {
    //         data.forEach((det) => {
    //             if (val === det.taskHead) {
    //                 let result = this.state[val];
    //                 result.push(det);
    //                 this.setState({ [val]: result }, () => {
    //                 });
    //             }
    //         })
    //     });
    // }

    onDragEnd(result) {
        const { source, destination } = result;
        const data = {};
        // dropped outside the list
        if (!destination) {
            return;
        }
        if (source.droppableId === destination.droppableId) {
            const items = this.reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );
            Object.keys(this.state.data).map(index => {
                if (index === destination.droppableId) {
                    data[index] = items;
                } else {
                    data[index] = this.state.data[index];
                }
            });
        } else {
            const results = this.move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );
            Object.keys(this.state.data).map(index => {
                if (results[index]) {
                    data[index] = results[index];
                } else {
                    data[index] = this.state.data[index];
                }
            });
        }
        this.setState({ data, isLoading: true });
        axios.post(`http://localhost:3000/api/updateManagerData`, {
            data,
            _id: this.data._id
        }).then((res) => {
            this.setState({ isLoading: false });
        })
    };

    render() {
        const { classes } = this.props
        const { data } = this.state;
        return (
            <React.Fragment>
                <div className={classes.FlowTop}>
                    <Grid container spacing={8} alignItems="center" className={classes.AdminTitle}>
                        {this.data.managerName} Flow Chart
                    </Grid>
                </div>
                <div className={classes.FlowTop} style={{ marginTop: 36 }}>
                    <Grid container spacing={8} alignItems="center" className={classes.AdminTitle}>
                        <Button className={classes.buttonStyle} variant="outlined" color="primary" style={{ textTransform: "none", background: 'white' }} onClick={this.addFlow}>Add New Task Flow</Button>
                        <Button disabled={!Object.keys(data).length} className={classes.buttonStyle} variant="outlined" color="primary" style={{ textTransform: "none", background: 'white' }} onClick={this.addTask}>Add New Task</Button>
                    </Grid>
                </div>
                <div style={{ minHeight: '82%', maxHeight: '82%', overflow: 'auto', marginTop: 100 }}>
                    {Object.keys(data).length ? this.dropTop() : null}
                    {Object.keys(data).length ? this.dropData() : <div style={{ textAlign: 'center' }}>NO Daily Task and Flow available </div>}
                </div>
                {this.state.flow ? this.makeFlow(classes) : null}
                {this.state.task ? this.makeTask(classes) : null}
                {this.state.isLoading ? <div style={{ width: '100%', height: '100%', zIndex: 300 }} className={classes.progressWrapper}>
                    <CircularProgress style={{ position: 'absolute', top: '50%', left: '50%' }} />
                </div> : null}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Flow);