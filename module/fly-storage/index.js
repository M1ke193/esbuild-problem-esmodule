function normalFunction() {
    console.log("this is normal function not cause any problem")
}

async function resolveMimeType() {
    const { fileTypeFromBuffer } = await Promise.resolve().then(() => require('package-es-module'));
    fileTypeFromBuffer()
}

exports.normalFunction = normalFunction;
exports.resolveMimeType = resolveMimeType;

