const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Plugins.Touch,
		C3.Plugins.Arr,
		C3.Plugins.Audio,
		C3.Plugins.Browser,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetAnimSpeed,
		C3.Behaviors.Platform.Acts.SetEnabled,
		C3.Behaviors.Platform.Acts.SetVectorX,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Arr.Exps.Back,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Cnds.While,
		C3.Plugins.Arr.Cnds.CompareSize,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Arr.Exps.IndexOf,
		C3.Plugins.Arr.Acts.Push,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Arr.Acts.Delete,
		C3.Plugins.Arr.Acts.Pop,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Cnds.CompareAnimSpeed,
		C3.Plugins.Audio.Acts.SetPaused,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.Browser.Acts.CancelFullScreen,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.Audio.Cnds.OnEnded,
		C3.Plugins.System.Acts.ResetGlobals
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{Solid: 0},
	{platform: 0},
	{Platform: 0},
	{BoundToLayout: 0},
	{oyuncuSpr: 0},
	{rightBtn: 0},
	{leftBtn: 0},
	{Touch: 0},
	{platform2: 0},
	{platform3: 0},
	{yildizSpt: 0},
	{platform4: 0},
	{yapaySpt: 0},
	{dogalSpt: 0},
	{dogalBtn: 0},
	{yapayBtn: 0},
	{soruDz: 0},
	{soruDz1: 0},
	{soruDz3: 0},
	{Audio: 0},
	{can: 0},
	{can2: 0},
	{can3: 0},
	{tekrarDene: 0},
	{Sprite3: 0},
	{baslaBtn: 0},
	{sesBtn: 0},
	{bilgiBtn: 0},
	{tamEkranBtn: 0},
	{Sprite4: 0},
	{homeBtn: 0},
	{hazirlayanlarBtn: 0},
	{kaynakcaBtn: 0},
	{Sprite5: 0},
	{hazirlayanlar: 0},
	{kapatBtn: 0},
	{kaynakca: 0},
	{kapatBtn2: 0},
	{devamBtn: 0},
	{oleySpt: 0},
	{engel: 0},
	{Browser: 0},
	{rnd_sayi: 0},
	{dogru: 0},
	{yanlis: 0},
	{tiklama2: 0},
	{tiklama: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	platform: class extends self.ISpriteInstance {},
	oyuncuSpr: class extends self.ISpriteInstance {},
	rightBtn: class extends self.ISpriteInstance {},
	leftBtn: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	platform2: class extends self.ISpriteInstance {},
	platform3: class extends self.ISpriteInstance {},
	yildizSpt: class extends self.ISpriteInstance {},
	platform4: class extends self.ISpriteInstance {},
	yapaySpt: class extends self.ISpriteInstance {},
	dogalSpt: class extends self.ISpriteInstance {},
	dogalBtn: class extends self.ISpriteInstance {},
	yapayBtn: class extends self.ISpriteInstance {},
	soruDz: class extends self.IArrayInstance {},
	soruDz1: class extends self.IArrayInstance {},
	soruDz3: class extends self.IArrayInstance {},
	Audio: class extends self.IInstance {},
	can: class extends self.ISpriteInstance {},
	can2: class extends self.ISpriteInstance {},
	can3: class extends self.ISpriteInstance {},
	tekrarDene: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	baslaBtn: class extends self.ISpriteInstance {},
	sesBtn: class extends self.ISpriteInstance {},
	bilgiBtn: class extends self.ISpriteInstance {},
	tamEkranBtn: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	homeBtn: class extends self.ISpriteInstance {},
	hazirlayanlarBtn: class extends self.ISpriteInstance {},
	kaynakcaBtn: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	hazirlayanlar: class extends self.ISpriteInstance {},
	kapatBtn: class extends self.ISpriteInstance {},
	kaynakca: class extends self.ISpriteInstance {},
	kapatBtn2: class extends self.ISpriteInstance {},
	devamBtn: class extends self.ISpriteInstance {},
	oleySpt: class extends self.ISpriteInstance {},
	engel: class extends self.ISpriteInstance {},
	Browser: class extends self.IInstance {}
}