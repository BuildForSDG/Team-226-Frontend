// eslint-disable-next-line import/prefer-default-export
export function encodeToParams(props) {
  return Object.keys(props).reduce((params, key) => {
    params.append(key, props[key]);
    return params;
  }, new URLSearchParams());
}
