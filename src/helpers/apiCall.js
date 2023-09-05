export const apiCall =  ({
  url,
  params,
  method, 
  body, 
  headers}) => {
  return  fetch(url, {
    params,
    method,
    body,
    headers,
  });
};
