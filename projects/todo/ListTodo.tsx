import React, { FC } from 'react';
import { Col, Row, Table, Tooltip, Text, Button } from '@nextui-org/react';
import { StyledBadge } from '../../components/ui/badge/StyledBadge';
import { DeleteIcon, TaskIcon, IconButton, CheckIcon } from '../../components/ui/icons';
import { ITaskTodo } from '../../interfaces/task-todo';

interface IListTodoProps {
    tasks: ITaskTodo[];
    deleteTask: (id: string) => void;
    clompleteTask: (task: ITaskTodo) => void;
}

const ListTodo: FC<IListTodoProps> = ({ tasks, deleteTask, clompleteTask }) => {
    const columns = [
        { name: "TASK", uid: "task" },
        { name: "STATUS", uid: "status" },
        { name: "COMPLETE", uid: "complete" },
        { name: "DELETE", uid: "delete" },
    ];

    const defineIcon = (task: any,) => {
        if (task.status === 'done') {
            return (
                <Row justify="center" align="center" css={{ d: "flex" }} >
                    <Tooltip
                        content="Done task"
                        color="success"
                    >
                        <IconButton
                            hidden={task.status === 'done'}
                            onClick={() => clompleteTask(task)} >
                            <CheckIcon size={20} fill="#17C964" />
                        </IconButton>
                    </Tooltip>
                </Row>
            )
        } else {
            return (
                <Row justify="center" align="center" css={{ d: "flex" }} >
                    <Tooltip
                        content="Complete task"
                        color="warning"
                    >
                        <IconButton
                            hidden={task.status === 'done'}
                            onClick={() => clompleteTask(task)} >
                            <TaskIcon size={20} fill="#F5A524" />
                        </IconButton>
                    </Tooltip>
                </Row>
            )
        }
    };

    const renderCell = (task: any, columnKey: string | number) => {
        const cellValue = task[columnKey];
        switch (columnKey) {
            case "task":
                return (
                    <Col>
                        <Row justify="center" align="center">
                            <Text
                                transform={'capitalize'}
                                b
                                size={14}
                                css={{ tt: "capitalize" }}
                                del={task.status === 'done'}>
                                {task?.name}
                            </Text>
                        </Row>
                    </Col>
                );
            case "status":
                return (
                    <Row justify="center" align="center">
                        <StyledBadge type={task.status}>{cellValue}</StyledBadge>
                    </Row>
                );
            case "complete":
                return (
                    defineIcon(task)
                );
            case "delete":
                return (
                    <Row justify="center" align="center" css={{ d: "flex" }}>
                        <Tooltip
                            content="Delete task"
                            color="error"
                        >
                            <IconButton
                                onClick={() => deleteTask(task.id)}>
                                <DeleteIcon size={20} fill="#FF0080" />
                            </IconButton>
                        </Tooltip>
                    </Row>
                );
            default:
                return cellValue;
        }
    };
    return (
        <Table
            aria-label="Table todo list"
            css={{
                height: "auto",
                minWidth: "100%",
            }}
            selectionMode="none"
        >
            <Table.Header columns={columns}>
                {(column: any) => (
                    <Table.Column
                        key={column.uid}
                        align={"center"}
                    >
                        {column.name}
                    </Table.Column>
                )}
            </Table.Header>
            <Table.Body items={tasks}>
                {(item) => (
                    <Table.Row>
                        {(columnKey: any) => (
                            <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                        )}
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
    );
}

export default ListTodo;

