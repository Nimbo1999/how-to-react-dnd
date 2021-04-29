import { ReactNode } from 'react';
import ReactModal, { Props } from 'react-modal';

interface ModalProps extends Props {
    children: ReactNode,
}

function Modal({ children, ...props }: ModalProps) {
    return (
    <ReactModal
        {...props}
        overlayClassName="ReactModalOverlayOverride"
        className="ReactModalContentOverride"
        closeTimeoutMS={400}
        ariaHideApp={false}
    >
        {children}
    </ReactModal>
    );
}

export default Modal;
