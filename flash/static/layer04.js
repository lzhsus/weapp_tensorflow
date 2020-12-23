module.exports=(function (lib, img, cjs, ss, an) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtInst = {}; 
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [
            {name:"layer04_atlas_", frames: [[0,0,750,595]]},
            {name:"layer04_atlas_2", frames: [[0,0,568,610]]},
            {name:"layer04_atlas_3", frames: [[0,0,569,597]]},
            {name:"layer04_atlas_4", frames: [[0,0,467,606]]},
            {name:"layer04_atlas_5", frames: [[0,0,431,607]]},
            {name:"layer04_atlas_6", frames: [[0,611,422,173],[599,0,124,141],[406,502,101,101],[406,348,285,152],[406,0,191,346],[599,143,119,119],[424,605,86,86],[0,0,404,609]]}
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
    
    
    
    (lib.happy_001_1608260428106_19 = function() {
        this.spriteSheet = ss["layer04_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_049_1608260428106_15 = function() {
        this.spriteSheet = ss["layer04_atlas_6"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_129_1607500652933_201 = function() {
        this.spriteSheet = ss["layer04_atlas_6"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_356_1607500652894_173 = function() {
        this.spriteSheet = ss["layer04_atlas_6"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_466_1608260428106_161 = function() {
        this.spriteSheet = ss["layer04_atlas_6"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_509_1608260428106_17 = function() {
        this.spriteSheet = ss["layer04_atlas_6"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_755_1608260428105_14 = function() {
        this.spriteSheet = ss["layer04_atlas_6"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.happy_886_1608260428105_13 = function() {
        this.spriteSheet = ss["layer04_atlas_6"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.亮度_对比度1 = function() {
        this.spriteSheet = ss["layer04_atlas_2"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.亮度_对比度2 = function() {
        this.spriteSheet = ss["layer04_atlas_5"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.亮度_对比度3 = function() {
        this.spriteSheet = ss["layer04_atlas_6"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.亮度_对比度4 = function() {
        this.spriteSheet = ss["layer04_atlas_4"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.亮度_对比度5 = function() {
        this.spriteSheet = ss["layer04_atlas_3"];
        this.gotoAndStop(0);
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
    
    
    (lib.亮度_对比度5_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层 1
        this.instance = new lib.亮度_对比度5();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.亮度_对比度5_1, new cjs.Rectangle(0,0,569,597), null);
    
    
    (lib.亮度_对比度4_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层 1
        this.instance = new lib.亮度_对比度4();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.亮度_对比度4_1, new cjs.Rectangle(0,0,467,606), null);
    
    
    (lib.亮度_对比度3_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层 1
        this.instance = new lib.亮度_对比度3();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.亮度_对比度3_1, new cjs.Rectangle(0,0,404,609), null);
    
    
    (lib.亮度_对比度2_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层 1
        this.instance = new lib.亮度_对比度2();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.亮度_对比度2_1, new cjs.Rectangle(0,0,431,607), null);
    
    
    (lib.亮度_对比度1_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层 1
        this.instance = new lib.亮度_对比度1();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.亮度_对比度1_1, new cjs.Rectangle(0,0,568,610), null);
    
    
    (lib.happy_323_1607500652868_145 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_356_1607500652894_173();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_323_1607500652868_145, new cjs.Rectangle(0,0,101,101), null);
    
    
    (lib.happy_667_1607500652845_44 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_129_1607500652933_201();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_667_1607500652845_44, new cjs.Rectangle(0,0,124,141), null);
    
    
    (lib.happy_810_1608260428103_5 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层 1
        this.instance = new lib.happy_755_1608260428105_14();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_810_1608260428103_5, new cjs.Rectangle(0,0,119,119), null);
    
    
    (lib.happy_798_1608260428101_4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层 1
        this.instance = new lib.happy_886_1608260428105_13();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_798_1608260428101_4, new cjs.Rectangle(0,0,86,86), null);
    
    
    (lib.happy_454_1608260428104_7 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层 1
        this.instance = new lib.happy_049_1608260428106_15();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_454_1608260428104_7, new cjs.Rectangle(0,0,422,173), null);
    
    
    (lib.happy_438_1608260428105_11 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层 1
        this.instance = new lib.happy_001_1608260428106_19();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_438_1608260428105_11, new cjs.Rectangle(0,0,750,595), null);
    
    
    (lib.happy_523_1608260428103_6 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
    }).prototype = getMCSymbolPrototype(lib.happy_523_1608260428103_6, null, null);
    
    
    (lib.元件5 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("EhBeA+nMAAAh9NMCC9AAAMAAAB9Ng");
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(-419,-400.7,838.2,801.4), null);
    
    
    (lib.元件3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层 1
        this.instance = new lib.happy_466_1608260428106_161();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,285,152), null);
    
    
    (lib.元件1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层 1
        this.instance = new lib.happy_509_1608260428106_17();
        this.instance.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,191,346), null);
    
    
    (lib.happy_229_1607500652868_144 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.happy_667_1607500652845_44();
        this.instance.parent = this;
        this.instance.setTransform(87.4,99.2,1.414,1.414,0,0,0,62,70.4);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.happy_229_1607500652868_144, new cjs.Rectangle(-0.2,-0.3,175.3,199.4), null);
    
    
    (lib.happy_844_1607500652854_73 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_3
        this.instance = new lib.happy_229_1607500652868_144();
        this.instance.parent = this;
        this.instance.setTransform(-42,-53,1,1,0,0,0,24,22.8);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.95,scaleY:0.95,x:-43.3,y:-49.4},4).wait(1).to({scaleX:1,scaleY:1,x:-42,y:-53},5).wait(10));
    
        // 图层_2
        this.instance_1 = new lib.happy_323_1607500652868_145();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-42.5,-51.5,1,1,0,0,0,50.5,50.5);
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(1).to({regY:50.4,scaleX:1.83,scaleY:1.83,y:-51.7,alpha:0},7).wait(8));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-66.2,-76.2,175.3,199.4);
    
    
    (lib.happy_627_1608260428104_9 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层 1
        this.instance = new lib.元件1();
        this.instance.parent = this;
        this.instance.setTransform(95.5,173,1,1,0,0,0,95.5,173);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({y:153},14).to({y:173},15).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,191,346);
    
    
    (lib.happy_063_1608260428104_8 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层 1
        this.instance = new lib.元件3();
        this.instance.parent = this;
        this.instance.setTransform(142.5,76,1,1,0,0,0,142.5,76);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1,x:142.6,y:76.1},12).to({scaleX:1,scaleY:1,x:142.5,y:76},11).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,285,152);
    
    
    (lib.happy_386_1607500652852_66 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_3
        this.instance = new lib.happy_844_1607500652854_73("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(54.9,61.5,0.582,0.582,0,0,0,0.1,0);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(16.3,17,102.1,116.1);
    
    
    (lib.元件4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层 1
        this.instance = new lib.亮度_对比度1_1();
        this.instance.parent = this;
        this.instance.setTransform(284,307,1,1,0,0,0,284,305);
    
        this.instance_1 = new lib.亮度_对比度2_1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(251.5,306.5,1,1,0,0,0,215.5,303.5);
    
        this.instance_2 = new lib.亮度_对比度3_1();
        this.instance_2.parent = this;
        this.instance_2.setTransform(278,305.5,1,1,0,0,0,202,304.5);
    
        this.instance_3 = new lib.亮度_对比度4_1();
        this.instance_3.parent = this;
        this.instance_3.setTransform(240.5,303,1,1,0,0,0,233.5,303);
    
        this.instance_4 = new lib.亮度_对比度5_1();
        this.instance_4.parent = this;
        this.instance_4.setTransform(291.5,301.5,1,1,0,0,0,284.5,298.5);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).wait(3));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,2,568,610);
    
    
    (lib.元件2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层 2
        this.instance = new lib.happy_798_1608260428101_4();
        this.instance.parent = this;
        this.instance.setTransform(59.1,59.1,0.605,0.605,0,0,0,43,43);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.89,scaleY:1.89,x:58.6,y:58.6,alpha:0},19,cjs.Ease.get(1)).to({_off:true},1).wait(10));
    
        // 图层 1
        this.instance_1 = new lib.happy_810_1608260428103_5();
        this.instance_1.parent = this;
        this.instance_1.setTransform(59.5,59.5,0.495,0.495,0,0,0,59.5,59.5);
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({scaleX:1.89,scaleY:1.89,alpha:0},19,cjs.Ease.get(1)).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(33.1,33.1,52,52);
    
    
    // stage content:
    (lib.layer04 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_33 = function() {
            this.stop()
        }
        this.frame_54 = function() {
            this.stop()
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(33).call(this.frame_33).wait(21).call(this.frame_54).wait(1));
    
        // 组 17
        this.instance = new lib.happy_523_1608260428103_6();
        this.instance.parent = this;
        this.instance.setTransform(0,-124.9);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(55));
    
        // 图层 5
        this.instance_1 = new lib.元件4("synched",0,false);
        this.instance_1.parent = this;
        this.instance_1.setTransform(353.1,670.1,1,1,0,0,0,288,306);
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).to({regX:287.9,regY:306.1,scaleX:1.46,scaleY:1.46,x:376.1,y:622.7,startPosition:11},11).to({regY:306,scaleX:1.8,scaleY:1.8,x:392.9,y:588.1,alpha:0,startPosition:14},8,cjs.Ease.get(1)).wait(2));
    
        // 图层 1
        this.playLayer04Btn = new lib.元件5();
        this.playLayer04Btn.parent = this;
        this.playLayer04Btn.setTransform(419.1,859.1,1,0.56,0,0,0,0,0.1);
        this.playLayer04Btn.alpha = 0.012;
    
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("rgba(0,0,0,0.008)").ss(1,1,1).p("EhBeg+mMCC9AAAMAAAB9NMiC9AAAg");
        this.shape.setTransform(389.7,694.9);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.playLayer04Btn}]},33).to({state:[]},1).to({state:[]},1).wait(20));
    
        // 组 19
        this.instance_2 = new lib.happy_063_1608260428104_8();
        this.instance_2.parent = this;
        this.instance_2.setTransform(566.6,1073.1,0.211,0.211,0,0,0,142.5,76);
        this.instance_2.alpha = 0;
        this.instance_2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({regX:142.6,scaleX:1.05,scaleY:1.05,y:1073,alpha:1},10,cjs.Ease.get(1)).to({regX:142.5,scaleX:1,scaleY:1,x:566.5,y:1073.1},3).to({_off:true},1).wait(21));
    
        // 图层 4
        this.instance_3 = new lib.happy_386_1607500652852_66();
        this.instance_3.parent = this;
        this.instance_3.setTransform(544.1,978.5,1.273,1.273,0,0,0,85.4,88.8);
        this.instance_3.alpha = 0;
        this.instance_3._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).to({alpha:1},12).to({_off:true},5).wait(21));
    
        // 图层 2
        this.instance_4 = new lib.元件2();
        this.instance_4.parent = this;
        this.instance_4.setTransform(474.5,894.6,1,1,0,0,0,59.5,59.5);
        this.instance_4._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).to({_off:true},6).wait(21));
    
        // 组 21
        this.goodsDetailBtn = new lib.happy_627_1608260428104_9();
        this.goodsDetailBtn.parent = this;
        this.goodsDetailBtn.setTransform(654.5,315.1,1,1,0,0,0,95.5,173);
        this.goodsDetailBtn.alpha = 0;
        this.goodsDetailBtn._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.goodsDetailBtn).wait(12).to({_off:false},0).to({y:275.1,alpha:1},12).wait(10).to({alpha:0},11,cjs.Ease.get(1)).wait(10));
    
        // 组 18
        this.instance_5 = new lib.happy_454_1608260428104_7();
        this.instance_5.parent = this;
        this.instance_5.setTransform(368,210.5,0.01,0.01,0,0,0,215.5,90.2);
        this.instance_5._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({_off:false},0).to({regX:211.1,regY:86.5,scaleX:1.05,scaleY:1.05,x:368.1},6,cjs.Ease.get(1)).to({regX:211,scaleX:1,scaleY:1,x:368,y:210.6},4).wait(17).to({alpha:0},11,cjs.Ease.get(1)).wait(10));
    
        // 色相_饱和度 1
        this.instance_6 = new lib.happy_438_1608260428105_11();
        this.instance_6.parent = this;
        this.instance_6.setTransform(375,141.4,1,1,0,0,0,375,297.5);
        this.instance_6.alpha = 0;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:697.6,alpha:1},9,cjs.Ease.get(1)).to({y:663.6},3).wait(22).to({alpha:0},11,cjs.Ease.get(1)).wait(10));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(375,510.9,750,595);
    // library properties:
    lib.properties = {
        width: 750,
        height: 1334,
        fps: 24,
        color: "#999999",
        opacity: 1.00,
        webfonts: {},
        manifest: [
            {src:"images/layer04/layer04_atlas_.png", id:"layer04_atlas_"},
            {src:"images/layer04/layer04_atlas_2.png", id:"layer04_atlas_2"},
            {src:"images/layer04/layer04_atlas_3.png", id:"layer04_atlas_3"},
            {src:"images/layer04/layer04_atlas_4.png", id:"layer04_atlas_4"},
            {src:"images/layer04/layer04_atlas_5.png", id:"layer04_atlas_5"},
            {src:"images/layer04/layer04_atlas_6.png", id:"layer04_atlas_6"}
        ],
        preloads: []
    };
    
    
    
    
    })