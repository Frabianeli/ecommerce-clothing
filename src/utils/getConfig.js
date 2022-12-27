export const getConfig = () => ({
    headers: {
      Authorization: `JWT ${localStorage.getItem('token')}`
    }
  })