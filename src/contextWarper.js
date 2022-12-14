import React, { createContext, useContext, useState, useEffect } from 'react'

const ViewportContext  = createContext({
    isMobile: window.innerWidth < 500,
    height: window.innerHeight,
    width: window.innerWidth,
    isOpen: false
})

export const ViewportProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 500)
    const [height, setHeight] = useState(window.innerHeight)
    const [width, setWidth] = useState(window.innerWidth)
    const [isOpen, setOpen] = useState(false);
    const [isPermit, setPermit] = useState(false);
    const [isAbout, setAbout] = useState(false);
    const [isMe, setMe] = useState(false);
    const [isFile, setFile] = useState("README");
    const [isProject, setProject] = useState(null);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 500)
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <ViewportContext.Provider
            value={{ isMobile, height, width, isOpen, setOpen,
                     isAbout, setAbout, isMe, setMe, isFile, setFile,
                     isProject, setProject, isPermit, setPermit }}>
            {children}
        </ViewportContext.Provider>
    )
}

export function useViewport() {
    return useContext(ViewportContext)
}

export default ViewportContext;