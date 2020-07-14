import React, { useState } from 'react';
import { Button, Modal } from '@material-ui/core'

export default function SubmitPost() {
  const [open, setOpen] = useState(false);


  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return <div>
    <Button onClick={handleOpen}>Submit Post</Button>
    <Modal open={open}
      onClose={handleClose}>
      <div>Hello</div>
    </Modal>
  </div>
}