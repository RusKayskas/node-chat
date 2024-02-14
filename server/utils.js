import moment from 'moment';
export const botMessage = 'Welcome to Vue ChatApp';
export const users = [];

//join Chat
export function userJoin (user) {
  users.push(user);
  return user;
};

export function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format('h:mm a')
  }
}


export function  getRoomUsers(room) {
  return users.filter(user => user.room === room);
};

export function userLeave(id) {
  const index = users.findIndex(user => user.id === id);
  if(index !== -1) {
    return users.splice(index, 1)[0]
  }
}