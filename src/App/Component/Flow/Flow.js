import React, { Component } from 'react';
import _ from 'lodash';
import { styles } from '../styles';
import { Paper, withStyles, Grid, TextField, Button, Typography, Box } from '@material-ui/core';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from 'axios';

class Flow extends Component {
    constructor(props) {
        super(props)
        this.state = {};
        this.data = this.props.history.location.value
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

            const result = {};
            result[droppableSource.droppableId] = sourceClone;
            result[droppableDestination.droppableId] = destClone;

            return result;
        };
        _.bindAll(this, [
            'onDragEnd',
            'classifiedDrop',
            'getList'
        ]);
    }

    getList(id) {
        return this.state[id.split('_')[0]];
    }
    classifiedDrop() {
        const { data } = this.data;
        const uniqueData = [...new Set(data.map(x => x.taskHead))];
        uniqueData.forEach((val) => {
            this.state[val] = [];
        });
        uniqueData.forEach((val) => {
            data.forEach((det) => {
                if (val === det.taskHead) {
                    let result = this.state[val];
                    result.push(det);
                    this.setState({ [val]: result }, () => {
                        console.log(this.state);
                    });
                }
            })
        });
    }

    onDragEnd(result) {
        const { source, destination } = result;
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
            this.setState({ [destination.droppableId.split('_')[0]]: items });
        } else {
            const results = this.move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );
            Object.keys(results).map(val => {
                this.setState({ [val.split('_')[0]]: results[val] });
            });
        }
    };

    componentDidMount() {
        this.classifiedDrop();
    }

    render() {
        const { history, classes } = this.props
        console.log(this);
        return (
            <React.Fragment>
                <div className={classes.FlowTop}>
                    <Grid container spacing={8} alignItems="center" className={classes.AdminTitle}>
                        {history.location.select} Flow Chart
                    </Grid>
                </div>
                <div
                    className="pipelineTop"
                    style={{
                        display: 'flex',
                        zIndex: 2,
                        position: 'relative',
                        marginTop: 50,
                        justifyContent: 'center'
                    }}
                >
                    {Object.keys(this.state).map((val, i) => {
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
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        maxHeight: '80%',
                        overflow: 'auto',
                        justifyContent: 'center'
                    }}
                >
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        {Object.keys(this.state).map((value, i) => {
                            return (<Droppable

                                droppableId={value + '_' + i}
                                key={value + i}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        style={this.getListStyle(snapshot.isDraggingOver)}>
                                        {this.state[value].map((item, index) => (
                                            <Draggable
                                                key={item.taskDetails + '_' + value + '_' + index}
                                                draggableId={item.taskDetails + '_' + value + '_' + index}
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
                                                        {item.taskDetails}
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
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Flow);