import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  AddTask,
  DeleteTask,
  GetAllTasks,
  UpdateTask,
} from "../../Redux/task/task.action";
import Loading from "../../Components/Loader/Loading";

const Dashboard = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const { AllTasks, isTasksLoading, isTasksError } = useSelector(
    (state) => state.Task
  );

  console.log(AllTasks);

  useEffect(() => {
    dispatch(GetAllTasks());
  }, [dispatch]);

  const markComplete = (id, e) => {
    dispatch(
      UpdateTask(id, {
        status: e.target.checked ? "completed" : "pending",
      })
    );
  };

  const handleDelete = (id) => {
    dispatch(DeleteTask(id));
  };

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(AddTask({ task }));
    setTask("");
  };

  if (isTasksLoading) return <Loading />;

  return (
    <Box width={"65%"} mx={"auto"} mt={8}>
      <Typography variant="h4" mb={4}>
        Task List
      </Typography>
      <Box
        component="form"
        onSubmit={handleSave}
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          mb: "2rem",
          padding: "10px",
        }}
      >
        <TextField
          fullWidth
          type="text"
          placeholder="Enter task name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#1e3a8a" }}>
              <TableCell sx={{ color: "white", width: "50%" }}>Task</TableCell>
              <TableCell
                sx={{ color: "white", width: "25%", textAlign: "center" }}
              >
                Status
              </TableCell>
              <TableCell
                sx={{ color: "white", width: "25%", textAlign: "center" }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {AllTasks?.map((task) => (
              <TableRow key={task?._id}>
                <TableCell
                  sx={{
                    width: "50%",
                    textDecoration:
                      task?.status === "completed" ? "line-through" : "none",
                  }}
                >
                  {task?.task}
                </TableCell>
                <TableCell sx={{ width: "25%", textAlign: "center" }}>
                  {task?.status === "completed" ? "Completed" : "Pending"}
                </TableCell>
                <TableCell sx={{ width: "25%", textAlign: "center" }}>
                  <Switch
                    defaultChecked={task?.status === "completed"}
                    color="success"
                    onChange={(e) => markComplete(task?._id, e)}
                  />
                  <IconButton color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(task?._id)}
                  >
                    <MdDelete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Dashboard;
