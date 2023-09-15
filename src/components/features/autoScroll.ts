import React from 'react'

function useChatScroll<T>(dep: T): React.MutableRefObject<HTMLDivElement> {
    const ref = React.useRef<HTMLDivElement>();
    React.useEffect(() => {
        ref.current.scrollTop = ref.current.scrollHeight;
    }, [dep]);
    return ref;
}

export default useChatScroll