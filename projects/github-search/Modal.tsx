import React, { FC } from 'react';
import { Text, Modal, Row } from '@nextui-org/react';

interface ModaltProps {
    visible: boolean;
    onClose: () => void;
    error: any;
    errorBody: any;
}

const ModalError: FC<ModaltProps> = ({ visible, onClose, error, errorBody }) => {
    return (
        <Modal
            color='error'
            closeButton
            blur
            aria-labelledby="modal-title"
            open={visible}
            onClose={onClose}
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
    )
}

export default ModalError;
