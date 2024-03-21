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

Size.prototype.resize = function (newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;

    return this;
}

export function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

Position.prototype.move = function (newX, newY) {
    this.x = newX;
    this.y = newY;

    return this;
}

export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    resize(Size) {        
        Size.height < 1 ? this.size.height = 1 : this.size.height = Size.height;

        Size.width < 1 ? this.size.width = 1 : this.size.width = Size.width;

        if ((this.position.x + Size.width) > this.screenSize.width) {
            this.size.width = this.screenSize.width - this.position.x;
        }

        if ((this.position.y + Size.height) > this.screenSize.height) {
            this.size.height = this.screenSize.height - this.position.y;
        }
    }

    move(Position) {
        Position.x < 0 ? this.position.x = 0 : this.position.x = Position.x;
        Position.y < 0 ? this.position.y = 0 : this.position.y = Position.y;

        if ((this.size.width + Position.x) > this.screenSize.width) {
            this.position.x = this.screenSize.width - this.size.width;
        }

        if ((this.size.height + Position.y) > this.screenSize.height) {
            this.position.y = this.screenSize.height - this.size.height;
        }
    }
}

export function changeWindow(ProgramWindow) {
    ProgramWindow.size = new Size(400, 300);
    ProgramWindow.position = new Position(100, 150);

    return ProgramWindow;
}