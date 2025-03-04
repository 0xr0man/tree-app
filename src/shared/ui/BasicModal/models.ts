import { ReactNode } from "react";

export interface IBasicModalProps {
    header: string,
    content: ReactNode,
    isOpen: boolean,
    handleClose: () => void
}