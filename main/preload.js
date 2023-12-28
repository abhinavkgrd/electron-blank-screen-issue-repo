const { ipcRenderer } = require("electron");

const windowObject = window;

windowObject["electron"] = {
  message: {
    send: (payload) => ipcRenderer.send("message", payload),
    on: (handler) => ipcRenderer.on("message", handler),
    off: (handler) => ipcRenderer.off("message", handler),
  },
};
