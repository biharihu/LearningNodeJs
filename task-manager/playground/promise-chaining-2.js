require("../src/db/mongoose");

const Task = require("../src/models/task");

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });

  return count;
};

deleteTaskAndCount("6030b18a877a03101f7a89fa")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
