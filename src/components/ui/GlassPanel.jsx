export default function GlassPanel({ as: Tag = 'div', className = '', children, ...props }) {
  return (
    <Tag
      className={`glass rounded-2xl shadow-xl shadow-black/20 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
