import React, {
    ReactNode,
} from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import cls from './Modal.module.scss';
import Portal from '../Portal/Portal';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?:()=>void;
  lazy?:boolean;
}

const ANIMATION_DELAY = 300;

const Modal: React.FC<ModalProps> = ({
    className, children, isOpen, onClose,
    lazy,
}) => {
    const { theme } = useTheme();
    const { isMounted, isClosing, close } = useModal({ animationDelay: ANIMATION_DELAY, isOpen, onClose });

    const mods:Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};

export default Modal;
