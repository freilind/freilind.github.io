import React, { FC, useEffect, useState } from 'react';
import { Grid, Text, Input, Modal, Row } from '@nextui-org/react';
import GithubUser from './GithubUser';
import { IGithubUser } from '../../interfaces/github-user';

const GithubSearch: FC = () => {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);
    const [visible, setVisible] = useState(false);
    const [error, setError] = useState(Object);
    const [errorBody, setErrorBody] = useState(Object);

    useEffect(() => {
        const timeOutId = setTimeout(() => search(), 500);
        return () => clearTimeout(timeOutId);
    }, [query]);

    const search = () => {
        if (!query) return;
        const url = `https://api.github.com/search/users?q=${query}&per_page=20`;

        fetch(url)
            .then(response => {
                if (response.ok) {
                    response.json().then(data => setResult(data.items));
                } else {
                    console.log(response);
                    response.json().then(setErrorBody);
                    setError(response);
                    setVisible(true);
                }
            }).catch(_ => {
                setError({ status: 'fetching' });
                setVisible(true);
            });
    };

    return (
        <>
            <Modal
                color='error'
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={() => setVisible(false)}
                css={{
                    bg: '$red500',
                }}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18} >
                        Error
                        <Text b size={18}>
                            {`  ${error.status}`}
                        </Text>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Row justify="space-between">
                        <Text size={14}>
                            {errorBody.message}
                        </Text>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

            <Grid.Container gap={2} justify="center">
                <Grid xs={12} className={'font-console'} justify='center'>
                    <Text
                        h2 transform='capitalize' color='primary'>
                        Github Search User
                    </Text>
                </Grid>
                <Grid xs={0} sm={3}></Grid>
                <Grid xs={12} sm={6} justify="center" >
                    <Input
                        aria-labelledby='input-search'
                        clearable
                        underlined
                        labelLeft="username"
                        onChange={event => setQuery(event.target.value)}
                        onClearClick={_ => setResult([])}
                    />
                </Grid>
                <Grid xs={0} sm={3}></Grid>
                {result && result.map((ghuser: IGithubUser, i) => (
                    <GithubUser key={i} user={ghuser} />
                ))}
            </Grid.Container>
        </>
    )
}

export default GithubSearch;

