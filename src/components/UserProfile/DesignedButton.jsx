import { NavLink } from 'react-router-dom';

const DesignedButton = ({ label, svg, path }) => {
  return (
    <NavLink
      to={path}
      className={`flex select-none items-center justify-start gap-4 rounded-3xl px-2 py-2 hover:bg-secondary-color/50 active:bg-secondary-color/70`}
    >
      <div className="flex items-center justify-center gap-2">
        <button>{svg}</button>
        <span className="text-xl font-semibold"> {label}</span>
      </div>
    </NavLink>
  );
};

export default DesignedButton;
