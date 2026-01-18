import './Button.css'

function Button({ children, onClick, variant = 'primary', size = 'medium', ...props }) {
  const className = `btn btn-${variant} btn-${size}`

  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button

