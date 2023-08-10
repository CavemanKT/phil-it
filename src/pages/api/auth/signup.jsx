import nc from 'next-connect'

import authSignup from '@/api/controllers/auth/signup'  // not using auth

export default nc()
  .post(authSignup)