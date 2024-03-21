import React from 'react';
import EditIcon from './Icons/EditIcon';

const TripInfor = ({ trip, setIsPopupEdit }) => {
  return (
    <div className="relative flex items-center gap-4 rounded-lg bg-bg-color px-5 py-8">
      <div className="absolute right-0 top-0 h-fit w-fit p-4">
        <EditIcon setIsPopupEdit={setIsPopupEdit} />
      </div>
      <div className="text-2xl font-bold">Thông tin chuyến đi</div>
      <div className="h-full w-[0.5px] bg-black" />
      <div className="flex flex-col gap-5 text-xl font-medium">
        <div>
          <span className="font-bold">Tên chuyến đi:</span> {trip.title}
        </div>
        <div>
          <span className="font-bold">Mô tả:</span>{' '}
          {trip.description === '' ? (
            <span className="italic opacity-40">Không có mô tả</span>
          ) : (
            trip.description
          )}
        </div>
        <div className="flex gap-10">
          <div>
            <span className="font-bold">Điểm đến:</span>{' '}
            {trip.trip_Locations.length} điểm đến
          </div>
          <div>
            <span className="font-bold">Thời gian:</span> {trip.duration} ngày
          </div>
        </div>
        <div>
          <span className="font-bold">Chia sẻ:</span>{' '}
          {trip.isPublic ? 'Công khai' : 'Riêng tư'}
        </div>
      </div>
    </div>
  );
};

export default TripInfor;
