//This is for the comment box
function chBackcolor(color) {
   document.getElementById("lightbox_area").style.backgroundColor = color;
   document.getElementById("colortextarea").value = color;
}

function open(){
  $('#lightbox').fadeTo(1000, 1);
  $("#wrapper").css({'text-shadow': '0px 0px 4px #000'});
  $('#wrapper').fadeTo("slow",0.3,function(){});
};

function close(){
  $('#lightbox').hide();
  $("#wrapper").css({'text-shadow': '0px 0px 0px #000'});
  $('#wrapper').fadeTo("slow",1,function(){});
};
//This is for the censoring of the box
function censore(text, badWords) {
  var regex = new RegExp(badWords.join("|"));
    console.log(regex);
    return text.replace(regex, function (match) {
        //replace each letter with a star
        var stars = '';
        for (var i = 0; i < match.length; i++) {
            stars += '*';
        }
        console.log(stars);
        return stars;
    });
}
//When you click the Stick! button to actually post what you wrote
function closebutton(){
  $('#lightbox').hide();
  $("#wrapper").css({'text-shadow': '0px 0px 0px #000'});
  $('#wrapper').fadeTo("slow",1,function(){});
  var x = $('textarea').val();//document.getElementById("textarea").value;
  if (x == "") {
    event.preventDefault();
  } else {
    var badWords =["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx"];
    var censoredWords = censore(x, badWords);
    console.log(censoredWords);
    x = censoredWords;
    document.getElementById('textarea').value = x;
  }
}


/* Code that isn't needed but might be helpful later on:
function byte_text(text1){
  rome = "#" + text1.split(" ").join("");
  excludeChars = ['!', '@','#', '$'];
  for (var i in excludeChars) {
    char = excludeChars[i];
    rome = rome.split(char).join("");
  }
  var bodyWidth = document.body.clientWidth;
  var bodyHeight = document.body.clientHeight;
  var randPosX = Math.random()*bodyWidth;
  var randPosY = Math.random()*bodyHeight;
  console.log(rome);
  console.log(text1);
  $(rome).css('left', randPosX);
  $(rome).css('top', randPosY);
}
Python Code for it:
"""byte_ids = []
for byt in byte_s:
    result = ''.join(byt.byte.split())
    for char in ['!','@','#','$']:
        result = result.replace(char, '')
    byte_ids.append(result)
    id = "{{byte_ids[byte.index(byt)]}}""" Remember to change the var
*/

//This is for the enlarging and delarging of the bytes
var byte = true;
function onClick(e) {
  console.log(e.currentTarget.id);
  if (e.currentTarget.id == "#gplus") {
    javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    return false;
  } else{
  console.log(e);
  var clickedElement = $(e.currentTarget);
  var bodyWidth = (document.body.clientWidth)-300;
  var bodyHeight = (document.body.clientHeight)+250;
  var randPosX = Math.random()*bodyWidth;
  var randPosY = Math.random()*bodyHeight;
  $(clickedElement).css('left', randPosX);
  $(clickedElement).css('top', randPosY);
  if (byte){
    byte = false;
    clickedElement.animate({
      width: 300,
      height: 300,
      "font-size": "30px",
    }, "slow");
  } else {
    byte = true;
    clickedElement.animate({
    width:160,
    height:192,
    "font-size":"16px",
  }, "slow");
}}}

//The call for all the other functions
$(document).ready(function (){
  $('#open').on("click",open);
  $('.close').on("click",close);
  $('.button').on("click",closebutton);
  $('.text').click(onClick);
  $('.text').click();
})
