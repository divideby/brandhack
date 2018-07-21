export function request(urlSuffix, body = {}, method = "POST") {
  return fetch(`http://localhost:3000${urlSuffix}`, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }).then(response => response.json());
}
