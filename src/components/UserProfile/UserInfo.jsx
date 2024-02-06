const UserInfo = () => {
  return (
    <div className="mr-20 inline-flex">
      <img
        style={{
          width: '52px',
          height: '52px',
          'border-radius': '100%',
          'margin-right': '16px',
        }}
        src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg"
      ></img>
      <div>
        <p className="flex items-center justify-center text-2xl font-bold text-black">
          name
        </p>
        <p>Role</p>
      </div>
    </div>
  );
};

export default UserInfo;
