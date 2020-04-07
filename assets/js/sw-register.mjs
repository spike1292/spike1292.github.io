import { Workbox } from "workbox-window";

// Check that service workers are registered
if ("serviceWorker" in navigator) {
    const wb = new Workbox("/service-worker.js");

    wb.addEventListener("installed", (event) => {
        if (event.isUpdate) {
            if (confirm(`New content is available!. Click OK to refresh`)) {
                window.location.reload();
            }
        }
    });

    wb.addEventListener("waiting", (event) => {
        console.log(
            `A new service worker has installed, but it can't activate until all tabs running the current version have fully unloaded.`
        );
    });

    wb.addEventListener("message", (event) => {
        if (event.data.type === "CACHE_UPDATED") {
            const { updatedURL } = event.data.payload;

            console.log(`A newer version of ${updatedURL} is available!`);
        }
    });

    wb.register();
}
