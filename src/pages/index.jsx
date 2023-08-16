
// Hooks


// State

import {
    Typography
} from "@material-tailwind/react"

import { ChatBubbleLeftRightIcon, HomeIcon } from "@heroicons/react/20/solid"

// Comps
import CompsLayout from '@/components/layouts/Layout'

export default function PagesHome() {

    return (
        <CompsLayout>

            <div className="w-full flex flex-col sm:flex-row flex-grow overflow-hidden">

                {/* 1st column */}
                <div className="sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4">

                    {/* first side bar */}
                    <div className="p-4 bg-gray-100 rounded-xl w-full">
                        <ul className="flex sm:flex-col overflow-hidden content-center justify-between">
                            <li className="py-2 hover:bg-indigo-300 rounded">
                                <a className="truncate" href="/">
                                    <HomeIcon className="w-7 sm:mx-2 mx-4 inline" />

                                    <span className="hidden sm:inline">Home</span>
                                </a>
                            </li>
                            <li className="py-2 hover:bg-indigo-300 rounded">
                                <a className="truncate" href="/rooms">
                                    <ChatBubbleLeftRightIcon className="w-7 sm:mx-2 mx-4 inline" />
                                    <span className="hidden sm:inline">Rooms</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* second side bar */}
                    <div className="bg-gray-50 rounded-xl border my-3 w-full">
                        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between">
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                <span className="block text-indigo-600 overflow-ellipsis">Need help?</span>
                            </h2>
                        </div>
                    </div>

                </div>


                {/* 2nd column */}
                <div className="mx-auto max-w-screen-md py-2">

                    {/* 1st post */}
                    <div>
                        <Typography variant="h5" color="blue-gray" className="m-5">
                            About us
                        </Typography>
                        <Typography color="gray" className="font-normal m-1 p-3">
                            People say philosophy is dead.  I am looking for a way out.
                            <br />
                            Here is the platform for people to debate and get sparkle, hopefully these sparkles could help most of the interdisciplinary subjects make breakthrough in qualitative research..
                        </Typography>
                    </div>

                    {/* 2nd post */}
                    <div>
                        <Typography variant="h5" color="blue-gray" className="m-5">
                            How
                        </Typography>
                        <Typography color="gray" className="font-normal m-1 p-3">
                            &quot;?&quot; -- Question.
                            <br />
                            People say philosophy is dead.  I am looking for a way out.
                            <br />
                            Exactly.  We need a question to start digging around.
                            So in here. You will have a statement in a chat room and you will argue with or against it.
                            But remember, don&apos;t get too binary at the end.  No hard  feeling.
                        </Typography>
                    </div>

                </div>

            </div>

        </CompsLayout>
    )
}