import Image from "next/image"
import Loader from "public/svg/loader.svg"
export default function CompsLoading() {
    return (
        <div id="comp-loader" className="text-center">
            <Image
                priority
                src={Loader}
                width={200}
                height={200}
                alt="loading"
            />
        </div>
    )
}