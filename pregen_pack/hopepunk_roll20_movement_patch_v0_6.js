/* Hope//Punk Movement Patch v0.6
Patch existing imported pregens with movement_speed.
Command: !hopepunk-pregens-movement-patch
*/
var HopePunkMovementPatchV06 = HopePunkMovementPatchV06 || (function () {
    'use strict';
    var DATA = [{"name":"Marcus Vale","background":"Bounty Hunter","movement_speed":25},{"name":"Lena Cross","background":"Cat Burglar","movement_speed":25},{"name":"Adrian Holt","background":"Corporate Security","movement_speed":15},{"name":"Nika Voss","background":"Cyber-Junkie","movement_speed":20},{"name":"Salim Reyes","background":"Desert Courier","movement_speed":25},{"name":"Dana Kaur","background":"Ex-Military","movement_speed":20},{"name":"Milo Rask","background":"Gambler on the Run","movement_speed":20},{"name":"Rosa Tan","background":"Grease Monkey","movement_speed":20},{"name":"Jax Morrow","background":"Gutter Rat Orphan","movement_speed":20},{"name":"Ilya Novak","background":"Mesh Hacker","movement_speed":20},{"name":"Talia Cruz","background":"Pilot","movement_speed":25},{"name":"Emi Laurent","background":"Piss-Poor Artist","movement_speed":20},{"name":"Jonah Mirek","background":"Religious Fanatic","movement_speed":20},{"name":"Dr. Mira Sayegh","background":"Rogue Surgeon","movement_speed":20},{"name":"Kenji Park","background":"Samurai Otaku","movement_speed":20},{"name":"Petra Vance","background":"Scavenger","movement_speed":20},{"name":"Noor Bellamy","background":"Student Dropout","movement_speed":20},{"name":"Elise Ward","background":"Test Subject","movement_speed":20},{"name":"Tomasz Iversen","background":"Underground Fighter","movement_speed":20},{"name":"Cass Vega","background":"Washed Up Rocker","movement_speed":20}];
    var send = function (msg) { sendChat('Hope//Punk Movement Patch', '/w gm ' + msg); };
    var esc = function (s) { s = (s === undefined || s === null) ? '' : String(s); return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); };
    var setAttr = function (character, name, value) {
        var existing = findObjs({ _type: 'attribute', characterid: character.id, name: name });
        if (existing && existing.length) { existing[0].set('current', value); return existing[0]; }
        return createObj('attribute', { characterid: character.id, name: name, current: value });
    };
    var run = function () {
        var updated = 0, missing = [];
        DATA.forEach(function (p) {
            var found = findObjs({ _type: 'character', name: p.name });
            if (found && found.length) { setAttr(found[0], 'movement_speed', p.movement_speed); updated++; }
            else { missing.push(p.name); }
        });
        send('Movement patch finished. Updated ' + updated + ' character(s).' + (missing.length ? '<br>Missing: ' + missing.map(esc).join(', ') : ''));
    };
    on('chat:message', function (msg) { if (msg.type === 'api' && msg.content.indexOf('!hopepunk-pregens-movement-patch') === 0) { run(); } });
    on('ready', function () { send('Hope//Punk Movement Patch v0.6 loaded. Run <code>!hopepunk-pregens-movement-patch</code>.'); });
    return { version: '0.6' };
}());
