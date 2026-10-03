// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function(newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
}

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function(newX, newY) {
  this.x = newX;
  this.y = newY;
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

    resize(newSize) {
    const placesDispoDroite = this.screenSize.width - this.position.x;
    const placesDispoBas = this.screenSize.height - this.position.y;

    const width = Math.max(1, Math.min(newSize.width, placesDispoDroite));
    const height = Math.max(1, Math.min(newSize.height, placesDispoBas));

    this.size.resize(width, height);
  }

  move(newPosition) {
    const xDisponible = this.screenSize.width - this.size.width;
    const yDisponible = this.screenSize.height - this.size.height;

    const x = Math.max(0, Math.min(xDisponible, newPosition.x));
    const y = Math.max(0, Math.min(yDisponible, newPosition.y));

    this.position.move(x, y);
  }
}

export function changeWindow(programWindow) {
  const newSize = new Size(400, 300);
  programWindow.resize(newSize);

  const newPosition = new Position(100, 150);
  programWindow.move(newPosition);

  return programWindow;
}