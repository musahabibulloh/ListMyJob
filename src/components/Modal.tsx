import React from 'react';

interface ModalProps {
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
}

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const contentStyle: React.CSSProperties = {
  background: '#fff',
  borderRadius: 8,
  maxWidth: '900px',
  width: '95%',
  maxHeight: '90vh',
  overflowY: 'auto',
  padding: '20px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
};

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '12px'
};

const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  return (
    <div style={overlayStyle} role="dialog" aria-modal="true">
      <div style={contentStyle}>
        <div style={headerStyle}>
          <h3 style={{ margin: 0 }}>{title}</h3>
          <button className="btn btn-secondary" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
