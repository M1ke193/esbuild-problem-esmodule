export async function normalFunction() {
    console.log("this is normal function not cause any problem")
}

export async function resolveMimeType() {
    const { fileTypeFromBuffer } = await import('package-es-module');
    fileTypeFromBuffer()
}