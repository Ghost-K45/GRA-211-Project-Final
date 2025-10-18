(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Axe = function() {
	this.initialize(img.Axe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,500);


(lib.AxeSign = function() {
	this.initialize(img.AxeSign);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,420,170);


(lib.Book = function() {
	this.initialize(img.Book);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.BookSign = function() {
	this.initialize(img.BookSign);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,420,170);


(lib.Campfire_0 = function() {
	this.initialize(img.Campfire_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Campfire_1 = function() {
	this.initialize(img.Campfire_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Campfire_2 = function() {
	this.initialize(img.Campfire_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Campfire_3 = function() {
	this.initialize(img.Campfire_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.CastleScene = function() {
	this.initialize(img.CastleScene);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,720);


(lib.flag_0 = function() {
	this.initialize(img.flag_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,75);


(lib.flag_1 = function() {
	this.initialize(img.flag_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,75);


(lib.flag_2 = function() {
	this.initialize(img.flag_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,75);


(lib.NightScene = function() {
	this.initialize(img.NightScene);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,720);


(lib.restartbutton = function() {
	this.initialize(img.restartbutton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,420,170);


(lib.Spear = function() {
	this.initialize(img.Spear);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,500);


(lib.SpearSign = function() {
	this.initialize(img.SpearSign);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,420,170);


(lib.Staff = function() {
	this.initialize(img.Staff);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.StaffSign = function() {
	this.initialize(img.StaffSign);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,420,170);


(lib.StartSign = function() {
	this.initialize(img.StartSign);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,420,170);


(lib.StartSignpngcopy = function() {
	this.initialize(img.StartSignpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,420,170);


(lib.Sword = function() {
	this.initialize(img.Sword);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,500);


(lib.SwordSign = function() {
	this.initialize(img.SwordSign);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,420,170);


(lib.SwordSignpngcopy = function() {
	this.initialize(img.SwordSignpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,420,170);


(lib.Wand = function() {
	this.initialize(img.Wand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.WandSign = function() {
	this.initialize(img.WandSign);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,420,170);


(lib.Warrior = function() {
	this.initialize(img.Warrior);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,600);


(lib.WarriorScene = function() {
	this.initialize(img.WarriorScene);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,720);


(lib.Wizard = function() {
	this.initialize(img.Wizard);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,450);


(lib.WizardScene = function() {
	this.initialize(img.WizardScene);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,720);


(lib.WizardButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("staffmagic");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.StaffSign();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,420,170);


(lib.WarriorButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("slice");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.SwordSign();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,420,170);


(lib.WarriorBG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarriorScene();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,720);


(lib.Warrior_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Warrior();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,450,600);


(lib.WandItem = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Wand();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.Wand_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("wand");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.WandSign();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,420,170);


(lib.Tween25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AgWB+QgJgKAAgMQAAgOAJgJQAJgJANgBQANAAAKAKQAJAJAAAOQAAANgKAJQgJAKgNgBQgMABgKgKgAgZAlIAAgGQAJgCABgCQADgEAAgGIgBgJIgOh3QgBgLgCgCQgDgDgHgBIAAgHIBRAAIAAAHQgIABgCADQgBACgCALIgOB3IgBAJQAAAHADADQACACAIACIAAAGg");
	this.shape.setTransform(205.05,0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AhcBdIgFgBQgEAAgDAFIgFgDIAWg1IAFACIAAACQAAAFAEAEQAKAIAYAHQAYAFAWAAQAVABAQgGQAVgGAAgQQAAgMgOgEQgKgDgYgCIgegDQgZgCgNgDQgNgDgKgGQgMgIgHgMQgHgOAAgQQAAgkAfgTQAcgRApAAQAWAAATAFQATAFAbANQAIADAEAAQADAAAFgEIAEACIgaA0IgFgDQAAgHgEgDQgLgKgWgHQgVgGgWAAQgTAAgOAFQgVAIAAAPQAAAJAKAEQAKAEAdACIAeACQAoAEAVAMQAMAHAIALQAJAPAAASQAAAigeATQgcASgxAAQgxAAgugVg");
	this.shape_1.setTransform(185.225,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AglBzIAAgFQAHgBADgEQACgEAAgFIAAifIhAAAQgGABgEACQgDADgCAHIgFAAIAAhBIAFAAQACAHADADQADADAHAAIC0AAQAGAAADgDQAEgCACgIIAEAAIAABBIgEAAQgCgHgEgDQgDgCgGgBIhAAAIAACfQgBAFADAEQADADAHACIAAAFg");
	this.shape_2.setTransform(161.5,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AgmBtIAAgFQAHgCADgDQADgEAAgGIAAiyQAAgGgDgDQgDgDgHgCIAAgFIBNAAIAAAFQgHACgDADQgDADAAAGIAACyQAAAGADAEQADADAHACIAAAFg");
	this.shape_3.setTransform(144.325,2.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990000").s().p("AAyBtIAAgFQAMgCAAgKQAAgGgFgJIgMgWIhjAAIgMAXQgEAJAAAFQAAAJANADIAAAFIhRAAIAAgFQAIgBADgEQAEgDAFgKIBQihQAEgJAAgHQAAgIgLgEIAAgFIBUAAIAAAFQgLAEAAAJQAAAHAFAJIBTCcQAHANAEAEQAEADAIACIAAAFgAgoAYIBFAAIgihFg");
	this.shape_4.setTransform(124.775,2.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("AAlBtIAAgFQAMgEAAgKQAAgDgEgLIgth2IgvB2QgEAJAAAGQAAALANACIAAAFIhSAAIAAgFQAMgDAAgKQAAgGgEgJIg5iUQgHgRgFgGQgEgGgJgCIAAgFIBTAAIAAAFQgMAEAAAIQAAAEAEAKIApBnIAphmQADgJAAgFQAAgKgNgDIAAgFIBhAAIAAAFQgNAEAAAKQAAAEADAIIAoBnIAohoQADgGAAgGQAAgFgDgDQgDgDgHgCIAAgFIBVAAIAAAFQgKADgEAGQgEAFgHARIg7CUQgDAIAAAGQAAAMAOACIAAAFg");
	this.shape_5.setTransform(93.825,2.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990000").s().p("ABACFIAAgGQANgCAAgKQAAgEgEgIIgSgmIh4AAIgSAmQgEAIAAAEQAAAJANADIAAAGIhYAAIAAgGQAIgCAEgDQAEgEAFgMIBijMQAFgJAAgGQAAgJgLgEIAAgGIBdAAIAAAGQgLADAAAIQAAAGAEAHIBlDNQAHANAEAFQAFAEAJACIAAAGgAgwAdIBWAAIgqheg");
	this.shape_6.setTransform(60.425,-0.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990000").s().p("ABrB6QgCgHgEgDQgDgDgGAAIjLAAIAAgFQAHgCADgDQACgEABgGIAAiyQgBgGgCgDQgDgDgHgCIAAgFIDFAAQAGAAADgDQAEgDACgHIAFAAIAABBIgFAAQgCgHgEgDQgDgDgGAAIiEAAIAAAwIBSAAQAFAAAEgDQADgCACgHIAGAAIAAA+IgGAAQgCgHgDgDQgEgDgFAAIhSAAIAAA2ICKAAQAGAAADgDQAEgDACgHIAFAAIAABBg");
	this.shape_7.setTransform(21.45,2.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990000").s().p("AAgBtIAAgFQALgDAAgGQAAgEgGgJIgrg/Ig1AAIAABGQABAGACAEQADADAHACIAAAFIhNAAIAAgFQAGgCAEgDQACgEAAgGIAAiyQAAgGgCgDQgEgDgGgCIAAgFICOAAQAcAAAOACQAPADAMAIQAYAPgBAjQAAAbgOAPQgPANggAHIAqA6QALAQAHAGQAGAFAIACIAAAFgAg7gTIBPAAQASAAAIgEQAMgFAAgQQAAgOgJgFQgIgGgVAAIhPAAg");
	this.shape_8.setTransform(-4.85,2.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990000").s().p("AhLBiQgUgLgIgTQgGgSAAgaIAAhzQgBgGgDgDQgCgDgHgCIAAgGIBNAAIAAAGQgHACgCADQgEADAAAGIAABoQAAATAEAJQADALAIAFQAQAOAdAAQAeAAAQgOQAJgFACgLQAEgJAAgTIAAhoQAAgGgDgDQgCgDgIgCIAAgGIBJAAIAAAGQgHACgDADQgDADAAAGIAABzQAAAogPASQgZAehGgBQgtABgegOg");
	this.shape_9.setTransform(-33,2.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990000").s().p("AglBzIAAgFQAGgBAEgEQACgEAAgFIAAifIhAAAQgHABgDACQgDADgCAHIgFAAIAAhBIAFAAQACAHADADQADADAHAAIC0AAQAGAAADgDQADgCADgIIAEAAIAABBIgEAAQgDgHgDgDQgDgCgGgBIhAAAIAACfQgBAFADAEQADADAHACIAAAFg");
	this.shape_10.setTransform(-58.2,1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990000").s().p("AAzBtIAAgFQAJgCAAgFQAAgDgCgDIgLgLIhzhyIAAB7QAAAGACAEQADADAHACIAAAFIhJAAIAAgFQAHgCADgDQADgEAAgGIAAiyQAAgGgDgDQgDgDgHgCIAAgFIBUAAIAAAFQgIACAAAGQAAAEAGAHIB0BzIAAh4QAAgGgCgDQgDgDgHgCIAAgFIBJAAIAAAFQgHACgDADQgDADAAAGIAACyQAAAGADAEQADADAHACIAAAFg");
	this.shape_11.setTransform(-84.425,2.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#990000").s().p("ABrB6QgDgHgDgDQgDgDgGAAIjLAAIAAgFQAHgCADgDQADgEAAgGIAAiyQAAgGgDgDQgDgDgHgCIAAgFIDFAAQAGAAADgDQAEgDACgHIAEAAIAABBIgEAAQgCgHgEgDQgDgDgGAAIiEAAIAAAwIBSAAQAFAAAEgDQADgCACgHIAGAAIAAA+IgGAAQgCgHgDgDQgEgDgFAAIhSAAIAAA2ICKAAQAGAAADgDQADgDADgHIAFAAIAABBg");
	this.shape_12.setTransform(-111.85,2.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#990000").s().p("AgqBtIAAgFQANgDAAgJQAAgFgEgIIhNihQgFgLgEgEQgDgDgIgDIAAgFIBXAAIAAAFQgMAEAAAJQAAAFAFAKIAzBzIA2hzQAEgKAAgFQAAgJgMgEIAAgFIBUAAIAAAFQgIADgDADQgEAEgFALIhNChQgEAIAAAFQAAAJANADIAAAFg");
	this.shape_13.setTransform(-138.375,2.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#990000").s().p("Ah7BtIAAgFQAHgCADgDQACgEAAgGIAAiyQAAgGgCgDQgDgDgHgCIAAgFICAAAQAnAAAYAJQAgAPAOAgQAKAXAAAdQAAA4ghAdQgPANgUAGQgVAFgeAAgAg6BGIA4AAQAlAAARgSQATgSAAgiQAAghgTgSQgIgJgNgFQgOgEgTAAIg4AAg");
	this.shape_14.setTransform(-165.25,2.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#990000").s().p("ABACFIAAgGQANgCAAgKQAAgEgEgIIgSgmIh4AAIgSAmQgEAIAAAEQAAAJANADIAAAGIhYAAIAAgGQAIgCAEgDQAEgEAFgMIBijMQAFgJAAgGQAAgJgLgEIAAgGIBdAAIAAAGQgLADAAAIQAAAGAEAHIBlDNQAHANAEAFQAFAEAJACIAAAGgAgwAdIBWAAIgqheg");
	this.shape_15.setTransform(-196.325,-0.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-214.7,-24.2,429.5,48.5);


(lib.Tween24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AgWB+QgJgKAAgMQAAgOAJgJQAJgJANgBQANAAAKAKQAJAJAAAOQAAANgKAJQgJAKgNgBQgMABgKgKgAgZAlIAAgGQAJgCABgCQADgEAAgGIgBgJIgOh3QgBgLgCgCQgDgDgHgBIAAgHIBRAAIAAAHQgIABgCADQgBACgCALIgOB3IgBAJQAAAHADADQACACAIACIAAAGg");
	this.shape.setTransform(205.05,0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AhcBdIgFgBQgEAAgDAFIgFgDIAWg1IAFACIAAACQAAAFAEAEQAKAIAYAHQAYAFAWAAQAVABAQgGQAVgGAAgQQAAgMgOgEQgKgDgYgCIgegDQgZgCgNgDQgNgDgKgGQgMgIgHgMQgHgOAAgQQAAgkAfgTQAcgRApAAQAWAAATAFQATAFAbANQAIADAEAAQADAAAFgEIAEACIgaA0IgFgDQAAgHgEgDQgLgKgWgHQgVgGgWAAQgTAAgOAFQgVAIAAAPQAAAJAKAEQAKAEAdACIAeACQAoAEAVAMQAMAHAIALQAJAPAAASQAAAigeATQgcASgxAAQgxAAgugVg");
	this.shape_1.setTransform(185.225,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AglBzIAAgFQAHgBADgEQACgEAAgFIAAifIhAAAQgGABgEACQgDADgCAHIgFAAIAAhBIAFAAQACAHADADQADADAHAAIC0AAQAGAAADgDQAEgCACgIIAEAAIAABBIgEAAQgCgHgEgDQgDgCgGgBIhAAAIAACfQgBAFADAEQADADAHACIAAAFg");
	this.shape_2.setTransform(161.5,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AgmBtIAAgFQAHgCADgDQADgEAAgGIAAiyQAAgGgDgDQgDgDgHgCIAAgFIBNAAIAAAFQgHACgDADQgDADAAAGIAACyQAAAGADAEQADADAHACIAAAFg");
	this.shape_3.setTransform(144.325,2.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990000").s().p("AAyBtIAAgFQAMgCAAgKQAAgGgFgJIgMgWIhjAAIgMAXQgEAJAAAFQAAAJANADIAAAFIhRAAIAAgFQAIgBADgEQAEgDAFgKIBQihQAEgJAAgHQAAgIgLgEIAAgFIBUAAIAAAFQgLAEAAAJQAAAHAFAJIBTCcQAHANAEAEQAEADAIACIAAAFgAgoAYIBFAAIgihFg");
	this.shape_4.setTransform(124.775,2.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("AAlBtIAAgFQAMgEAAgKQAAgDgEgLIgth2IgvB2QgEAJAAAGQAAALANACIAAAFIhSAAIAAgFQAMgDAAgKQAAgGgEgJIg5iUQgHgRgFgGQgEgGgJgCIAAgFIBTAAIAAAFQgMAEAAAIQAAAEAEAKIApBnIAphmQADgJAAgFQAAgKgNgDIAAgFIBhAAIAAAFQgNAEAAAKQAAAEADAIIAoBnIAohoQADgGAAgGQAAgFgDgDQgDgDgHgCIAAgFIBVAAIAAAFQgKADgEAGQgEAFgHARIg7CUQgDAIAAAGQAAAMAOACIAAAFg");
	this.shape_5.setTransform(93.825,2.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990000").s().p("ABACFIAAgGQANgCAAgKQAAgEgEgIIgSgmIh4AAIgSAmQgEAIAAAEQAAAJANADIAAAGIhYAAIAAgGQAIgCAEgDQAEgEAFgMIBijMQAFgJAAgGQAAgJgLgEIAAgGIBdAAIAAAGQgLADAAAIQAAAGAEAHIBlDNQAHANAEAFQAFAEAJACIAAAGgAgwAdIBWAAIgqheg");
	this.shape_6.setTransform(60.425,-0.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990000").s().p("ABrB6QgCgHgEgDQgDgDgGAAIjLAAIAAgFQAHgCADgDQACgEABgGIAAiyQgBgGgCgDQgDgDgHgCIAAgFIDFAAQAGAAADgDQAEgDACgHIAFAAIAABBIgFAAQgCgHgEgDQgDgDgGAAIiEAAIAAAwIBSAAQAFAAAEgDQADgCACgHIAGAAIAAA+IgGAAQgCgHgDgDQgEgDgFAAIhSAAIAAA2ICKAAQAGAAADgDQAEgDACgHIAFAAIAABBg");
	this.shape_7.setTransform(21.45,2.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990000").s().p("AAgBtIAAgFQALgDAAgGQAAgEgGgJIgrg/Ig1AAIAABGQABAGACAEQADADAHACIAAAFIhNAAIAAgFQAGgCAEgDQACgEAAgGIAAiyQAAgGgCgDQgEgDgGgCIAAgFICOAAQAcAAAOACQAPADAMAIQAYAPgBAjQAAAbgOAPQgPANggAHIAqA6QALAQAHAGQAGAFAIACIAAAFgAg7gTIBPAAQASAAAIgEQAMgFAAgQQAAgOgJgFQgIgGgVAAIhPAAg");
	this.shape_8.setTransform(-4.85,2.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990000").s().p("AhLBiQgUgLgIgTQgGgSAAgaIAAhzQgBgGgDgDQgCgDgHgCIAAgGIBNAAIAAAGQgHACgCADQgEADAAAGIAABoQAAATAEAJQADALAIAFQAQAOAdAAQAeAAAQgOQAJgFACgLQAEgJAAgTIAAhoQAAgGgDgDQgCgDgIgCIAAgGIBJAAIAAAGQgHACgDADQgDADAAAGIAABzQAAAogPASQgZAehGgBQgtABgegOg");
	this.shape_9.setTransform(-33,2.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990000").s().p("AglBzIAAgFQAGgBAEgEQACgEAAgFIAAifIhAAAQgHABgDACQgDADgCAHIgFAAIAAhBIAFAAQACAHADADQADADAHAAIC0AAQAGAAADgDQADgCADgIIAEAAIAABBIgEAAQgDgHgDgDQgDgCgGgBIhAAAIAACfQgBAFADAEQADADAHACIAAAFg");
	this.shape_10.setTransform(-58.2,1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990000").s().p("AAzBtIAAgFQAJgCAAgFQAAgDgCgDIgLgLIhzhyIAAB7QAAAGACAEQADADAHACIAAAFIhJAAIAAgFQAHgCADgDQADgEAAgGIAAiyQAAgGgDgDQgDgDgHgCIAAgFIBUAAIAAAFQgIACAAAGQAAAEAGAHIB0BzIAAh4QAAgGgCgDQgDgDgHgCIAAgFIBJAAIAAAFQgHACgDADQgDADAAAGIAACyQAAAGADAEQADADAHACIAAAFg");
	this.shape_11.setTransform(-84.425,2.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#990000").s().p("ABrB6QgDgHgDgDQgDgDgGAAIjLAAIAAgFQAHgCADgDQADgEAAgGIAAiyQAAgGgDgDQgDgDgHgCIAAgFIDFAAQAGAAADgDQAEgDACgHIAEAAIAABBIgEAAQgCgHgEgDQgDgDgGAAIiEAAIAAAwIBSAAQAFAAAEgDQADgCACgHIAGAAIAAA+IgGAAQgCgHgDgDQgEgDgFAAIhSAAIAAA2ICKAAQAGAAADgDQADgDADgHIAFAAIAABBg");
	this.shape_12.setTransform(-111.85,2.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#990000").s().p("AgqBtIAAgFQANgDAAgJQAAgFgEgIIhNihQgFgLgEgEQgDgDgIgDIAAgFIBXAAIAAAFQgMAEAAAJQAAAFAFAKIAzBzIA2hzQAEgKAAgFQAAgJgMgEIAAgFIBUAAIAAAFQgIADgDADQgEAEgFALIhNChQgEAIAAAFQAAAJANADIAAAFg");
	this.shape_13.setTransform(-138.375,2.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#990000").s().p("Ah7BtIAAgFQAHgCADgDQACgEAAgGIAAiyQAAgGgCgDQgDgDgHgCIAAgFICAAAQAnAAAYAJQAgAPAOAgQAKAXAAAdQAAA4ghAdQgPANgUAGQgVAFgeAAgAg6BGIA4AAQAlAAARgSQATgSAAgiQAAghgTgSQgIgJgNgFQgOgEgTAAIg4AAg");
	this.shape_14.setTransform(-165.25,2.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#990000").s().p("ABACFIAAgGQANgCAAgKQAAgEgEgIIgSgmIh4AAIgSAmQgEAIAAAEQAAAJANADIAAAGIhYAAIAAgGQAIgCAEgDQAEgEAFgMIBijMQAFgJAAgGQAAgJgLgEIAAgGIBdAAIAAAGQgLADAAAIQAAAGAEAHIBlDNQAHANAEAFQAFAEAJACIAAAGgAgwAdIBWAAIgqheg");
	this.shape_15.setTransform(-196.325,-0.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-214.7,-24.2,429.5,48.5);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WizardScene();
	this.instance.setTransform(-960,-360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-360,1920,720);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WizardScene();
	this.instance.setTransform(-960,-360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-360,1920,720);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Wizard();
	this.instance.setTransform(-225,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-225,450,450);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Wizard();
	this.instance.setTransform(-225,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-225,450,450);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.NightScene();
	this.instance.setTransform(-960,-360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-360,1920,720);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.NightScene();
	this.instance.setTransform(-960,-360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-360,1920,720);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhyxBGTMAAAiMlMDliAAAMAAACMlg");
	this.shape.setTransform(734.55,449.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1469.1,899.9);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CastleScene();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,720);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.StartSignpngcopy();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,85);


(lib.Sword_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("slice");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.SwordSignpngcopy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,420,170);


(lib.StartButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("backgroundmusic");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.StartSign();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,420,170);


(lib.Staff_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("staffmagic");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.StaffSign();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,420,170);


(lib.spear = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("spearnoise");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.SpearSign();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,420,170);


(lib.Restart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.restartbutton();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,420,170);


(lib.flag_gif = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.flag_0();

	this.instance_1 = new lib.flag_1();

	this.instance_2 = new lib.flag_2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,75);


(lib.Campfire_gif = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Campfire_0();

	this.instance_1 = new lib.Campfire_1();

	this.instance_2 = new lib.Campfire_2();

	this.instance_3 = new lib.Campfire_3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Bookitem = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Book();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.Book_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("book");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.BookSign();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,420,170);


(lib.Beginbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.StartSignpngcopy();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,85);


(lib.axe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("axehit");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.AxeSign();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,420,170);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.flag_gif();
	this.instance.setTransform(28.2,28.2,0.75,0.75,0,0,0,37.6,37.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.3,56.3);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.flag_gif();
	this.instance.setTransform(28.2,28.2,0.75,0.75,0,0,0,37.6,37.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.3,56.3);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(960,360,1,1,0,0,0,960,360);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,720);


(lib.BeginButton2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Beginbutton();
	this.instance.setTransform(0,760.25);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.StartAdventure = new lib.Symbol1();
	this.StartAdventure.name = "StartAdventure";
	this.StartAdventure.alpha = 0;
	new cjs.ButtonHelper(this.StartAdventure, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.StartAdventure},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,845.3);


// stage content:
(lib.MainProject = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,145,300,304,309,314,360,519,524,529,534,579,754,759];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.StartButton.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.play();
		});
	}
	this.frame_145 = function() {
		this.stop();
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.WizardButton.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(150);
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.WarriorButton.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(400);
		});
	}
	this.frame_300 = function() {
		this.stop();
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.StartAdventure.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(655);
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.BookButton.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(315);
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.WandButton.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(310);
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.StaffSign.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(305);
		});
	}
	this.frame_304 = function() {
		this.stop();
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.BookButton.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(310);
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.WandButton.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(310);
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.StaffSign.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(305);
		});
	}
	this.frame_309 = function() {
		this.stop();
	}
	this.frame_314 = function() {
		this.stop();
	}
	this.frame_360 = function() {
		this.stop();
	}
	this.frame_519 = function() {
		this.stop();
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.beginbutton2.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(655);
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.swordsign.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(525);
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.axesign.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(530);
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.spearsign.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(535);
		});
	}
	this.frame_524 = function() {
		this.stop();
	}
	this.frame_529 = function() {
		this.stop();
	}
	this.frame_534 = function() {
		this.stop();
	}
	this.frame_579 = function() {
		this.stop();
	}
	this.frame_754 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.restart.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(1);
		});
	}
	this.frame_759 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(145).call(this.frame_145).wait(155).call(this.frame_300).wait(4).call(this.frame_304).wait(5).call(this.frame_309).wait(5).call(this.frame_314).wait(46).call(this.frame_360).wait(159).call(this.frame_519).wait(5).call(this.frame_524).wait(5).call(this.frame_529).wait(5).call(this.frame_534).wait(45).call(this.frame_579).wait(175).call(this.frame_754).wait(5).call(this.frame_759).wait(1));

	// WizardButton
	this.WizardButton = new lib.WizardButton();
	this.WizardButton.name = "WizardButton";
	this.WizardButton.setTransform(541.25,-85,1,1,0,0,0,210,85);
	this.WizardButton._off = true;
	new cjs.ButtonHelper(this.WizardButton, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.WizardButton).wait(119).to({_off:false},0).to({y:115},26).wait(5).to({y:-129.55},0).wait(29).to({y:-98.1},0).to({_off:true},221).wait(360));

	// WarriorButton
	this.WarriorButton = new lib.WarriorButton();
	this.WarriorButton.name = "WarriorButton";
	this.WarriorButton.setTransform(1014,-85,1,1,0,0,0,210,85);
	this.WarriorButton._off = true;
	new cjs.ButtonHelper(this.WarriorButton, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.WarriorButton).wait(119).to({_off:false},0).to({y:115},26).wait(5).to({y:-129.55},0).wait(29).to({y:-98.1},0).wait(90).to({x:564.35,y:-648.1},0).to({_off:true},1).wait(490));

	// Staff
	this.instance = new lib.Staff();
	this.instance.setTransform(254,242);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(304).to({_off:false},0).wait(5).to({x:1261},0).wait(89).to({y:-511},0).to({_off:true},1).wait(361));

	// Wand
	this.instance_1 = new lib.WandItem();
	this.instance_1.setTransform(460,346,1,1,0,0,0,200,200);
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(309).to({_off:false},0).wait(5).to({x:1364.8,y:402.25},0).wait(84).to({y:-350.4},0).to({_off:true},1).wait(361));

	// Book
	this.instance_2 = new lib.Bookitem();
	this.instance_2.setTransform(454,402,1,1,0,0,0,200,200);
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(314).to({_off:false},0).wait(5).to({x:1480,y:115.8},0).wait(79).to({y:-636.85},0).to({_off:true},1).wait(361));

	// Sword
	this.instance_3 = new lib.Sword();
	this.instance_3.setTransform(252,-8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(524).to({_off:false},0).wait(5).to({x:1216,y:-111},0).wait(50).to({_off:true},1).wait(180));

	// Axe
	this.instance_4 = new lib.Axe();
	this.instance_4.setTransform(242,-24);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(529).to({_off:false},0).wait(5).to({x:1401,y:43},0).wait(45).to({_off:true},1).wait(180));

	// Spear
	this.instance_5 = new lib.Spear();
	this.instance_5.setTransform(269,170);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(534).to({_off:false},0).wait(5).to({x:1236},0).wait(40).to({_off:true},1).wait(180));

	// Restart
	this.restart = new lib.Restart();
	this.restart.name = "restart";
	this.restart.setTransform(-292.1,356.95,1,1,0,0,0,210,85);
	this.restart._off = true;
	new cjs.ButtonHelper(this.restart, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.restart).wait(361).to({_off:false},0).wait(346).to({x:1070,y:812.05},0).to({y:459.5},47).to({_off:true},1).wait(5));

	// BeginAdv
	this.StartAdventure = new lib.Symbol1();
	this.StartAdventure.name = "StartAdventure";
	this.StartAdventure.setTransform(0,627.4);
	this.StartAdventure._off = true;
	new cjs.ButtonHelper(this.StartAdventure, 0, 1, 1);

	this.beginbutton2 = new lib.Beginbutton();
	this.beginbutton2.name = "beginbutton2";
	this.beginbutton2.setTransform(0,635);
	new cjs.ButtonHelper(this.beginbutton2, 0, 1, 1);

	this.beginbutton2_1 = new lib.BeginButton2();
	this.beginbutton2_1.name = "beginbutton2_1";
	this.beginbutton2_1.setTransform(105,297.35,1,1,0,0,0,105,422.6);
	this.beginbutton2_1._off = true;
	new cjs.ButtonHelper(this.beginbutton2_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.StartAdventure}]},300).to({state:[{t:this.StartAdventure}]},19).to({state:[{t:this.StartAdventure}]},41).to({state:[{t:this.StartAdventure}]},38).to({state:[{t:this.StartAdventure},{t:this.beginbutton2}]},121).to({state:[{t:this.beginbutton2_1}]},20).to({state:[{t:this.beginbutton2_1}]},40).to({state:[]},1).wait(180));
	this.timeline.addTween(cjs.Tween.get(this.StartAdventure).wait(300).to({_off:false},0).wait(19).to({alpha:0},41).wait(38).to({y:-125.25},0).wait(121).to({_off:true},20).wait(221));
	this.timeline.addTween(cjs.Tween.get(this.beginbutton2_1).wait(539).to({_off:false},0).to({alpha:0},40).to({_off:true},1).wait(180));

	// Swordsign
	this.swordsign = new lib.Sword_1();
	this.swordsign.name = "swordsign";
	this.swordsign.setTransform(1070,-96,1,1,0,0,0,210,85);
	this.swordsign._off = true;
	new cjs.ButtonHelper(this.swordsign, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.swordsign).wait(499).to({_off:false},0).to({y:425},20).wait(20).to({alpha:0},40).to({_off:true},71).wait(110));

	// Axesign
	this.axesign = new lib.axe();
	this.axesign.name = "axesign";
	this.axesign.setTransform(1070,-266,1,1,0,0,0,210,85);
	this.axesign._off = true;
	new cjs.ButtonHelper(this.axesign, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.axesign).wait(499).to({_off:false},0).to({y:255},20).wait(20).to({alpha:0},40).to({_off:true},71).wait(110));

	// Spearsign
	this.spearsign = new lib.spear();
	this.spearsign.name = "spearsign";
	this.spearsign.setTransform(1070,-436,1,1,0,0,0,210,85);
	this.spearsign._off = true;
	new cjs.ButtonHelper(this.spearsign, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.spearsign).wait(499).to({_off:false},0).to({y:85},20).wait(20).to({alpha:0},40).to({_off:true},71).wait(110));

	// Startsign
	this.StartButton = new lib.StartButton();
	this.StartButton.name = "StartButton";
	this.StartButton.setTransform(636,366,1,1,0,0,0,210,85);
	new cjs.ButtonHelper(this.StartButton, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.StartButton).to({alpha:0},3).to({_off:true},1).wait(756));

	// BookSign
	this.instance_6 = new lib.Book_1();
	this.instance_6.setTransform(860,-510);
	this.instance_6._off = true;
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2);

	this.BookButton = new lib.Book_1();
	this.BookButton.name = "BookButton";
	this.BookButton.setTransform(860,132);
	this.BookButton._off = true;
	new cjs.ButtonHelper(this.BookButton, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(269).to({_off:false},0).to({_off:true,y:132},31).wait(460));
	this.timeline.addTween(cjs.Tween.get(this.BookButton).wait(269).to({_off:false},31).wait(19).to({alpha:0},41).wait(38).to({x:866.25,y:-620.65},0).to({_off:true},1).wait(361));

	// WandSign
	this.instance_7 = new lib.Wand_1();
	this.instance_7.setTransform(860,-340);
	this.instance_7._off = true;
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2);

	this.WandButton = new lib.Wand_1();
	this.WandButton.name = "WandButton";
	this.WandButton.setTransform(860,302);
	this.WandButton._off = true;
	new cjs.ButtonHelper(this.WandButton, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(269).to({_off:false},0).to({_off:true,y:302},31).wait(460));
	this.timeline.addTween(cjs.Tween.get(this.WandButton).wait(269).to({_off:false},31).wait(19).to({alpha:0},41).wait(38).to({y:-450.65},0).to({_off:true},2).wait(360));

	// StaffSign
	this.instance_8 = new lib.Staff_1();
	this.instance_8.setTransform(860,-170);
	this.instance_8._off = true;
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2);

	this.StaffSign = new lib.Staff_1();
	this.StaffSign.name = "StaffSign";
	this.StaffSign.setTransform(860,472);
	this.StaffSign._off = true;
	new cjs.ButtonHelper(this.StaffSign, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(269).to({_off:false},0).to({_off:true,y:472},31).wait(460));
	this.timeline.addTween(cjs.Tween.get(this.StaffSign).wait(269).to({_off:false},31).wait(19).to({alpha:0},41).wait(38).to({y:-280.65},0).to({_off:true},2).wait(360));

	// Warrior
	this.warrior = new lib.Warrior_1("synched",0);
	this.warrior.name = "warrior";
	this.warrior.setTransform(1230,373,1,1,0,0,0,225,300);
	this.warrior._off = true;

	this.timeline.addTween(cjs.Tween.get(this.warrior).wait(399).to({_off:false},0).to({x:592.2},120).wait(20).to({startPosition:0},0).to({alpha:0},40).to({_off:true},71).wait(110));

	// Wizard
	this.instance_9 = new lib.Tween9("synched",0);
	this.instance_9.setTransform(1234,417);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween10("synched",0);
	this.instance_10.setTransform(597,417);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(150).to({_off:false},0).to({_off:true,x:597},119).wait(491));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(150).to({_off:false},119).wait(50).to({startPosition:0},0).to({alpha:0},41).wait(38).to({x:1533.05,y:495},0).wait(1).to({x:1585.75,y:-55.65},0).to({_off:true},1).wait(360));

	// Layer_5
	this.instance_11 = new lib.Symbol8("synched",0);
	this.instance_11.setTransform(646.65,363.25,1,1,0,0,0,734.6,449.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(654).to({_off:false},0).to({alpha:0},45).wait(61));

	// Adventure_Text
	this.instance_12 = new lib.Tween24("synched",0);
	this.instance_12.setTransform(557.85,762.05);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween25("synched",0);
	this.instance_13.setTransform(557.85,64.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},709).to({state:[{t:this.instance_13}]},31).to({state:[{t:this.instance_13}]},19).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(709).to({_off:false},0).to({_off:true,y:64.4},31).wait(20));

	// Flags
	this.instance_14 = new lib.Symbol7();
	this.instance_14.setTransform(790.1,148.75,1,1,0,0,0,28.1,28.1);
	new cjs.ButtonHelper(this.instance_14, 0, 1, 1);

	this.instance_15 = new lib.Symbol6();
	this.instance_15.setTransform(347.55,148.75,1,1,0,0,0,28.1,28.1);
	new cjs.ButtonHelper(this.instance_15, 0, 1, 1);

	this.instance_16 = new lib.flag_gif();
	this.instance_16.setTransform(347.65,148.85,0.75,0.75,0,0,0,37.6,37.6);

	this.instance_17 = new lib.flag_gif();
	this.instance_17.setTransform(790.2,148.85,0.75,0.75,0,0,0,37.6,37.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15},{t:this.instance_14}]},654).to({state:[{t:this.instance_17},{t:this.instance_16}]},45).wait(61));

	// CastleBackground
	this.instance_18 = new lib.Symbol2();
	this.instance_18.setTransform(960,360,1,1,0,0,0,960,360);
	new cjs.ButtonHelper(this.instance_18, 0, 1, 1);

	this.instance_19 = new lib.Symbol3();
	this.instance_19.setTransform(960,360,1,1,0,0,0,960,360);
	new cjs.ButtonHelper(this.instance_19, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18}]},654).to({state:[{t:this.instance_19}]},45).to({state:[{t:this.instance_19}]},10).to({state:[{t:this.instance_19}]},31).wait(20));

	// Campfire
	this.instance_20 = new lib.Campfire_gif();
	this.instance_20.setTransform(1638.9,439,1,1,0,0,0,100,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({x:1001.9},119).wait(30).to({x:1432.9},0).wait(1).to({x:1641.9},0).to({x:997.9},119).wait(50).to({alpha:0},41).wait(39).to({x:1623.9,alpha:1},0).to({x:1003.9,y:440},120).wait(20).to({alpha:0},40).to({_off:true},72).wait(109));

	// WarriorBackground
	this.instance_21 = new lib.WarriorBG();
	this.instance_21._off = true;
	new cjs.ButtonHelper(this.instance_21, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(399).to({_off:false},0).to({x:-640},120).wait(20).to({alpha:0},40).to({_off:true},71).wait(110));

	// WizardBackground
	this.instance_22 = new lib.Tween11("synched",0);
	this.instance_22.setTransform(960,360);
	this.instance_22._off = true;

	this.instance_23 = new lib.Tween12("synched",0);
	this.instance_23.setTransform(320,360);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(150).to({_off:false},0).to({_off:true,x:320},119).wait(491));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(150).to({_off:false},119).wait(50).to({startPosition:0},0).to({alpha:0},41).wait(38).to({y:-392.65},0).to({_off:true},1).wait(361));

	// NightBackground
	this.instance_24 = new lib.Tween1("synched",0);
	this.instance_24.setTransform(960,360);

	this.instance_25 = new lib.Tween2("synched",0);
	this.instance_25.setTransform(320,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24}]}).to({state:[{t:this.instance_25}]},119).to({state:[]},30).wait(611));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({_off:true,x:320},119).wait(641));

	// BlackBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CCFF").ss(1,1,1).p("EhmthA6MDNbAAAMAAACB1MjNbAAAg");
	this.shape.setTransform(641.125,356.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EhmtBA7MAAAiB1MDNbAAAMAAACB1g");
	this.shape_1.setTransform(641.125,356.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},319).to({state:[{t:this.shape_1},{t:this.shape}]},41).to({state:[{t:this.shape_1},{t:this.shape}]},294).to({state:[{t:this.shape_1},{t:this.shape}]},45).to({state:[]},1).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,-476.8,1920,1373.9);
// library properties:
lib.properties = {
	id: '732E31609ACCE7498FEDC472258E7707',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Axe.png", id:"Axe"},
		{src:"images/AxeSign.png", id:"AxeSign"},
		{src:"images/Book.png", id:"Book"},
		{src:"images/BookSign.png", id:"BookSign"},
		{src:"images/Campfire_0.png", id:"Campfire_0"},
		{src:"images/Campfire_1.png", id:"Campfire_1"},
		{src:"images/Campfire_2.png", id:"Campfire_2"},
		{src:"images/Campfire_3.png", id:"Campfire_3"},
		{src:"images/CastleScene.png", id:"CastleScene"},
		{src:"images/flag_0.png", id:"flag_0"},
		{src:"images/flag_1.png", id:"flag_1"},
		{src:"images/flag_2.png", id:"flag_2"},
		{src:"images/NightScene.png", id:"NightScene"},
		{src:"images/restartbutton.png", id:"restartbutton"},
		{src:"images/Spear.png", id:"Spear"},
		{src:"images/SpearSign.png", id:"SpearSign"},
		{src:"images/Staff.png", id:"Staff"},
		{src:"images/StaffSign.png", id:"StaffSign"},
		{src:"images/StartSign.png", id:"StartSign"},
		{src:"images/StartSignpngcopy.png", id:"StartSignpngcopy"},
		{src:"images/Sword.png", id:"Sword"},
		{src:"images/SwordSign.png", id:"SwordSign"},
		{src:"images/SwordSignpngcopy.png", id:"SwordSignpngcopy"},
		{src:"images/Wand.png", id:"Wand"},
		{src:"images/WandSign.png", id:"WandSign"},
		{src:"images/Warrior.png", id:"Warrior"},
		{src:"images/WarriorScene.png", id:"WarriorScene"},
		{src:"images/Wizard.png", id:"Wizard"},
		{src:"images/WizardScene.png", id:"WizardScene"},
		{src:"sounds/axehit.mp3", id:"axehit"},
		{src:"sounds/backgroundmusic.mp3", id:"backgroundmusic"},
		{src:"sounds/book.mp3", id:"book"},
		{src:"sounds/slice.mp3", id:"slice"},
		{src:"sounds/spearnoise.mp3", id:"spearnoise"},
		{src:"sounds/staffmagic.mp3", id:"staffmagic"},
		{src:"sounds/wand.mp3", id:"wand"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['732E31609ACCE7498FEDC472258E7707'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;