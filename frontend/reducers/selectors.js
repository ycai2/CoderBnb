export const selectSpot = (spots, id) => spots[id] || {};

export const asArray = (obj) => Object.keys(obj).map(key => obj[key]);
