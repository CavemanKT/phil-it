import React from 'react'
import PropTypes from 'prop-types'

// material tailwind modal
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";


import FormsAuthLogin from '@/components/forms/auth/login'

const ModalsLogin = ({ close, onSubmit }) => (
    <Dialog
    size="xs"
    open={close}
    handler={handleOpen}
    className="bg-transparent shadow-none"
    >
      <FormsAuthLogin
        onSubmit={onSubmit}
      />
    </Dialog>
)
ModalsLogin.propTypes = {
  close: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default ModalsLogin