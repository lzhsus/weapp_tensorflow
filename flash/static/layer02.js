module.exports=(function (lib, img, cjs, ss, an) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtInst = {}; 
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [
            {name:"layer02_atlas_", frames: [[704,41,29,43],[424,385,201,201],[704,0,33,39],[406,791,332,113],[0,560,410,126],[0,688,201,201],[618,54,30,39],[587,0,32,46],[557,69,22,34],[581,92,32,14],[0,891,311,92],[650,0,25,55],[313,960,194,33],[313,906,257,52],[650,57,42,23],[557,0,28,67],[0,0,555,383],[203,688,201,201],[677,0,25,54],[587,48,29,42],[650,82,29,25],[681,86,37,18],[0,385,422,173],[412,588,201,201],[621,0,27,52]]}
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
    
    
    
    (lib.happy_004_1607504154388_68 = function() {
        this.spriteSheet = ss["layer02_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_017_1607504154396_80 = function() {
        this.spriteSheet = ss["layer02_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_029_1607504154394_78 = function() {
        this.spriteSheet = ss["layer02_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_082_1607504154385_61 = function() {
        this.spriteSheet = ss["layer02_atlas_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_088_1607504154386_63 = function() {
        this.spriteSheet = ss["layer02_atlas_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_090_1607504154399_83 = function() {
        this.spriteSheet = ss["layer02_atlas_"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_091_1607504154386_65 = function() {
        this.spriteSheet = ss["layer02_atlas_"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_164_1607504154387_67 = function() {
        this.spriteSheet = ss["layer02_atlas_"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_183_1607504154395_79 = function() {
        this.spriteSheet = ss["layer02_atlas_"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_264_1607504154392_75 = function() {
        this.spriteSheet = ss["layer02_atlas_"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_273_1607504154404_87 = function() {
        this.spriteSheet = ss["layer02_atlas_"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_330_1607504154393_77 = function() {
        this.spriteSheet = ss["layer02_atlas_"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_414_1607504154401_85 = function() {
        this.spriteSheet = ss["layer02_atlas_"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_414_1607504154403_86 = function() {
        this.spriteSheet = ss["layer02_atlas_"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_448_1607504154391_74 = function() {
        this.spriteSheet = ss["layer02_atlas_"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_474_1607504154389_70 = function() {
        this.spriteSheet = ss["layer02_atlas_"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_505_1607504154389_71 = function() {
        this.spriteSheet = ss["layer02_atlas_"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_586_1607504154398_82 = function() {
        this.spriteSheet = ss["layer02_atlas_"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_624_1607504154390_73 = function() {
        this.spriteSheet = ss["layer02_atlas_"];
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_643_1607504154390_72 = function() {
        this.spriteSheet = ss["layer02_atlas_"];
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_695_1607504154387_66 = function() {
        this.spriteSheet = ss["layer02_atlas_"];
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_724_1607504154393_76 = function() {
        this.spriteSheet = ss["layer02_atlas_"];
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_750_1607504154386_64 = function() {
        this.spriteSheet = ss["layer02_atlas_"];
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_788_1607504154398_81 = function() {
        this.spriteSheet = ss["layer02_atlas_"];
        this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_797_1607504154389_69 = function() {
        this.spriteSheet = ss["layer02_atlas_"];
        this.gotoAndStop(24);
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
    
    
    (lib.happy_542_1607504154346_12 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_090_1607504154399_83();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_542_1607504154346_12, new cjs.Rectangle(0,0,201,201), null);
    
    
    (lib.happy_994_1607504154350_16 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_586_1607504154398_82();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_994_1607504154350_16, new cjs.Rectangle(0,0,201,201), null);
    
    
    (lib.happy_968_1607504154349_15 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_788_1607504154398_81();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_968_1607504154349_15, new cjs.Rectangle(0,0,201,201), null);
    
    
    (lib.happy_419_1607504154369_39 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_750_1607504154386_64();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_419_1607504154369_39, new cjs.Rectangle(0,0,422,173), null);
    
    
    (lib.happy_229_1607504154368_38 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_088_1607504154386_63();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_229_1607504154368_38, new cjs.Rectangle(0,0,410,126), null);
    
    
    (lib.happy_020_1607504154366_37 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_414_1607504154403_86();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_020_1607504154366_37, new cjs.Rectangle(0,0,257,52), null);
    
    
    (lib.happy_693_1607504154360_29 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_724_1607504154393_76();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_693_1607504154360_29, new cjs.Rectangle(0,0,37,18), null);
    
    
    (lib.happy_672_1607504154360_28 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_264_1607504154392_75();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_672_1607504154360_28, new cjs.Rectangle(0,0,32,14), null);
    
    
    (lib.happy_667_1607504154358_25 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_643_1607504154390_72();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_667_1607504154358_25, new cjs.Rectangle(0,0,29,42), null);
    
    
    (lib.happy_580_1607504154355_22 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_004_1607504154388_68();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_580_1607504154355_22, new cjs.Rectangle(0,0,29,43), null);
    
    
    (lib.happy_488_1607504154348_14 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_017_1607504154396_80();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_488_1607504154348_14, new cjs.Rectangle(0,0,201,201), null);
    
    
    (lib.happy_477_1607504154357_24 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_474_1607504154389_70();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_477_1607504154357_24, new cjs.Rectangle(0,0,28,67), null);
    
    
    (lib.happy_474_1607504154352_18 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_414_1607504154401_85();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_474_1607504154352_18, new cjs.Rectangle(0,0,194,33), null);
    
    
    (lib.happy_443_1607504154359_27 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_448_1607504154391_74();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_443_1607504154359_27, new cjs.Rectangle(0,0,42,23), null);
    
    
    (lib.happy_417_1607504154362_32 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_183_1607504154395_79();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_417_1607504154362_32, new cjs.Rectangle(0,0,22,34), null);
    
    
    (lib.happy_402_1607504154353_19 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_091_1607504154386_65();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_402_1607504154353_19, new cjs.Rectangle(0,0,30,39), null);
    
    
    (lib.happy_318_1607504154359_26 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_624_1607504154390_73();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_318_1607504154359_26, new cjs.Rectangle(0,0,25,54), null);
    
    
    (lib.happy_266_1607504154354_21 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_164_1607504154387_67();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_266_1607504154354_21, new cjs.Rectangle(0,0,32,46), null);
    
    
    (lib.happy_848_1607504154363_33 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_082_1607504154385_61();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_848_1607504154363_33, new cjs.Rectangle(0,0,332,113), null);
    
    
    (lib.happy_464_1607504154363_34 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_273_1607504154404_87();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_464_1607504154363_34, new cjs.Rectangle(0,0,311,92), null);
    
    
    (lib.happy_134_1607504154356_23 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_797_1607504154389_69();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_134_1607504154356_23, new cjs.Rectangle(0,0,27,52), null);
    
    
    (lib.happy_105_1607504154361_30 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_330_1607504154393_77();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_105_1607504154361_30, new cjs.Rectangle(0,0,25,55), null);
    
    
    (lib.happy_029_1607504154362_31 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_029_1607504154394_78();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_029_1607504154362_31, new cjs.Rectangle(0,0,33,39), null);
    
    
    (lib.happy_024_1607504154347_13 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_505_1607504154389_71();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_024_1607504154347_13, new cjs.Rectangle(0,0,555,383), null);
    
    
    (lib.happy_045_1607504154381_57 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_695_1607504154387_66();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_045_1607504154381_57, new cjs.Rectangle(0,0,29,25), null);
    
    
    (lib.happy_966_1607504154376_50 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_477_1607504154357_24();
        this.instance.parent = this;
        this.instance.setTransform(14,33.5,1,1,0,0,0,14,33.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-13.5,x:14.1,y:43.6},19).to({rotation:0,x:14,y:33.5},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,28,67);
    
    
    (lib.happy_825_1607504154377_52 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_417_1607504154362_32();
        this.instance.parent = this;
        this.instance.setTransform(11,17,1,1,0,0,0,11,17);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-14.7,y:27},19).to({rotation:0,y:17},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,22,34);
    
    
    (lib.happy_784_1607504154376_51 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_667_1607504154358_25();
        this.instance.parent = this;
        this.instance.setTransform(14.5,21,1,1,0,0,0,14.5,21);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:21.1,rotation:22.2,y:31.2},19).to({regY:21,rotation:0,y:21},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,29,42);
    
    
    (lib.happy_655_1607504154371_42 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_9
        this.instance = new lib.happy_020_1607504154366_37();
        this.instance.parent = this;
        this.instance.setTransform(216.8,91.9,1,1,-1.7,0,0,128.6,26);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:26.1,rotation:3.5,x:216.3,y:92.5},14).to({regY:26,rotation:-1.7,x:216.8,y:91.9},15).wait(1));
    
        // 图层_10
        this.instance_1 = new lib.happy_229_1607504154368_38();
        this.instance_1.parent = this;
        this.instance_1.setTransform(211.1,89,1,1,-1.7,0,0,205,63);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:205.1,regY:63.1,rotation:3.5,y:89.2},14).to({regX:205,regY:63,rotation:-1.7,y:89},15).wait(1));
    
        // 图层_11
        this.instance_2 = new lib.happy_419_1607504154369_39();
        this.instance_2.parent = this;
        this.instance_2.setTransform(211,86.5,1,1,-1.7,0,0,211,86.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:2},14).to({rotation:-1.7},15).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.4,-6.2,427,185.5);
    
    
    (lib.happy_553_1607504154371_43 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_474_1607504154352_18();
        this.instance.parent = this;
        this.instance.setTransform(97,16.6,1,1,-2.5,0,0,97,16.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2,x:97.1},14).to({rotation:-2.5,x:97},15).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-0.6,-4.1,195.2,41.3);
    
    
    (lib.happy_507_1607504154373_45 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_318_1607504154359_26();
        this.instance.parent = this;
        this.instance.setTransform(12.5,31,1,1,0,0,0,12.5,27);
    
        this.instance_1 = new lib.happy_443_1607504154359_27();
        this.instance_1.parent = this;
        this.instance_1.setTransform(48,11.5,1,1,0,0,0,21,11.5);
    
        this.instance_2 = new lib.happy_672_1607504154360_28();
        this.instance_2.parent = this;
        this.instance_2.setTransform(55,20,1,1,0,0,0,16,7);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,71,58);
    
    
    (lib.happy_441_1607504154378_53 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_029_1607504154362_31();
        this.instance.parent = this;
        this.instance.setTransform(16.5,19.5,1,1,0,0,0,16.5,19.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:12.7,x:16.6,y:29.5},19).to({rotation:0,x:16.5,y:19.5},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,33,39);
    
    
    (lib.happy_256_1607504154373_46 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_402_1607504154353_19();
        this.instance.parent = this;
        this.instance.setTransform(15,19.5,1,1,0,0,0,15,19.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_256_1607504154373_46, new cjs.Rectangle(0,0,30,39), null);
    
    
    (lib.happy_245_1607504154383_59 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_488_1607504154348_14();
        this.instance.parent = this;
        this.instance.setTransform(960.9,101,1,1,0,0,0,100.5,100.5);
    
        this.instance_1 = new lib.happy_542_1607504154346_12();
        this.instance_1.parent = this;
        this.instance_1.setTransform(1606.5,101.5,1,1,0,0,0,100.5,100.5);
    
        this.instance_2 = new lib.happy_994_1607504154350_16();
        this.instance_2.parent = this;
        this.instance_2.setTransform(1391.1,101,1,1,0,0,0,100.5,100.5);
    
        this.instance_3 = new lib.happy_968_1607504154349_15();
        this.instance_3.parent = this;
        this.instance_3.setTransform(1176,101,1,1,0,0,0,100.5,100.5);
    
        this.instance_4 = new lib.happy_488_1607504154348_14();
        this.instance_4.parent = this;
        this.instance_4.setTransform(100.5,100.5,1,1,0,0,0,100.5,100.5);
    
        this.instance_5 = new lib.happy_542_1607504154346_12();
        this.instance_5.parent = this;
        this.instance_5.setTransform(745.8,101,1,1,0,0,0,100.5,100.5);
    
        this.instance_6 = new lib.happy_994_1607504154350_16();
        this.instance_6.parent = this;
        this.instance_6.setTransform(530.7,100.5,1,1,0,0,0,100.5,100.5);
    
        this.instance_7 = new lib.happy_968_1607504154349_15();
        this.instance_7.parent = this;
        this.instance_7.setTransform(315.6,100.5,1,1,0,0,0,100.5,100.5);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_245_1607504154383_59, new cjs.Rectangle(0,0,1707,202), null);
    
    
    (lib.happy_244_1607504154380_56 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_507_1607504154373_45();
        this.instance.parent = this;
        this.instance.setTransform(35.5,29,1,1,0,0,0,35.5,29);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:10.9,x:35.6,y:39},19).to({rotation:0,x:35.5,y:29},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,71,58);
    
    
    (lib.happy_170_1607504154379_55 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_693_1607504154360_29();
        this.instance.parent = this;
        this.instance.setTransform(18.5,9,1,1,0,0,0,18.5,9);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-14.7,x:18.6,y:19.1},19).to({rotation:0,x:18.5,y:9},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,37,18);
    
    
    (lib.happy_162_1607504154372_44 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_580_1607504154355_22();
        this.instance.parent = this;
        this.instance.setTransform(35.5,21.5,1,1,0,0,0,14.5,21.5);
    
        this.instance_1 = new lib.happy_134_1607504154356_23();
        this.instance_1.parent = this;
        this.instance_1.setTransform(13.5,40,1,1,0,0,0,13.5,26);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,50,66);
    
    
    (lib.happy_130_1607504154384_60 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_464_1607504154363_34();
        this.instance.parent = this;
        this.instance.setTransform(165.5,52,1,1,0,0,0,155.5,46);
    
        this.instance_1 = new lib.happy_848_1607504154363_33();
        this.instance_1.parent = this;
        this.instance_1.setTransform(166,56.5,1,1,0,0,0,166,56.5);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_130_1607504154384_60, new cjs.Rectangle(0,0,332,113), null);
    
    
    (lib.happy_108_1607504154354_20 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_045_1607504154381_57();
        this.instance.parent = this;
        this.instance.setTransform(14.5,12.5,1,1,0,0,0,14.5,12.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({y:23.5},19).to({y:12.5},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,29,25);
    
    
    (lib.happy_036_1607504154375_48 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_266_1607504154354_21();
        this.instance.parent = this;
        this.instance.setTransform(16,23,1,1,0,0,0,16,23);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-23,y:33.1},19).to({rotation:0,y:23},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,32,46);
    
    
    (lib.happy_018_1607504154378_54 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_105_1607504154361_30();
        this.instance.parent = this;
        this.instance.setTransform(12.5,27.5,1,1,0,0,0,12.5,27.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:27.6,rotation:-8.5,x:12.6,y:37.6},19).to({regY:27.5,rotation:0,x:12.5,y:27.5},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,25,55);
    
    
    (lib.happy_483_1607504154382_58 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_245_1607504154383_59();
        this.instance.parent = this;
        this.instance.setTransform(403.3,100.8,1,1,0,0,0,423.3,100.8);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-453.4},198).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-20,0,1707,202);
    
    
    (lib.happy_471_1607504154374_47 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_256_1607504154373_46();
        this.instance.parent = this;
        this.instance.setTransform(15,19.5,1,1,0,0,0,15,19.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:15.1,regY:19.6,rotation:14.2,x:15.1,y:29.6},19).to({regX:15,regY:19.5,rotation:0,x:15,y:19.5},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,30,39);
    
    
    (lib.happy_435_1607504154375_49 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_162_1607504154372_44();
        this.instance.parent = this;
        this.instance.setTransform(25,33,1,1,0,0,0,25,33);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:25.1,rotation:12.5,x:25.1,y:43.1},19).to({regX:25,rotation:0,x:25,y:33},20).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,50,66);
    
    
    (lib.happy_841_1607504154370_41 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 元件_7
        this.instance = new lib.happy_244_1607504154380_56("synched",19);
        this.instance.parent = this;
        this.instance.setTransform(113.5,327,1,1,0,0,0,35.5,29);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));
    
        // 元件_6
        this.instance_1 = new lib.happy_435_1607504154375_49("synched",14);
        this.instance_1.parent = this;
        this.instance_1.setTransform(416,131,1,1,0,0,0,25,33);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));
    
        // 图层_16
        this.instance_2 = new lib.happy_036_1607504154375_48("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(560,198,1,1,0,0,0,16,23);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));
    
        // 图层_14
        this.instance_3 = new lib.happy_471_1607504154374_47("synched",4);
        this.instance_3.parent = this;
        this.instance_3.setTransform(623,224.5,1,1,0,0,0,15,19.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));
    
        // 图层_15
        this.instance_4 = new lib.happy_108_1607504154354_20("synched",19);
        this.instance_4.parent = this;
        this.instance_4.setTransform(526.5,289.5,1,1,0,0,0,14.5,12.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40));
    
        // 图层_19
        this.instance_5 = new lib.happy_966_1607504154376_50("synched",9);
        this.instance_5.parent = this;
        this.instance_5.setTransform(405,33.5,1,1,0,0,0,14,33.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(40));
    
        // 图层_20
        this.instance_6 = new lib.happy_784_1607504154376_51("synched",29);
        this.instance_6.parent = this;
        this.instance_6.setTransform(283.5,41,1,1,0,0,0,14.5,21);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40));
    
        // 图层_24
        this.instance_7 = new lib.happy_170_1607504154379_55("synched",29);
        this.instance_7.parent = this;
        this.instance_7.setTransform(18.5,257,1,1,0,0,0,18.5,9);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(40));
    
        // 图层_25
        this.instance_8 = new lib.happy_018_1607504154378_54("synched",0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(59.5,159.5,1,1,0,0,0,12.5,27.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(40));
    
        // 图层_26
        this.instance_9 = new lib.happy_441_1607504154378_53("synched",9);
        this.instance_9.parent = this;
        this.instance_9.setTransform(99.5,62.5,1,1,0,0,0,16.5,19.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(40));
    
        // 图层_27
        this.instance_10 = new lib.happy_825_1607504154377_52("synched",24);
        this.instance_10.parent = this;
        this.instance_10.setTransform(126,79,1,1,0,0,0,11,17);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(40));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-0.9,3.5,639.9,360);
    
    
    // stage content:
    (lib.layer02 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_75 = function() {
            this.stop()
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(75).call(this.frame_75).wait(1));
    
        // 美食
        this.instance = new lib.happy_553_1607504154371_43();
        this.instance.parent = this;
        this.instance.setTransform(370,719.5,1,1,0,0,0,97,16.5);
        this.instance.alpha = 0;
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({y:679.5,alpha:1},6,cjs.Ease.get(1)).to({y:709.5},7,cjs.Ease.get(1)).to({y:699.5},10,cjs.Ease.get(1)).wait(48));
    
        // 点击试玩_
        this.playGameTry = new lib.happy_130_1607504154384_60();
        this.playGameTry.parent = this;
        this.playGameTry.setTransform(370,1108.5,1,1,0,0,0,166,56.5);
        this.playGameTry.alpha = 0;
        this.playGameTry._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.playGameTry).wait(13).to({_off:false},0).to({y:1058.5,alpha:1},7,cjs.Ease.get(1)).to({y:1068.5},7,cjs.Ease.get(1)).wait(49));
    
        // 图条
        this.instance_1 = new lib.happy_483_1607504154382_58();
        this.instance_1.parent = this;
        this.instance_1.setTransform(1202.3,867.8,1,1,0,0,0,423.3,100.8);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:405.1,regY:101,x:900,y:868},0).wait(1).to({x:797.9},0).wait(1).to({x:726.1},0).wait(1).to({x:670.4},0).wait(1).to({x:625.1},0).wait(1).to({x:587.4},0).wait(1).to({x:555.6},0).wait(1).to({x:528.6},0).wait(1).to({x:505.9},0).wait(1).to({x:486.8},0).wait(1).to({x:471},0).wait(1).to({x:458.5},0).wait(1).to({x:449.2},0).wait(1).to({x:443.3},0).wait(1).to({regX:423.3,regY:100.8,x:459.3,y:867.8},0).wait(61));
    
        // 图
        this.instance_2 = new lib.happy_024_1607504154347_13();
        this.instance_2.parent = this;
        this.instance_2.setTransform(1034.5,468.5,1,1,0,0,0,277.5,191.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:354.5},7,cjs.Ease.get(1)).to({x:384.5},7,cjs.Ease.get(1)).to({x:374.5},9,cjs.Ease.get(1)).wait(53));
    
        // _3月
        this.instance_3 = new lib.happy_655_1607504154371_42();
        this.instance_3.parent = this;
        this.instance_3.setTransform(368,220.5,0.808,0.808,0,0,0,211,86.5);
        this.instance_3.alpha = 0;
        this.instance_3._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({scaleX:1,scaleY:1,y:160.5,alpha:1},7).to({y:189.5},7).to({y:180.5},9).wait(46));
    
        // 彩带
        this.instance_4 = new lib.happy_841_1607504154370_41();
        this.instance_4.parent = this;
        this.instance_4.setTransform(369,537.1,0.432,0.432,0,0,0,318.9,317);
        this.instance_4._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({regX:319.1,regY:317.1,scaleX:1.1,scaleY:1.1,x:369.1},7,cjs.Ease.get(1)).to({scaleX:0.95,scaleY:0.95},6,cjs.Ease.get(1)).to({regX:319,regY:317,scaleX:1,scaleY:1,x:369,y:537},12,cjs.Ease.get(1)).wait(40));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(375,603,2466,1206);
    // library properties:
    lib.properties = {
        width: 750,
        height: 1206,
        fps: 25,
        color: "#FFFFFF",
        opacity: 1.00,
        webfonts: {},
        manifest: [
            {src:"images/layer02/layer02_atlas_.png", id:"layer02_atlas_"}
        ],
        preloads: []
    };
    
    
    
    
    })