import React from 'react'
import PropTypes from 'prop-types'

import FormsAuthSignup from '@/components/forms/auth/signup'

const ModalsSignup = ({ close, onSubmit }) => (
  <Dialog
  size="xs"
  open={close}
  handler={handleOpen}
  className="bg-transparent shadow-none"
  >
    <FormsAuthSignup
      onSubmit={onSubmit}
    />
  </Dialog>
)
ModalsSignup.propTypes = {
  close: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default ModalsSignup