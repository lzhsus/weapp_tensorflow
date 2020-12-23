module.exports=(function (lib, img, cjs, ss, an) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtInst = {}; 
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [
            {name:"layer01_atlas_", frames: [[0,325,280,638],[0,0,625,323]]},
            {name:"layer01_atlas_2", frames: [[490,0,172,526],[0,313,176,639],[475,528,189,441],[178,313,295,302],[0,0,488,311]]},
            {name:"layer01_atlas_3", frames: [[0,0,138,513],[378,0,242,202],[506,791,181,198],[140,0,236,238],[385,204,222,214],[219,440,215,204],[140,240,243,198],[436,615,211,174],[436,420,216,193],[0,732,170,268],[219,646,186,220],[0,515,217,215],[172,868,332,113]]},
            {name:"layer01_atlas_4", frames: [[456,492,135,38],[0,441,102,82],[593,509,80,49],[683,103,52,59],[683,226,21,22],[593,492,17,15],[173,180,18,27],[737,124,11,14],[140,310,132,109],[536,133,145,115],[683,164,39,60],[381,0,153,185],[311,368,27,30],[173,259,16,12],[274,368,35,28],[104,441,33,85],[0,180,171,127],[500,250,120,124],[726,371,19,25],[367,309,127,90],[140,421,122,70],[727,224,19,11],[622,371,102,136],[737,140,11,10],[737,103,13,19],[173,209,14,26],[724,164,24,23],[622,250,122,119],[536,0,133,131],[367,187,131,120],[274,401,107,94],[383,401,71,133],[0,0,191,178],[193,0,186,166],[706,226,19,19],[193,168,172,140],[727,189,20,16],[456,450,36,40],[496,376,97,114],[340,368,16,30],[274,310,88,56],[173,237,18,20],[456,401,32,47],[0,309,138,130],[500,187,31,51],[724,207,16,15],[671,0,69,101]]}
    ];
    
    
    
    lib.updateListCache = function (cacheList) {		
        for(var i = 0; i < cacheList.length; i++) {		
            if(cacheList[i].cacheCanvas)		
                cacheList[i].updateCache();		
        }		
    };		
    
    lib.addElementsToCache = function (textInst, cacheList) {		
        var cur = textInst;		
        while(cur != exportRoot) {		
            if(cacheList.indexOf(cur) != -1)		
                break;		
            cur = cur.parent;		
        }		
        if(cur != exportRoot) {		
            var cur2 = textInst;		
            var index = cacheList.indexOf(cur);		
            while(cur2 != cur) {		
                cacheList.splice(index, 0, cur2);		
                cur2 = cur2.parent;		
                index++;		
            }		
        }		
        else {		
            cur = textInst;		
            while(cur != exportRoot) {		
                cacheList.push(cur);		
                cur = cur.parent;		
            }		
        }		
    };		
    
    lib.gfontAvailable = function(family, totalGoogleCount) {		
        lib.properties.webfonts[family] = true;		
        var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
        for(var f = 0; f < txtInst.length; ++f)		
            lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		
    
        loadedGoogleCount++;		
        if(loadedGoogleCount == totalGoogleCount) {		
            lib.updateListCache(gFontsUpdateCacheList);		
        }		
    };		
    
    lib.tfontAvailable = function(family, totalTypekitCount) {		
        lib.properties.webfonts[family] = true;		
        var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
        for(var f = 0; f < txtInst.length; ++f)		
            lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		
    
        loadedTypekitCount++;		
        if(loadedTypekitCount == totalTypekitCount) {		
            lib.updateListCache(tFontsUpdateCacheList);		
        }		
    };
    // symbols:
    
    
    
    (lib.happy_027_1608268649974_214 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_033_1608268649888_170 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_048_1608268649961_209 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_050_1608268649928_199 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_078_1608268649868_150 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_085_1608268649886_169 = function() {
        this.spriteSheet = ss["layer01_atlas_2"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_155_1608268649894_175 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_186_1608268649875_157 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_214_1608268649870_152 = function() {
        this.spriteSheet = ss["layer01_atlas_3"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_233_1608268649893_174 = function() {
        this.spriteSheet = ss["layer01_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_235_1608268649900_178 = function() {
        this.spriteSheet = ss["layer01_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_236_1608268650009_221 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_262_1608268649984_215 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_272_1608268649909_186 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_273_1608268649994_217 = function() {
        this.spriteSheet = ss["layer01_atlas_3"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_293_1608268649876_158 = function() {
        this.spriteSheet = ss["layer01_atlas_2"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_295_1608268649951_207 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_297_1608268649879_161 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_332_1608268649890_171 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_361_1608268649871_153 = function() {
        this.spriteSheet = ss["layer01_atlas_3"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_369_1608268649956_208 = function() {
        this.spriteSheet = ss["layer01_atlas_3"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_372_1608268649899_177 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_401_1608268649878_160 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_404_1608268649934_200 = function() {
        this.spriteSheet = ss["layer01_atlas_3"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_407_1608268650019_222 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_424_1608268649874_156 = function() {
        this.spriteSheet = ss["layer01_atlas_2"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_447_1608268649925_198 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_483_1608268649883_166 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_492_1608268649922_195 = function() {
        this.spriteSheet = ss["layer01_atlas_3"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_495_1608268649869_151 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_504_1608268649938_201 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_511_1608268649940_202 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_515_1608268649873_155 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_548_1608268649913_189 = function() {
        this.spriteSheet = ss["layer01_atlas_3"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_561_1608268649905_182 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_584_1608268649907_184 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_604_1608268649867_149 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(24);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_619_1608268649903_180 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(25);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_640_1608268650004_220 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(26);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_642_1608268649884_167 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(27);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_655_1608268649882_165 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(28);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_656_1608268649881_163 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(29);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_678_1608268649969_210 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(30);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_693_1608268650027_223 = function() {
        this.spriteSheet = ss["layer01_atlas_3"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_697_1608268649902_179 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(31);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_703_1608268649872_154 = function() {
        this.spriteSheet = ss["layer01_atlas_2"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_709_1608268649911_187 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(32);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_754_1608268649880_162 = function() {
        this.spriteSheet = ss["layer01_atlas_3"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_766_1608268649924_197 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(33);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_782_1608268649950_206 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(34);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_804_1608268649971_212 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(35);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_807_1608268649906_183 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(36);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_810_1608268649973_213 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(37);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_840_1608268649921_194 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(38);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_852_1608268649923_196 = function() {
        this.spriteSheet = ss["layer01_atlas_3"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_860_1608268649970_211 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(39);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_861_1608268649949_205 = function() {
        this.spriteSheet = ss["layer01_atlas_3"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_903_1608268649904_181 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(40);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_908_1608268650001_218 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(41);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_923_1608268649920_193 = function() {
        this.spriteSheet = ss["layer01_atlas_3"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_932_1608268649885_168 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(42);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_948_1608268649892_173 = function() {
        this.spriteSheet = ss["layer01_atlas_2"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_954_1608268649943_203 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(43);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_956_1608268649890_172 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(44);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_958_1608268649919_192 = function() {
        this.spriteSheet = ss["layer01_atlas_3"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_987_1608268649912_188 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(45);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_994_1608268649918_191 = function() {
        this.spriteSheet = ss["layer01_atlas_4"];
        this.gotoAndStop(46);
    }).prototype = p = new cjs.Sprite();
    // helper functions:
    
    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }
    
    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
        }
    
    
    (lib.happy_992_1608268649860_132 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_766_1608268649924_197();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,186,166);
    
    
    (lib.happy_975_1608268649830_40 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_782_1608268649950_206();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,19,19);
    
    
    (lib.happy_970_1608268649843_87 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_840_1608268649921_194();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,97,114);
    
    
    (lib.happy_961_1608268649862_135 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // flash0_ai
        this.instance = new lib.happy_050_1608268649928_199();
        this.instance.parent = this;
        this.instance.setTransform(10,4);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(10,4,52,59);
    
    
    (lib.happy_948_1608268649835_61 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_297_1608268649879_161();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,153,185);
    
    
    (lib.happy_945_1608268649828_35 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_994_1608268649918_191();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,69,101);
    
    
    (lib.happy_897_1608268649828_34 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_852_1608268649923_196();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,170,268);
    
    
    (lib.happy_877_1608268649830_42 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_903_1608268649904_181();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,88,56);
    
    
    (lib.happy_861_1608268649831_44 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_447_1608268649925_198();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,171,127);
    
    
    (lib.happy_851_1608268649833_52 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_407_1608268650019_222();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,33,85);
    
    
    (lib.happy_804_1608268649834_56 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_923_1608268649920_193();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,217,215);
    
    
    (lib.happy_804_1608268649820_14 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层 1
        this.instance = new lib.happy_958_1608268649919_192();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_804_1608268649820_14, new cjs.Rectangle(0,0,332,113), null);
    
    
    (lib.happy_786_1608268649843_88 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_186_1608268649875_157();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,18,27);
    
    
    (lib.happy_978_1608268649856_122 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_085_1608268649886_169();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_978_1608268649856_122, new cjs.Rectangle(0,0,172,526), null);
    
    
    (lib.happy_912_1608268649854_116 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_214_1608268649870_152();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_912_1608268649854_116, new cjs.Rectangle(0,0,138,513), null);
    
    
    (lib.happy_674_1608268649849_105 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_697_1608268649902_179();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_674_1608268649849_105, new cjs.Rectangle(0,0,71,133), null);
    
    
    (lib.happy_620_1608268649852_112 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_235_1608268649900_178();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_620_1608268649852_112, new cjs.Rectangle(0,0,625,323), null);
    
    
    (lib.happy_471_1608268649858_128 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_424_1608268649874_156();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_471_1608268649858_128, new cjs.Rectangle(0,0,189,441), null);
    
    
    (lib.happy_117_1608268649855_120 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_233_1608268649893_174();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_117_1608268649855_120, new cjs.Rectangle(0,0,280,638), null);
    
    
    (lib.happy_096_1608268649854_117 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_293_1608268649876_158();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_096_1608268649854_117, new cjs.Rectangle(0,0,176,639), null);
    
    
    (lib.happy_770_1608268649848_102 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_709_1608268649911_187();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,191,178);
    
    
    (lib.happy_737_1608268649826_29 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_515_1608268649873_155();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,19,11);
    
    
    (lib.happy_699_1608268649829_37 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_954_1608268649943_203();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,138,130);
    
    
    (lib.happy_680_1608268649834_57 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_861_1608268649949_205();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,186,220);
    
    
    (lib.happy_666_1608268649863_138 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_236_1608268650009_221();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,11,14);
    
    
    (lib.happy_665_1608268649846_94 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_804_1608268649971_212();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,172,140);
    
    
    (lib.happy_659_1608268649826_27 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_495_1608268649869_151();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,19,25);
    
    
    (lib.happy_653_1608268649864_141 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_272_1608268649909_186();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,145,115);
    
    
    (lib.happy_649_1608268649830_41 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_987_1608268649912_188();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,16,15);
    
    
    (lib.happy_415_1608268649837_67 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_860_1608268649970_211();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_415_1608268649837_67, new cjs.Rectangle(0,0,16,30), null);
    
    
    (lib.happy_116_1608268649843_86 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_908_1608268650001_218();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_116_1608268649843_86, new cjs.Rectangle(0,0,18,20), null);
    
    
    (lib.happy_595_1608268649826_28 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_948_1608268649892_173();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,488,311);
    
    
    (lib.happy_499_1608268649864_143 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_584_1608268649907_184();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,11,10);
    
    
    (lib.happy_499_1608268649845_92 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_295_1608268649951_207();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,39,60);
    
    
    (lib.happy_492_1608268649825_25 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_361_1608268649871_153();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,181,198);
    
    
    (lib.happy_479_1608268649827_32 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_693_1608268650027_223();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,211,174);
    
    
    (lib.happy_464_1608268649866_147 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层 1
        this.instance = new lib.happy_369_1608268649956_208();
        this.instance.parent = this;
        this.instance.setTransform(-118,-119);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-118,-119,236,238);
    
    
    (lib.happy_457_1608268649834_55 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_619_1608268649903_180();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,14,26);
    
    
    (lib.happy_451_1608268649847_98 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_754_1608268649880_162();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,216,193);
    
    
    (lib.happy_436_1608268649866_148 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层 1
        this.instance = new lib.happy_703_1608268649872_154();
        this.instance.parent = this;
        this.instance.setTransform(-147.5,-151);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-147.5,-151,295,302);
    
    
    (lib.happy_400_1608268649844_89 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_956_1608268649890_172();
        this.instance.parent = this;
        this.instance.setTransform(0,13);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,13,31,51);
    
    
    (lib.happy_379_1608268649822_17 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_656_1608268649881_163();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,131,120);
    
    
    (lib.happy_378_1608268649864_142 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_401_1608268649878_160();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,35,28);
    
    
    (lib.happy_356_1608268649846_97 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_483_1608268649883_166();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,120,124);
    
    
    (lib.happy_343_1608268649833_51 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_548_1608268649913_189();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,243,198);
    
    
    (lib.happy_322_1608268649848_101 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_810_1608268649973_213();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,36,40);
    
    
    (lib.happy_307_1608268649865_146 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_640_1608268650004_220();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,24,23);
    
    
    (lib.happy_282_1608268649829_36 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_807_1608268649906_183();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,20,16);
    
    
    (lib.happy_280_1608268649862_137 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_033_1608268649888_170();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,102,82);
    
    
    (lib.happy_276_1608268649845_91 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_932_1608268649885_168();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,32,47);
    
    
    (lib.happy_268_1608268649831_45 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_642_1608268649884_167();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,122,119);
    
    
    (lib.happy_234_1608268649824_20 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_404_1608268649934_200();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,222,214);
    
    
    (lib.happy_229_1608268649836_62 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_655_1608268649882_165();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,133,131);
    
    
    (lib.happy_223_1608268649863_139 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_372_1608268649899_177();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,16,12);
    
    
    (lib.happy_210_1608268649835_59 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_155_1608268649894_175();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,17,15);
    
    
    (lib.happy_203_1608268649846_95 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_048_1608268649961_209();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,80,49);
    
    
    (lib.happy_195_1608268649833_54 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_078_1608268649868_150();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,21,22);
    
    
    (lib.happy_178_1608268649829_38 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_604_1608268649867_149();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,13,19);
    
    
    (lib.happy_171_1608268649827_30 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_678_1608268649969_210();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,107,94);
    
    
    (lib.happy_141_1608268649825_24 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_511_1608268649940_202();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,122,70);
    
    
    (lib.happy_138_1608268649822_16 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_492_1608268649922_195();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,215,204);
    
    
    (lib.happy_136_1608268649822_15 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_332_1608268649890_171();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,27,30);
    
    
    (lib.happy_119_1608268649836_64 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_561_1608268649905_182();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,102,136);
    
    
    (lib.happy_101_1608268649825_26 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_262_1608268649984_215();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,132,109);
    
    
    (lib.happy_040_1608268649824_21 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_504_1608268649938_201();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,127,90);
    
    
    (lib.happy_955_1608268649823_18 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_479_1608268649827_32("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(105.5,87,1,1,0,0,0,105.5,87);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6},9).to({rotation:0},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,211,174);
    
    
    (lib.happy_874_1608268649835_60 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_2 = function() {
            this.stop()
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));
    
        // 图层_2
        this.instance = new lib.happy_464_1608268649866_147("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(83,79);
    
        this.instance_1 = new lib.happy_436_1608268649866_148("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(92.5,78);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
    
        // 图层_1
        this.instance_2 = new lib.happy_852_1608268649923_196();
        this.instance_2.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(2));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,170,268);
    
    
    (lib.happy_874_1608268649827_31 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_117_1608268649855_120();
        this.instance.parent = this;
        this.instance.setTransform(4,601,1,1,0,0,0,4,601);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.4,y:621},29).to({rotation:0,y:601},30).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,280,638);
    
    
    (lib.happy_814_1608268649830_43 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_492_1608268649825_25("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(90.5,99,1,1,0,0,0,90.5,99);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6},9).to({rotation:0},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,181,198);
    
    
    (lib.happy_965_1608268649853_114 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            this.stop()
        }
        this.frame_1 = function() {
            this.stop()
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));
    
        // 图层_1
        this.instance = new lib.happy_897_1608268649828_34("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(85,134,1,1,0,0,0,85,134);
    
        this.explodeBallon = new lib.happy_874_1608268649835_60();
        this.explodeBallon.parent = this;
        this.explodeBallon.setTransform(85,134,1,1,0,0,0,85,134);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.explodeBallon}]},1).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,170,268);
    
    
    (lib.happy_892_1608268649852_113 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_379_1608268649822_17("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(65.5,60,1,1,0,0,0,65.5,60);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6},9).to({rotation:0},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,131,120);
    
    
    (lib.happy_878_1608268649855_121 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_970_1608268649843_87("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(48.5,57,1,1,0,0,0,48.5,57);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:57.1,rotation:-6,y:57.1},9).to({regY:57,rotation:0,y:57},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,97,114);
    
    
    (lib.happy_856_1608268649849_106 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_595_1608268649826_28("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(244,155.5,1,1,0,0,0,244,155.5);
        this.instance.alpha = 0.398;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},24).to({alpha:0.398},25).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,488,311);
    
    
    (lib.happy_563_1608268649857_126 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_699_1608268649829_37("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(69,65,1,1,0,0,0,69,65);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:69.1,rotation:6,y:65.1},9,cjs.Ease.get(1)).to({regX:69,rotation:0,y:65},10,cjs.Ease.get(1)).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,138,130);
    
    
    (lib.happy_534_1608268649856_124 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_171_1608268649827_30("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(53.5,47,1,1,0,0,0,53.5,47);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6},9).to({regY:47.1,rotation:0,x:53.6,y:47.1},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,107,94);
    
    
    (lib.happy_428_1608268649855_119 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_229_1608268649836_62("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(66.5,65.5,1,1,0,0,0,66.5,65.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6},9).to({rotation:0},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,133,131);
    
    
    (lib.happy_377_1608268649848_104 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_101_1608268649825_26("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(66,54.5,1,1,0,0,0,66,54.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6},9).to({rotation:0},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,132,109);
    
    
    (lib.happy_306_1608268649857_125 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_343_1608268649833_51("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(121.5,99,1,1,0,0,0,121.5,99);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},19).to({alpha:1},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,243,198);
    
    
    (lib.happy_244_1608268649853_115 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_119_1608268649836_64("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(51,68,1,1,0,0,0,51,68);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6},9).to({rotation:0},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,102,136);
    
    
    (lib.happy_210_1608268649859_131 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_877_1608268649830_42("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(44,28,1,1,0,0,0,44,28);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6},9).to({rotation:0},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,88,56);
    
    
    (lib.happy_185_1608268649859_130 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_322_1608268649848_101("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(18,20,1,1,0,0,0,18,20);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({x:15,y:17},9).to({x:18,y:20},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,36,40);
    
    
    (lib.happy_160_1608268649851_111 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_280_1608268649862_137("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(51,41,1,1,0,0,0,51,41);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6},9).to({rotation:0},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,102,82);
    
    
    (lib.happy_120_1608268649855_118 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_040_1608268649824_21("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(63.5,45,1,1,0,0,0,63.5,45);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6},9).to({rotation:0},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,127,90);
    
    
    (lib.happy_102_1608268649857_127 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_945_1608268649828_35("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(34.5,50.5,1,1,0,0,0,34.5,50.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6},9).to({rotation:0},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,69,101);
    
    
    (lib.happy_763_1608268649862_136 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_2
        this.instance = new lib.happy_027_1608268649974_214();
        this.instance.parent = this;
        this.instance.setTransform(48,100);
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},3).wait(33));
    
        // abcd_1_19_14329_复制_2
        this.instance_1 = new lib.happy_400_1608268649844_89("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(69.1,103.7,0.999,0.999,13.8,0,0,19.4,32.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({startPosition:0},0).to({regY:32.4,scaleY:0.15,x:68,y:106.8},4).to({_off:true},1).wait(3).to({_off:false},0).to({regY:32.1,scaleY:1,x:69.1,y:103.7},4).wait(29));
    
        // abcd_1_19_14329_复制_2
        this.instance_2 = new lib.happy_400_1608268649844_89("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(172.1,128.7,0.999,0.999,13.8,0,0,19.4,32.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({startPosition:0},0).to({scaleY:0.14,x:171,y:131.7},4).to({_off:true},1).wait(3).to({_off:false},0).to({scaleY:1,x:172.1,y:128.7},4).wait(29));
    
        // 图层_1
        this.instance_3 = new lib.happy_273_1608268649994_217();
        this.instance_3.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,242,202);
    
    
    (lib.happy_998_1608268649837_68 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_203_1608268649846_95("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(40,24.5,1,1,0,0,0,40,24.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({y:14.5},24).to({y:24.5},25).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,80,49);
    
    
    (lib.happy_916_1608268649842_84 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_195_1608268649833_54("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(10.5,11,1,1,0,0,0,10.5,11);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-11.2,x:10.6,y:1.1},24).to({rotation:0,x:10.5,y:11},25).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,21,22);
    
    
    (lib.happy_893_1608268649840_77 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_457_1608268649834_55("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(7,13,1,1,0,0,0,7,13);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:9.5,y:27},17).to({rotation:0,y:13},19).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,14,26);
    
    
    (lib.happy_872_1608268649840_78 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_178_1608268649829_38("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(6.5,9.5,1,1,0,0,0,6.5,9.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({y:16.5},19).to({y:9.5},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,13,19);
    
    
    (lib.happy_857_1608268649839_74 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_499_1608268649845_92("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(19.5,30,1,1,0,0,0,19.5,30);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.4,y:45},24).to({rotation:0,y:30},25).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,39,60);
    
    
    (lib.happy_807_1608268649842_83 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_737_1608268649826_29("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(9.5,5.5,1,1,0,0,0,9.5,5.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({y:10.5},15).to({y:5.5},18).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,19,11);
    
    
    (lib.happy_762_1608268649841_79 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_307_1608268649865_146("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(12,11.5,1,1,0,0,0,12,11.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:12.1,regY:11.6,rotation:13,x:12.1,y:16.6},20).to({regX:12,regY:11.5,rotation:0,x:12,y:11.5},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,24,23);
    
    
    (lib.happy_755_1608268649837_66 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_223_1608268649863_139("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(8,6,1,1,0,0,0,8,6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-14,x:12.1,y:-7},24).to({rotation:0,x:8,y:6},25).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,16,12);
    
    
    (lib.happy_689_1608268649840_75 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_276_1608268649845_91("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(16,23.5,1,1,0,0,0,16,23.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:23.6,rotation:10.9,y:30.6},14).to({regY:23.5,rotation:0,y:23.5},15).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,32,47);
    
    
    (lib.happy_613_1608268649839_73 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_378_1608268649864_142("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(17.5,14,1,1,0,0,0,17.5,14);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:12.9,y:4.1},19).to({rotation:0,y:14},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,35,28);
    
    
    (lib.happy_599_1608268649842_85 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_659_1608268649826_27("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(9.5,12.5,1,1,0,0,0,9.5,12.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-8.5,x:9.6,y:16.5},16).to({rotation:0,x:9.5,y:12.5},16).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,19,25);
    
    
    (lib.happy_504_1608268649838_71 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_975_1608268649830_40("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(9.5,9.5,1,1,0,0,0,9.5,9.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-1.5},17).to({y:9.5},17).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,19,19);
    
    
    (lib.happy_500_1608268649838_69 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_666_1608268649863_138("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(5.5,7,1,1,0,0,0,5.5,7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-0.5,y:18},19).to({x:5.5,y:7},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,11,14);
    
    
    (lib.happy_431_1608268649841_80 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_786_1608268649843_88("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(9,10.5,1,1,0,0,0,9,13.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:11.7,y:17.6},24).to({rotation:0,y:10.5},25).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,-3,18,27);
    
    
    (lib.happy_430_1608268649840_76 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_649_1608268649830_41("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(8,7.5,1,1,0,0,0,8,7.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15.7,y:2.5},19).to({rotation:0,y:7.5},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,16,15);
    
    
    (lib.happy_397_1608268649841_81 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_210_1608268649835_59("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(8.5,7.5,1,1,0,0,0,8.5,7.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:17.7,y:17.5},19).to({rotation:0,y:7.5},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,17,15);
    
    
    (lib.happy_382_1608268649836_65 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_282_1608268649829_36("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(10,8,1,1,0,0,0,10,8);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:8.1,rotation:8,x:12,y:20.1},19).to({regY:8,rotation:0,x:10,y:8},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,20,16);
    
    
    (lib.happy_334_1608268649838_70 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_136_1608268649822_15("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(13.5,15,1,1,0,0,0,13.5,15);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-12.9,x:17.5,y:19.1},21).to({rotation:0,x:13.5,y:15},21).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,27,30);
    
    
    (lib.happy_145_1608268649841_82 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_499_1608268649864_143("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(5.5,5,1,1,0,0,0,5.5,5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({x:6.5,y:14},19).to({x:5.5,y:5},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,11,10);
    
    
    (lib.happy_039_1608268649839_72 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_851_1608268649833_52("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(16.5,42.5,1,1,0,0,0,16.5,42.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:8,x:16.6,y:54.6},19).to({rotation:0,x:16.5,y:42.5},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,33,85);
    
    
    (lib.happy_595_1608268649860_133 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_948_1608268649835_61("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(76.5,92.5,1,1,0,0,0,76.5,92.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6},9).to({rotation:0},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,153,185);
    
    
    (lib.happy_541_1608268649835_58 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_978_1608268649856_122();
        this.instance.parent = this;
        this.instance.setTransform(91,518,1,1,0,0,0,91,518);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2,x:91.1,y:502.1},29).to({rotation:0,x:91,y:518},30).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,172,526);
    
    
    (lib.happy_495_1608268649832_47 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_680_1608268649834_57("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(93,110,1,1,0,0,0,93,110);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6},9).to({rotation:0},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,186,220);
    
    
    (lib.happy_484_1608268649847_100 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_471_1608268649858_128();
        this.instance.parent = this;
        this.instance.setTransform(2,442,1,1,0,0,0,2,442);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.7,y:462.1},24).to({rotation:0,y:442},25).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,189,441);
    
    
    (lib.happy_468_1608268649832_49 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_138_1608268649822_16("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(107.5,102,1,1,0,0,0,107.5,102);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6,x:107.6,y:102.1},9).to({rotation:0,x:107.5,y:102},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,215,204);
    
    
    (lib.happy_451_1608268649846_96 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_992_1608268649860_132("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(93,83,1,1,0,0,0,93,83);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6},9).to({rotation:0},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,186,166);
    
    
    (lib.happy_407_1608268649863_140 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_234_1608268649824_20("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(111,107,1,1,0,0,0,111,107);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6},9,cjs.Ease.get(1)).to({rotation:0},10,cjs.Ease.get(1)).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,222,214);
    
    
    (lib.happy_392_1608268649829_39 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_804_1608268649834_56("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(108.5,107.5,1,1,0,0,0,108.5,107.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6},9).to({rotation:0},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,217,215);
    
    
    (lib.happy_249_1608268649824_22 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_096_1608268649854_117();
        this.instance.parent = this;
        this.instance.setTransform(29,540,1,1,0,0,0,29,540);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:28.9,rotation:-2.7},29).to({regX:29,rotation:0},30).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,176,639);
    
    
    (lib.happy_242_1608268649832_50 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_912_1608268649854_116();
        this.instance.parent = this;
        this.instance.setTransform(90,482,1,1,0,0,0,90,472);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.7,x:90.1,y:472.1},24).to({rotation:0,x:90,y:482},25).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,10,138,513);
    
    
    (lib.happy_217_1608268649833_53 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_770_1608268649848_102("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(95.5,89,1,1,0,0,0,95.5,89);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6},9).to({rotation:0},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,191,178);
    
    
    (lib.happy_181_1608268649836_63 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_116_1608268649843_86("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(10,10,1,1,0,0,0,9,10);
    
        this.instance_1 = new lib.happy_415_1608268649837_67("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(8,23,1,1,0,0,0,8,15);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,19,38);
    
    
    (lib.happy_172_1608268649845_93 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_665_1608268649846_94("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(86,70,1,1,0,0,0,86,70);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6},9).to({rotation:0},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,172,140);
    
    
    (lib.happy_160_1608268649824_23 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("EgbpAibMgXSgoJMABeglwMBh/ADPMACaAg9MgVQApjI86JOg");
        mask.setTransform(326,120.1);
    
        // 绳子
        this.instance = new lib.happy_674_1608268649849_105();
        this.instance.parent = this;
        this.instance.setTransform(152.1,358.4,1.001,1.001,2.5,0,0,35.6,66.5);
    
        var maskedShapeInstanceList = [this.instance];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:66.7,rotation:5.5,x:149.7,y:352.5},17).to({regY:66.5,rotation:2.5,x:152.1,y:358.4},17).wait(1));
    
        // 图层_41
        this.balloon = new lib.happy_965_1608268649853_114();
        this.balloon.parent = this;
        this.balloon.setTransform(197.4,270.4,1.001,1.001,-4,0,0,135.1,269.9);
    
        var maskedShapeInstanceList = [this.balloon];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.balloon).to({rotation:0.5,x:199.7,y:267},17).to({rotation:-4,x:197.4,y:270.4},17).wait(1));
    
        // abcd_1_18_87962
        this.instance_1 = new lib.happy_763_1608268649862_136("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(331,335.1,1,1,0,0,0,104.1,196.3);
    
        var maskedShapeInstanceList = [this.instance_1];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:104.2,rotation:-5.5,x:331.1,startPosition:17},17).to({regX:104.1,rotation:0,x:331,startPosition:34},17).wait(1));
    
        // abcd_1_30_67746
        this.instance_2 = new lib.happy_653_1608268649864_141("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(324.6,402.9,0.795,0.795,0,1.8,0,72.7,115);
    
        var maskedShapeInstanceList = [this.instance_2];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:115.1,skewX:0.5,skewY:-1.3,x:324.5,y:403},17).to({regY:115,skewX:1.8,skewY:0,x:324.6,y:402.9},17).wait(1));
    
        // abcd_1_31_37250
        this.instance_3 = new lib.happy_268_1608268649831_45("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(367.1,378.8,0.795,0.795,0,1.8,0,60.8,59.4);
    
        var maskedShapeInstanceList = [this.instance_3];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},17).to({startPosition:0},17).wait(1));
    
        // abcd_1_33_3836
        this.instance_4 = new lib.happy_141_1608268649825_24("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(369,405.1,0.795,0.795,-5.7,0,0,29.4,53.3);
    
        var maskedShapeInstanceList = [this.instance_4];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-0.7},17).to({rotation:-5.7},17).wait(1));
    
        // abcd_1_34_66359
        this.instance_5 = new lib.happy_861_1608268649831_44("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(282.8,340.2,0.795,0.795,-9.2,0,0,101.4,100.3);
    
        var maskedShapeInstanceList = [this.instance_5];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:101.5,rotation:-6,x:281.1,y:341.3},17).to({regX:101.4,rotation:-9.2,x:282.8,y:340.2},17).wait(1));
    
        // abcd_1_35_3677
        this.instance_6 = new lib.happy_961_1608268649862_135("synched",0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(209.4,293.5,0.879,0.879,-13.5,0,0,52.5,56.2);
    
        var maskedShapeInstanceList = [this.instance_6];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:56.3,rotation:-10.2,x:210.3,y:290.6},17).to({regY:56.2,rotation:-13.5,x:209.4,y:293.5},17).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(43.8,-1.5,425.1,399.9);
    
    
    (lib.happy_131_1608268649847_99 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_356_1608268649846_97("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(60,62,1,1,0,0,0,60,62);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({x:57,y:59},9).to({x:60,y:62},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,120,124);
    
    
    (lib.happy_114_1608268649832_48 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_451_1608268649847_98("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(108,96.5,1,1,0,0,0,108,96.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6},9).to({rotation:0},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,216,193);
    
    
    (lib.happy_942_1608268649845_90 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_181_1608268649836_63("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(9.5,19,1,1,0,0,0,9.5,19);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-14.2,y:30},24).to({rotation:0,y:19},25).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,19,38);
    
    
    (lib.happy_724_1608268649828_33 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // abcd_1_2_22703
        this.instance = new lib.happy_039_1608268649839_72();
        this.instance.parent = this;
        this.instance.setTransform(530.5,42.5,1,1,0,0,0,16.5,42.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
        // abcd_1_3_27679
        this.instance_1 = new lib.happy_613_1608268649839_73();
        this.instance_1.parent = this;
        this.instance_1.setTransform(551.5,117,1,1,0,0,0,17.5,14);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
    
        // abcd_1_4_731
        this.instance_2 = new lib.happy_893_1608268649840_77();
        this.instance_2.parent = this;
        this.instance_2.setTransform(521,143);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));
    
        // abcd_1_7_58964
        this.instance_3 = new lib.happy_145_1608268649841_82();
        this.instance_3.parent = this;
        this.instance_3.setTransform(592.5,274,1,1,0,0,0,5.5,5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));
    
        // abcd_1_8_90179
        this.instance_4 = new lib.happy_397_1608268649841_81();
        this.instance_4.parent = this;
        this.instance_4.setTransform(654.5,124.5,1,1,0,0,0,8.5,7.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));
    
        // abcd_1_9_39046
        this.instance_5 = new lib.happy_689_1608268649840_75();
        this.instance_5.parent = this;
        this.instance_5.setTransform(544,293.5,1,1,0,0,0,16,23.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));
    
        // abcd_1_10_73627
        this.instance_6 = new lib.happy_998_1608268649837_68();
        this.instance_6.parent = this;
        this.instance_6.setTransform(566,348.5,1,1,0,0,0,40,24.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));
    
        // abcd_1_11_60616
        this.instance_7 = new lib.happy_807_1608268649842_83();
        this.instance_7.parent = this;
        this.instance_7.setTransform(522.5,405.5,1,1,0,0,0,9.5,5.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));
    
        // abcd_1_12_84369
        this.instance_8 = new lib.happy_430_1608268649840_76();
        this.instance_8.parent = this;
        this.instance_8.setTransform(525,452.5,1,1,0,0,0,8,7.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));
    
        // abcd_1_13_71132
        this.instance_9 = new lib.happy_762_1608268649841_79();
        this.instance_9.parent = this;
        this.instance_9.setTransform(468,484.5,1,1,0,0,0,12,11.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));
    
        // abcd_1_14_47721
        this.instance_10 = new lib.happy_942_1608268649845_90();
        this.instance_10.parent = this;
        this.instance_10.setTransform(459.5,430,1,1,0,0,0,9.5,19);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));
    
        // abcd_1_16_17497
        this.instance_11 = new lib.happy_431_1608268649841_80();
        this.instance_11.parent = this;
        this.instance_11.setTransform(429,470.5,1,1,0,0,0,9,13.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));
    
        // abcd_1_22_14312
        this.instance_12 = new lib.happy_872_1608268649840_78();
        this.instance_12.parent = this;
        this.instance_12.setTransform(184.5,403.5,1,1,0,0,0,6.5,9.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));
    
        // abcd_1_23_58272
        this.instance_13 = new lib.happy_916_1608268649842_84();
        this.instance_13.parent = this;
        this.instance_13.setTransform(171.5,395,1,1,0,0,0,10.5,11);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));
    
        // abcd_1_25_53423
        this.instance_14 = new lib.happy_500_1608268649838_69();
        this.instance_14.parent = this;
        this.instance_14.setTransform(128.5,418,1,1,0,0,0,5.5,7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));
    
        // abcd_1_26_73378
        this.instance_15 = new lib.happy_755_1608268649837_66();
        this.instance_15.parent = this;
        this.instance_15.setTransform(103,394,1,1,0,0,0,8,6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));
    
        // abcd_1_30_53915
        this.instance_16 = new lib.happy_382_1608268649836_65();
        this.instance_16.parent = this;
        this.instance_16.setTransform(10,406,1,1,0,0,0,10,8);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));
    
        // abcd_1_31_97877
        this.instance_17 = new lib.happy_599_1608268649842_85();
        this.instance_17.parent = this;
        this.instance_17.setTransform(43.5,368.5,1,1,0,0,0,9.5,12.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));
    
        // abcd_1_35_58588
        this.instance_18 = new lib.happy_857_1608268649839_74();
        this.instance_18.parent = this;
        this.instance_18.setTransform(27.5,149,1,1,0,0,0,19.5,30);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));
    
        // abcd_1_36_73302
        this.instance_19 = new lib.happy_504_1608268649838_71();
        this.instance_19.parent = this;
        this.instance_19.setTransform(79.5,161.5,1,1,0,0,0,9.5,9.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));
    
        // abcd_1_37_9429
        this.instance_20 = new lib.happy_334_1608268649838_70();
        this.instance_20.parent = this;
        this.instance_20.setTransform(184.5,203,1,1,0,0,0,13.5,15);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,663,496);
    
    
    (lib.happy_459_1608268649823_19 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_43
        this.instance = new lib.happy_563_1608268649857_126("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(69.2,143.8,0.2,0.2,0,0,0,69,65.3);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:65.1,scaleX:1.1,scaleY:1.1,x:69.1,y:113.5,startPosition:5},5,cjs.Ease.get(1)).to({regY:65,scaleX:0.95,scaleY:0.95,x:69,y:114.3,startPosition:9},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:114,startPosition:16},7,cjs.Ease.get(1)).wait(123));
    
        // 图层_45
        this.instance_1 = new lib.happy_160_1608268649851_111("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(186.2,126.8,0.2,0.2,0,0,0,51.3,41.3);
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({regX:51.1,regY:41.1,scaleX:1.1,scaleY:1.1,x:187.2,y:113.5,startPosition:5},5,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,x:187,y:114.7,startPosition:9},4,cjs.Ease.get(1)).to({regX:51,regY:41,scaleX:1,scaleY:1,y:114,startPosition:16},7,cjs.Ease.get(1)).wait(122));
    
        // 图层_44
        this.instance_2 = new lib.happy_210_1608268649859_131("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(175.2,61.8,0.2,0.2,0,0,0,44.3,28.3);
        this.instance_2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({regX:44.1,regY:28.1,scaleX:1.1,scaleY:1.1,x:176.2,y:48.5,startPosition:5},5,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,x:176,y:49.7,startPosition:9},4,cjs.Ease.get(1)).to({regX:44,regY:28,scaleX:1,scaleY:1,y:49,startPosition:16},7,cjs.Ease.get(1)).wait(121));
    
        // 图层_46
        this.instance_3 = new lib.happy_102_1608268649857_127("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(272.7,105.3,0.2,0.2,0,0,0,34.8,50.8);
        this.instance_3._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({regX:34.6,regY:50.6,scaleX:1.1,scaleY:1.1,x:273.7,y:92,startPosition:5},5,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,x:273.5,y:93.2,startPosition:9},4,cjs.Ease.get(1)).to({regX:34.5,regY:50.5,scaleX:1,scaleY:1,y:92.5,startPosition:16},7,cjs.Ease.get(1)).wait(120));
    
        // 图层_47
        this.instance_4 = new lib.happy_534_1608268649856_124("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(366.7,101.8,0.2,0.2,0,0,0,53.8,47.3);
        this.instance_4._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({regX:53.6,regY:47.1,scaleX:1.1,scaleY:1.1,x:367.7,y:88.5,startPosition:5},5,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,x:367.5,y:89.7,startPosition:9},4,cjs.Ease.get(1)).to({regX:53.5,regY:47,scaleX:1,scaleY:1,y:89,startPosition:16},7,cjs.Ease.get(1)).wait(119));
    
        // 图层_48
        this.instance_5 = new lib.happy_244_1608268649853_115("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(469.2,80.8,0.2,0.2,0,0,0,51.3,68);
        this.instance_5._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({regX:51.1,scaleX:1.1,scaleY:1.1,x:470.2,y:67.4,startPosition:5},5,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,x:470,y:68.6,startPosition:9},4,cjs.Ease.get(1)).to({regX:51,scaleX:1,scaleY:1,y:68,startPosition:16},7,cjs.Ease.get(1)).wait(117));
    
        // 图层_49
        this.instance_6 = new lib.happy_878_1608268649855_121("synched",0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(561.7,107.8,0.2,0.2,0,0,0,48.8,57.3);
        this.instance_6._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({regX:48.6,regY:57.1,scaleX:1.1,scaleY:1.1,x:562.7,y:94.5,startPosition:5},5,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,x:562.5,y:95.7,startPosition:9},4,cjs.Ease.get(1)).to({regX:48.5,regY:57,scaleX:1,scaleY:1,y:95,startPosition:16},7,cjs.Ease.get(1)).wait(115));
    
        // 图层_50
        this.instance_7 = new lib.happy_185_1608268649859_130("synched",0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(49.2,225.8,0.2,0.2,0,0,0,18.3,20.3);
        this.instance_7._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).to({_off:false},0).to({regX:18.1,regY:20.1,scaleX:1.1,scaleY:1.1,x:50.2,y:212.5,startPosition:5},5,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,x:50,y:213.7,startPosition:9},4,cjs.Ease.get(1)).to({regX:18,regY:20,scaleX:1,scaleY:1,y:213,startPosition:16},7,cjs.Ease.get(1)).wait(111));
    
        // 图层_51
        this.instance_8 = new lib.happy_120_1608268649855_118("synched",0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(126.7,244.8,0.2,0.2,0,0,0,63.8,45.3);
        this.instance_8._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10).to({_off:false},0).to({regX:63.6,regY:45.1,scaleX:1.1,scaleY:1.1,x:127.7,y:231.5,startPosition:5},5,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,x:127.5,y:232.7,startPosition:9},4,cjs.Ease.get(1)).to({regX:63.5,regY:45,scaleX:1,scaleY:1,y:232,startPosition:16},7,cjs.Ease.get(1)).wait(113));
    
        // 图层_52
        this.instance_9 = new lib.happy_377_1608268649848_104("synched",0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(260.2,220.3,0.2,0.2,0,0,0,66.3,54.8);
        this.instance_9._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(13).to({_off:false},0).to({regX:66,regY:54.6,scaleX:1.1,scaleY:1.1,x:261.1,y:207,startPosition:5},5,cjs.Ease.get(1)).to({regX:66.1,scaleX:0.9,scaleY:0.9,x:261,y:208.2,startPosition:9},4,cjs.Ease.get(1)).to({regX:66,regY:54.5,scaleX:1,scaleY:1,y:207.5,startPosition:16},7,cjs.Ease.get(1)).wait(110));
    
        // 图层_53
        this.instance_10 = new lib.happy_892_1608268649852_113("synched",0);
        this.instance_10.parent = this;
        this.instance_10.setTransform(395.7,214.8,0.2,0.2,0,0,0,65.8,60.3);
        this.instance_10._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(16).to({_off:false},0).to({regX:65.5,regY:60.1,scaleX:1.1,scaleY:1.1,x:396.6,y:201.5,startPosition:5},5,cjs.Ease.get(1)).to({regX:65.6,scaleX:0.9,scaleY:0.9,x:396.5,y:202.7,startPosition:9},4,cjs.Ease.get(1)).to({regX:65.5,regY:60,scaleX:1,scaleY:1,y:202,startPosition:16},7,cjs.Ease.get(1)).wait(107));
    
        // 图层_54
        this.instance_11 = new lib.happy_428_1608268649855_119("synched",0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(515.7,223.3,0.2,0.2,0,0,0,66.8,65.8);
        this.instance_11._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(19).to({_off:false},0).to({regX:66.6,regY:65.5,scaleX:1.1,scaleY:1.1,x:516.7,y:209.9,startPosition:5},5,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,x:516.5,y:211.1,startPosition:9},4,cjs.Ease.get(1)).to({regX:66.5,scaleX:1,scaleY:1,y:210.5,startPosition:16},7,cjs.Ease.get(1)).wait(104));
    
        // 元件_6
        this.instance_12 = new lib.happy_407_1608268649863_140("synched",0);
        this.instance_12.parent = this;
        this.instance_12.setTransform(69,145,0.2,0.2,0,0,0,111,107.3);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regY:107.1,scaleX:1.1,scaleY:1.1,x:68.1,y:120.1,startPosition:5},5,cjs.Ease.get(1)).to({scaleX:0.95,scaleY:0.95,startPosition:9},4,cjs.Ease.get(1)).to({regY:107,scaleX:1,scaleY:1,x:68,y:120,startPosition:16},7,cjs.Ease.get(1)).wait(123));
    
        // 元件_7
        this.instance_13 = new lib.happy_451_1608268649846_96("synched",0);
        this.instance_13.parent = this;
        this.instance_13.setTransform(186,128,0.2,0.2,0,0,0,93.3,83.3);
        this.instance_13._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({_off:false},0).to({regX:93,regY:83,scaleX:1.1,scaleY:1.1,y:120,startPosition:5},5,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,startPosition:9},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,startPosition:16},7,cjs.Ease.get(1)).wait(122));
    
        // 元件_5
        this.instance_14 = new lib.happy_172_1608268649845_93("synched",0);
        this.instance_14.parent = this;
        this.instance_14.setTransform(175,63,0.2,0.2,0,0,0,86.3,70);
        this.instance_14._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(2).to({_off:false},0).to({regX:86,scaleX:1.1,scaleY:1.1,y:55.1,startPosition:5},5,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,startPosition:9},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:55,startPosition:16},7,cjs.Ease.get(1)).wait(121));
    
        // 元件_8
        this.instance_15 = new lib.happy_595_1608268649860_133("synched",0);
        this.instance_15.parent = this;
        this.instance_15.setTransform(272.5,106.5,0.2,0.2,0,0,0,76.8,92.8);
        this.instance_15._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(3).to({_off:false},0).to({regX:76.5,regY:92.5,scaleX:1.1,scaleY:1.1,y:98.5,startPosition:5},5,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,startPosition:9},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,startPosition:16},7,cjs.Ease.get(1)).wait(120));
    
        // 元件_9
        this.instance_16 = new lib.happy_217_1608268649833_53("synched",0);
        this.instance_16.parent = this;
        this.instance_16.setTransform(366.5,103,0.2,0.2,0,0,0,95.8,89.3);
        this.instance_16._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(4).to({_off:false},0).to({regX:95.5,regY:89,scaleX:1.1,scaleY:1.1,y:95,startPosition:5},5,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,startPosition:9},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,startPosition:16},7,cjs.Ease.get(1)).wait(119));
    
        // 元件_10
        this.instance_17 = new lib.happy_495_1608268649832_47("synched",0);
        this.instance_17.parent = this;
        this.instance_17.setTransform(469,82,0.2,0.2,0,0,0,93.3,110);
        this.instance_17._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(6).to({_off:false},0).to({regX:93,scaleX:1.1,scaleY:1.1,y:74.1,startPosition:5},5,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,startPosition:9},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:74,startPosition:16},7,cjs.Ease.get(1)).wait(117));
    
        // 元件_11
        this.instance_18 = new lib.happy_814_1608268649830_43("synched",0);
        this.instance_18.parent = this;
        this.instance_18.setTransform(561.5,109,0.2,0.2,0,0,0,90.8,99.3);
        this.instance_18._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(8).to({_off:false},0).to({regX:90.5,regY:99,scaleX:1.1,scaleY:1.1,y:101,startPosition:5},5,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,startPosition:9},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,startPosition:16},7,cjs.Ease.get(1)).wait(115));
    
        // 元件_12
        this.instance_19 = new lib.happy_131_1608268649847_99("synched",0);
        this.instance_19.parent = this;
        this.instance_19.setTransform(49,227,0.2,0.2,0,0,0,60,62.3);
        this.instance_19._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(12).to({_off:false},0).to({regY:62.1,scaleX:1.1,scaleY:1.1,x:49.1,y:219.1,startPosition:5},5,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,startPosition:9},4,cjs.Ease.get(1)).to({regY:62,scaleX:1,scaleY:1,x:49,y:219,startPosition:16},7,cjs.Ease.get(1)).wait(111));
    
        // 元件_13
        this.instance_20 = new lib.happy_955_1608268649823_18("synched",0);
        this.instance_20.parent = this;
        this.instance_20.setTransform(126.5,246,0.2,0.2,0,0,0,105.8,87.3);
        this.instance_20._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(10).to({_off:false},0).to({regX:105.6,regY:87,scaleX:1.1,scaleY:1.1,x:126.6,y:238,startPosition:5},5,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,startPosition:9},4,cjs.Ease.get(1)).to({regX:105.5,scaleX:1,scaleY:1,x:126.5,startPosition:16},7,cjs.Ease.get(1)).wait(113));
    
        // 元件_14
        this.instance_21 = new lib.happy_114_1608268649832_48("synched",0);
        this.instance_21.parent = this;
        this.instance_21.setTransform(260,221.5,0.2,0.2,0,0,0,108.3,96.8);
        this.instance_21._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(13).to({_off:false},0).to({regX:108.1,regY:96.5,scaleX:1.1,scaleY:1.1,x:260.1,y:213.5,startPosition:5},5,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,startPosition:9},4,cjs.Ease.get(1)).to({regX:108,scaleX:1,scaleY:1,x:260,startPosition:16},7,cjs.Ease.get(1)).wait(110));
    
        // 元件_15
        this.instance_22 = new lib.happy_468_1608268649832_49("synched",0);
        this.instance_22.parent = this;
        this.instance_22.setTransform(395.5,216,0.2,0.2,0,0,0,107.8,102.3);
        this.instance_22._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(16).to({_off:false},0).to({regX:107.6,regY:102.1,scaleX:1.1,scaleY:1.1,x:395.6,y:208.1,startPosition:5},5,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,startPosition:9},4,cjs.Ease.get(1)).to({regX:107.5,regY:102,scaleX:1,scaleY:1,x:395.5,y:208,startPosition:16},7,cjs.Ease.get(1)).wait(107));
    
        // 元件_16
        this.instance_23 = new lib.happy_392_1608268649829_39("synched",0);
        this.instance_23.parent = this;
        this.instance_23.setTransform(515.5,224.5,0.2,0.2,0,0,0,108.8,107.8);
        this.instance_23._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(19).to({_off:false},0).to({regX:108.6,regY:107.6,scaleX:1.1,scaleY:1.1,x:515.6,y:216.6,startPosition:5},5,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,startPosition:9},4,cjs.Ease.get(1)).to({regX:108.5,regY:107.5,scaleX:1,scaleY:1,x:515.5,y:216.5,startPosition:16},7,cjs.Ease.get(1)).wait(104));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(46.8,123.6,44.4,42.8);
    
    
    // stage content:
    (lib.layer01 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_75 = function() {
            this.stop()
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(75).call(this.frame_75).wait(1));
    
        // 图层 2
        this.playGameNewBtn = new lib.happy_804_1608268649820_14();
        this.playGameNewBtn.parent = this;
        this.playGameNewBtn.setTransform(382.1,1051.5,0.292,0.292,0,0,0,166.1,56.5);
        this.playGameNewBtn.alpha = 0;
        this.playGameNewBtn._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.playGameNewBtn).wait(16).to({_off:false},0).to({scaleX:1.05,scaleY:1.05,alpha:1},11,cjs.Ease.get(1)).to({regX:166,scaleX:1,scaleY:1,x:382},5).wait(44));
    
        // 前光
        this.instance = new lib.happy_306_1608268649857_125();
        this.instance.parent = this;
        this.instance.setTransform(360.5,1541,1,1,0,0,0,121.5,99);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({y:841},7,cjs.Ease.get(1)).to({y:871},7,cjs.Ease.get(1)).to({y:861},8,cjs.Ease.get(1)).wait(54));
    
        // 巧虎
        this.balloonBox = new lib.happy_160_1608268649824_23();
        this.balloonBox.parent = this;
        this.balloonBox.setTransform(366,1441.5,1,1,0,0,0,326,226.9);
    
        this.timeline.addTween(cjs.Tween.get(this.balloonBox).to({y:741.5},7,cjs.Ease.get(1)).to({y:771.5},7,cjs.Ease.get(1)).to({y:761.5},8,cjs.Ease.get(1)).wait(54));
    
        // 后光
        this.instance_1 = new lib.happy_856_1608268649849_106();
        this.instance_1.parent = this;
        this.instance_1.setTransform(359,1466.5,1,1,0,0,0,244,155.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:766.5},7,cjs.Ease.get(1)).to({y:796.5},7,cjs.Ease.get(1)).to({y:786.5},8,cjs.Ease.get(1)).wait(54));
    
        // 箱子
        this.instance_2 = new lib.happy_620_1608268649852_112();
        this.instance_2.parent = this;
        this.instance_2.setTransform(372.5,1657.5,1,1,0,0,0,312.5,161.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:957.5},7,cjs.Ease.get(1)).to({y:987.5},7,cjs.Ease.get(1)).to({y:977.5},8,cjs.Ease.get(1)).wait(54));
    
        // 字
        this.instance_3 = new lib.happy_459_1608268649823_19("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(380.5,275.5,1,1,0,0,0,305.5,138.5);
        this.instance_3._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).wait(63));
    
        // 气球1
        this.instance_4 = new lib.happy_541_1608268649835_58();
        this.instance_4.parent = this;
        this.instance_4.setTransform(456.1,1041.5,0.389,0.389,0,0,0,84,518.2);
        this.instance_4._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({_off:false},0).to({regY:518,scaleX:1.03,scaleY:1.03,x:482.7,y:945.9},9,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:0.97,x:480.6,y:961.7},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:481,y:957},8,cjs.Ease.get(1)).wait(36));
    
        // 气球2
        this.instance_5 = new lib.happy_249_1608268649824_22();
        this.instance_5.parent = this;
        this.instance_5.setTransform(377.9,1081.2,0.389,0.389,0,0,0,0.1,637.2);
        this.instance_5._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({regY:637.1,scaleX:1.03,scaleY:1.03,x:275.3,y:1051.3},9,cjs.Ease.get(1)).to({regY:637,scaleX:0.97,scaleY:0.97,x:284.9,y:1061.1},6,cjs.Ease.get(1)).to({regX:0,scaleX:1,scaleY:1,x:280,y:1059},8,cjs.Ease.get(1)).wait(39));
    
        // 气球3
        this.instance_6 = new lib.happy_484_1608268649847_100();
        this.instance_6.parent = this;
        this.instance_6.setTransform(456.1,1036.8,0.389,0.389,0,0,0,2,441.2);
        this.instance_6._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).to({regY:441,scaleX:1.03,scaleY:1.03,x:482.7,y:933.6},9,cjs.Ease.get(1)).to({regY:441.1,scaleX:0.97,scaleY:0.97,x:480.6,y:950.1},6,cjs.Ease.get(1)).to({regY:441,scaleX:1,scaleY:1,x:481,y:945},8,cjs.Ease.get(1)).wait(41));
    
        // 气球4
        this.instance_7 = new lib.happy_874_1608268649827_31();
        this.instance_7.parent = this;
        this.instance_7.setTransform(382.6,1022.8,0.389,0.389,0,0,0,24.1,584.3);
        this.instance_7._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({regY:584,scaleX:1.03,scaleY:1.03,x:287.7,y:896.4},9,cjs.Ease.get(1)).to({regX:24,scaleX:0.97,scaleY:0.97,x:296.5,y:915},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:292,y:909},8,cjs.Ease.get(1)).wait(43));
    
        // 气球5
        this.instance_8 = new lib.happy_242_1608268649832_50();
        this.instance_8.parent = this;
        this.instance_8.setTransform(421.9,878.5,0.389,0.389,0,0,0,69,461.1);
        this.instance_8._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({_off:false},0).to({regY:461,scaleX:1.03,scaleY:1.03,x:391.8,y:513.5},9,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:0.97,x:394.9,y:553.5},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:393,y:538},8,cjs.Ease.get(1)).wait(45));
    
        // 彩条
        this.instance_9 = new lib.happy_724_1608268649828_33("synched",0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(400.1,834.1,0.67,0.67,0,0,0,325,479.1);
        this.instance_9.alpha = 0;
        this.instance_9._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(12).to({_off:false},0).to({regY:478.9,scaleX:1.03,scaleY:1.03,x:400,y:833.9,alpha:1},6).to({regY:479,scaleX:1,scaleY:1,y:834},7).wait(51));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(375,603,944,1819);
    // library properties:
    lib.properties = {
        width: 750,
        height: 1206,
        fps: 25,
        color: "#FFFFFF",
        opacity: 1.00,
        webfonts: {},
        manifest: [
            {src:"images/layer01/layer01_atlas_.png", id:"layer01_atlas_"},
            {src:"images/layer01/layer01_atlas_2.png", id:"layer01_atlas_2"},
            {src:"images/layer01/layer01_atlas_3.png", id:"layer01_atlas_3"},
            {src:"images/layer01/layer01_atlas_4.png", id:"layer01_atlas_4"}
        ],
        preloads: []
    };
    
    
    
    
    })