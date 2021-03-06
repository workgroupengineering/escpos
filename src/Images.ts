export interface IRaster {
    GetData(): Uint8Array;
    GetHeight(): number;
    GetWidth(): number;
}

export class EscPosImage implements IRaster {
    private readonly data: Uint8Array;
    private readonly height: number;
    private readonly width: number;

    constructor(pixels: Uint8Array,  width: number, height: number) {
        this.data = pixels;
        this.height = height;
        this.width = width;
    }
    public GetData(): Uint8Array {
        return this.data;
    }
    public GetHeight(): number {
        return this.height;
    }
    public GetWidth(): number {
        return this.width;
    }
}
