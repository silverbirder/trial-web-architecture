import React from 'react';
import { renderRoutes } from 'react-router-config';
import {connect} from 'react-redux';
import {addTask, inputTask} from "./Store/actions/tasks";

const Html = (props) => {
    return (
        <div id="team-decide">
            {renderRoutes(props.route.routes)}
        </div>
    )
};

const mapStateToProps = ({tasks}) => {
    return {
        task: tasks.task,
        tasks: tasks.tasks
    };
};

const mapDispatchToProps = (dispatch) => ({
    addTask: task => dispatch(addTask(task)),
    inputTask: task => dispatch(inputTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Html);