const keys = ["title", "creator", "url", "screenshot", "description"];
export default work => keys.reduce((result, key) => result && work[key], true);
