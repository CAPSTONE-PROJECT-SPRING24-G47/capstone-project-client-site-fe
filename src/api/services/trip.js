import {
  addTrip,
  addTripAcc,
  addTripRes,
  addTripTA,
  deleteTripAcc,
  deleteTripRes,
  deleteTripTA,
  getTrip,
  updateTrip,
} from '..';

export const createTrip = async (tripData) => {
  try {
    const res = await addTrip(tripData);
    return res.data;
  } catch (error) {
    console.error(
      'Add trip failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const getTripById = async (id) => {
  try {
    const res = await getTrip(id);
    return res.data;
  } catch (error) {
    console.error(
      'Get trip failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const updateTripById = async (id, data) => {
  try {
    const res = await updateTrip(id, data);
    return res.data;
  } catch (error) {
    console.error(
      'Update trip failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const deleteTripAccById = async (id) => {
  try {
    const res = await deleteTripAcc(id);
    return res.data;
  } catch (error) {
    console.error(
      'Delete trip accommodation failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const deleteTripResById = async (id) => {
  try {
    const res = await deleteTripRes(id);
    return res.data;
  } catch (error) {
    console.error(
      'Delete trip restaurant failed:',
      error.response ? error.response.data : error.message
    );
  }
};
export const deleteTripTAById = async (id) => {
  try {
    const res = await deleteTripTA(id);
    return res.data;
  } catch (error) {
    console.error(
      'Delete trip ta failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const addTripAccById = async (data) => {
  try {
    const res = await addTripAcc(data);
    return res.data;
  } catch (error) {
    console.error(
      'Add trip accommodation failed:',
      error.response ? error.response.data : error.message
    );
  }
};
export const addTripResById = async (data) => {
  try {
    const res = await addTripRes(data);
    return res.data;
  } catch (error) {
    console.error(
      'Add trip restaurant failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const addTripTAById = async (data) => {
  try {
    const res = await addTripTA(data);
    return res.data;
  } catch (error) {
    console.error(
      'Add trip ta failed:',
      error.response ? error.response.data : error.message
    );
  }
};
