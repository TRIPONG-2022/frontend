import React, { createContext, useContext, useState } from 'react';
import * as Styled from './Dropdown.styled';

interface DropdownState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}

const DropdownContext = createContext<DropdownState | null>(null);

function useDropdownContext(componentName: string) {
  const context = useContext(DropdownContext);
  if (context === null) {
    throw new Error(
      `<${componentName} /> is missing a parent <Dropdown /> component.`,
    );
  }
  return context;
}

interface DropdownProps {
  initialState?: boolean;
  children?: React.ReactNode;
}

function Dropdown({ children, initialState = false }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onToggle = () => setIsOpen((prev) => !prev);

  return (
    <DropdownContext.Provider value={{ isOpen, onOpen, onClose, onToggle }}>
      <Styled.DropdownContainer>{children}</Styled.DropdownContainer>
    </DropdownContext.Provider>
  );
}

interface DropdownButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  children?: React.ReactNode;
}

function DropdownButton({ children, ...buttonProps }: DropdownButtonProps) {
  const { onToggle } = useDropdownContext('DropdownButton');
  return (
    <button onClick={onToggle} {...buttonProps}>
      {children}
    </button>
  );
}

interface DropdownItemsProps {
  children?: React.ReactNode;
  width?: string | number;
  position?: 'right' | 'left';
}

function DropdownItems({
  children,
  width,
  position = 'right',
}: DropdownItemsProps) {
  const { isOpen, onClose } = useDropdownContext('DropdownItems');

  return (
    <React.Fragment>
      {isOpen && (
        <Styled.DropdownItemsContainer
          position={position}
          style={{ minWidth: width }}
        >
          <Styled.DropdownBackdrop onClick={onClose} />
          <Styled.DropdownItemsInnerContainer>
            {children}
          </Styled.DropdownItemsInnerContainer>
        </Styled.DropdownItemsContainer>
      )}
    </React.Fragment>
  );
}

interface DropdownItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

function DropdownItem({
  children,
  onClick,
  ...buttonProps
}: DropdownItemProps) {
  const { onClose } = useDropdownContext('DropdownItem');

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (onClick) {
      onClick(event);
    }
    onClose();
  };

  return (
    <Styled.DropdownItem onClick={handleClick} {...buttonProps}>
      {children}
    </Styled.DropdownItem>
  );
}

export default Object.assign(Dropdown, {
  Button: DropdownButton,
  Items: DropdownItems,
  Item: DropdownItem,
});
