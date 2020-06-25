const state = {
  tasks: {
    ID1: {
      name: "Go to shop",
      completed: false,
      dueDate: "12/03/2108",
      dueTime: "08:00"
    },
    ID2: {
      name: "Buy a bitch",
      completed: false,
      dueDate: "12/03/2108",
      dueTime: "08:00"
    },
    ID3: {
      name: "Go to nigeria",
      completed: false,
      dueDate: "12/03/2108",
      dueTime: "08:00"
    }
  }
};
const mutations = {
  // Synchronus
};
const actions = {
  // Asynchronus
  updateTask() {
    console.log("Updated task");
  }
};
const getters = {
  // Methods to actually get data from the state, ready to be used
  tasks: state => {
    return state.tasks;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
