/* eslint-disable @next/next/no-img-element */
// Comps
import Link from 'next/link'

// Hooks

import { useState, useRef } from 'react'

import Button from 'react-bootstrap/Button'
import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'
// import useUser from '@/_hooks/user'
// import useNotification from '@/_hooks/notification'

import CompsLayout from '@/components/layouts/Layout'

export default function PagesHome() {
  const [show, setShow] = useState(false)
  const [target, setTarget] = useState(null)
  const ref = useRef(null)

  const [openCreateProfileModal, setOpenCreateProfileModal] = useState(null)
  const [openMyProfileModal, setOpenMyProfileModal] = useState(null)

  // const { user, apiProfileCreate, isLoading: isUserLoading } = useUser()
  // console.log(user)







  return (
    <CompsLayout>



    </CompsLayout>
  )
}