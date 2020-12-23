module.exports=(function (lib, img, cjs, ss, an) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtInst = {}; 
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [
            {name:"layer03_atlas_", frames: [[0,0,626,634]]},
            {name:"layer03_atlas_2", frames: [[219,384,217,217],[438,490,310,102],[0,384,217,217],[384,219,329,108],[0,822,153,153],[310,828,153,153],[438,594,310,88],[0,603,217,217],[155,822,153,153],[384,0,217,217],[219,603,217,217],[465,828,153,153],[438,329,214,159],[438,684,176,142],[0,0,382,382]]},
            {name:"layer03_atlas_3", frames: [[34,249,32,46],[208,200,28,67],[292,262,24,23],[257,179,20,16],[358,119,39,60],[465,103,33,85],[114,155,33,39],[141,200,65,48],[465,190,21,22],[469,264,18,20],[238,200,16,30],[0,249,32,47],[82,198,57,65],[318,262,18,27],[155,143,100,55],[448,264,19,25],[238,232,16,12],[489,264,13,19],[178,250,23,39],[329,199,66,48],[68,265,19,11],[0,155,112,41],[89,265,11,10],[379,249,14,26],[281,0,116,117],[399,103,64,109],[141,250,35,28],[358,181,17,15],[257,143,22,34],[0,198,80,49],[68,249,11,14],[238,249,107,11],[257,199,70,48],[488,190,19,19],[281,119,75,78],[347,249,30,39],[399,0,101,101],[155,0,124,141],[448,214,50,48],[238,262,23,39],[263,262,27,30],[397,214,49,61],[377,181,16,15],[0,0,153,153]]}
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
    
    
    
    (lib.happy_000_1608275143897_206 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_015_1608275143776_154 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_015_1608275143808_185 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_031_1608275143821_189 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_039_1608275143858_199 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_045_1608275143851_198 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_070_1608275143777_155 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_094_1608275143792_170 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_109_1608275143771_149 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_144_1608275143787_165 = function() {
        this.spriteSheet = ss["layer03_atlas_2"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_184_1608275143786_164 = function() {
        this.spriteSheet = ss["layer03_atlas_2"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_203_1608275143795_171 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_209_1608275143785_162 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_241_1608275143771_148 = function() {
        this.spriteSheet = ss["layer03_atlas_2"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_243_1608275143791_169 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_250_1608275143813_186 = function() {
        this.spriteSheet = ss["layer03_atlas_2"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_278_1608275143833_193 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_281_1608275143872_201 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_300_1608275143797_173 = function() {
        this.spriteSheet = ss["layer03_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_327_1608275143798_174 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_348_1608275143840_195 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_353_1608275143846_197 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_366_1608275143769_146 = function() {
        this.spriteSheet = ss["layer03_atlas_2"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_369_1608275143878_202 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_373_1608275143828_191 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_376_1608275143801_177 = function() {
        this.spriteSheet = ss["layer03_atlas_2"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_404_1608275143866_200 = function() {
        this.spriteSheet = ss["layer03_atlas_2"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_426_1608275143765_143 = function() {
        this.spriteSheet = ss["layer03_atlas_2"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_439_1608275143825_190 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_476_1608275143770_147 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_480_1608275143785_163 = function() {
        this.spriteSheet = ss["layer03_atlas_2"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_486_1608275143774_151 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_506_1608275143779_157 = function() {
        this.spriteSheet = ss["layer03_atlas_2"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_513_1608275143817_187 = function() {
        this.spriteSheet = ss["layer03_atlas_2"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_515_1608275143780_158 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_515_1608275143802_178 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_517_1608275143884_203 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(24);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_519_1608275143838_194 = function() {
        this.spriteSheet = ss["layer03_atlas_2"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_539_1608275143802_179 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(25);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_547_1608275143808_184 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(26);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_559_1608275143804_181 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(27);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_634_1608275143907_207 = function() {
        this.spriteSheet = ss["layer03_atlas_2"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_643_1608275143831_192 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(28);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_667_1608275143782_160 = function() {
        this.spriteSheet = ss["layer03_atlas_2"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_716_1608275143776_153 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(29);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_748_1608275143790_167 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(30);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_767_1608275143781_159 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(31);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_773_1608275143783_161 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(32);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_786_1608275143789_166 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(33);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_799_1608275143911_208 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(34);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_817_1608275143803_180 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(35);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_857_1608275143845_196 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(36);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_862_1608275143887_204 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(37);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_880_1608275143773_150 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(38);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_886_1608275143819_188 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(39);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_915_1608275143796_172 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(40);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_978_1608275143798_175 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(41);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_986_1608275143778_156 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(42);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.icon001 = function() {
        this.spriteSheet = ss["layer03_atlas_2"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.pinguoicon01 = function() {
        this.spriteSheet = ss["layer03_atlas_3"];
        this.gotoAndStop(43);
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
    
    
    (lib.happy_987_1608275143665_39 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_039_1608275143858_199();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,39,60);
    
    
    (lib.happy_985_1608275143740_120 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_748_1608275143790_167();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,11,14);
    
    
    (lib.happy_983_1608275143667_41 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_031_1608275143821_189();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,20,16);
    
    
    (lib.happy_959_1608275143685_62 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_886_1608275143819_188();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_959_1608275143685_62, new cjs.Rectangle(0,0,23,39), null);
    
    
    (lib.happy_935_1608275143691_69 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_426_1608275143765_143();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_935_1608275143691_69, new cjs.Rectangle(0,0,217,217), null);
    
    
    (lib.happy_920_1608275143720_99 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_203_1608275143795_171();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_920_1608275143720_99, new cjs.Rectangle(0,0,18,20), null);
    
    
    (lib.happy_896_1608275143753_129 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_559_1608275143804_181();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,17,15);
    
    
    (lib.happy_884_1608275143690_67 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_327_1608275143798_174();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,100,55);
    
    
    (lib.happy_837_1608275143669_43 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_634_1608275143907_207();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_837_1608275143669_43, new cjs.Rectangle(0,0,214,159), null);
    
    
    (lib.happy_829_1608275143680_56 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_366_1608275143769_146();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_829_1608275143680_56, new cjs.Rectangle(0,0,153,153), null);
    
    
    (lib.happy_808_1608275143758_135 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_506_1608275143779_157();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_808_1608275143758_135, new cjs.Rectangle(0,0,217,217), null);
    
    
    (lib.happy_778_1608275143762_140 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_786_1608275143789_166();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,19,19);
    
    
    (lib.happy_778_1608275143681_58 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_986_1608275143778_156();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,16,15);
    
    
    (lib.happy_744_1608275143752_128 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_241_1608275143771_148();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_744_1608275143752_128, new cjs.Rectangle(0,0,217,217), null);
    
    
    (lib.happy_734_1608275143671_46 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_070_1608275143777_155();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_734_1608275143671_46, new cjs.Rectangle(0,0,33,39), null);
    
    
    (lib.happy_729_1608275143749_127 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_515_1608275143780_158();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,11,10);
    
    
    (lib.happy_722_1608275143672_47 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_817_1608275143803_180();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_722_1608275143672_47, new cjs.Rectangle(0,0,30,39), null);
    
    
    (lib.happy_718_1608275143705_83 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_250_1608275143813_186();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_718_1608275143705_83, new cjs.Rectangle(0,0,329,108), null);
    
    
    (lib.happy_691_1608275143743_122 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_486_1608275143774_151();
        this.instance.parent = this;
        this.instance.setTransform(0,-2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,-2,112,41);
    
    
    (lib.happy_671_1608275143690_68 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_015_1608275143808_185();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,24,23);
    
    
    (lib.happy_670_1608275143684_61 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_278_1608275143833_193();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,57,65);
    
    
    (lib.happy_660_1608275143759_136 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_281_1608275143872_201();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,18,27);
    
    
    (lib.happy_621_1608275143682_59 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#231815").s().p("AgJAHQgDgFACgDQACgGAIgDQADgCACAEQABAFgEABQgEACAAABIAAABIACABQABAAADgDQACgEAEACIACACIgBADIgEAFQgEAEgDAAQgFAAgEgFg");
        this.shape.setTransform(6.1,41.1,5.256,5.256);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#231815").s().p("AgHAKQgEgDAAgEQgBgDAEgFIAEgFQAEgDABADQADADgDADQgEAEAAACIAAABQABAAAAAAQABABAAAAQABAAAAAAQAAAAAAAAQADAAABgFQABgEADABQAFAAgBAEIgCAFQgDAFgEACIgDABQgDAAgEgDg");
        this.shape_1.setTransform(10.4,46.6,5.256,5.256);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FEDF32").s().p("AgFAGQgEgDAEgFIAEgFIAJAGQgCAJgFAAQgCAAgEgCg");
        this.shape_2.setTransform(10.4,46.7,5.256,5.256);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#231815").s().p("AgFALQgFgDgBgEQgBgFAFgJQADgEADADQADACgCAEQgDAEABADIABABIADABQACgBgBgGQAAgEAEgBQAEgBABAFQAAAMgFAEQgCABgDAAQgCAAgFgCg");
        this.shape_3.setTransform(15.2,51.2,5.256,5.256);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FEDF32").s().p("AgDAHQgFgDACgGIADgGIAKAEIAAAIQgBAFgEAAQgCAAgDgCg");
        this.shape_4.setTransform(15.1,51.3,5.256,5.256);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#231815").s().p("AgDALQgEgBgCgFQgDgGADgIQACgDAEABQADABgBAFQgBAFABACIABABIACABQACgBgCgIQgBgEAFgBQAEgBABAEQADAMgGAFQgCADgEAAg");
        this.shape_5.setTransform(21,54.5,5.256,5.256);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FEDF32").s().p("AgBAHQgFgCAAgGIABgGIAMABIAAAIQgBAGgEAAIgDgBg");
        this.shape_6.setTransform(21.1,54.4,5.256,5.256);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#231815").s().p("AgDAPQgFgDgDgFQgDgFAAgFQABgFADABQAFAAAAAEQAAAHAFACQABACADgDQAEgEgCgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgEgCACgEQACgEAEACQAGADABAHQACAIgGAHQgFAEgFAAg");
        this.shape_7.setTransform(29.5,54.3,5.256,5.256);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FEDF32").s().p("AgEAJQgGgFAAgHIAQgHQAEACABAGQABAFgFAFQgDADgDAAQgCAAgDgCg");
        this.shape_8.setTransform(29.5,54.4,5.256,5.256);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FEDF32").s().p("AgqAjQgJgSAKgRQAIgNAWgPIAKgKQAGgHAGgEQANgGALAIQALAIACALIgxBNQgHADgJAAQgSAAgHgRg");
        this.shape_9.setTransform(29.7,27.5,5.256,5.256);
    
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FEDF32").s().p("AgFAEQgDgEAFgEIAEgDIAGAHQgEAIgDAAQgDAAgCgEg");
        this.shape_10.setTransform(6,41.2,5.256,5.256);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,54.8,62.4);
    
    
    (lib.happy_592_1608275143670_44 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_369_1608275143878_202();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,13,19);
    
    
    (lib.happy_584_1608275143760_137 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_915_1608275143796_172();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,27,30);
    
    
    (lib.happy_560_1608275143716_94 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_978_1608275143798_175();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,49,61);
    
    
    (lib.happy_532_1608275143696_74 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_547_1608275143808_184();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,35,28);
    
    
    (lib.happy_508_1608275143648_24 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("rgba(0,0,0,0.008)").ss(1,1,1).p("EhCUh/fMCEpAAAMAAAD+/MiEpAAAg");
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("EhCUB/gMAAAj+/MCEpAAAMAAAD+/g");
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_508_1608275143648_24, new cjs.Rectangle(-425.5,-817,851,1634), null);
    
    
    (lib.happy_502_1608275143748_126 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_539_1608275143802_179();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,64,109);
    
    
    (lib.happy_497_1608275143715_93 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_513_1608275143817_187();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_497_1608275143715_93, new cjs.Rectangle(0,0,217,217), null);
    
    
    (lib.happy_465_1608275143698_76 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_348_1608275143840_195();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,19,25);
    
    
    (lib.happy_452_1608275143677_54 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_476_1608275143770_147();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,19,11);
    
    
    (lib.happy_447_1608275143687_63 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_439_1608275143825_190();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,66,48);
    
    
    (lib.happy_432_1608275143700_79 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_300_1608275143797_173();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_432_1608275143700_79, new cjs.Rectangle(0,0,626,634), null);
    
    
    (lib.happy_424_1608275143687_64 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_716_1608275143776_153();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,80,49);
    
    
    (lib.happy_399_1608275143676_52 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_862_1608275143887_204();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_399_1608275143676_52, new cjs.Rectangle(0,0,124,141), null);
    
    
    (lib.happy_326_1608275143746_124 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_880_1608275143773_150();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,50,48);
    
    
    (lib.happy_326_1608275143741_121 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_373_1608275143828_191();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_326_1608275143741_121, new cjs.Rectangle(0,0,23,39), null);
    
    
    (lib.happy_311_1608275143659_33 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("EhFXB3dMAAAju5MCKvAAAMAAADu5g");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_311_1608275143659_33, new cjs.Rectangle(-444,-764.5,888,1529), null);
    
    
    (lib.happy_307_1608275143671_45 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_515_1608275143802_178();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,14,26);
    
    
    (lib.happy_295_1608275143674_50 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_643_1608275143831_192();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_295_1608275143674_50, new cjs.Rectangle(0,0,22,34), null);
    
    
    (lib.happy_273_1608275143706_84 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_184_1608275143786_164();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_273_1608275143706_84, new cjs.Rectangle(0,0,310,102), null);
    
    
    (lib.happy_255_1608275143692_70 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_353_1608275143846_197();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,16,12);
    
    
    (lib.happy_252_1608275143694_73 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_517_1608275143884_203();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,116,117);
    
    
    (lib.happy_246_1608275143754_130 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_045_1608275143851_198();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,33,85);
    
    
    (lib.happy_205_1608275143689_66 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_857_1608275143845_196();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_205_1608275143689_66, new cjs.Rectangle(0,0,101,101), null);
    
    
    (lib.happy_198_1608275143674_49 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_015_1608275143776_154();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_198_1608275143674_49, new cjs.Rectangle(0,0,28,67), null);
    
    
    (lib.happy_194_1608275143763_141 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_094_1608275143792_170();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,65,48);
    
    
    (lib.happy_193_1608275143747_125 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_773_1608275143783_161();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,70,48);
    
    
    (lib.happy_130_1608275143673_48 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_000_1608275143897_206();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_130_1608275143673_48, new cjs.Rectangle(0,0,32,46), null);
    
    
    (lib.happy_021_1608275143697_75 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_243_1608275143791_169();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,32,47);
    
    
    (lib.happy_020_1608275143727_107 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_209_1608275143785_162();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_020_1608275143727_107, new cjs.Rectangle(0,0,16,30), null);
    
    
    (lib.happy_015_1608275143736_117 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_109_1608275143771_149();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,21,22);
    
    
    (lib.happy_012_1608275143646_22 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层 1
        this.instance = new lib.happy_799_1608275143911_208();
        this.instance.parent = this;
        this.instance.setTransform(-37.5,-39);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-37.5,-39,75,78);
    
    
    (lib.happy_006_1608275143754_131 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_144_1608275143787_165();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_006_1608275143754_131, new cjs.Rectangle(0,0,217,217), null);
    
    
    (lib.元件3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层 1
        this.instance = new lib.icon001();
        this.instance.parent = this;
        this.instance.setTransform(-191,-191);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(-191,-191,382,382), null);
    
    
    (lib.元件2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("EgnIAQaMAAAggzMBORAAAMAAAAgzg");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(-250.5,-105,501,210), null);
    
    
    (lib.happy_964_1608275143709_88 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_837_1608275143669_43();
        this.instance.parent = this;
        this.instance.setTransform(-1,145,1,1,-2.5,0,0,-1,145);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.7,y:145.1},24,cjs.Ease.get(1)).to({rotation:-2.5,y:145},25,cjs.Ease.get(1)).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-6.2,-9,220.6,168);
    
    
    (lib.happy_895_1608275143730_111 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_729_1608275143749_127("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(5.5,5,1,1,0,0,0,5.5,5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({x:6.5,y:14},19).to({x:5.5,y:5},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,11,10);
    
    
    (lib.happy_895_1608275143680_57 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_376_1608275143801_177();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));
    
        // 图层_2
        this.instance_1 = new lib.happy_006_1608275143754_131();
        this.instance_1.parent = this;
        this.instance_1.setTransform(78.5,78.5,1,1,0,0,0,108.5,108.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.199},9).to({alpha:1},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-30,-30,217,217);
    
    
    (lib.happy_886_1608275143693_72 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_480_1608275143785_163();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));
    
        // 图层_2
        this.instance_1 = new lib.happy_935_1608275143691_69();
        this.instance_1.parent = this;
        this.instance_1.setTransform(78.5,78.5,1,1,0,0,0,108.5,108.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.199},9).to({alpha:1},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-30,-30,217,217);
    
    
    (lib.happy_764_1608275143722_102 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_985_1608275143740_120("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(5.5,7,1,1,0,0,0,5.5,7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-0.5,y:18},19).to({x:5.5,y:7},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,11,14);
    
    
    (lib.happy_740_1608275143738_119 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_722_1608275143672_47();
        this.instance.parent = this;
        this.instance.setTransform(15,19.5,1,1,0,0,0,15,19.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_740_1608275143738_119, new cjs.Rectangle(0,0,30,39), null);
    
    
    (lib.happy_735_1608275143646_23 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层 5
        this.instance = new lib.happy_012_1608275143646_22("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(344,82.2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.67,scaleY:0.67},9).to({scaleX:1,scaleY:1},10).wait(1));
    
        // 图层 1
        this.instance_1 = new lib.happy_012_1608275143646_22("synched",0);
        this.instance_1.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.67,scaleY:0.67},9).to({scaleX:1,scaleY:1},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-37.5,-39,419,160.2);
    
    
    (lib.happy_729_1608275143663_37 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_198_1608275143674_49();
        this.instance.parent = this;
        this.instance.setTransform(14,33.5,1,1,0,0,0,14,33.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-13.5,x:14.1,y:43.6},19).to({rotation:0,x:14,y:33.5},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,28,67);
    
    
    (lib.happy_705_1608275143721_100 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_671_1608275143690_68("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(12,11.5,1,1,0,0,0,12,11.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:12.1,regY:11.6,rotation:13,x:12.1,y:16.6},20).to({regX:12,regY:11.5,rotation:0,x:12,y:11.5},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,24,23);
    
    
    (lib.happy_695_1608275143714_92 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_734_1608275143671_46();
        this.instance.parent = this;
        this.instance.setTransform(16.5,19.5,1,1,0,0,0,16.5,19.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:12.7,x:16.6,y:29.5},19).to({rotation:0,x:16.5,y:19.5},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,33,39);
    
    
    (lib.happy_634_1608275143723_103 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_592_1608275143670_44("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(6.5,9.5,1,1,0,0,0,6.5,9.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({y:16.5},19).to({y:9.5},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,13,19);
    
    
    (lib.happy_630_1608275143728_108 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_896_1608275143753_129("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(8.5,7.5,1,1,0,0,0,8.5,7.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:17.7,y:17.5},19).to({rotation:0,y:7.5},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,17,15);
    
    
    (lib.happy_604_1608275143666_40 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_273_1608275143706_84();
        this.instance.parent = this;
        this.instance.setTransform(165,51,1,1,0,0,0,155,51);
    
        this.instance_1 = new lib.happy_718_1608275143705_83();
        this.instance_1.parent = this;
        this.instance_1.setTransform(164.5,61.1,1,0.963,0,0,0,164.5,54.1);
    
        this.instance_2 = new lib.happy_404_1608275143866_200();
        this.instance_2.parent = this;
        this.instance_2.setTransform(10,14);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance_2}]},14).to({state:[{t:this.instance_1},{t:this.instance}]},15).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,329,113);
    
    
    (lib.happy_597_1608275143725_106 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_452_1608275143677_54("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(9.5,5.5,1,1,0,0,0,9.5,5.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({y:10.5},15).to({y:5.5},18).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,19,11);
    
    
    (lib.happy_592_1608275143734_115 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_021_1608275143697_75("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(16,23.5,1,1,0,0,0,16,23.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:23.6,rotation:10.9,y:30.6},14).to({regY:23.5,rotation:0,y:23.5},15).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,32,47);
    
    
    (lib.happy_554_1608275143735_116 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_424_1608275143687_64("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(40,24.5,1,1,0,0,0,40,24.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({y:14.5},24).to({y:24.5},25).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,80,49);
    
    
    (lib.happy_545_1608275143728_109 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_015_1608275143736_117("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(10.5,11,1,1,0,0,0,10.5,11);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-11.2,x:10.6,y:1.1},24).to({rotation:0,x:10.5,y:11},25).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,21,22);
    
    
    (lib.happy_531_1608275143745_123 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_519_1608275143838_194();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));
    
        // 图层_2
        this.instance_1 = new lib.happy_497_1608275143715_93();
        this.instance_1.parent = this;
        this.instance_1.setTransform(78.5,78.5,1,1,0,0,0,108.5,108.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.199},9).to({alpha:1},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-30,-30,217,217);
    
    
    (lib.happy_488_1608275143677_53 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_920_1608275143720_99("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(10,10,1,1,0,0,0,9,10);
    
        this.instance_1 = new lib.happy_020_1608275143727_107("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(8,23,1,1,0,0,0,8,15);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,19,38);
    
    
    (lib.happy_461_1608275143761_138 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_295_1608275143674_50();
        this.instance.parent = this;
        this.instance.setTransform(11,17,1,1,0,0,0,11,17);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-14.7,y:27},19).to({rotation:0,y:17},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,22,34);
    
    
    (lib.happy_422_1608275143704_82 = function(mode,startPosition,loop) {
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
        this.instance = new lib.happy_376_1608275143801_177();
        this.instance.parent = this;
    
        this.instance_1 = new lib.happy_895_1608275143680_57();
        this.instance_1.parent = this;
        this.instance_1.setTransform(76.5,76.5,1,1,0,0,0,76.5,76.5);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,153,153);
    
    
    (lib.happy_420_1608275143757_134 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_740_1608275143738_119();
        this.instance.parent = this;
        this.instance.setTransform(15,19.5,1,1,0,0,0,15,19.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:15.1,regY:19.6,rotation:14.2,x:15.1,y:29.6},19).to({regX:15,regY:19.5,rotation:0,x:15,y:19.5},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,30,39);
    
    
    (lib.happy_346_1608275143703_80 = function(mode,startPosition,loop) {
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
        this.instance = new lib.happy_519_1608275143838_194();
        this.instance.parent = this;
    
        this.instance_1 = new lib.happy_531_1608275143745_123();
        this.instance_1.parent = this;
        this.instance_1.setTransform(76.5,76.5,1,1,0,0,0,76.5,76.5);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,153,153);
    
    
    (lib.happy_319_1608275143733_114 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_465_1608275143698_76("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(9.5,12.5,1,1,0,0,0,9.5,12.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-8.5,x:9.6,y:16.5},16).to({rotation:0,x:9.5,y:12.5},16).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,19,25);
    
    
    (lib.happy_293_1608275143724_104 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_660_1608275143759_136("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(9,10.5,1,1,0,0,0,9,13.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:11.7,y:17.6},24).to({rotation:0,y:10.5},25).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,-3,18,27);
    
    
    (lib.happy_250_1608275143663_38 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_829_1608275143680_56();
        this.instance.parent = this;
        this.instance.setTransform(76.5,76.5,1,1,0,0,0,76.5,76.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));
    
        // 图层_2
        this.instance_1 = new lib.happy_744_1608275143752_128();
        this.instance_1.parent = this;
        this.instance_1.setTransform(77.5,78.5,1,1,0,0,0,108.5,108.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.199},9).to({alpha:1},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-31,-30,217,217);
    
    
    (lib.happy_233_1608275143722_101 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_532_1608275143696_74("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(17.5,14,1,1,0,0,0,17.5,14);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:12.9,y:4.1},19).to({rotation:0,y:14},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,35,28);
    
    
    (lib.happy_230_1608275143700_78 = function(mode,startPosition,loop) {
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
        this.instance = new lib.happy_480_1608275143785_163();
        this.instance.parent = this;
    
        this.instance_1 = new lib.happy_886_1608275143693_72();
        this.instance_1.parent = this;
        this.instance_1.setTransform(76.5,76.5,1,1,0,0,0,76.5,76.5);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,153,153);
    
    
    (lib.happy_223_1608275143719_97 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_307_1608275143671_45("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(7,13,1,1,0,0,0,7,13);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:9.5,y:27},17).to({rotation:0,y:13},19).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,14,26);
    
    
    (lib.happy_206_1608275143729_110 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_983_1608275143667_41("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(10,8,1,1,0,0,0,10,8);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:8.1,rotation:8,x:12,y:20.1},19).to({regY:8,rotation:0,x:10,y:8},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,20,16);
    
    
    (lib.happy_184_1608275143679_55 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.pinguoicon01();
        this.instance.parent = this;
        this.instance.setTransform(23,23);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));
    
        // 图层_2
        this.instance_1 = new lib.happy_808_1608275143758_135();
        this.instance_1.parent = this;
        this.instance_1.setTransform(101.5,101.5,1,1,0,0,0,108.5,108.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.199},9).to({alpha:1},10).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-7,-7,217,217);
    
    
    (lib.happy_170_1608275143683_60 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_3
        this.instance = new lib.happy_767_1608275143781_159();
        this.instance.parent = this;
        this.instance.setTransform(33,81);
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({_off:true},4).wait(41));
    
        // abcd_1_3_29101
        this.instance_1 = new lib.happy_326_1608275143741_121();
        this.instance_1.parent = this;
        this.instance_1.setTransform(45.3,82.1,1,1,0,0,0,11.4,19.4);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({regY:19.7,scaleY:0.24,skewX:-0.6,y:83.6},4).to({_off:true},1).wait(4).to({_off:false},0).to({regY:19.4,scaleY:1,skewX:0,y:82.1},4).wait(37));
    
        // abcd_1_4_81636
        this.instance_2 = new lib.happy_959_1608275143685_62();
        this.instance_2.parent = this;
        this.instance_2.setTransform(125.8,86.1,1,1,0,0,0,11.4,19.4);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({regX:11.5,regY:19.7,scaleY:0.24,skewX:-0.6,x:125.9,y:84.6},4).to({_off:true},1).wait(4).to({_off:false},0).to({regX:11.4,regY:19.4,scaleY:1,skewX:0,x:125.8,y:86.1},4).wait(37));
    
        // 图层_1
        this.instance_3 = new lib.happy_667_1608275143782_160();
        this.instance_3.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(57));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,176,142);
    
    
    (lib.happy_113_1608275143732_113 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_778_1608275143762_140("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(9.5,9.5,1,1,0,0,0,9.5,9.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-1.5},17).to({y:9.5},17).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,19,19);
    
    
    (lib.happy_111_1608275143725_105 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_778_1608275143681_58("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(8,7.5,1,1,0,0,0,8,7.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15.7,y:2.5},19).to({rotation:0,y:7.5},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,16,15);
    
    
    (lib.happy_093_1608275143718_96 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_584_1608275143760_137("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(13.5,15,1,1,0,0,0,13.5,15);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-12.9,x:17.5,y:19.1},21).to({rotation:0,x:13.5,y:15},21).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,27,30);
    
    
    (lib.happy_079_1608275143756_133 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_130_1608275143673_48();
        this.instance.parent = this;
        this.instance.setTransform(16,23,1,1,0,0,0,16,23);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-23,y:33.1},19).to({rotation:0,y:23},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,32,46);
    
    
    (lib.happy_074_1608275143720_98 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_255_1608275143692_70("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(8,6,1,1,0,0,0,8,6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-14,x:12.1,y:-7},24).to({rotation:0,x:8,y:6},25).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,16,12);
    
    
    (lib.happy_068_1608275143717_95 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_246_1608275143754_130("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(16.5,42.5,1,1,0,0,0,16.5,42.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:8,x:16.6,y:54.6},19).to({rotation:0,x:16.5,y:42.5},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,33,85);
    
    
    (lib.happy_068_1608275143699_77 = function(mode,startPosition,loop) {
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
        this.instance = new lib.pinguoicon01();
        this.instance.parent = this;
        this.instance.setTransform(23,23);
    
        this.instance_1 = new lib.happy_184_1608275143679_55();
        this.instance_1.parent = this;
        this.instance_1.setTransform(76.5,76.5,1,1,0,0,0,76.5,76.5);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(23,23,153,153);
    
    
    (lib.happy_036_1608275143688_65 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_399_1608275143676_52();
        this.instance.parent = this;
        this.instance.setTransform(87.4,99.2,1.414,1.414,0,0,0,62,70.4);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_036_1608275143688_65, new cjs.Rectangle(-0.2,-0.3,175.3,199.4), null);
    
    
    (lib.happy_007_1608275143731_112 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_987_1608275143665_39("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(19.5,30,1,1,0,0,0,19.5,30);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.4,y:45},24).to({rotation:0,y:30},25).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,39,60);
    
    
    (lib.happy_876_1608275143692_71 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // abcd_1_5_15269
        this.instance = new lib.happy_447_1608275143687_63("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(104.1,150.5,0.611,0.611,-6.5,0,0,16.6,14.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:14.7,rotation:-1.7,x:104,y:151.6},8).to({regY:14.6,rotation:-6.5,x:104.1,y:150.5},9).to({regY:14.7,rotation:-1.7,x:104,y:151.6},9).to({regY:14.6,rotation:-6.5,x:104.1,y:150.5},8).wait(1));
    
        // abcd_1_6_3629
        this.instance_1 = new lib.happy_884_1608275143690_67("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(66.7,140.4,0.603,0.611,0,0,-1.3,7.3,8.4);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:8.6,scaleX:0.6,skewY:0.4,y:140.7},8).to({regY:8.4,scaleX:0.6,skewY:-1.3,y:140.4},9).to({regY:8.6,scaleX:0.6,skewY:0.4,y:140.7},9).to({regY:8.4,scaleX:0.6,skewY:-1.3,y:140.4},8).wait(1));
    
        // abcd_1_7_72669
        this.instance_2 = new lib.happy_194_1608275143763_141("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(167.7,148.8,0.611,0.611,5.8,0,0,54.3,12.7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:12.8,rotation:0.5,y:149.9},8).to({regY:12.7,rotation:5.8,y:148.8},9).to({regY:12.8,rotation:0.5,y:149.9},9).to({regY:12.7,rotation:5.8,y:148.8},8).wait(1));
    
        // abcd_1_8_93335
        this.instance_3 = new lib.happy_193_1608275143747_125("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(184.4,145.7,0.596,0.611,0,0,1.6,50.5,13.7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:50.6,regY:13.6,skewY:0,x:184.5,y:146},8).to({regX:50.5,regY:13.7,skewY:1.6,x:184.4,y:145.7},9).to({regX:50.6,regY:13.6,skewY:0,x:184.5,y:146},9).to({regX:50.5,regY:13.7,skewY:1.6,x:184.4,y:145.7},8).wait(1));
    
        // abcd_1_2_20924
        this.instance_4 = new lib.happy_170_1608275143683_60();
        this.instance_4.parent = this;
        this.instance_4.setTransform(135,144,1,1,0,0,0,85.6,142.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-1.2,x:135.1,y:146},8).to({rotation:-3,y:144},9).to({rotation:-1.2,y:146},9).to({rotation:0,x:135,y:144},8).wait(1));
    
        // abcd_1_9_5356
        this.instance_5 = new lib.happy_252_1608275143694_73("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(68,119.5,0.611,0.611,0,1.4,0,57.9,58.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).to({startPosition:0},8).to({startPosition:0},9).to({startPosition:0},9).to({startPosition:0},8).wait(1));
    
        // abcd_1_10_69165
        this.instance_6 = new lib.happy_502_1608275143748_126("synched",0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(50.9,94.1,0.611,0.611,-3.5,0,0,50.1,98.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:50.2,regY:98.7,rotation:1.3,y:94.2},8).to({regX:50.1,regY:98.5,rotation:-3.5,y:94.1},9).to({regX:50.2,regY:98.7,rotation:1.3,y:94.2},9).to({regX:50.1,regY:98.5,rotation:-3.5,y:94.1},8).wait(1));
    
        // abcd_1_11_24241
        this.instance_7 = new lib.happy_670_1608275143684_61("synched",0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(31.9,120.6,0.611,0.611,0,0,0,28.3,32.3);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_7).to({startPosition:0},8).to({startPosition:0},9).to({startPosition:0},9).to({startPosition:0},8).wait(1));
    
        // abcd_1_12_93633
        this.instance_8 = new lib.happy_560_1608275143716_94("synched",0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(15.1,114.7,0.611,0.611,0,0,0,24.7,30.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_8).to({startPosition:0},8).to({startPosition:0},9).to({startPosition:0},9).to({startPosition:0},8).wait(1));
    
        // abcd_1_14_77987
        this.instance_9 = new lib.happy_621_1608275143682_59("synched",0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(37.8,107,0.611,0.611,0,0,0,27.5,31.2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_9).to({startPosition:0},8).to({startPosition:0},9).to({startPosition:0},9).to({startPosition:0},8).wait(1));
    
        // abcd_1_15_2111
        this.instance_10 = new lib.happy_691_1608275143743_122("synched",0);
        this.instance_10.parent = this;
        this.instance_10.setTransform(133.5,142.7,0.611,0.611,0,0,0,52.2,19.4);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_10).to({startPosition:0},8).to({startPosition:0},9).to({startPosition:0},9).to({startPosition:0},8).wait(1));
    
        // abcd_1_16_34704
        this.instance_11 = new lib.happy_326_1608275143746_124("synched",0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(180.7,140.3,0.611,0.611,0,0,0,25.1,23.9);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_11).to({startPosition:0},8).to({startPosition:0},9).to({startPosition:0},9).to({startPosition:0},8).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,1.4,225.4,170.5);
    
    
    (lib.happy_701_1608275143704_81 = function(mode,startPosition,loop) {
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
        this.instance = new lib.happy_829_1608275143680_56();
        this.instance.parent = this;
        this.instance.setTransform(76.5,76.5,1,1,0,0,0,76.5,76.5);
    
        this.instance_1 = new lib.happy_250_1608275143663_38();
        this.instance_1.parent = this;
        this.instance_1.setTransform(76.5,76.5,1,1,0,0,0,76.5,76.5);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,153,153);
    
    
    (lib.happy_593_1608275143713_91 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_488_1608275143677_53("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(9.5,19,1,1,0,0,0,9.5,19);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-14.2,y:30},24).to({rotation:0,y:19},25).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,19,38);
    
    
    (lib.happy_371_1608275143675_51 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_3
        this.instance = new lib.happy_036_1608275143688_65();
        this.instance.parent = this;
        this.instance.setTransform(-42,-53,1,1,0,0,0,24,22.8);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.95,scaleY:0.95,x:-43.3,y:-49.4},4).wait(1).to({scaleX:1,scaleY:1,x:-42,y:-53},5).wait(10));
    
        // 图层_2
        this.instance_1 = new lib.happy_205_1608275143689_66();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-42.5,-51.5,1,1,0,0,0,50.5,50.5);
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(1).to({regY:50.4,scaleX:1.83,scaleY:1.83,y:-51.7,alpha:0},7).wait(8));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-66.2,-76.2,175.3,199.4);
    
    
    (lib.happy_209_1608275143668_42 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // abcd_1_2_22703
        this.instance = new lib.happy_068_1608275143717_95();
        this.instance.parent = this;
        this.instance.setTransform(645,87.9,1.218,1.218,0,0,0,16.6,42.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
        // abcd_1_3_27679
        this.instance_1 = new lib.happy_233_1608275143722_101();
        this.instance_1.parent = this;
        this.instance_1.setTransform(670.6,178.6,1.218,1.218,0,0,0,17.6,14.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
    
        // abcd_1_4_731
        this.instance_2 = new lib.happy_223_1608275143719_97();
        this.instance_2.parent = this;
        this.instance_2.setTransform(633.4,210.3,1.218,1.218,0,0,0,0.1,0.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));
    
        // abcd_1_7_58964
        this.instance_3 = new lib.happy_895_1608275143730_111();
        this.instance_3.parent = this;
        this.instance_3.setTransform(720.4,369.7,1.218,1.218,0,0,0,5.5,5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));
    
        // abcd_1_8_90179
        this.instance_4 = new lib.happy_630_1608275143728_108();
        this.instance_4.parent = this;
        this.instance_4.setTransform(60,302,1.218,1.218,0,0,0,8.5,7.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));
    
        // abcd_1_9_39046
        this.instance_5 = new lib.happy_592_1608275143734_115();
        this.instance_5.parent = this;
        this.instance_5.setTransform(661.4,393.6,1.218,1.218,0,0,0,16,23.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));
    
        // abcd_1_10_73627
        this.instance_6 = new lib.happy_554_1608275143735_116();
        this.instance_6.parent = this;
        this.instance_6.setTransform(688.2,460.5,1.218,1.218,0,0,0,40.1,24.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));
    
        // abcd_1_11_60616
        this.instance_7 = new lib.happy_597_1608275143725_106();
        this.instance_7.parent = this;
        this.instance_7.setTransform(635.3,529.8,1.218,1.218,0,0,0,9.6,5.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));
    
        // abcd_1_12_84369
        this.instance_8 = new lib.happy_111_1608275143725_105();
        this.instance_8.parent = this;
        this.instance_8.setTransform(638.3,587.1,1.218,1.218,0,0,0,8.1,7.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));
    
        // abcd_1_13_71132
        this.instance_9 = new lib.happy_705_1608275143721_100();
        this.instance_9.parent = this;
        this.instance_9.setTransform(569,626.1,1.218,1.218,0,0,0,12.1,11.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));
    
        // 元件_67
        this.instance_10 = new lib.happy_593_1608275143713_91();
        this.instance_10.parent = this;
        this.instance_10.setTransform(558.6,559.7,1.218,1.218,0,0,0,9.6,19.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));
    
        // abcd_1_16_17497
        this.instance_11 = new lib.happy_293_1608275143724_104();
        this.instance_11.parent = this;
        this.instance_11.setTransform(521.5,609,1.218,1.218,0,0,0,9.1,13.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));
    
        // abcd_1_22_14312
        this.instance_12 = new lib.happy_634_1608275143723_103();
        this.instance_12.parent = this;
        this.instance_12.setTransform(223.6,527.5,1.218,1.218,0,0,0,6.5,9.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));
    
        // abcd_1_23_58272
        this.instance_13 = new lib.happy_545_1608275143728_109();
        this.instance_13.parent = this;
        this.instance_13.setTransform(207.9,517.1,1.218,1.218,0,0,0,10.5,11.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));
    
        // abcd_1_25_53423
        this.instance_14 = new lib.happy_764_1608275143722_102();
        this.instance_14.parent = this;
        this.instance_14.setTransform(155.5,545,1.218,1.218,0,0,0,5.5,7);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));
    
        // abcd_1_26_73378
        this.instance_15 = new lib.happy_074_1608275143720_98();
        this.instance_15.parent = this;
        this.instance_15.setTransform(124.5,515.8,1.218,1.218,0,0,0,8.1,6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));
    
        // abcd_1_30_53915
        this.instance_16 = new lib.happy_206_1608275143729_110();
        this.instance_16.parent = this;
        this.instance_16.setTransform(11.2,530.5,1.218,1.218,0,0,0,10,8.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));
    
        // abcd_1_31_97877
        this.instance_17 = new lib.happy_319_1608275143733_114();
        this.instance_17.parent = this;
        this.instance_17.setTransform(52.1,484.9,1.218,1.218,0,0,0,9.6,12.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));
    
        // abcd_1_35_58588
        this.instance_18 = new lib.happy_007_1608275143731_112();
        this.instance_18.parent = this;
        this.instance_18.setTransform(32.6,217.5,1.218,1.218,0,0,0,19.6,30);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));
    
        // abcd_1_36_73302
        this.instance_19 = new lib.happy_113_1608275143732_113();
        this.instance_19.parent = this;
        this.instance_19.setTransform(95.8,232.9,1.218,1.218,0,0,0,9.5,9.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));
    
        // abcd_1_37_9429
        this.instance_20 = new lib.happy_093_1608275143718_96();
        this.instance_20.parent = this;
        this.instance_20.setTransform(115.1,195,1.218,1.218,0,0,0,13.6,15);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));
    
        // 元件_10
        this.instance_21 = new lib.happy_079_1608275143756_133();
        this.instance_21.parent = this;
        this.instance_21.setTransform(569,180.5,0.699,0.699,0,0,0,16.1,23);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));
    
        // 元件_9
        this.instance_22 = new lib.happy_420_1608275143757_134();
        this.instance_22.parent = this;
        this.instance_22.setTransform(613,199,0.699,0.699,0,0,0,15,19.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1));
    
        // 元件_12
        this.instance_23 = new lib.happy_729_1608275143663_37();
        this.instance_23.parent = this;
        this.instance_23.setTransform(658.1,291.1,0.652,0.652,0,0,0,14.1,33.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1));
    
        // 元件_15
        this.instance_24 = new lib.happy_695_1608275143714_92();
        this.instance_24.parent = this;
        this.instance_24.setTransform(22.7,373.2,0.791,0.791,0,0,0,16.6,19.6);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1));
    
        // 元件_14
        this.instance_25 = new lib.happy_461_1608275143761_138();
        this.instance_25.parent = this;
        this.instance_25.setTransform(43.8,386.2,0.791,0.791,0,0,0,11.2,17.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1,36.1,737.8,603.9);
    
    
    (lib.happy_186_1608275143737_118 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.giftItem03 = new lib.happy_346_1608275143703_80();
        this.giftItem03.parent = this;
        this.giftItem03.setTransform(488.5,485.5,1,1,0,0,0,76.5,76.5);
    
        this.giftItem04 = new lib.happy_230_1608275143700_78();
        this.giftItem04.parent = this;
        this.giftItem04.setTransform(312.5,486.5,1,1,0,0,0,76.5,76.5);
    
        this.giftItem05 = new lib.happy_422_1608275143704_82();
        this.giftItem05.parent = this;
        this.giftItem05.setTransform(136.5,486.5,1,1,0,0,0,76.5,76.5);
    
        this.giftItem02 = new lib.happy_068_1608275143699_77();
        this.giftItem02.parent = this;
        this.giftItem02.setTransform(479.5,285.5,1,1,0,0,0,76.5,76.5);
    
        this.giftItem01 = new lib.happy_701_1608275143704_81();
        this.giftItem01.parent = this;
        this.giftItem01.setTransform(322.5,308.5,1,1,0,0,0,76.5,76.5);
    
        this.instance = new lib.happy_432_1608275143700_79();
        this.instance.parent = this;
        this.instance.setTransform(313,317,1,1,0,0,0,313,317);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.giftItem01},{t:this.giftItem02},{t:this.giftItem05},{t:this.giftItem04},{t:this.giftItem03}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-102,-201.3,850,1633);
    
    
    (lib.happy_839_1608275143761_139 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_3
        this.instance = new lib.happy_371_1608275143675_51("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(54.9,61.5,0.582,0.582,0,0,0,0.1,0);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(16.3,17,102.1,116.1);
    
    
    (lib.happy_778_1608275143658_32 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_14 = function() {
            this.stop()
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));
    
        // 图层 6
        this.headIconBtn = new lib.happy_839_1608275143761_139();
        this.headIconBtn.parent = this;
        this.headIconBtn.setTransform(-1.2,313.1,1.273,1.273,0,0,0,85.4,88.8);
        this.headIconBtn.alpha = 0;
        this.headIconBtn._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.headIconBtn).wait(8).to({_off:false},0).to({alpha:1},6).wait(1));
    
        // 图层 5
        this.instance = new lib.happy_735_1608275143646_23();
        this.instance.parent = this;
        this.instance.setTransform(-327.5,-7);
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(1));
    
        // 图层 1
        this.instance_1 = new lib.元件3("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(1.9,0.4,0.55,0.55,0,0,0,0.8,0.9);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.7,regY:1,scaleX:1.12,scaleY:1.13,x:-170.4,y:137.3},14).wait(1));
    
        // 图层 4
        this.instance_2 = new lib.happy_508_1608275143648_24();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-178.5,305.7);
        this.instance_2.alpha = 0.059;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0.559},14).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-603.5,-510.8,850,1633);
    
    
    // stage content:
    (lib.layer03 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_70 = function() {
            this.stop()
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(70).call(this.frame_70).wait(1));
    
        // 图层 2
        this.shadePop = new lib.happy_311_1608275143659_33();
        this.shadePop.parent = this;
        this.shadePop.setTransform(379.5,669);
        this.shadePop.alpha = 0.5;
        this.shadePop.visible = false;
    
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("rgba(0,0,0,0.008)").ss(1,1,1).p("EhFXh3cMCKvAAAMAAADu5MiKvAAAg");
        this.shape.setTransform(379.5,669);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.shadePop}]},70).wait(1));
    
        // 图层 4
        this.shadePop02 = new lib.happy_778_1608275143658_32();
        this.shadePop02.parent = this;
        this.shadePop02.setTransform(562.5,486.5);
        this.shadePop02._off = true;
        this.shadePop02.visible = false;
    
        this.timeline.addTween(cjs.Tween.get(this.shadePop02).wait(70).to({_off:false},0).wait(1));
    
        // 巧虎
        this.instance = new lib.happy_876_1608275143692_71();
        this.instance.parent = this;
        this.instance.setTransform(-313.9,254.3,1,1,0,0,0,125.7,155.7);
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({x:406.1},8,cjs.Ease.get(1)).to({x:376.1},8,cjs.Ease.get(1)).to({x:386.1},11,cjs.Ease.get(1)).wait(38));
    
        // 图
        this.giftItemBox = new lib.happy_186_1608275143737_118();
        this.giftItemBox.parent = this;
        this.giftItemBox.setTransform(-325,495.3,1,1,0,0,0,313,317);
        this.giftItemBox._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.giftItemBox).wait(6).to({_off:false},0).to({x:395},8,cjs.Ease.get(1)).to({x:365},8,cjs.Ease.get(1)).to({x:371},4,cjs.Ease.get(1)).to({x:375},7).wait(38));
    
        // 我是巧虎_今天吃什么呀_
        this.instance_1 = new lib.happy_964_1608275143709_88();
        this.instance_1.parent = this;
        this.instance_1.setTransform(498.1,231,0.132,0.132,0,0,0,3.1,129);
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({regY:129.1,scaleX:1.1,scaleY:1.1,x:508.1,y:252},8,cjs.Ease.get(1)).to({scaleX:0.95,scaleY:0.95,x:498.1,y:232.7},8,cjs.Ease.get(1)).to({regX:3,regY:129,scaleX:1,scaleY:1,x:498,y:239},10,cjs.Ease.get(1)).wait(27));
    
        // 图层 3
        this.playGameStartBtn = new lib.元件2();
        this.playGameStartBtn.parent = this;
        this.playGameStartBtn.setTransform(387,883.5);
        this.playGameStartBtn.alpha = 0.012;
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("rgba(0,0,0,0.008)").ss(1,1,1).p("EgnIgQZMBORAAAMAAAAgzMhORAAAg");
        this.shape_1.setTransform(387,883.5);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.playGameStartBtn}]}).wait(71));
    
        // 手
        this.instance_2 = new lib.happy_839_1608275143761_139();
        this.instance_2.parent = this;
        this.instance_2.setTransform(574.1,953.1,1.273,1.273,0,0,0,85.4,88.8);
        this.instance_2.alpha = 0;
        this.instance_2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).to({alpha:1},6).wait(26));
    
        // 按钮
        this.instance_3 = new lib.happy_604_1608275143666_40();
        this.instance_3.parent = this;
        this.instance_3.setTransform(372.5,906.5,1,1,0,0,0,164.5,56.5);
        this.instance_3._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({y:876.5},8,cjs.Ease.get(1)).to({y:906.5},7,cjs.Ease.get(1)).to({y:886.5},10,cjs.Ease.get(1)).wait(20));
    
        // 彩带
        this.instance_4 = new lib.happy_209_1608275143668_42();
        this.instance_4.parent = this;
        this.instance_4.setTransform(382.1,725.1,0.113,0.113,0,0,0,362.2,583.1);
        this.instance_4._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({regX:362.1,scaleX:1.05,scaleY:1.05,y:725},10,cjs.Ease.get(1)).to({regX:362.2,scaleX:0.95,scaleY:0.95},8,cjs.Ease.get(1)).to({regX:362,regY:583,scaleX:1,scaleY:1,x:382},9,cjs.Ease.get(1)).wait(33));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(371,666,956,1675);
    // library properties:
    lib.properties = {
        width: 750,
        height: 1332,
        fps: 25,
        color: "#FFFFFF",
        opacity: 1.00,
        webfonts: {},
        manifest: [
            {src:"images/layer03/layer03_atlas_.png", id:"layer03_atlas_"},
            {src:"images/layer03/layer03_atlas_2.png", id:"layer03_atlas_2"},
            {src:"images/layer03/layer03_atlas_3.png", id:"layer03_atlas_3"}
        ],
        preloads: []
    };
    
    
    
    
    })