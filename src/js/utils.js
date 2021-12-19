/* eslint-disable no-sequences */
export function calcTileType(index, boardSize) {
  // TODO: write logic here
  switch (index, boardSize) {
    case index === 0 && boardSize:
      return 'top-left';
    case index === 7 && boardSize:
      return 'top-right';
    case index === 56 && boardSize:
      return 'bottom-left';
    case index === 63 && boardSize:
      return 'bottom-right';
    case index >= 1 && index <= 6 && boardSize:
      return 'top';
    case index >= 57 && index <= 62 && boardSize:
      return 'bottom';
    case index % 8 === 0 && boardSize:
      return 'left';
    case index % 8 === 7 && boardSize:
      return 'right';
    default:
      return 'center';
  }
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
