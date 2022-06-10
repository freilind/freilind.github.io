import React, { FC } from 'react';
import { Grid, Table, Spacer } from '@nextui-org/react';

interface IColumn {
    key: string;
    label: string;
}

interface IItem {
    [key: string]: string;
    organizacion: string;
    descripcion: string;
    date: string;
}

const Education: FC = () => {
    return (
        <Grid.Container gap={2} justify='center' xs={10}>
            <Table
                aria-label="Table of education"
                bordered={true}
                css={{
                    height: "auto",
                    minWidth: "100%",
                }}
            >
                <Table.Header columns={columns}>
                    {(column: IColumn) => (
                        <Table.Column key={column.key} >{column.label}</Table.Column>
                    )}
                </Table.Header>
                <Table.Body items={rows}>
                    {(item: IItem) => (
                        <Table.Row key={item.key}>
                            {(columnKey: string) => (
                                <Table.Cell>{item[columnKey]}</Table.Cell>
                            )}
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </Grid.Container>
    )
}

export default Education;

const columns = [
    {
        key: "organizacion",
        label: "ORGANIZACIÓN",
    },
    {
        key: "descripcion",
        label: "DESCRIPCIÓN",
    },
    {
        key: "date",
        label: "FECHA",
    },
];

const rows = [
    {
        key: "1",
        organizacion: "ORACLE",
        descripcion: "Oracle Certified Associate, Java SE 8 Programmer",
        date: "2019",
    },
    {
        key: "2",
        organizacion: "UNITEC",
        descripcion: "Diplomado BPM-SOA",
        date: "2016",
    },
    {
        key: "3",
        organizacion: "IUGT",
        descripcion: "Técnico Superior Universitario Informática",
        date: "2012",
    }
];
