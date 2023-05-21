import { useEffect } from "react";


const useTitle = (title) => {
    useEffect(() => {
        document.title = `EduFun Emporium | ${title}` ;
    }, [title])
}

export default useTitle ;