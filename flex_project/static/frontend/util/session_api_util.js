export const login = user => (
  $.ajax({
    url: 'api/session',
    method: 'POST',
    data: user
  })
);
