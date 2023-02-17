export function createCanvas(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    return ctx;
}

export function drawBlock(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string): void {
    ctx.fillStyle = color;
    ctx.fillRect(x * size, y * size, size, size);
}

export function isColliding(a: { x: number, y: number }, b: { x: number, y: number }): boolean {
    return a.x === b.x && a.y === b.y;
}
