function isBTTV(url) {
    const { hostname, pathname } = new URL(url);

    const isDomain = hostname.includes('betterttv.com')
    const isEmote = pathname.length == 32 

    return isDomain && isEmote
}

function isFFZ(url) {
    const { hostname, pathname } = new URL(url);

    const isDomain = hostname.includes('frankerfacez.com')
    const isEmote = pathname.includes('emoticon') && pathname.includes('-')

    return isDomain && isEmote
}

function getBTTVId(url) {
    const id = url.split('emotes/')[1]

    return id
}


function getFFZId(url) {
    const id = url.split('emoticon/')[1].split('-')[0]

    return id
}
module.exports.getEmote = function(url) {
    var id;
    var source;

    try {
        new URL(url);
    } catch (_) {
        return false;  
    }

    if (isBTTV(url)){
        id = getBTTVId(url)
        source = 'bttv'
    }else if(isFFZ(url)){
        id = getFFZId(url)
        source = 'ffz'
    }else{
        return false
    }

    return {
        id: id,
        source: source,
    };
}