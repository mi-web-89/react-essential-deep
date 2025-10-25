export default function TabButton({ children, isSelected, ...props }) {
  // console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      {/* condition untuk css sebaiknya menggunakan undefined */}
      <button className={isSelected ? 'active' : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
