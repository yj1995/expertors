import React, { Component } from 'react';
import _ from 'lodash';
import { styles } from '../styles';
import { Paper, withStyles, Grid, TextField, Button, Typography, Box } from '@material-ui/core';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class Flow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropList: ['drop 1', 'drop 2', 'drop 3','drop 4', 'drop 5', 'drop 6','drop 7', 'drop 8', 'drop 9'],
            dragList: ['drag 1', 'drag 2', 'drag 3']
        }
        const grid = 8;
        this.getItemStyle = (isDragging, draggableStyle) => ({
            // some basic styles to make the items look a bit nicer
            userSelect: 'none',
            padding: '16px 16px 0px 16px',
            margin: `0 0 ${grid}px 0`,
            color: 'black',
            borderTop: '1px solid rgba(192,192,192,1)',
            borderLeft: '1px solid rgba(192,192,192,1)',
            borderRight: '1px solid rgba(192,192,192,1)',
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
            height: 'auto',
            padding: 8,
            border: '1px solid rgba(0,0,0,0.26)'
        });
    }

    render() {
        const { history, classes } = this.props
        console.log(this);
        return (
            <React.Fragment>
                <div className={classes.AdminTop}>
                    <Grid container spacing={8} alignItems="center" className={classes.AdminTitle}>
                        {history.location.select} Flow Chart
                    </Grid>
                </div>
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        paddingTop: 82,
                        minHeight: 300
                    }}
                >
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        {this.state.dropList.map((value, i) => {
                            return (<Droppable
                                
                                droppableId={value}
                                key={value + i}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        style={this.getListStyle(snapshot.isDraggingOver)}>
                                        {this.state.dragList.map((item, index) => (
                                            <Draggable
                                                key={item + value}
                                                draggableId={item + index + value}
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
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Flow);