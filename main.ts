function score () {
    snow = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 . . 9 9 . . 1 . . . . 
. . . . . 1 . 9 9 . 1 . . . . . 
. . . . . . 1 9 9 1 . . . . . . 
. . . . 9 9 9 1 1 9 9 9 . . . . 
. . . . 9 9 9 1 1 9 9 9 . . . . 
. . . . . . 1 9 9 1 . . . . . . 
. . . . . 1 . 9 9 . 1 . . . . . 
. . . . 1 . . 9 9 . . 1 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, cloud2, 50, 100)
    snow.x += 0
    snow.y += Math.randomRange(0, 10)
}
function ball () {
	
}
function raindrop () {
	
}
function cloud () {
    cloud2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . d 1 d d . . . . . . . . 
. . d d d d d d d d d 1 . . . . 
. d d d d f d d d f d d d . . . 
. 1 d d d d d d d d d d d . . . 
. d d d d d d d d d d d d d . . 
. . . d d f f f f f d d d 1 . . 
. . . d d d d d d d d d d d . . 
. . . . d 1 d d d d . d d d . . 
. . . . . d d d . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 50, 100)
}
function hero () {
    hero2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . 7 5 5 5 7 . . . . . . 
. . . . . 5 d d 5 5 . . . . . . 
. . . . . d 6 d 6 d . . . . . . 
. . . . . d 6 d 6 d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . d 7 7 7 7 7 7 7 d . . . . 
. . . . 7 7 7 7 7 7 7 . . . . . 
. . . . . e e 5 e e . . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . . . e e . e e . . . . . . 
. . . . . e e . e e . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    hero2.setPosition(126, 89)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ball2 = sprites.createProjectileFromSprite(img`
. . . . . c c b b b . . . . . . 
. . . . c b d d d d b . . . . . 
. . . . c d d d d d d b b . . . 
. . . . c 2 d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. c c c c b b b b d d d b b b . 
. c d d b c b b b b b b b b d b 
c b b d d d b b b b b d d b d b 
c c b b d d d d d d d b b b d c 
c b c c c b b b b b b b d d 2 c 
c c 2 b c c c c b d d 2 b c c b 
. c c c c c c c c c c c b b b b 
. . c c c c c b b b b b b b c . 
. . . . . . c c b b b b c c . . 
. . . . . . . . c c c c . . . . 
`, hero2, 0, -50)
})
let ball2: Sprite = null
let hero2: Sprite = null
let cloud2: Sprite = null
let snow: Sprite = null
hero()
game.onUpdateInterval(1000, function () {
	
})
