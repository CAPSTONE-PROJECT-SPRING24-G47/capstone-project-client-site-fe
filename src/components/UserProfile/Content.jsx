import React from 'react';
import UserProfileDetail from './UserInforDetail';

const Content = () => {
  return (
    <div className="-ml-5 mt-4 h-3/4 w-5/6 rounded-3xl bg-bg-secondary-color px-5">
      <UserProfileDetail
        img={
          'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg'
        }
        userName={'UserName'}
        firstName={'Trần Hoàng'}
        lastName={'Duy'}
        email={'shikamaru.nara2k2@gmail.com'}
        passWord={'123456'}
        createDay={'02-06-2024'}
      />
    </div>
  );
};

export default Content;
