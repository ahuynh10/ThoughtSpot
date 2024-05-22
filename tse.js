// Add imports as needed
// import {
//     init, 
//     Action,
//     AuthStatus,
//     AuthType,
//     EmbedEvent,
//     LiveboardEmbed,
//     RuntimeFilterOp,
//     SearchEmbed,
// }   from '@thoughtspot/visual-embed-sdk';

// const tsURL = "https://embed-l-do-not-delete.thoughtspotdev.cloud"; // Set to the URL for your system

// /**
//  * Runs the embed steps. This function is called automatically when the window is loaded.
//  * To use, simply uncomment the function you want to include. Note: only one liveboard can be called at a time since all are displayed in the #embed DOM object
//  */

// const embed = () => {
//     tsInit();
//     doEmbed();
// };

// /**
//  * Initializes the connection to ThoughtSpot. Default is to use no authentication
//  */

// const tsInit = () => {
//     init({
//         thoughtSpotHost: 'https://try-everywhere.thoughtspot.cloud',
//         authType: AuthType.None,
//     });
// };

// /**
//  * Embed function
//  */

// const doEmbed = () => {
//     const liveboardEmbed = new LiveboardEmbed("#ts-embed", {
//         frameParams: {
//             width: '100%',
//             height: '100%',
//         },
//         liveboardId: "543619d6-0015-4667-b257-eff547d13a12",
//     });
//     liveboardEmbed.render();
// };

// window.onload = embed;


import {
    LiveboardEmbed,
    AuthType,
    init,
} from '@thoughtspot/visual-embed-sdk';

init({
    thoughtSpotHost: 'https://try-everywhere.thoughtspot.cloud',
    authType: AuthType.None,
});

const lb = new LiveboardEmbed('#ts-embed', {
    frameParams: {
        width: '100%',
        height: '100%',
    },
    liveboardId: '543619d6-0015-4667-b257-eff547d13a12',
});

// Do not forget to call render.
lb.render();

window.onload = embed;