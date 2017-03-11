(function () {
    "use strict";
    
//    var synth = new Tone.Synth().toMaster();
    
    $('.key').click(function () {
        var note = $(this).data('note');
        console.log(note);
        synth.triggerAttackRelease(note, '8n');
    });


})();