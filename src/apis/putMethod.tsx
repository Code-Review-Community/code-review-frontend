const putMethod = async (url: string, body: string) => {
  try {
    const result = await fetch(`${process.env.REACT_APP_API}${url}`, {
      method: 'PUT',
      credentials: 'include',
      body,
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};

export default putMethod;
