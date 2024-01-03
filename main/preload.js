const { ipcRenderer } = require("electron");
const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  message: {
    send: (payload) => ipcRenderer.send("message", payload),
    on: (handler) => ipcRenderer.on("message", handler),
    off: (handler) => ipcRenderer.off("message", handler),
  },
  getDummyClass: (userID) => new DummyClass(userID),
});

class DummyClass {
  constructor(userID) {
    this.userID = userID;
  }
  getUserID() {
    return this.userID;
    //load preferences from file
  }
}
