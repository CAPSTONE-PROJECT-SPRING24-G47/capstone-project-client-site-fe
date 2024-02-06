const DesignedButton = ({ label, svg }) => {
  return (
    <>
      <div
        className={`mt-4 flex items-center justify-between gap-4 rounded-3xl px-2 py-2 hover:bg-secondary-color/50 active:bg-secondary-color/70`}
      >
        <div className="flex items-center justify-center gap-2">
          <button className="">{svg}</button>
          <span className="text-2xl font-bold"> {label}</span>
        </div>
      </div>
    </>
  );
};

export default DesignedButton;
