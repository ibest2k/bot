module.exports = {
    app: {
        token: 'MTA0MjQ4OTIyMTU1NTk1MzgwNQ.G27dzL.cgBBl-mtNKmWMxK1oqTgbHUpmr2758DVm3Q0Qg',
        playing: 'music/play',
        global: true,
        guild: 'XXX'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
