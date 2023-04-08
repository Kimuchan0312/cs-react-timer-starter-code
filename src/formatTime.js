export const formatTime = (time) => {
  const getSeconds = time % 60; 
  const minutes = Math.floor(time/60);
  const getMinutes = minutes % 60;
  const getHours = Math.floor(minutes / 60);

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
