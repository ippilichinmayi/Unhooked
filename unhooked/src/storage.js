export function getVideoId() {
    return new URLSearchParams(window.location.search).get("v");
}

export async function loadVideoData() {
    const videoId = getVideoId();

    const result = await chrome.storage.local.get(videoId);

    return result[videoId] || {
        notes: "",
        timestamps: []
    };
}

export async function saveVideoData(data) {
    const videoId = getVideoId();

    await chrome.storage.local.set({
        [videoId]: data
    });
}