import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const AddItems= ( {show, handleClose}) => {
    return(
        <Modal show={show} onHide={handleClose} animation={false}>
    <button onClick={handleClose}>close</button>
</Modal>

    )
}

