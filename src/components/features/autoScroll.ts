import React from 'react'

function useChatScroll<T>(dep: T): React.MutableRefObject<HTMLDivElement> {
    const ref = React.useRef<HTMLDivElement>();
    React.useEffect(() => {
        if (ref.current.scrollTop >= ref.current.scrollHeight - 538) {   // if scroll to read the past message, it won't auto scroll
            ref.current.scrollTop = ref.current.scrollHeight;
        }
    }, [dep]);
    return ref;
}

export default useChatScroll