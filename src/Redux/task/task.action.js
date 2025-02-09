import { axiosInstance } from "../../utils/axiosInstance";

export const TASKS_REQUEST = "TASKS_REQUEST";
export const TASKS_SUCCESS = "TASKS_SUCCESS";
export const TASKS_FAILURE = "TASKS_FAILURE";

export const GetAllTasks = (query) => {
  return async (dispatch) => {
    dispatch({ type: TASKS_REQUEST });
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axiosInstance.get("/task", {
        params: query,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response);
      if (response.status === 200) {
        dispatch({ type: TASKS_SUCCESS, payload: response?.data });
      } else {
        dispatch({ type: TASKS_FAILURE, payload: response?.data });
      }
    } catch (error) {
      dispatch({ type: TASKS_FAILURE, payload: error?.message });
    }
  };
};

export const GetSingleTask = (id) => {
  return async (dispatch) => {
    dispatch({ type: TASKS_REQUEST });
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axiosInstance.get(`/task/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        dispatch({ type: TASKS_SUCCESS, payload: response?.data });
      } else {
        dispatch({ type: TASKS_FAILURE, payload: response?.data });
      }
    } catch (error) {
      dispatch({ type: TASKS_FAILURE, payload: error?.message });
    }
  };
};

export const AddTask = (data) => {
  return async (dispatch) => {
    dispatch({ type: TASKS_REQUEST });
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axiosInstance.post("/task", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 201) {
        dispatch(GetAllTasks());
        // dispatch({ type: TASKS_SUCCESS, payload: response?.data });
      } else {
        dispatch({ type: TASKS_FAILURE, payload: response?.data });
      }
    } catch (error) {
      dispatch({ type: TASKS_FAILURE, payload: error?.message });
    }
  };
};

export const UpdateTask = (id, data) => {
  return async (dispatch) => {
    dispatch({ type: TASKS_REQUEST });
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axiosInstance.put(`/task/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        dispatch(GetAllTasks());
        // dispatch({ type: TASKS_SUCCESS, payload: response?.data });
      } else {
        dispatch({ type: TASKS_FAILURE, payload: response?.data });
      }
    } catch (error) {
      dispatch({ type: TASKS_FAILURE, payload: error?.message });
    }
  };
};

export const DeleteTask = (id) => {
  return async (dispatch) => {
    dispatch({ type: TASKS_REQUEST });
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axiosInstance.delete(`/task/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        dispatch(GetAllTasks());
        // dispatch({ type: TASKS_SUCCESS, payload: response?.data });
      } else {
        dispatch({ type: TASKS_FAILURE, payload: response?.data });
      }
    } catch (error) {
      dispatch({ type: TASKS_FAILURE, payload: error?.message });
    }
  };
};
