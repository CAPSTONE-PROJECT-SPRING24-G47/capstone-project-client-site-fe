import React, { useEffect, useState } from 'react';
import manualImage from '../../assets/trip_builder_manual_1.jpeg';
import { motion } from 'framer-motion';
import Calendar from './Calendar';

const millisecondsInADay = 1000 * 60 * 60 * 24;

const TripSurveyForManual = () => {
  const [data, setData] = useState({});
  const [isInputTouched, setIsInputTouched] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const [duration, setDuration] = useState(null);

  const handleSubmit = () => {
    if (title.length === 0) {
      setIsEmpty(true);
      return;
    }
    console.log(data);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    setIsInputTouched(true);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeDate = (ranges) => {
    setDate(ranges.selection);
  };

  useEffect(() => {
    setDuration((date.endDate - date.startDate) / millisecondsInADay + 1);
  }, [date]);

  useEffect(() => {
    if (isInputTouched && title.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [isInputTouched, title]);

  useEffect(() => {
    setData((prevState) => ({
      ...prevState,
      title,
      description,
      duration,
      startDate: date.startDate,
      endDate: date.endDate,
    }));
  }, [title, description, date, duration]);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-t-3xl text-white">
      <img
        src={manualImage}
        alt="manualImage"
        className="absolute h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#03121A] opacity-[50%]" />
      <motion.div
        initial={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.1, type: 'spring', stiffness: 120 }}
        viewport={{ once: true }}
        className="absolute inset-x-0 top-[10%] flex max-h-[500px] flex-col items-center justify-center gap-10 text-center"
      >
        <div className="no-scrollbar flex h-[500px] flex-col gap-5 overflow-y-scroll rounded-xl bg-bg-color px-10 py-5 text-text-color">
          <div className="flex flex-col gap-3">
            <div className="flex justify-start text-lg font-semibold">
              <label>Tên chuyến đi*</label>
            </div>
            <div className="relative">
              {isEmpty && (
                <p className="absolute inset-x-0 left-[50%] top-0 w-fit -translate-x-[50%] -translate-y-[50%] bg-bg-color px-1 text-sm font-semibold text-sub-color">
                  Không được để trống
                </p>
              )}

              <input
                onChange={handleChangeTitle}
                value={title}
                type="text"
                className={`w-full rounded-lg bg-bg-color px-5 py-3 outline-none ring-1 ${isEmpty ? 'ring-sub-color' : 'ring-accent-color/70'}  focus:ring-2 `}
                placeholder="Tên chuyến đi"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-start text-lg font-semibold">
              <label>Mô tả chuyến đi</label>
            </div>
            <textarea
              onChange={handleChangeDescription}
              value={description}
              className="h-[200px] w-full rounded-lg bg-bg-color px-5 py-3 outline-none ring-1 ring-accent-color/70 focus:ring-2 "
              placeholder="Mô tả chuyến đi"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-start text-lg font-semibold">
              <label>Thời gian dự định: {duration} ngày</label>
            </div>
            <Calendar date={date} handleChangeDate={handleChangeDate} />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0.3 }}
        whileHover={{
          opacity: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          width: '250px',
        }}
        transition={{ duration: 0.1 }}
        onClick={handleSubmit}
        className="absolute inset-y-0 right-0 flex w-[200px] cursor-pointer select-none items-center justify-center px-4"
      >
        <div className="flex items-center justify-center">
          <p className="text-center text-[30px] font-semibold">
            Tạo chuyến hành trình
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default TripSurveyForManual;
