import React from 'react';
import Lottie from 'lottie-react';
import TripLoadingAnimate from '../../assets/TripLoadingAnimate.json';
import TripNotFoundAnimate from '../../assets/TripNotFoundAnimate.json';
import { Link, useNavigate } from 'react-router-dom';

const TripLoading = ({
  isError,
  setIsError,
  setIsTripSelection,
  setIsLoading,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full items-center justify-center">
      {!isError && (
        <>
          <div>
            <div className="w-fit text-2xl font-semibold">
              Đang sắp xếp chuyến đi
            </div>
            <div className="w-fit text-2xl font-semibold">
              phù hợp nhất cho bạn
            </div>
          </div>
          <div className="h-[220px] w-[220px]">
            <Lottie animationData={TripLoadingAnimate} loop={true} />
          </div>
        </>
      )}
      {isError && (
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-center">
            <div>
              <div className="w-fit text-2xl font-semibold">
                Không tìm được chuyến đi
              </div>
              <div className="w-fit text-2xl font-semibold">
                với những yêu cầu của bạn
              </div>
            </div>
            <div className="flex h-[150px] w-[150px] items-center justify-center">
              <Lottie animationData={TripNotFoundAnimate} loop={true} />
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <div
              onClick={() => {
                setIsError(false);
                setIsTripSelection(true);
                setIsLoading(false);
                navigate('/');
              }}
              className="cursor-pointer rounded-xl bg-accent-color px-4 py-2 text-xl font-semibold opacity-70"
            >
              Về trang chủ
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripLoading;
